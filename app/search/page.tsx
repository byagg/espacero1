"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { useVenues } from "@/hooks/use-venues"
import { MapPin, Users, Euro, Search, Filter, Heart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SearchPage() {
  const { venues, loading, fetchVenues } = useVenues()
  const [searchTerm, setSearchTerm] = useState("")
  const [cityFilter, setCityFilter] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("")
  const [capacityFilter, setCapacityFilter] = useState("")
  const [priceFilter, setPriceFilter] = useState("")

  useEffect(() => {
    const filters = {
      city: cityFilter || undefined,
      category: categoryFilter || undefined,
      minCapacity: capacityFilter ? Number.parseInt(capacityFilter) : undefined,
      maxPrice: priceFilter ? Number.parseInt(priceFilter) : undefined,
    }
    fetchVenues(filters)
  }, [cityFilter, categoryFilter, capacityFilter, priceFilter, fetchVenues])

  const filteredVenues = venues.filter(
    (venue) =>
      venue.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      venue.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      venue.address.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const categories = ["Reštaurácia", "Kaviareň", "Bar", "Konferenčná miestnosť", "Eventový priestor", "Coworking"]
  const cities = ["Bratislava", "Košice", "Prešov", "Žilina", "Banská Bystrica", "Nitra", "Trnava"]

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Vyhľadávanie priestorov</h1>
          <p className="text-gray-600">Nájdite ideálny priestor pre vašu udalosť</p>
        </div>

        {/* Search and Filters */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
              <div className="lg:col-span-2 relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Hľadať priestory..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={cityFilter} onValueChange={setCityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Mesto" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Všetky mestá</SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Kategória" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Všetky kategórie</SelectItem>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={capacityFilter} onValueChange={setCapacityFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Kapacita" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Ľubovoľná</SelectItem>
                  <SelectItem value="10">10+ osôb</SelectItem>
                  <SelectItem value="25">25+ osôb</SelectItem>
                  <SelectItem value="50">50+ osôb</SelectItem>
                  <SelectItem value="100">100+ osôb</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Cena" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Ľubovoľná</SelectItem>
                  <SelectItem value="50">Do 50€/h</SelectItem>
                  <SelectItem value="100">Do 100€/h</SelectItem>
                  <SelectItem value="200">Do 200€/h</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results */}
        <div className="mb-4 flex items-center justify-between">
          <p className="text-gray-600">{loading ? "Načítavam..." : `Nájdených ${filteredVenues.length} priestorov`}</p>
          <Button variant="outline" size="sm">
            <Filter className="h-4 w-4 mr-2" />
            Ďalšie filtre
          </Button>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="animate-pulse">
                <div className="h-48 bg-gray-200 rounded-t-lg"></div>
                <CardContent className="p-4">
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded mb-4"></div>
                  <div className="flex justify-between">
                    <div className="h-3 bg-gray-200 rounded w-20"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredVenues.length === 0 ? (
          <Card className="p-12 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Žiadne výsledky</h3>
            <p className="text-gray-600">Skúste zmeniť vyhľadávacie kritériá.</p>
          </Card>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVenues.map((venue) => (
              <Card key={venue.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative">
                  <Image
                    src={venue.images?.[0] || "/placeholder.svg?height=200&width=300"}
                    alt={venue.name}
                    width={300}
                    height={200}
                    className="h-48 w-full object-cover"
                  />
                  <button className="absolute top-3 right-3 p-2 bg-white/80 rounded-full hover:bg-white transition-colors">
                    <Heart className="h-4 w-4" />
                  </button>
                  {venue.category && (
                    <Badge className="absolute top-3 left-3 bg-amber-500 text-white">{venue.category}</Badge>
                  )}
                </div>

                <CardContent className="p-4">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold text-gray-800 line-clamp-1">{venue.name}</h3>
                    <div className="flex items-center text-sm text-gray-600">
                      <Star className="h-3 w-3 mr-1 text-yellow-500" />
                      4.8
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-3 flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {venue.city}, {venue.address}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      {venue.capacity} osôb
                    </span>
                    <span className="flex items-center font-semibold text-amber-600">
                      <Euro className="h-3 w-3 mr-1" />
                      {venue.price_per_hour}€/h
                    </span>
                  </div>

                  <Link href={`/venues/${venue.id}`}>
                    <Button className="w-full bg-amber-500 hover:bg-amber-600">Zobraziť detail</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
