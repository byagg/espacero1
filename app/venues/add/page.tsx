"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Upload, X, MapPin, Euro, Users, Camera, CheckCircle, ArrowLeft, ArrowRight } from "lucide-react"

export default function AddVenuePage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([])
  const [uploadedImages, setUploadedImages] = useState<string[]>([])

  const steps = [
    { number: 1, title: "Základné informácie", description: "Názov, popis a kategória" },
    { number: 2, title: "Lokácia", description: "Adresa a kontaktné údaje" },
    { number: 3, title: "Kapacita a ceny", description: "Počet hostí a cenník" },
    { number: 4, title: "Fotografie", description: "Pridajte fotografie priestoru" },
    { number: 5, title: "Vybavenie", description: "Dostupné služby a vybavenie" },
    { number: 6, title: "Pravidlá", description: "Podmienky prenájmu" },
  ]

  const amenities = [
    "WiFi",
    "Klimatizácia",
    "Parkovanie",
    "Terasa",
    "Projektor",
    "Zvuková technika",
    "Osvetlenie",
    "Catering",
    "Bar",
    "Kuchyňa",
    "Záhrada",
    "Gril",
    "Tanečný parket",
    "Pódium",
    "Bezbariérový prístup",
  ]

  const toggleAmenity = (amenity: string) => {
    setSelectedAmenities((prev) => (prev.includes(amenity) ? prev.filter((a) => a !== amenity) : [...prev, amenity]))
  }

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">Pridať nový priestor</h1>
          <p className="text-gray-600">Vytvorte profil vašeho gastro priestoru a začnite zarábať</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4 overflow-x-auto">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center min-w-0">
                <div className="flex flex-col items-center">
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                      currentStep > step.number
                        ? "bg-amber-500 border-amber-500 text-white"
                        : currentStep === step.number
                          ? "bg-amber-500 border-amber-500 text-white shadow-lg scale-110"
                          : "bg-white border-gray-300 text-gray-400"
                    }`}
                  >
                    {currentStep > step.number ? <CheckCircle className="h-6 w-6" /> : step.number}
                  </div>
                  <div className="mt-2 text-center min-w-0">
                    <div
                      className={`text-xs font-medium ${
                        currentStep >= step.number ? "text-amber-600" : "text-gray-400"
                      }`}
                    >
                      Krok {step.number}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                      currentStep > step.number ? "bg-amber-500" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-800">{steps[currentStep - 1].title}</h2>
            <p className="text-gray-600">{steps[currentStep - 1].description}</p>
          </div>
        </div>

        {/* Form Content */}
        <Card className="bg-white border-gray-200 shadow-lg">
          <CardContent className="p-8">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-gray-700 font-medium">
                    Názov priestoru *
                  </Label>
                  <Input
                    id="name"
                    placeholder="napr. Reštaurácia Zlatý Kľúč"
                    className="mt-2 border-gray-300 bg-white"
                  />
                </div>

                <div>
                  <Label htmlFor="category" className="text-gray-700 font-medium">
                    Kategória *
                  </Label>
                  <Select>
                    <SelectTrigger className="mt-2 border-gray-300 bg-white">
                      <SelectValue placeholder="Vyberte kategóriu" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="restaurant">Reštaurácia</SelectItem>
                      <SelectItem value="cafe">Kaviareň</SelectItem>
                      <SelectItem value="bar">Bar</SelectItem>
                      <SelectItem value="event_hall">Event sála</SelectItem>
                      <SelectItem value="hotel">Hotel</SelectItem>
                      <SelectItem value="other">Iné</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="description" className="text-gray-700 font-medium">
                    Popis priestoru *
                  </Label>
                  <Textarea
                    id="description"
                    placeholder="Opíšte váš priestor, atmosféru, štýl..."
                    className="mt-2 min-h-[120px] border-gray-300 bg-white"
                  />
                </div>
              </div>
            )}

            {/* Step 2: Location */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="address" className="text-gray-700 font-medium">
                    Adresa *
                  </Label>
                  <Input id="address" placeholder="Ulica a číslo" className="mt-2 border-gray-300 bg-white" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city" className="text-gray-700 font-medium">
                      Mesto *
                    </Label>
                    <Input id="city" placeholder="napr. Bratislava" className="mt-2 border-gray-300 bg-white" />
                  </div>
                  <div>
                    <Label htmlFor="postal" className="text-gray-700 font-medium">
                      PSČ
                    </Label>
                    <Input id="postal" placeholder="napr. 81101" className="mt-2 border-gray-300 bg-white" />
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <div className="flex items-center mb-2">
                    <MapPin className="h-5 w-5 text-amber-600 mr-2" />
                    <span className="font-medium text-amber-800">Lokácia na mape</span>
                  </div>
                  <p className="text-amber-700 text-sm">Mapa bude automaticky aktualizovaná na základe adresy</p>
                </div>
              </div>
            )}

            {/* Step 3: Capacity and Pricing */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="capacity" className="text-gray-700 font-medium">
                    Maximálna kapacita *
                  </Label>
                  <div className="relative mt-2">
                    <Users className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="capacity"
                      type="number"
                      placeholder="Počet osôb"
                      className="pl-10 border-gray-300 bg-white"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="price" className="text-gray-700 font-medium">
                    Cena za hodinu *
                  </Label>
                  <div className="relative mt-2">
                    <Euro className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="price"
                      type="number"
                      placeholder="Cena v eurách"
                      className="pl-10 border-gray-300 bg-white"
                    />
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-medium mb-2 text-amber-800">Cenové informácie</h4>
                  <ul className="text-sm text-amber-700 space-y-1">
                    <li>• Cena je za hodinu prenájmu</li>
                    <li>• Minimálny prenájom je 2 hodiny</li>
                    <li>• ESPACERO si účtuje 10% províziu z každej rezervácie</li>
                  </ul>
                </div>
              </div>
            )}

            {/* Step 4: Photos */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-gray-700 font-medium">Fotografie priestoru *</Label>
                  <p className="text-gray-600 text-sm mt-1">
                    Pridajte minimálne 3 fotografie. Prvá fotografia bude hlavná.
                  </p>
                </div>

                <div className="border-2 border-dashed border-amber-300 rounded-lg p-8 text-center bg-amber-50">
                  <Camera className="h-12 w-12 text-amber-500 mx-auto mb-4" />
                  <h4 className="text-lg font-medium mb-2 text-gray-800">Pridajte fotografie</h4>
                  <p className="text-gray-600 mb-4">Drag & drop alebo kliknite pre výber súborov</p>
                  <Button variant="outline" className="border-amber-500 text-amber-600 hover:bg-amber-50">
                    <Upload className="h-4 w-4 mr-2" />
                    Vybrať súbory
                  </Button>
                </div>

                {uploadedImages.length > 0 && (
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {uploadedImages.map((image, index) => (
                      <div key={index} className="relative">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`Upload ${index + 1}`}
                          className="w-full h-32 object-cover rounded-lg"
                        />
                        <Button size="sm" variant="destructive" className="absolute top-2 right-2 h-6 w-6 p-0">
                          <X className="h-4 w-4" />
                        </Button>
                        {index === 0 && <Badge className="absolute bottom-2 left-2 bg-amber-500">Hlavná</Badge>}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* Step 5: Amenities */}
            {currentStep === 5 && (
              <div className="space-y-6">
                <div>
                  <Label className="text-gray-700 font-medium">Vybavenie a služby</Label>
                  <p className="text-gray-600 text-sm mt-1">Vyberte všetko dostupné vybavenie vo vašom priestore</p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {amenities.map((amenity) => (
                    <div key={amenity} className="flex items-center space-x-2">
                      <Checkbox
                        id={amenity}
                        checked={selectedAmenities.includes(amenity)}
                        onCheckedChange={() => toggleAmenity(amenity)}
                        className="border-gray-300 data-[state=checked]:bg-amber-500 data-[state=checked]:border-amber-500"
                      />
                      <Label htmlFor={amenity} className="text-sm text-gray-700">
                        {amenity}
                      </Label>
                    </div>
                  ))}
                </div>

                {selectedAmenities.length > 0 && (
                  <div>
                    <h4 className="font-medium mb-2 text-gray-800">Vybrané vybavenie:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAmenities.map((amenity) => (
                        <Badge key={amenity} variant="secondary" className="bg-amber-100 text-amber-800">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 6: Rules */}
            {currentStep === 6 && (
              <div className="space-y-6">
                <div>
                  <Label htmlFor="rules" className="text-gray-700 font-medium">
                    Pravidlá a podmienky
                  </Label>
                  <Textarea
                    id="rules"
                    placeholder="Napíšte pravidlá pre prenájom (napr. zákaz fajčenia, maximálna hlasitosť, čas ukončenia...)"
                    className="mt-2 min-h-[120px] border-gray-300 bg-white"
                  />
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-medium mb-2 text-gray-800">Štandardné podmienky ESPACERO</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Hosť je zodpovedný za škody spôsobené počas prenájmu</li>
                    <li>• Platba sa uskutoční online pred rezerváciou</li>
                    <li>• Zrušenie rezervácie je možné do 24 hodín pred termínom</li>
                    <li>• Priestor musí byť vrátený v pôvodnom stave</li>
                  </ul>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h4 className="font-medium text-green-700 mb-2">Posledný krok!</h4>
                  <p className="text-sm text-green-600">
                    Po odoslaní bude váš priestor preverený naším tímom a do 24 hodín bude aktivovaný na platforme.
                  </p>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="border-gray-300 text-gray-700 bg-white"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Späť
          </Button>

          {currentStep < steps.length ? (
            <Button onClick={nextStep} className="bg-amber-500 text-white border-amber-500">
              Pokračovať
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          ) : (
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              <CheckCircle className="h-4 w-4 mr-2" />
              Odoslať na schválenie
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
