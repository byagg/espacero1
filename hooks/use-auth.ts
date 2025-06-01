"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { User, Session } from "@supabase/supabase-js"
import { toast } from "@/components/ui/use-toast"

// Define user roles
type UserRole = "client" | "host" | "admin"

// Define auth context type
interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  isAdmin: boolean
  isHost: boolean
  signIn: (email: string, password: string) => Promise<{ data: any; error: any }>
  signUp: (email: string, password: string, metadata?: { [key: string]: any }) => Promise<{ data: any; error: any }>
  signOut: () => Promise<void>
}

// Create auth context
const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Auth provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [userRole, setUserRole] = useState<UserRole | null>(null)
  const router = useRouter()

  // Create Supabase client
  const supabase = createClientComponentClient()

  // Check if user is admin
  const isAdmin = userRole === "admin"

  // Check if user is host
  const isHost = userRole === "host"

  // Initialize auth state
  useEffect(() => {
    const initAuth = async () => {
      try {
        // Get session from Supabase
        const {
          data: { session: currentSession },
        } = await supabase.auth.getSession()

        if (currentSession) {
          setSession(currentSession)
          setUser(currentSession.user)

          // Get user role from metadata or database
          const role = currentSession.user?.user_metadata?.user_role || "client"
          setUserRole(role as UserRole)
        }
      } catch (error) {
        console.error("Error initializing auth:", error)
      } finally {
        setLoading(false)
      }
    }

    initAuth()

    // Set up auth state change listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, currentSession) => {
      if (currentSession) {
        setSession(currentSession)
        setUser(currentSession.user)

        // Get user role from metadata or database
        const role = currentSession.user?.user_metadata?.user_role || "client"
        setUserRole(role as UserRole)

        // Redirect based on role
        if (event === "SIGNED_IN") {
          if (role === "admin") {
            router.push("/admin/dashboard")
          } else if (role === "host") {
            router.push("/host/dashboard")
          } else {
            router.push("/venues")
          }
        }
      } else {
        setSession(null)
        setUser(null)
        setUserRole(null)
      }
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, router])

  // Sign in function
  const signIn = async (email: string, password: string) => {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        toast({
          title: "Prihlásenie zlyhalo",
          description: error.message,
          variant: "destructive",
        })
        return { data: null, error }
      }

      toast({
        title: "Prihlásenie úspešné",
        description: "Vitajte späť!",
      })

      return { data, error: null }
    } catch (error: any) {
      toast({
        title: "Prihlásenie zlyhalo",
        description: error.message,
        variant: "destructive",
      })
      return { data: null, error }
    }
  }

  // Sign up function
  const signUp = async (email: string, password: string, metadata: { [key: string]: any } = {}) => {
    try {
      // Default role is client if not specified
      if (!metadata.user_role) {
        metadata.user_role = "client"
      }

      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata,
        },
      })

      if (error) {
        toast({
          title: "Registrácia zlyhala",
          description: error.message,
          variant: "destructive",
        })
        return { data: null, error }
      }

      toast({
        title: "Registrácia úspešná",
        description: "Skontrolujte svoj email pre potvrdenie registrácie.",
      })

      return { data, error: null }
    } catch (error: any) {
      toast({
        title: "Registrácia zlyhala",
        description: error.message,
        variant: "destructive",
      })
      return { data: null, error }
    }
  }

  // Sign out function
  const signOut = async () => {
    try {
      await supabase.auth.signOut()
      router.push("/")

      toast({
        title: "Odhlásenie úspešné",
        description: "Boli ste úspešne odhlásení.",
      })
    } catch (error: any) {
      toast({
        title: "Odhlásenie zlyhalo",
        description: error.message,
        variant: "destructive",
      })
    }
  }

  // Auth context value
  const value = {
    user,
    session,
    loading,
    isAdmin,
    isHost,
    signIn,
    signUp,
    signOut,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

// Hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
