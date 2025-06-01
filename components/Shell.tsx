"use client"

import type React from "react"

import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface ShellProps {
  children: React.ReactNode
  requireAuth?: boolean
  requireRole?: "admin" | "host" | "client"
}

export function Shell({ children, requireAuth = false, requireRole }: ShellProps) {
  const { user, loading, isAdmin, isHost } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && requireAuth && !user) {
      router.push("/")
      return
    }

    if (!loading && user && requireRole) {
      const userRole = user.user_metadata?.user_role || "client"

      if (requireRole === "admin" && !isAdmin) {
        router.push("/")
        return
      }

      if (requireRole === "host" && !isHost) {
        router.push("/")
        return
      }
    }
  }, [user, loading, requireAuth, requireRole, router, isAdmin, isHost])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-amber-500"></div>
      </div>
    )
  }

  if (requireAuth && !user) {
    return null
  }

  if (requireRole && user) {
    const userRole = user.user_metadata?.user_role || "client"

    if (requireRole === "admin" && !isAdmin) {
      return null
    }

    if (requireRole === "host" && !isHost) {
      return null
    }
  }

  return <>{children}</>
}
