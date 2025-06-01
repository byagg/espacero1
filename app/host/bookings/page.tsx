"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/hooks/use-auth"
import { supabase } from "@/lib/supabase"
import {
  Search,
  Calendar,
  Users,
  Euro,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  MessageSquare,
  Filter,
  Download,
} from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { format } from "date-fns"
import { sk } from "date-fns/locale"

interface Booking {
  id: string
  venue_id: string
  guest_id: string
  start_datetime: string
  end_datetime: string
  guest_count: number
  total_price: number
  status: "pending" | "confirmed" | "cancelled" | "completed"
  special_requests: string | null
  created_at: string
  venue?: {
    name: string
    address: string
    city: string
  }
  guest?: {
    full_name: string
    email: string
    phone: string
  }
}

export default function HostBookings() {
  const [bookings, setBookings] = useState<Booking[]>([])
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      fetchBookings()
    }
  }, [user])

  useEffect(() => {
    filterBookings()
  }, [bookings, searchTerm, statusFilter, dateFilter, activeTab])

  const fetchBookings = async () => {
    if (!user || !supabase) return

    try {
      const { data, error } = await supabase
        .from("bookings")
        .select(`
          *,
          venue:venues!inner(name, address, city, host_id),
          guest:profiles(full_name, email, phone)
        `)
        .eq("venue.host_id", user.id)
        .order("created_at", { ascending: false })

      if (error) throw error

      setBookings(data || [])
    } catch (error) {
      console.error("Error fetching bookings:", error)
    } finally {
      setLoading(false)
    }
  }

  const filterBookings = () => {
    let filtered = bookings

    // Filter by active tab
    if (activeTab !== "all") {
      filtered = filtered.filter((booking) => booking.status === activeTab)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (booking) =>
          booking.venue?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          booking.guest?.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          booking.guest?.email?.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    // Filter by status
    if (statusFilter !== "all") {
      filtered = filtered.filter((booking) => booking.status === statusFilter)
    }

    // Filter by date
    if (dateFilter !== "all") {
      const now = new Date()
      const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000)
      const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000)

      filtered = filtered.filter((booking) => {
        const bookingDate = new Date(booking.start_datetime)
        switch (dateFilter) {
          case "today":
            return bookingDate >= today && bookingDate < tomorrow
          case "tomorrow":
            return bookingDate >= tomorrow && bookingDate < new Date(tomorrow.getTime() + 24 * 60 * 60 * 1000)
          case "week":
            return bookingDate >= today && bookingDate < nextWeek
          case "past":
            return bookingDate < today
          default:
            return true
        }
      })
    }

    setFilteredBookings(filtered)
  }

  const updateBookingStatus = async (bookingId: string, newStatus: string) => {
    if (!supabase) return

    try {
      const { error } = await supabase.from("bookings").update({ status: newStatus }).eq("id", bookingId)

      if (error) throw error

      setBookings((prev) =>
        prev.map((booking) => (booking.id === bookingId ? { ...booking, status: newStatus as any } : booking)),
      )
    } catch (error) {
      console.error("Error updating booking status:", error)
    }
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return (
          <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
            <CheckCircle className="h-3 w-3 mr-1" />
            Potvrdené
          </Badge>
        )
      case "pending":
        return (
          <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
            <Clock className="h-3 w-3 mr-1" />
            Čaká na potvrdenie
          </Badge>
        )
      case "cancelled":
        return (
          <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
            <XCircle className="h-3 w-3 mr-1" />
            Zrušené
          </Badge>
        )
      case "completed":
        return (
          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
            <CheckCircle className="h-3 w-3 mr-1" />
            Ukončené
          </Badge>
        )
      default:
        return null
    }
  }

  const formatDateTime = (dateString: string) => {
    const date = new Date(dateString)
    return format(date, "d. MMMM yyyy 'o' HH:mm", { locale: sk })
  }

  const calculateDuration = (start: string, end: string) => {
    const startDate = new Date(start)
    const endDate = new Date(end)
    const diffHours = Math.abs(endDate.getTime() - startDate.getTime()) / 36e5
    return diffHours.toFixed(1)
  }

  const getTabCounts = () => {
    return {
      all: bookings.length,
      pending: bookings.filter((b) => b.status === "pending").length,
      confirmed: bookings.filter((b) => b.status === "confirmed").length,
      completed: bookings.filter((b) => b.status === "completed").length,
      cancelled: bookings.filter((b) => b.status === "cancelled").length,
    }
  }

  const tabCounts = getTabCounts()

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-8 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="space-y-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">Rezervácie</h1>
              <p className="text-gray-600">Spravujte rezervácie vašich priestorov</p>
            </div>
            <div className="mt-4 md:mt-0 flex gap-3">
              <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                <Download className="h-4 w-4 mr-2" />
                Exportovať
              </Button>
              <Button variant="outline" className="border-gray-300">
                <Filter className="h-4 w-4 mr-2" />
                Filtre
              </Button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <Card className="bg-white border-gray-200 shadow-lg mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Hľadať rezervácie..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 border-gray-300 focus:border-amber-500 focus:ring-amber-500"
                />
              </div>
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="border-gray-300 focus:border-amber-500 focus:ring-amber-500">
                  <SelectValue placeholder="Stav rezervácie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Všetky stavy</SelectItem>
                  <SelectItem value="pending">Čakajúce</SelectItem>
                  <SelectItem value="confirmed">Potvrdené</SelectItem>
                  <SelectItem value="completed">Ukončené</SelectItem>
                  <SelectItem value="cancelled">Zrušené</SelectItem>
                </SelectContent>
              </Select>
              <Select value={dateFilter} onValueChange={setDateFilter}>
                <SelectTrigger className="border-gray-300 focus:border-amber-500 focus:ring-amber-500">
                  <SelectValue placeholder="Dátum" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Všetky dátumy</SelectItem>
                  <SelectItem value="today">Dnes</SelectItem>
                  <SelectItem value="tomorrow">Zajtra</SelectItem>
                  <SelectItem value="week">Tento týždeň</SelectItem>
                  <SelectItem value="past">Minulé</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 bg-gray-100 p-1 rounded-lg">
            <TabsTrigger
              value="all"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
            >
              Všetky ({tabCounts.all})
            </TabsTrigger>
            <TabsTrigger
              value="pending"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
            >
              Čakajúce ({tabCounts.pending})
            </TabsTrigger>
            <TabsTrigger
              value="confirmed"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
            >
              Potvrdené ({tabCounts.confirmed})
            </TabsTrigger>
            <TabsTrigger
              value="completed"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
            >
              Ukončené ({tabCounts.completed})
            </TabsTrigger>
            <TabsTrigger
              value="cancelled"
              className="data-[state=active]:bg-amber-500 data-[state=active]:text-white transition-all"
            >
              Zrušené ({tabCounts.cancelled})
            </TabsTrigger>
          </TabsList>

          <TabsContent value={activeTab} className="space-y-4">
            {filteredBookings.length === 0 ? (
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-12 text-center">
                  <Calendar className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Žiadne rezervácie</h3>
                  <p className="text-gray-600">
                    {bookings.length === 0
                      ? "Zatiaľ nemáte žiadne rezervácie."
                      : "Žiadne rezervácie nevyhovujú vašim filtrom."}
                  </p>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-4">
                {filteredBookings.map((booking) => (
                  <Card
                    key={booking.id}
                    className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow"
                  >
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-4">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-800 mb-1">{booking.venue?.name}</h3>
                              <p className="text-gray-600 text-sm flex items-center mb-2">
                                <Calendar className="h-4 w-4 mr-1" />
                                {formatDateTime(booking.start_datetime)} - {formatDateTime(booking.end_datetime)}
                              </p>
                              <p className="text-gray-600 text-sm">
                                Hosť: {booking.guest?.full_name || "Neznámy"} ({booking.guest?.email})
                              </p>
                            </div>
                            <div className="ml-4">{getStatusBadge(booking.status)}</div>
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                            <div>
                              <p className="text-gray-500 text-xs">Počet hostí</p>
                              <p className="font-medium text-gray-800 flex items-center">
                                <Users className="h-4 w-4 mr-1" />
                                {booking.guest_count} osôb
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500 text-xs">Trvanie</p>
                              <p className="font-medium text-gray-800 flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {calculateDuration(booking.start_datetime, booking.end_datetime)}h
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500 text-xs">Celková cena</p>
                              <p className="font-medium text-amber-600 flex items-center">
                                <Euro className="h-4 w-4 mr-1" />€{booking.total_price}
                              </p>
                            </div>
                            <div>
                              <p className="text-gray-500 text-xs">Rezervované</p>
                              <p className="font-medium text-gray-800">
                                {format(new Date(booking.created_at), "d. MMM", { locale: sk })}
                              </p>
                            </div>
                          </div>

                          {booking.special_requests && (
                            <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                              <p className="text-gray-600 text-sm font-medium mb-1">Špeciálne požiadavky:</p>
                              <p className="text-gray-700 text-sm">{booking.special_requests}</p>
                            </div>
                          )}
                        </div>

                        <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col lg:flex-row gap-2">
                          <Button variant="outline" size="sm" className="border-gray-300">
                            <Eye className="h-4 w-4 mr-1" />
                            Detail
                          </Button>
                          <Button variant="outline" size="sm" className="border-gray-300">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            Kontakt
                          </Button>
                          {booking.status === "pending" && (
                            <>
                              <Button
                                size="sm"
                                className="bg-green-600 hover:bg-green-700 text-white"
                                onClick={() => updateBookingStatus(booking.id, "confirmed")}
                              >
                                <CheckCircle className="h-4 w-4 mr-1" />
                                Potvrdiť
                              </Button>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-red-300 text-red-600 hover:bg-red-50"
                                onClick={() => updateBookingStatus(booking.id, "cancelled")}
                              >
                                <XCircle className="h-4 w-4 mr-1" />
                                Odmietnuť
                              </Button>
                            </>
                          )}
                          {booking.status === "confirmed" && (
                            <Button
                              variant="outline"
                              size="sm"
                              className="border-blue-300 text-blue-600 hover:bg-blue-50"
                              onClick={() => updateBookingStatus(booking.id, "completed")}
                            >
                              <CheckCircle className="h-4 w-4 mr-1" />
                              Označiť ako ukončené
                            </Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
