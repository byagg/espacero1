"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Loader2 } from "lucide-react"

export default function HostLayout({ children }: { children: React.ReactNode }) {
  const { user, loading, isHost, isAdmin } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!loading && user && !isHost && !isAdmin) {
      router.push("/")
    }

    if (!loading && !user) {
      router.push("/")
    }
  }, [user, loading, isHost, isAdmin, router])

  if (loading || !user || (!isHost && !isAdmin)) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
      </div>
    )
  }

  return <>{children}</>
}
