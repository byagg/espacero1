import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Často kladené otázky | ESPACERO",
  description: "Odpovede na najčastejšie otázky o platforme ESPACERO",
}

export default function FAQPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-amber-600">Často kladené otázky</h1>

      <div className="space-y-6">
        {faqItems.map((item, index) => (
          <div key={index} className="border border-amber-200 rounded-lg overflow-hidden">
            <details className="group">
              <summary className="flex justify-between items-center p-4 bg-amber-50 cursor-pointer font-medium text-amber-800">
                {item.question}
                <span className="transition-transform group-open:rotate-180">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </span>
              </summary>
              <div className="p-4 bg-white">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            </details>
          </div>
        ))}
      </div>
    </div>
  )
}

const faqItems = [
  {
    question: "Čo je ESPACERO?",
    answer:
      "ESPACERO je online platforma, ktorá slúži ako sprostredkovateľský portál na prezentáciu gastro a iných priestorov. Umožňuje kontakt medzi poskytovateľmi priestorov a záujemcami o prenájom.",
  },
  {
    question: "Ako funguje rezervácia priestoru?",
    answer:
      "ESPACERO slúži len ako sprostredkovateľ kontaktu. Po nájdení vhodného priestoru kontaktujete priamo poskytovateľa a dohodnete si s ním podmienky prenájmu. Všetky platby a zmluvné vzťahy prebiehajú priamo medzi vami a poskytovateľom priestoru.",
  },
  {
    question: "Koľko stojí používanie platformy?",
    answer:
      "Pre záujemcov o prenájom je používanie platformy úplne bezplatné. Poskytovatelia priestorov majú k dispozícii základný tarif zadarmo (prvé 3 mesiace), následne si môžu vybrať z platených tarifov STANDARD (35€/mesiac) alebo PREMIUM (70€/mesiac) pre lepšiu viditeľnosť a viac funkcií.",
  },
  {
    question: "Ako sa môžem zaregistrovať ako poskytovateľ priestoru?",
    answer:
      "Registrácia je jednoduchá. Kliknite na tlačidlo 'Registrovať' v hornom menu, vyplňte požadované údaje a označte, že chcete poskytovať priestory. Po overení emailu môžete pridať svoj prvý priestor.",
  },
  {
    question: "Aké typy priestorov môžem na platforme nájsť?",
    answer:
      "Na platforme nájdete širokú škálu priestorov - konferenčné miestnosti, ateliéry, fitness štúdiá, spoločenské sály, gastro priestory, kancelárie, školiace miestnosti a mnoho ďalších. Všetky priestory sú kategorizované pre jednoduchšie vyhľadávanie.",
  },
  {
    question: "Kto zodpovedá za kvalitu prenajímaných priestorov?",
    answer:
      "Za kvalitu, bezpečnosť a stav priestorov zodpovedá výhradne ich poskytovateľ. ESPACERO ako sprostredkovateľská platforma nezodpovedá za stav priestorov ani za dodržanie zmluvných podmienok medzi poskytovateľom a záujemcom.",
  },
  {
    question: "Môžem si priestor rezervovať online?",
    answer:
      "Platforma momentálne slúži primárne na sprostredkovanie kontaktu. Samotná rezervácia a platba prebieha priamo medzi vami a poskytovateľom priestoru podľa jeho preferovaného spôsobu.",
  },
  {
    question: "Ako môžem zrušiť rezerváciu?",
    answer:
      "Keďže rezervácie prebiehajú priamo medzi vami a poskytovateľom, podmienky zrušenia si dohodnete priamo s ním. ESPACERO do tohto procesu nezasahuje.",
  },
  {
    question: "Vyberá si ESPACERO províziu z prenájmov?",
    answer:
      "Nie, ESPACERO nevyberá žiadne provízie z prenájmov. Náš obchodný model je založený výhradne na poplatkoch za prezentáciu priestorov od poskytovateľov.",
  },
  {
    question: "Ako môžem nahlásiť problém s priestorom alebo poskytovateľom?",
    answer:
      "Ak máte problém s priestorom alebo poskytovateľom, môžete nás kontaktovať prostredníctvom kontaktného formulára. Každý podnet prešetríme a v prípade opakovaných problémov môžeme poskytovateľa z platformy odstrániť.",
  },
]
