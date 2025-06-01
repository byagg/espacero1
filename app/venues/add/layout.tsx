"use client"

import type React from "react"

import { useProtectedRoute } from "@/hooks/use-auth"
import { Loader2 } from "lucide-react"

export default function AddVenueLayout({ children }: { children: React.ReactNode }) {
  // Ochrana stránky - len pre host a admin roly
  const { isAllowed } = useProtectedRoute(["host", "admin"])

  if (!isAllowed) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-amber-500" />
      </div>
    )
  }

  return <>{children}</>
}
