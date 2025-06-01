import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-amber-50 border-t border-amber-100 pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-amber-800 mb-4">O nás</h3>
            <p className="text-gray-600 mb-4">
              ESPACERO je sprostredkovateľská platforma pre prenájom priestorov. Spájame poskytovateľov priestorov so
              záujemcami o prenájom.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-amber-800 mb-4">Rýchle odkazy</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Domov
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Vyhľadávanie
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Často kladené otázky
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Právne dokumenty
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-amber-800 mb-4">Pre poskytovateľov</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/venues/add" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Pridať priestor
                </Link>
              </li>
              <li>
                <Link href="/host/dashboard" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/host/venues" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Moje priestory
                </Link>
              </li>
              <li>
                <Link href="/host/bookings" className="text-gray-600 hover:text-amber-600 transition-colors">
                  Rezervácie
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-amber-800 mb-4">Kontakt</h3>
            <address className="not-italic">
              <p className="text-gray-600">Suché mýto 6</p>
              <p className="text-gray-600">811 03 Bratislava</p>
              <p className="text-gray-600 mt-2">info@simplimator.com</p>
              <p className="text-gray-600">+421 903 123 456</p>
            </address>
          </div>
        </div>

        <div className="border-t border-amber-100 mt-8 pt-6 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} ESPACERO s.r.o. Všetky práva vyhradené.</p>
        </div>
      </div>
    </footer>
  )
}
