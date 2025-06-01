"use client"

import type React from "react"

import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Loader2 } from "lucide-react"
import { useEffect } from "react"

export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth()
  const router = useRouter()

  useEffect(() => {
    // If not loading and no user, redirect to home
    if (!loading && !user) {
      router.push("/")
    }
  }, [user, loading, router])

  // Show loading state while checking authentication
  if (loading || !user) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
      </div>
    )
  }

  return <>{children}</>
}
