"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export type UserRole = "client" | "host" | "admin"

interface User {
  id: string
  email: string
  user_metadata?: {
    full_name?: string
    user_role?: UserRole
  }
}

interface AuthContextType {
  user: User | null
  loading: boolean
  isAdmin: boolean
  isHost: boolean
  isClient: boolean
  signIn: (email: string, password: string) => Promise<{ data: any; error: any }>
  signUp: (email: string, password: string, metadata?: { [key: string]: any }) => Promise<{ data: any; error: any }>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const userRole = user?.user_metadata?.user_role || "client"
  const isAdmin = userRole === "admin"
  const isHost = userRole === "host"
  const isClient = userRole === "client"

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("espacero_user")
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
      } catch (error) {
        console.error("Error parsing stored user:", error)
        localStorage.removeItem("espacero_user")
      }
    }
    setLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)

      let userData: User

      if (email === "admin@espacero.sk") {
        userData = {
          id: "admin-001",
          email,
          user_metadata: {
            full_name: "Admin User",
            user_role: "admin",
          },
        }
      } else if (email === "host@espacero.sk") {
        userData = {
          id: "host-001",
          email,
          user_metadata: {
            full_name: "Host User",
            user_role: "host",
          },
        }
      } else {
        userData = {
          id: "client-001",
          email,
          user_metadata: {
            full_name: "Client User",
            user_role: "client",
          },
        }
      }

      setUser(userData)
      localStorage.setItem("espacero_user", JSON.stringify(userData))

      // Redirect based on role
      const role = userData.user_metadata?.user_role
      if (role === "admin") {
        router.push("/admin/dashboard")
      } else if (role === "host") {
        router.push("/host/dashboard")
      } else {
        router.push("/venues")
      }

      return { data: { user: userData }, error: null }
    } catch (error) {
      return { data: null, error }
    } finally {
      setLoading(false)
    }
  }

  const signUp = async (email: string, password: string, metadata: { [key: string]: any } = {}) => {
    try {
      setLoading(true)

      const userData: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        user_metadata: {
          full_name: metadata.full_name,
          user_role: "client",
        },
      }

      setUser(userData)
      localStorage.setItem("espacero_user", JSON.stringify(userData))

      return { data: { user: userData }, error: null }
    } catch (error) {
      return { data: null, error }
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    setUser(null)
    localStorage.removeItem("espacero_user")
    router.push("/")
  }

  const value = {
    user,
    loading,
    isAdmin,
    isHost,
    isClient,
    signIn,
    signUp,
    signOut,
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
