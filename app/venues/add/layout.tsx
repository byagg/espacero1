"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Loader2 } from "lucide-react"
import { useEffect } from "react"

export default function AddVenueLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, isHost, isAdmin } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // If user is loaded and not a host or admin, redirect to home
    if (!loading && user && !isHost && !isAdmin) {
      router.push("/")
    }

    // If no user and not loading, redirect to home
    if (!loading && !user) {
      router.push("/")
    }
  }, [user, loading, isHost, isAdmin, router])

  // Show loading state while checking authentication
  if (loading || !user || (!isHost && !isAdmin)) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
      </div>
    )
  }

  return <>{children}</>
}
