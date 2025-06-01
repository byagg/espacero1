export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">ESPACERO - Právne dokumenty</h1>
          <h2 className="text-xl text-gray-600 mb-6">Komplexné právne stránky pre sprostredkovateľskú platformu</h2>
          <hr className="border-amber-300 border-2 w-24 mx-auto mb-8" />
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-12">
          {/* Obsah */}
          <section>
            <h2 className="text-2xl font-bold text-amber-600 mb-6 flex items-center">📋 OBSAH PRÁVNYCH DOKUMENTOV</h2>
            <ol className="list-decimal list-inside space-y-2 text-lg">
              <li>
                <strong>Všeobecné obchodné podmienky (VOP)</strong>
              </li>
              <li>
                <strong>Zásady ochrany osobných údajov (GDPR)</strong>
              </li>
              <li>
                <strong>Podmienky používania služby</strong>
              </li>
              <li>
                <strong>Cenník a platobné podmienky</strong>
              </li>
              <li>
                <strong>Reklamačný poriadok</strong>
              </li>
              <li>
                <strong>Zásady moderovania obsahu</strong>
              </li>
            </ol>
          </section>

          <hr className="border-gray-300" />

          {/* VOP */}
          <section>
            <h2 className="text-3xl font-bold text-amber-600 mb-8">1️⃣ VŠEOBECNÉ OBCHODNÉ PODMIENKY</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok I. - Základné ustanovenia</h3>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">1.1 Identifikácia poskytovateľa služby</h4>
                  <ul className="space-y-1 ml-4">
                    <li>
                      <strong>Názov:</strong> ESPACERO s.r.o.
                    </li>
                    <li>
                      <strong>Sídlo:</strong> Suché mýto 6, 811 03 Bratislava, Slovenská republika
                    </li>
                    <li>
                      <strong>IČO:</strong> 51917246
                    </li>
                    <li>
                      <strong>DIČ:</strong> 1077648132
                    </li>
                    <li>
                      <strong>Email:</strong> info@simplimator.com
                    </li>
                    <li>
                      <strong>Web:</strong> www.espacero.com
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">1.2 Predmet podnikania</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Spoločnosť ESPACERO s.r.o. (ďalej len "<strong>Prevádzkovateľ</strong>") prevádzkuje internetovú
                    platformu <strong>www.espacero.com</strong> (ďalej len "<strong>Platforma</strong>"), ktorá slúži
                    výhradne ako <strong>sprostredkovateľský portál</strong> na prezentáciu gastro a iných priestorov a
                    umožnenie kontaktu medzi poskytovateľmi priestorov a záujemcami o prenájom.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok II. - Charakter služby</h3>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">2.1 Sprostredkovateľská činnosť</h4>
                  <ul className="space-y-2 ml-4">
                    <li>
                      Platforma slúži <strong>výhradne na sprostredkovanie kontaktu</strong> medzi poskytovateľmi
                      priestorov (ďalej len "<strong>Poskytovatelia</strong>") a záujemcami o prenájom (ďalej len "
                      <strong>Klienti</strong>")
                    </li>
                    <li>
                      Prevádzkovateľ <strong>nie je zmluvnou stranou</strong> prenájmu priestorov
                    </li>
                    <li>
                      Prevádzkovateľ <strong>nezodpovedá</strong> za kvalitu, dostupnosť ani stav prenajímaných
                      priestorov
                    </li>
                    <li>
                      Všetky <strong>zmluvné vzťahy, platby a zodpovednosť</strong> vznikajú priamo medzi Poskytovateľom
                      a Klientom
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">2.2 Rozsah služieb Prevádzkovateľa</h4>
                  <ul className="space-y-1 ml-4">
                    <li>Prezentácia priestorov v online katalógu</li>
                    <li>Poskytnutie kontaktných údajov Poskytovateľa</li>
                    <li>Umožnenie komunikácie medzi stranami</li>
                    <li>Základné filtrovanie a vyhľadávanie</li>
                    <li>Technická podpora Platformy</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  Článok III. - Práva a povinnosti Poskytovateľov
                </h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">3.1 Registrácia a prezentácia</h4>
                    <ul className="space-y-1 ml-4">
                      <li>Poskytovateľ sa registruje na Platforme bezplatne</li>
                      <li>Za prezentáciu priestoru platí mesačný poplatok podľa cenníka</li>
                      <li>
                        Poskytovateľ zodpovedá za <strong>pravdivosť a aktuálnosť</strong> všetkých uvedených informácií
                      </li>
                      <li>Poskytovateľ má právo kedykoľvek ukončiť prezentáciu svojho priestoru</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">3.2 Povinnosti Poskytovateľa</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Poskytovať <strong>pravdivé a aktuálne informácie</strong> o priestore
                      </li>
                      <li>
                        Mať <strong>platné oprávnenia</strong> na prenájom priestoru
                      </li>
                      <li>
                        Dodržiavať <strong>platné právne predpisy</strong> SR a EÚ
                      </li>
                      <li>
                        Komunikovať s Klientmi <strong>profesionálne a včas</strong>
                      </li>
                      <li>
                        Informovať o <strong>zmenách dostupnosti</strong> priestoru
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">3.3 Zodpovednosť Poskytovateľa</h4>
                    <p className="mb-2">
                      Poskytovateľ <strong>nesie plnú zodpovednosť</strong> za:
                    </p>
                    <ul className="space-y-1 ml-8">
                      <li>Stav a bezpečnosť priestoru</li>
                      <li>Dodržanie dohodnutých podmienok prenájmu</li>
                      <li>Všetky daňové a právne povinnosti</li>
                      <li>Poistenie priestoru a zodpovednosť za škody</li>
                      <li>Dodržanie hygienických a bezpečnostných noriem</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok IV. - Práva a povinnosti Klientov</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">4.1 Používanie Platformy</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Klient môže <strong>bezplatne vyhľadávať</strong> a prezerať ponuky priestorov
                      </li>
                      <li>
                        Kontaktovanie Poskytovateľov je možné po <strong>registrácii</strong>
                      </li>
                      <li>
                        Klient je povinný <strong>dodržiavať pravidlá slušného správania</strong>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">4.2 Zodpovednosť Klienta</h4>
                    <p className="mb-2">
                      Klient <strong>nesie zodpovednosť</strong> za:
                    </p>
                    <ul className="space-y-1 ml-8">
                      <li>Pravdivosť poskytnutých údajov pri registrácii</li>
                      <li>Dodržanie dohodnutých podmienok s Poskytovateľom</li>
                      <li>Úhradu všetkých nákladov priamo Poskytovateľovi</li>
                      <li>Škody spôsobené v prenajatom priestore</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok V. - Platobné podmienky</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">5.1 Poplatky za prezentáciu</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Poskytovateľ platí <strong>mesačný poplatok</strong> za prezentáciu priestoru
                      </li>
                      <li>
                        Platba sa uskutočňuje <strong>vopred</strong> na základe faktúry
                      </li>
                      <li>
                        Ceny sú uvedené v <strong>Cenníku</strong> a zahŕňajú DPH
                      </li>
                      <li>
                        Pri nezaplatení poplatku bude prezentácia <strong>pozastavená</strong>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">
                      5.2 Žiadne sprostredkovateľské poplatky
                    </h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Prevádzkovateľ <strong>nevyberá žiadne provízie</strong> z prenájmov
                      </li>
                      <li>
                        Všetky <strong>platby za prenájom</strong> sa uskutočňujú priamo medzi Poskytovateľom a Klientom
                      </li>
                      <li>
                        Prevádzkovateľ <strong>nemá prístup</strong> k týmto platbám ani ich nesprostredkováva
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok VI. - Obmedzenie zodpovednosti</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">6.1 Vylúčenie zodpovednosti</h4>
                    <p className="mb-2">
                      Prevádzkovateľ <strong>nezodpovedá</strong> za:
                    </p>
                    <ul className="space-y-1 ml-8">
                      <li>Kvalitu, bezpečnosť alebo stav prenajímaných priestorov</li>
                      <li>Dodržanie zmluvných podmienok medzi Poskytovateľom a Klientom</li>
                      <li>Škody vzniknuté v súvislosti s prenájmom priestorov</li>
                      <li>Finančné transakcie medzi Poskytovateľom a Klientom</li>
                      <li>Právne spory medzi užívateľmi Platformy</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">6.2 Technické problémy</h4>
                    <ul className="space-y-1 ml-4">
                      <li>Prevádzkovateľ sa snaží zabezpečiť nepretržitú dostupnosť Platformy</li>
                      <li>Nezodpovedá za dočasné výpadky alebo technické problémy</li>
                      <li>
                        Vyhradzuje si právo na <strong>plánovanú údržbu</strong> Platformy
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok VII. - Ukončenie služby</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">7.1 Ukončenie zo strany Poskytovateľa</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Poskytovateľ môže ukončiť prezentáciu <strong>kedykoľvek</strong>
                      </li>
                      <li>
                        Zaplatené poplatky za neukončené obdobie sa <strong>nevracajú</strong>
                      </li>
                      <li>
                        Údaje o priestore budú <strong>odstránené</strong> do 30 dní
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">
                      7.2 Ukončenie zo strany Prevádzkovateľa
                    </h4>
                    <p className="mb-2">Prevádzkovateľ môže ukončiť službu pri:</p>
                    <ul className="space-y-1 ml-8">
                      <li>
                        <strong>Porušení</strong> týchto VOP
                      </li>
                      <li>
                        <strong>Nepravdivých informáciách</strong> alebo podvodnom správaní
                      </li>
                      <li>
                        <strong>Nezaplatení</strong> poplatkov za prezentáciu
                      </li>
                      <li>
                        <strong>Opakovaných sťažnostiach</strong> na kvalitu služieb
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-300" />

          {/* GDPR */}
          <section>
            <h2 className="text-3xl font-bold text-amber-600 mb-8">2️⃣ ZÁSADY OCHRANY OSOBNÝCH ÚDAJOV (GDPR)</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok I. - Správca údajov</h3>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">1.1 Identifikácia správcu</h4>
                  <ul className="space-y-1 ml-4">
                    <li>
                      <strong>Správca:</strong> ESPACERO s.r.o.
                    </li>
                    <li>
                      <strong>Kontakt:</strong> info@simplimator.com
                    </li>
                    <li>
                      <strong>Adresa:</strong> Suché mýto 6, 811 03 Bratislava, SR
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok II. - Spracúvané údaje</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">2.1 Údaje Poskytovateľov</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        <strong>Identifikačné údaje:</strong> meno, priezvisko, email, telefón
                      </li>
                      <li>
                        <strong>Firemné údaje:</strong> názov firmy, IČO, DIČ, adresa
                      </li>
                      <li>
                        <strong>Údaje o priestore:</strong> názov, popis, fotografie, lokalita
                      </li>
                      <li>
                        <strong>Platobné údaje:</strong> fakturačná adresa, číslo účtu
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">2.2 Údaje Klientov</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        <strong>Registračné údaje:</strong> meno, email, telefón
                      </li>
                      <li>
                        <strong>Údaje o využívaní:</strong> vyhľadávania, kontaktované priestory
                      </li>
                      <li>
                        <strong>Komunikačné údaje:</strong> správy, hodnotenia
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">
                      2.3 Technické údaje (všetci užívatelia)
                    </h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        <strong>Cookies a podobné technológie</strong>
                      </li>
                      <li>
                        <strong>IP adresa a údaje o zariadení</strong>
                      </li>
                      <li>
                        <strong>Údaje o použití Platformy</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok III. - Účel spracúvania</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">3.1 Právny základ spracúvania</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        <strong>Zmluva</strong> - poskytovanie služieb registrovaným užívateľom
                      </li>
                      <li>
                        <strong>Oprávnený záujem</strong> - zlepšovanie služieb, marketing
                      </li>
                      <li>
                        <strong>Súhlas</strong> - newsletter, marketingová komunikácia
                      </li>
                      <li>
                        <strong>Právna povinnosť</strong> - účtovníctvo, daňové povinnosti
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">3.2 Konkrétne účely</h4>
                    <ul className="space-y-1 ml-4">
                      <li>Poskytovanie služieb sprostredkovania kontaktov</li>
                      <li>Komunikácia s užívateľmi</li>
                      <li>Technická podpora a údržba Platformy</li>
                      <li>Marketingová komunikácia (so súhlasom)</li>
                      <li>Plnenie právnych povinností</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok IV. - Doba uchovávania údajov</h3>
                <ul className="space-y-1 ml-4">
                  <li>
                    <strong>Aktívni užívatelia:</strong> počas trvania registrácie + 1 rok
                  </li>
                  <li>
                    <strong>Neaktívni užívatelia:</strong> 3 roky od poslednej aktivity
                  </li>
                  <li>
                    <strong>Účtovné doklady:</strong> 10 rokov (zákonná povinnosť)
                  </li>
                  <li>
                    <strong>Marketingové súhlasy:</strong> do odvolania súhlasu
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok V. - Práva dotknutých osôb</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">5.1 Vaše práva</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        <strong>Právo na informácie</strong> o spracúvaní údajov
                      </li>
                      <li>
                        <strong>Právo na prístup</strong> k svojim údajom
                      </li>
                      <li>
                        <strong>Právo na opravu</strong> nesprávnych údajov
                      </li>
                      <li>
                        <strong>Právo na vymazanie</strong> ("právo byť zabudnutý")
                      </li>
                      <li>
                        <strong>Právo na obmedzenie</strong> spracúvania
                      </li>
                      <li>
                        <strong>Právo na prenosnosť</strong> údajov
                      </li>
                      <li>
                        <strong>Právo namietať</strong> proti spracúvaniu
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">5.2 Uplatnenie práv</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Žiadosti posielajte na: <strong>info@simplimator.com</strong>
                      </li>
                      <li>
                        Odpovieme do <strong>30 dní</strong> od doručenia žiadosti
                      </li>
                      <li>
                        Pri zamietnutí máte právo podať sťažnosť na <strong>Úrad na ochranu osobných údajov SR</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok VI. - Bezpečnosť údajov</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">6.1 Technické opatrenia</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        <strong>Šifrovanie</strong> citlivých údajov
                      </li>
                      <li>
                        <strong>Bezpečné hostovanie</strong> na certifikovaných serveroch
                      </li>
                      <li>
                        <strong>Pravidelné zálohovanie</strong> údajov
                      </li>
                      <li>
                        <strong>Kontrola prístupu</strong> k údajom
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">6.2 Organizačné opatrenia</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        <strong>Školenie zamestnancov</strong> v oblasti ochrany údajov
                      </li>
                      <li>
                        <strong>Interné predpisy</strong> na spracúvanie údajov
                      </li>
                      <li>
                        <strong>Pravidelné audity</strong> bezpečnosti
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-300" />

          {/* Podmienky používania */}
          <section>
            <h2 className="text-3xl font-bold text-amber-600 mb-8">3️⃣ PODMIENKY POUŽÍVANIA SLUŽBY</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok I. - Všeobecné pravidlá</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">1.1 Účel Platformy</h4>
                    <p className="text-gray-700 leading-relaxed">
                      ESPACERO.com je <strong>výhradne sprostredkovateľský portál</strong> na prezentáciu gastro a iných
                      priestorov a umožnenie kontaktu medzi poskytovateľmi a záujemcami o prenájom.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">1.2 Vek užívateľov</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Služby sú určené osobám starším ako <strong>18 rokov</strong>
                      </li>
                      <li>
                        Mladší užívatelia potrebujú <strong>súhlas zákonného zástupcu</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok II. - Registrácia a účty</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">2.1 Proces registrácie</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Registrácia je <strong>bezplatná</strong> pre všetkých užívateľov
                      </li>
                      <li>
                        Povinné je poskytnutie <strong>pravdivých údajov</strong>
                      </li>
                      <li>
                        <strong>Email musí byť overený</strong> pre aktiváciu účtu
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">2.2 Bezpečnosť účtu</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Užívateľ je zodpovedný za <strong>zabezpečenie svojho hesla</strong>
                      </li>
                      <li>
                        <strong>Okamžite nahláste</strong> podozrenie na zneužitie účtu
                      </li>
                      <li>
                        <strong>Nezdieľajte</strong> prístupové údaje s tretími osobami
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok III. - Pravidlá správania</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">3.1 Zakázané činnosti</h4>
                    <p className="mb-2">
                      Je <strong>prísne zakázané:</strong>
                    </p>
                    <ul className="space-y-1 ml-8">
                      <li>
                        Uverejňovanie <strong>nepravdivých informácií</strong>
                      </li>
                      <li>
                        <strong>Podvodné</strong> alebo klamlivé správanie
                      </li>
                      <li>
                        <strong>Obťažovanie</strong> iných užívateľov
                      </li>
                      <li>
                        Používanie <strong>urážlivého jazyka</strong>
                      </li>
                      <li>
                        <strong>Spamovanie</strong> alebo hromadné správy
                      </li>
                      <li>
                        Pokus o <strong>obídenie platobného systému</strong>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">3.2 Obsah priestorov</h4>
                    <p className="mb-2">Poskytovateľ môže prezentovať len priestory, ktoré:</p>
                    <ul className="space-y-1 ml-8">
                      <li>
                        <strong>Legálne vlastní</strong> alebo má právo prenajímať
                      </li>
                      <li>
                        Spĺňajú <strong>bezpečnostné a hygienické normy</strong>
                      </li>
                      <li>
                        Majú <strong>platné povolenia</strong> na prevádzku
                      </li>
                      <li>
                        <strong>Nie sú v rozpore</strong> s dobrými mravmi
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok IV. - Moderovanie obsahu</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">4.1 Kontrola obsahu</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Prevádzkovateľ si vyhradzuje právo <strong>kontrolovať obsah</strong>
                      </li>
                      <li>
                        <strong>Nevhodný obsah</strong> bude odstránený
                      </li>
                      <li>
                        <strong>Opakované porušenia</strong> môžu viesť k zablokovaniu účtu
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">4.2 Nahlasovanie problémov</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Užívatelia môžu <strong>nahlásiť nevhodný obsah</strong>
                      </li>
                      <li>
                        Nahlásenia budú prešetrené do <strong>48 hodín</strong>
                      </li>
                      <li>
                        Kontakt: <strong>info@simplimator.com</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-300" />

          {/* Cenník */}
          <section>
            <h2 className="text-3xl font-bold text-amber-600 mb-8">4️⃣ CENNÍK A PLATOBNÉ PODMIENKY</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-6">Tarify pre Poskytovateľov priestorov</h3>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">🆓 BASIC (Bezplatný)</h4>
                    <p className="text-2xl font-bold text-green-600 mb-3">0 € / mesiac</p>
                    <p className="font-semibold mb-3">Obsah:</p>
                    <ul className="space-y-1 ml-4">
                      <li>Základný profil priestoru</li>
                      <li>Max. 3 fotografie</li>
                      <li>Základné kontaktné údaje</li>
                      <li>Zobrazenie vo vyhľadávaní (nižšia priorita)</li>
                    </ul>
                  </div>

                  <div className="bg-amber-50 p-6 rounded-lg border-2 border-amber-300">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">⭐ STANDARD</h4>
                    <p className="text-2xl font-bold text-amber-600 mb-3">35 € / mesiac (bez DPH)</p>
                    <p className="font-semibold mb-3">Obsah:</p>
                    <ul className="space-y-1 ml-4">
                      <li>Kompletný profil priestoru</li>
                      <li>Neobmedzený počet fotografií</li>
                      <li>Detailný popis a vybavenie</li>
                      <li>Vyššia priorita vo vyhľadávaní</li>
                      <li>Štatistiky návštevnosti</li>
                      <li>Email podpora</li>
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-yellow-50 to-amber-100 p-6 rounded-lg border-2 border-yellow-400">
                    <h4 className="text-lg font-bold text-gray-800 mb-3">🔥 PREMIUM</h4>
                    <p className="text-2xl font-bold text-amber-600 mb-3">70 € / mesiac (bez DPH)</p>
                    <p className="font-semibold mb-3">Obsah:</p>
                    <ul className="space-y-1 ml-4">
                      <li>Všetko zo STANDARD</li>
                      <li>
                        <strong>Zvýraznenie</strong> v zozname (zlatý rám)
                      </li>
                      <li>
                        <strong>Top pozícia</strong> vo vyhľadávaní
                      </li>
                      <li>
                        <strong>Badge "Overený partner"</strong>
                      </li>
                      <li>Prioritná technická podpora</li>
                      <li>
                        Možnosť pridať <strong>video prezentáciu</strong>
                      </li>
                      <li>
                        <strong>Detailné analytiky</strong> a reporty
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Platobné podmienky</h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Spôsoby platby:</h4>
                    <ul className="space-y-1">
                      <li>Bankový prevod</li>
                      <li>Platobná karta online</li>
                      <li>SEPA inkaso (pri ročnej platbe)</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Fakturácia:</h4>
                    <ul className="space-y-1">
                      <li>
                        Faktúry sa vystavujú <strong>mesačne vopred</strong>
                      </li>
                      <li>
                        Splatnosť: <strong>14 dní</strong> od vystavenia
                      </li>
                      <li>
                        Pri nezaplatení: <strong>pozastavenie služby</strong> po 30 dňoch
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">Zmeny tarifov:</h4>
                    <ul className="space-y-1">
                      <li>
                        Zmena tarifu je možná <strong>kedykoľvek</strong>
                      </li>
                      <li>Pri prechode na vyšší tarif: okamžité aktivovanie</li>
                      <li>Pri prechode na nižší tarif: zmena od ďalšieho fakturačného obdobia</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-300" />

          {/* Reklamačný poriadok */}
          <section>
            <h2 className="text-3xl font-bold text-amber-600 mb-8">5️⃣ REKLAMAČNÝ PORIADOK</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok I. - Všeobecné ustanovenia</h3>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">1.1 Rozsah reklamačného poriadku</h4>
                  <p className="text-gray-700 leading-relaxed">
                    Tento reklamačný poriadok sa vzťahuje <strong>výhradne na služby</strong> poskytované
                    prevádzkovateľom ESPACERO.com, <strong>nie na prenájmy priestorov</strong>, ktoré sú predmetom
                    priamych zmlúv medzi Poskytovateľmi a Klientmi.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok II. - Reklamovateľné služby</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-green-800 mb-3">2.1 Služby Prevádzkovateľa</h4>
                    <p className="mb-2">Reklamovať môžete:</p>
                    <ul className="space-y-1 ml-4">
                      <li>
                        <strong>Technické problémy</strong> s Platformou
                      </li>
                      <li>
                        <strong>Chyby vo fakturácii</strong> za prezentáciu
                      </li>
                      <li>
                        <strong>Problémy s registráciou</strong> alebo účtom
                      </li>
                      <li>
                        <strong>Nefunkčnosť funkcií</strong> Platformy
                      </li>
                    </ul>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="text-lg font-semibold text-red-800 mb-3">2.2 Nereklamovateľné záležitosti</h4>
                    <p className="mb-2">
                      <strong>Nemôžete</strong> reklamovať:
                    </p>
                    <ul className="space-y-1 ml-4">
                      <li>Kvalitu prenajímaných priestorov</li>
                      <li>Správanie Poskytovateľov alebo Klientov</li>
                      <li>Finančné transakcie medzi užívateľmi</li>
                      <li>Spory o prenájom priestorov</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok III. - Postup reklamácie</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">3.1 Podanie reklamácie</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        <strong>Email:</strong> info@simplimator.com
                      </li>
                      <li>
                        <strong>Osobne:</strong> Suché mýto 6, 811 03 Bratislava
                      </li>
                      <li>
                        <strong>Online formulár:</strong> www.espacero.com/reklamacia
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">3.2 Obsah reklamácie</h4>
                    <p className="mb-2">Uveďte:</p>
                    <ul className="space-y-1 ml-8">
                      <li>
                        <strong>Meno a kontaktné údaje</strong>
                      </li>
                      <li>
                        <strong>Číslo užívateľského účtu</strong>
                      </li>
                      <li>
                        <strong>Podrobný popis problému</strong>
                      </li>
                      <li>
                        <strong>Dátum vzniku problému</strong>
                      </li>
                      <li>
                        <strong>Požadované riešenie</strong>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">3.3 Lehoty</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        <strong>Podanie reklamácie:</strong> do 30 dní od vzniku problému
                      </li>
                      <li>
                        <strong>Vyšetrenie reklamácie:</strong> do 30 dní od doručenia
                      </li>
                      <li>
                        <strong>Odpoveď:</strong> písomne alebo elektronicky
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok IV. - Riešenie reklamácií</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">4.1 Oprávnené reklamácie</h4>
                    <p className="mb-2">Pri oprávnenej reklamácii:</p>
                    <ul className="space-y-1 ml-8">
                      <li>
                        <strong>Bezplatné odstránenie</strong> technického problému
                      </li>
                      <li>
                        <strong>Prepočet platieb</strong> pri chybách vo fakturácii
                      </li>
                      <li>
                        <strong>Predĺženie služby</strong> pri výpadkoch Platformy
                      </li>
                      <li>
                        <strong>Prípadne finančné odškodnenie</strong>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">4.2 Neoprávnené reklamácie</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        Reklamácia bude <strong>zamietnutá s odôvodnením</strong>
                      </li>
                      <li>
                        Užívateľ bude <strong>informovaný</strong> o dôvodoch zamietnutia
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-300" />

          {/* Moderovanie obsahu */}
          <section>
            <h2 className="text-3xl font-bold text-amber-600 mb-8">6️⃣ ZÁSADY MODEROVANIA OBSAHU</h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok I. - Základné princípy</h3>
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-3">1.1 Cieľ moderovania</h4>
                  <p className="mb-2">Moderovanie zabezpečuje, aby obsah na Platforme bol:</p>
                  <ul className="space-y-1 ml-8">
                    <li>
                      <strong>Pravdivý a aktuálny</strong>
                    </li>
                    <li>
                      <strong>V súlade s právnymi predpismi</strong>
                    </li>
                    <li>
                      <strong>Vhodný pre všetkých užívateľov</strong>
                    </li>
                    <li>
                      <strong>Profesionálnej kvality</strong>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok II. - Moderované obsahy</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">2.1 Profily priestorov</h4>
                    <p className="mb-2">Kontrolujeme:</p>
                    <ul className="space-y-1 ml-8">
                      <li>
                        <strong>Pravdivosť informácií</strong> o priestore
                      </li>
                      <li>
                        <strong>Kvalitu fotografií</strong> (rozlíšenie, relevantnosť)
                      </li>
                      <li>
                        <strong>Vhodnosť opisov</strong> (jazyk, obsah)
                      </li>
                      <li>
                        <strong>Platnosť kontaktných údajov</strong>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">2.2 Komunikácia užívateľov</h4>
                    <p className="mb-2">Sledujeme:</p>
                    <ul className="space-y-1 ml-8">
                      <li>
                        <strong>Správy medzi užívateľmi</strong> (automatické filtrovanie)
                      </li>
                      <li>
                        <strong>Hodnotenia a recenzie</strong>
                      </li>
                      <li>
                        <strong>Komentáre a spätnú väzbu</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Článok III. - Sankcie</h3>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">3.1 Porušenia a sankcie</h4>
                    <ul className="space-y-1 ml-4">
                      <li>
                        <strong>1. upozornenie:</strong> varovný email
                      </li>
                      <li>
                        <strong>2. porušenie:</strong> dočasné obmedzenie účtu (7 dní)
                      </li>
                      <li>
                        <strong>3. porušenie:</strong> trvalé zablokovanie účtu
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-700 mb-3">3.2 Závažné porušenia</h4>
                    <p className="mb-2">Okamžité zablokovanie pri:</p>
                    <ul className="space-y-1 ml-8">
                      <li>
                        <strong>Podvodnom správaní</strong>
                      </li>
                      <li>
                        <strong>Urážlivom alebo agresívnom</strong> správaní
                      </li>
                      <li>
                        <strong>Pokuse o obídenie platobného systému</strong>
                      </li>
                      <li>
                        <strong>Porušení právnych predpisov</strong>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-300" />

          {/* Kontaktné údaje */}
          <section>
            <h2 className="text-3xl font-bold text-amber-600 mb-8">📞 KONTAKTNÉ ÚDAJE</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Zákaznícka podpora</h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Email:</strong> info@simplimator.com
                  </li>
                  <li>
                    <strong>Pracovné hodiny:</strong> Po-Pia 9:00-17:00
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Všetky záležitosti</h3>
                <ul className="space-y-2">
                  <li>
                    <strong>Email:</strong> info@simplimator.com
                  </li>
                  <li>
                    <strong>Adresa:</strong> Suché mýto 6, 811 03 Bratislava
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-gray-300" />

          {/* Záverečné ustanovenia */}
          <section>
            <h2 className="text-3xl font-bold text-amber-600 mb-8">📝 ZÁVEREČNÉ USTANOVENIA</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Platnosť dokumentov:</h3>
                <ul className="space-y-1">
                  <li>Tieto podmienky sú platné od 1. júna 2025</li>
                  <li>
                    Zmeny budú oznámené <strong>30 dní vopred</strong>
                  </li>
                  <li>
                    Pokračovaním v používaní služby vyjadrujete <strong>súhlas so zmenami</strong>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Rozhodné právo:</h3>
                <ul className="space-y-1">
                  <li>
                    Tieto podmienky sa riadia <strong>právnym poriadkom Slovenskej republiky</strong>
                  </li>
                  <li>
                    Spory budú riešené <strong>súdmi Slovenskej republiky</strong>
                  </li>
                  <li>
                    Prioritne sa snažíme o <strong>mimosúdne riešenie</strong> sporov
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 p-4 bg-gray-100 rounded-lg">
              <p className="text-gray-700 mb-2">
                <strong>Severability clause:</strong> Ak by sa ktorékoľvek ustanovenie týchto podmienok stalo neplatným,
                ostatné ustanovenia zostávajú v plnej platnosti.
              </p>
            </div>

            <div className="mt-8 text-center text-gray-500 italic">
              <p>Posledná aktualizácia: 1. júna 2025</p>
              <p>Verzia: 1.0</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
