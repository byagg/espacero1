"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { BookingForm } from "./booking-form"
import type { Venue } from "@/types/venue"

interface BookingModalProps {
  venue: Venue
  open: boolean
  onClose: () => void
}

export function BookingModal({ venue, open, onClose }: BookingModalProps) {
  const handleSuccess = () => {
    onClose()
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg bg-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-gray-800">Rezervovať priestor</DialogTitle>
        </DialogHeader>

        <div className="mt-4">
          <div className="mb-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="font-semibold text-gray-800">{venue.name}</h3>
            <p className="text-sm text-gray-600">{venue.location}</p>
            <p className="text-lg font-bold text-amber-600 mt-2">{venue.price_per_hour}€/hodina</p>
          </div>

          <BookingForm venue={venue} onSuccess={handleSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  )
}
