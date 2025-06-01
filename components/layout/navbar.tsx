"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { AuthModal } from "@/components/auth/auth-modal"
import { useAuth } from "@/hooks/use-auth"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Menu, X, Search, Heart, Calendar, User, LogOut, Home, Settings, Shield } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const { user, signOut, isAdmin, isHost } = useAuth()

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleSignOut = async () => {
    await signOut()
  }

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    { name: "Domov", href: "/", icon: Home },
    { name: "Vyhľadávanie", href: "/search", icon: Search },
    { name: "FAQ", href: "/faq", icon: Shield },
    { name: "Kontakt", href: "/contact", icon: Settings },
  ]

  const authLinks = [
    { name: "Obľúbené", href: "/favorites", icon: Heart },
    { name: "Rezervácie", href: "/bookings", icon: Calendar },
  ]

  const hostLinks = [
    { name: "Dashboard", href: "/host/dashboard", icon: Home },
    { name: "Moje priestory", href: "/host/venues", icon: Search },
    { name: "Rezervácie", href: "/host/bookings", icon: Calendar },
  ]

  const adminLinks = [{ name: "Admin Dashboard", href: "/admin/dashboard", icon: Shield }]

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-gray-200 bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-amber-500">ESPACERO</span>
            </Link>
            <nav className="ml-8 hidden md:block">
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={
                        isActive(link.href)
                          ? "text-amber-500 text-sm font-medium transition-colors"
                          : "text-gray-700 hover:text-amber-500 text-sm font-medium transition-colors"
                      }
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {isMounted && user ? (
              <>
                <div className="hidden md:flex md:items-center md:space-x-4">
                  {!isAdmin && (
                    <Link href="/venues/add">
                      <Button variant="outline" className="border-amber-500 text-amber-500">
                        Pridať priestor
                      </Button>
                    </Link>
                  )}

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="ghost"
                        className="relative h-10 w-10 rounded-full bg-amber-100 p-0"
                        aria-label="Používateľské menu"
                      >
                        <User className="h-5 w-5 text-amber-600" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56 bg-white border border-gray-200">
                      <div className="px-4 py-3">
                        <p className="text-sm font-medium text-gray-900">
                          {user.user_metadata?.full_name || "Používateľ"}
                        </p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                      <DropdownMenuSeparator />

                      <DropdownMenuItem asChild>
                        <Link href="/profile" className="w-full cursor-pointer">
                          Profil
                        </Link>
                      </DropdownMenuItem>

                      {!isHost && (
                        <>
                          {authLinks.map((link) => (
                            <DropdownMenuItem key={link.href} asChild>
                              <Link href={link.href} className="w-full cursor-pointer">
                                {link.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </>
                      )}

                      {isHost && (
                        <>
                          <DropdownMenuSeparator />
                          {hostLinks.map((link) => (
                            <DropdownMenuItem key={link.href} asChild>
                              <Link href={link.href} className="w-full cursor-pointer">
                                {link.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </>
                      )}

                      {isAdmin && (
                        <>
                          <DropdownMenuSeparator />
                          {adminLinks.map((link) => (
                            <DropdownMenuItem key={link.href} asChild>
                              <Link href={link.href} className="w-full cursor-pointer">
                                {link.name}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </>
                      )}

                      <DropdownMenuSeparator />
                      <DropdownMenuItem onClick={handleSignOut} className="text-red-600 cursor-pointer">
                        <LogOut className="mr-2 h-4 w-4" />
                        <span>Odhlásiť sa</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </>
            ) : (
              <div className="hidden md:block">
                <Button onClick={() => setIsAuthModalOpen(true)} className="bg-amber-500 text-white">
                  Prihlásiť sa
                </Button>
              </div>
            )}

            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 md:hidden"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Otvoriť hlavné menu</span>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <div className="fixed inset-0 z-30 bg-white md:hidden">
          <div className="flex h-16 items-center justify-between px-4 border-b">
            <Link href="/" className="flex items-center" onClick={closeMenu}>
              <span className="text-xl font-bold text-amber-500">ESPACERO</span>
            </Link>
            <button
              onClick={closeMenu}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700"
            >
              <span className="sr-only">Zavrieť menu</span>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="mt-2 px-4">
            <ul className="space-y-1">
              {navLinks.map((link) => {
                const IconComponent = link.icon
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={
                        isActive(link.href)
                          ? "bg-amber-50 text-amber-500 flex items-center rounded-md px-3 py-2 text-base font-medium"
                          : "text-gray-700 hover:bg-gray-50 hover:text-amber-500 flex items-center rounded-md px-3 py-2 text-base font-medium"
                      }
                      onClick={closeMenu}
                    >
                      <IconComponent className="mr-3 h-5 w-5" />
                      {link.name}
                    </Link>
                  </li>
                )
              })}

              {isMounted && user ? (
                <>
                  <li className="pt-4">
                    <div className="px-3">
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Používateľ</p>
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/profile"
                      className="flex items-center rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-amber-500"
                      onClick={closeMenu}
                    >
                      <User className="mr-3 h-5 w-5" />
                      Profil
                    </Link>
                  </li>

                  {!isHost && (
                    <>
                      {authLinks.map((link) => {
                        const IconComponent = link.icon
                        return (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className={
                                isActive(link.href)
                                  ? "bg-amber-50 text-amber-500 flex items-center rounded-md px-3 py-2 text-base font-medium"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-amber-500 flex items-center rounded-md px-3 py-2 text-base font-medium"
                              }
                              onClick={closeMenu}
                            >
                              <IconComponent className="mr-3 h-5 w-5" />
                              {link.name}
                            </Link>
                          </li>
                        )
                      })}
                    </>
                  )}

                  {isHost && (
                    <>
                      <li className="pt-4">
                        <div className="px-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Hostiteľ</p>
                        </div>
                      </li>
                      {hostLinks.map((link) => {
                        const IconComponent = link.icon
                        return (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className={
                                isActive(link.href)
                                  ? "bg-amber-50 text-amber-500 flex items-center rounded-md px-3 py-2 text-base font-medium"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-amber-500 flex items-center rounded-md px-3 py-2 text-base font-medium"
                              }
                              onClick={closeMenu}
                            >
                              <IconComponent className="mr-3 h-5 w-5" />
                              {link.name}
                            </Link>
                          </li>
                        )
                      })}
                      <li>
                        <Link
                          href="/venues/add"
                          className="flex items-center rounded-md px-3 py-2 text-base font-medium text-amber-500 hover:bg-amber-50"
                          onClick={closeMenu}
                        >
                          <Home className="mr-3 h-5 w-5" />
                          Pridať priestor
                        </Link>
                      </li>
                    </>
                  )}

                  {isAdmin && (
                    <>
                      <li className="pt-4">
                        <div className="px-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Admin</p>
                        </div>
                      </li>
                      {adminLinks.map((link) => {
                        const IconComponent = link.icon
                        return (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className={
                                isActive(link.href)
                                  ? "bg-amber-50 text-amber-500 flex items-center rounded-md px-3 py-2 text-base font-medium"
                                  : "text-gray-700 hover:bg-gray-50 hover:text-amber-500 flex items-center rounded-md px-3 py-2 text-base font-medium"
                              }
                              onClick={closeMenu}
                            >
                              <IconComponent className="mr-3 h-5 w-5" />
                              {link.name}
                            </Link>
                          </li>
                        )
                      })}
                    </>
                  )}

                  <li className="pt-4">
                    <button
                      onClick={() => {
                        handleSignOut()
                        closeMenu()
                      }}
                      className="flex w-full items-center rounded-md px-3 py-2 text-base font-medium text-red-600 hover:bg-red-50"
                    >
                      <LogOut className="mr-3 h-5 w-5" />
                      Odhlásiť sa
                    </button>
                  </li>
                </>
              ) : (
                <li className="pt-4">
                  <Button
                    onClick={() => {
                      setIsAuthModalOpen(true)
                      closeMenu()
                    }}
                    className="w-full bg-amber-500 text-white"
                  >
                    Prihlásiť sa
                  </Button>
                </li>
              )}
            </ul>
          </nav>
        </div>
      )}

      <AuthModal open={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
    </>
  )
}
