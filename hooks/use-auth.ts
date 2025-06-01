"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { supabase, signIn, signOut, signUp, getSession } from "@/lib/supabase"
import type { User } from "@supabase/supabase-js"

interface AuthContextType {
  user: User | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ data: any; error: any }>
  signUp: (email: string, password: string, userData: any) => Promise<{ data: any; error: any }>
  signOut: () => Promise<{ error: any }>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

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
        setLoading(false)
      })

      return () => subscription.unsubscribe()
    } else {
      // Pre mock autentifikáciu nastavíme listener na localStorage
      const handleStorageChange = () => {
        const savedUser = localStorage.getItem("espacero_user")
        setUser(savedUser ? JSON.parse(savedUser) : null)
      }

      window.addEventListener("storage", handleStorageChange)
      return () => window.removeEventListener("storage", handleStorageChange)
    }
  }, [isMounted])

  const handleSignIn = async (email: string, password: string) => {
    setLoading(true)
    try {
      const result = await signIn(email, password)

      if (result.data?.user) {
        setUser(result.data.user)
      }

      return result
    } finally {
      setLoading(false)
    }
  }

  const handleSignUp = async (email: string, password: string, userData: any) => {
    setLoading(true)
    try {
      const result = await signUp(email, password, userData)

      if (result.data?.user) {
        setUser(result.data.user)
      }

      return result
    } finally {
      setLoading(false)
    }
  }

  const handleSignOut = async () => {
    setLoading(true)
    try {
      const result = await signOut()
      setUser(null)
      return result
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
