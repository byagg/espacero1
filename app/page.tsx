import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Search, MapPin, Calendar, Shield } from "lucide-react"

export default function HomePage() {
  const features = [
    {
      icon: Search,
      title: "Jednoduché vyhľadávanie",
      description: "Nájdite priestor podľa lokality, kapacity a typu podujatia",
    },
    {
      icon: Calendar,
      title: "Okamžitá rezervácia",
      description: "Rezervujte si priestor v reálnom čase s potvrdením",
    },
    {
      icon: Shield,
      title: "Bezpečné platby",
      description: "Všetky transakcie sú zabezpečené a chránené",
    },
    {
      icon: MapPin,
      title: "Overené priestory",
      description: "Všetky priestory sú kontrolované a certifikované",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-50 to-orange-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Nájdite perfektný priestor
              <span className="block text-amber-500">pre vaše podujatie</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              ESPACERO je platforma, ktorá spája organizátorov podujatí s majiteľmi priestorov. Jednoducho, rýchlo a
              bezpečne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/search">
                <Button size="lg" className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3">
                  Začať vyhľadávanie
                </Button>
              </Link>
              <Link href="/venues/add">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-amber-500 text-amber-500 hover:bg-amber-50 px-8 py-3"
                >
                  Pridať priestor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Prečo si vybrať ESPACERO?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Poskytujeme komplexné riešenie pre rezerváciu priestorov s dôrazom na jednoduchosť a bezpečnosť.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 rounded-full mb-4">
                    <IconComponent className="h-8 w-8 text-amber-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-amber-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pripravení začať?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto">
            Pripojte sa k tisíckam spokojných používateľov a nájdite svoj ideálny priestor už dnes.
          </p>
          <Link href="/search">
            <Button size="lg" variant="secondary" className="bg-white text-amber-500 hover:bg-gray-50 px-8 py-3">
              Vyhľadať priestory
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
