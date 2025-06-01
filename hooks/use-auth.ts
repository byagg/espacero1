"use client"

import { useEffect, useState } from "react"

interface User {
  id: string
  email: string
  user_metadata?: {
    full_name?: string
    user_role?: string
  }
}

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check for stored user session
    const storedUser = localStorage.getItem("espacero-user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (err) {
        console.error("Error parsing stored user:", err)
        localStorage.removeItem("espacero-user")
      }
    }
    setLoading(false)
  }, [])

  const signUp = async (email: string, password: string, userData: any) => {
    try {
      setLoading(true)

      // Simulate user creation
      const newUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email,
        user_metadata: {
          full_name: userData.full_name,
          user_role: userData.user_role || "guest",
        },
      }

      setUser(newUser)
      localStorage.setItem("espacero-user", JSON.stringify(newUser))

      return { data: { user: newUser }, error: null }
    } catch (err) {
      return { data: null, error: err instanceof Error ? err : new Error("Unknown error during signup") }
    } finally {
      setLoading(false)
    }
  }

  const signIn = async (email: string, password: string) => {
    try {
      setLoading(true)

      // Simulate different user types based on email
      let userData: User

      if (email === "info@simplimator.com") {
        userData = {
          id: "admin-001",
          email,
          user_metadata: {
            full_name: "Admin User",
            user_role: "admin",
          },
        }
      } else if (email === "host@example.com") {
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
          id: "guest-001",
          email,
          user_metadata: {
            full_name: "Guest User",
            user_role: "guest",
          },
        }
      }

      setUser(userData)
      localStorage.setItem("espacero-user", JSON.stringify(userData))

      return { data: { user: userData }, error: null }
    } catch (err) {
      return { data: null, error: err instanceof Error ? err : new Error("Unknown error during signin") }
    } finally {
      setLoading(false)
    }
  }

  const signOut = async () => {
    try {
      setUser(null)
      localStorage.removeItem("espacero-user")
      return { error: null }
    } catch (err) {
      return { error: err instanceof Error ? err : new Error("Unknown error during signout") }
    }
  }

  return {
    user,
    loading,
    error,
    signUp,
    signIn,
    signOut,
  }
}
