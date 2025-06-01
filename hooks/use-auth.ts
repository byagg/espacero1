"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"
import { supabase, signIn, signOut, signUp, getSession } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"
import { toast } from "@/components/ui/use-toast"

export type UserRole = "client" | "host" | "admin"

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ data: any; error: any }>
  signUp: (email: string, password: string, userData: any) => Promise<{ data: any; error: any }>
  signOut: () => Promise<{ error: any }>
  isAuthenticated: boolean
  userRole: UserRole | null
  isClient: boolean
  isHost: boolean
  isAdmin: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [userRole, setUserRole] = useState<UserRole | null>(null)
  const [loading, setLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    // Získanie aktuálnej session pri načítaní
    const getInitialSession = async () => {
      try {
        const session = await getSession()
        setUser(session?.user ?? null)

        if (session?.user) {
          // Nastavenie role používateľa
          const role = session.user.user_metadata?.user_role || "client"
          setUserRole(role as UserRole)
        }
      } catch (error) {
        console.error("Chyba pri získavaní session:", error)
      } finally {
        setLoading(false)
      }
    }

    getInitialSession()

    // Nastavenie listenera pre zmeny autentifikácie (len ak je Supabase dostupný)
    if (supabase) {
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange(async (event, session) => {
        setUser(session?.user ?? null)

        if (session?.user) {
          // Nastavenie role používateľa pri zmene stavu autentifikácie
          const role = session.user.user_metadata?.user_role || "client"
          setUserRole(role as UserRole)
        } else {
          setUserRole(null)
        }

        setLoading(false)
      })

      return () => subscription.unsubscribe()
    } else {
      // Pre mock autentifikáciu nastavíme listener na localStorage (len v browseri)
      if (typeof window !== "undefined") {
        const handleStorageChange = () => {
          const savedUser = localStorage.getItem("espacero_user")
          if (savedUser) {
            try {
              const parsedUser = JSON.parse(savedUser)
              setUser(parsedUser)
              setUserRole((parsedUser.user_metadata?.user_role || "client") as UserRole)
            } catch (error) {
              console.error("Error parsing stored user:", error)
              localStorage.removeItem("espacero_user")
            }
          } else {
            setUser(null)
            setUserRole(null)
          }
        }

        window.addEventListener("storage", handleStorageChange)
        return () => window.removeEventListener("storage", handleStorageChange)
      }
    }
  }, [isMounted])

  const handleSignIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      const result = await signIn(email, password)

      if (result.error) {
        toast({
          title: "Prihlásenie zlyhalo",
          description: result.error.message || "Nesprávny email alebo heslo",
          variant: "destructive",
        })
        return result
      }

      if (result.data?.user) {
        setUser(result.data.user)

        // Nastavenie role používateľa a presmerovanie
        const role = result.data.user.user_metadata?.user_role || "client"
        setUserRole(role as UserRole)

        // Presmerovanie podľa role
        if (role === "admin") {
          router.push("/admin")
        } else if (role === "host") {
          router.push("/host")
        } else {
          router.push("/venues")
        }

        toast({
          title: "Prihlásenie úspešné",
          description: `Vitajte späť, ${result.data.user.user_metadata?.full_name || "používateľ"}!`,
        })
      }

      return result
    } catch (error) {
      console.error("Chyba pri prihlásení:", error)
      toast({
        title: "Prihlásenie zlyhalo",
        description: "Nastala neočakávaná chyba pri prihlásení",
        variant: "destructive",
      })
      return { data: null, error }
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async (email: string, password: string, userData: any) => {
    setLoading(true)
    try {
      // Defaultná rola pre nových používateľov je "client"
      const userDataWithRole = {
        ...userData,
        user_role: "client",
      }

      const result = await signUp(email, password, userDataWithRole)

      if (result.error) {
        toast({
          title: "Registrácia zlyhala",
          description: result.error.message || "Nepodarilo sa vytvoriť účet",
          variant: "destructive",
        })
        return result
      }

      if (result.data?.user) {
        toast({
          title: "Registrácia úspešná",
          description: "Váš účet bol úspešne vytvorený. Teraz sa môžete prihlásiť.",
        })
      }

      return result
    } catch (error) {
      console.error("Chyba pri registrácii:", error)
      toast({
        title: "Registrácia zlyhala",
        description: "Nastala neočakávaná chyba pri registrácii",
        variant: "destructive",
      })
      return { data: null, error }
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    setLoading(true)
    try {
      const result = await signOut()
      setUser(null)
      setUserRole(null)
      router.push("/")
      return result
    } catch (error) {
      console.error("Chyba pri odhlásení:", error)
      return { error }
    } finally {
      setLoading(false)
    }
  }

  const value = {
    user,
    loading,
    signIn: handleSignIn,
    signUp: handleSignUp,
    signOut: handleSignOut,
    isAuthenticated: !!user,
    userRole,
    isClient: userRole === "client",
    isHost: userRole === "host",
    isAdmin: userRole === "admin",
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// Hook pre ochranu stránok podľa role
export function useProtectedRoute(allowedRoles: UserRole[] = []) {
  const { user, loading, userRole } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && !user) {
      // Používateľ nie je prihlásený
      router.push("/")
      toast({
        title: "Prístup zamietnutý",
        description: "Pre prístup k tejto stránke sa musíte prihlásiť",
        variant: "destructive",
      })
      return
    }

    if (!loading && user && allowedRoles.length > 0 && !allowedRoles.includes(userRole as UserRole)) {
      // Používateľ nemá požadovanú rolu
      router.push("/")
      toast({
        title: "Prístup zamietnutý",
        description: "Nemáte oprávnenie na prístup k tejto stránke",
        variant: "destructive",
      })
    }
  }, [user, loading, userRole, router, allowedRoles])

  return { isAllowed: !loading && user && (allowedRoles.length === 0 || allowedRoles.includes(userRole as UserRole)) }
}
