"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, User, Heart, Calendar, LogOut, BarChart3, MapPin, Shield } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { useRouter } from "next/navigation"
import { AuthModal } from "@/components/auth/auth-modal"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [showAuthModal, setShowAuthModal] = useState(false)
  const { user, loading, signOut } = useAuth()
  const router = useRouter()

  const handleSignOut = async () => {
    await signOut()
    router.push("/")
  }

  const getInitials = (name: string) => {
    if (!name) return "U"
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2) // Limit to 2 characters
  }

  // Check if user is a host or admin
  const isHost = user?.user_metadata?.user_role === "host" || user?.user_metadata?.user_role === "admin"
  const isAdmin = user?.email === "info@simplimator.com" || user?.user_metadata?.user_role === "admin"

  // Redirect admin to admin dashboard after login
  useEffect(() => {
    if (user && isAdmin && !loading) {
      // Only redirect if not already on admin page
      if (!window.location.pathname.startsWith("/admin")) {
        router.push("/admin/dashboard")
      }
    }
  }, [user, isAdmin, loading, router])

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-amber-600">
            ESPACERO
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {!isAdmin && (
              <>
                <Link href="/search" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                  Hľadať priestory
                </Link>
                <Link href="/venues/add" className="text-gray-700 hover:text-amber-600 transition-colors font-medium">
                  Pridať priestor
                </Link>
                {isHost && (
                  <Link
                    href="/host/dashboard"
                    className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
                  >
                    Dashboard hostiteľa
                  </Link>
                )}
              </>
            )}
            {isAdmin && (
              <Link
                href="/admin/dashboard"
                className="text-gray-700 hover:text-amber-600 transition-colors font-medium"
              >
                Admin Dashboard
              </Link>
            )}
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                {!isAdmin && (
                  <>
                    <Link href="/favorites">
                      <Button variant="ghost" className="text-gray-700 bg-white">
                        <Heart className="h-4 w-4 mr-2" />
                        Obľúbené
                      </Button>
                    </Link>
                    <Link href="/bookings">
                      <Button variant="ghost" className="text-gray-700 bg-white">
                        <Calendar className="h-4 w-4 mr-2" />
                        Rezervácie
                      </Button>
                    </Link>
                  </>
                )}
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                      <Avatar className="h-8 w-8 bg-amber-500 text-white">
                        <AvatarFallback>{getInitials(user.user_metadata?.full_name || "User")}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    className="w-56 bg-white border border-gray-200 shadow-lg"
                    align="end"
                    forceMount
                  >
                    <DropdownMenuLabel className="font-normal">
                      <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">
                          {user.user_metadata?.full_name || "Používateľ"}
                        </p>
                        <p className="text-xs leading-none text-gray-500">{user.email}</p>
                      </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {!isAdmin && (
                      <>
                        <DropdownMenuItem asChild>
                          <Link href="/profile">Profil</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/favorites">Obľúbené</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/bookings">Rezervácie</Link>
                        </DropdownMenuItem>
                        {isHost && (
                          <>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                              <Link href="/host/dashboard">
                                <BarChart3 className="mr-2 h-4 w-4" />
                                Dashboard hostiteľa
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/host/venues">
                                <MapPin className="mr-2 h-4 w-4" />
                                Moje priestory
                              </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                              <Link href="/host/bookings">
                                <Calendar className="mr-2 h-4 w-4" />
                                Správa rezervácií
                              </Link>
                            </DropdownMenuItem>
                          </>
                        )}
                      </>
                    )}
                    {isAdmin && (
                      <>
                        <DropdownMenuItem asChild>
                          <Link href="/admin/dashboard">
                            <Shield className="mr-2 h-4 w-4" />
                            Admin Dashboard
                          </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem asChild>
                          <Link href="/profile">Profil</Link>
                        </DropdownMenuItem>
                      </>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Odhlásiť sa</span>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Button className="bg-amber-500 text-white border-amber-500" onClick={() => setShowAuthModal(true)}>
                Prihlásiť sa
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 bg-white">
            <div className="flex flex-col space-y-4">
              {!isAdmin && (
                <>
                  <Link
                    href="/search"
                    className="text-gray-700 hover:text-amber-600 transition-colors font-medium px-4 py-2 rounded-md hover:bg-amber-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Hľadať priestory
                  </Link>
                  <Link
                    href="/venues/add"
                    className="text-gray-700 hover:text-amber-600 transition-colors font-medium px-4 py-2 rounded-md hover:bg-amber-50"
                    onClick={() => setIsOpen(false)}
                  >
                    Pridať priestor
                  </Link>
                  {isHost && (
                    <Link
                      href="/host/dashboard"
                      className="text-gray-700 hover:text-amber-600 transition-colors font-medium px-4 py-2 rounded-md hover:bg-amber-50"
                      onClick={() => setIsOpen(false)}
                    >
                      Dashboard hostiteľa
                    </Link>
                  )}
                </>
              )}
              {isAdmin && (
                <Link
                  href="/admin/dashboard"
                  className="text-gray-700 hover:text-amber-600 transition-colors font-medium px-4 py-2 rounded-md hover:bg-amber-50"
                  onClick={() => setIsOpen(false)}
                >
                  Admin Dashboard
                </Link>
              )}
              <div className="pt-4 border-t border-gray-200 space-y-2 px-4">
                {user ? (
                  <>
                    <div className="flex items-center space-x-3 mb-4">
                      <Avatar className="h-10 w-10 bg-amber-500 text-white">
                        <AvatarFallback>{getInitials(user.user_metadata?.full_name || "User")}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-800">{user.user_metadata?.full_name || "Používateľ"}</p>
                        <p className="text-xs text-gray-500">{user.email}</p>
                      </div>
                    </div>
                    {!isAdmin && (
                      <>
                        <Link href="/favorites" onClick={() => setIsOpen(false)}>
                          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-amber-50">
                            <Heart className="h-4 w-4 mr-2" />
                            Obľúbené
                          </Button>
                        </Link>
                        <Link href="/bookings" onClick={() => setIsOpen(false)}>
                          <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-amber-50">
                            <Calendar className="h-4 w-4 mr-2" />
                            Rezervácie
                          </Button>
                        </Link>
                      </>
                    )}
                    <Link href="/profile" onClick={() => setIsOpen(false)}>
                      <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-amber-50">
                        <User className="h-4 w-4 mr-2" />
                        Profil
                      </Button>
                    </Link>
                    {isHost && !isAdmin && (
                      <>
                        <div className="border-t border-gray-200 pt-2 mt-2">
                          <Link href="/host/dashboard" onClick={() => setIsOpen(false)}>
                            <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-amber-50">
                              <BarChart3 className="h-4 w-4 mr-2" />
                              Dashboard hostiteľa
                            </Button>
                          </Link>
                          <Link href="/host/venues" onClick={() => setIsOpen(false)}>
                            <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-amber-50">
                              <MapPin className="h-4 w-4 mr-2" />
                              Moje priestory
                            </Button>
                          </Link>
                          <Link href="/host/bookings" onClick={() => setIsOpen(false)}>
                            <Button variant="ghost" className="w-full justify-start text-gray-700 hover:bg-amber-50">
                              <Calendar className="h-4 w-4 mr-2" />
                              Správa rezervácií
                            </Button>
                          </Link>
                        </div>
                      </>
                    )}
                    <Button
                      variant="ghost"
                      className="w-full justify-start text-red-600 hover:bg-red-50"
                      onClick={() => {
                        handleSignOut()
                        setIsOpen(false)
                      }}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Odhlásiť sa
                    </Button>
                  </>
                ) : (
                  <Button
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white"
                    onClick={() => {
                      setShowAuthModal(true)
                      setIsOpen(false)
                    }}
                  >
                    Prihlásiť sa
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Auth Modal */}
      <AuthModal open={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </nav>
  )
}
