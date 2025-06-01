"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useAuth } from "@/hooks/use-auth"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, Calendar, Clock, Loader2 } from "lucide-react"
import type { Venue } from "@/types/venue"

interface BookingFormProps {
  venue: Venue
  onSuccess: () => void
}

export function BookingForm({ venue, onSuccess }: BookingFormProps) {
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [notes, setNotes] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { user } = useAuth()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!user) {
      setError("Musíte byť prihlásený pre vytvorenie rezervácie")
      return
    }

    if (!startDate || !endDate || !startTime || !endTime) {
      setError("Všetky polia sú povinné")
      return
    }

    setIsLoading(true)

    try {
      // Here you would implement the actual booking logic
      // For now, we'll just simulate success
      await new Promise((resolve) => setTimeout(resolve, 1000))
      onSuccess()
    } catch (err) {
      setError("Rezervácia zlyhala. Skúste to znova.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4">
      {error && (
        <Alert variant="destructive" className="border-red-200 bg-red-50">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription className="text-red-700">{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startDate" className="text-gray-700 font-medium">
              Dátum začiatku
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="startDate"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="pl-10 border-gray-300 bg-white"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="endDate" className="text-gray-700 font-medium">
              Dátum konca
            </Label>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="endDate"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="pl-10 border-gray-300 bg-white"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startTime" className="text-gray-700 font-medium">
              Čas začiatku
            </Label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="startTime"
                type="time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="pl-10 border-gray-300 bg-white"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="endTime" className="text-gray-700 font-medium">
              Čas konca
            </Label>
            <div className="relative">
              <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="endTime"
                type="time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="pl-10 border-gray-300 bg-white"
                required
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="notes" className="text-gray-700 font-medium">
            Poznámky (voliteľné)
          </Label>
          <Textarea
            id="notes"
            placeholder="Dodatočné informácie o rezervácii..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="border-gray-300 bg-white"
            rows={3}
          />
        </div>

        <Button type="submit" className="w-full bg-amber-500 text-white font-semibold" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Vytváram rezerváciu...
            </>
          ) : (
            "Vytvoriť rezerváciu"
          )}
        </Button>
      </form>
    </div>
  )
}
