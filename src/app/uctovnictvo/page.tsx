"use client";

import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faCheckCircle,
  faShieldAlt,
  faClock,
  faChartBar,
} from "@fortawesome/free-solid-svg-icons";

export default function UctovnictvoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0c0c14] to-[#141428] text-gray-200">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[60vh] w-full overflow-hidden">
        <Image
          src="/uctovnictvo.png"
          alt="Účtovníctvo a finančné služby"
          className="object-cover brightness-50"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0c0c14] opacity-90" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 md:px-6 z-10">
          <div className="inline-block rounded-full bg-blue-600/20 border border-blue-500/30 backdrop-blur-sm mt-20 md:mt-0 px-5 py-2 text-sm font-medium text-blue-300 mb-4">
            Profesionálne účtovné služby
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-200 via-indigo-200 to-blue-300 bg-clip-text text-transparent max-w-4xl">
            Kvalitné komplexné účtovné služby
          </h1>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg mt-6">
            Pre fyzické aj právnické osoby — ušetrite čas aj náklady a nechajte
            účtovníctvo na nás.
          </p>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-0 py-16 space-y-24">
        {/* Benefits */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent inline-block">
              Prečo si vybrať naše služby?
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Profesionálne účtovné služby šité na mieru vašim potrebám
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl hover:shadow-xl hover:shadow-blue-900/5 transition-all group hover:border-blue-700/30"
              >
                <div className="w-12 h-12 rounded-lg bg-blue-900/30 flex items-center justify-center mb-4 group-hover:bg-blue-800/40 transition-all">
                  <FontAwesomeIcon
                    icon={benefit.icon}
                    className="text-blue-400 w-5 h-5"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Main Services */}
        <section className="space-y-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent inline-block">
              Naše služby
            </h2>
            <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
              Komplexné riešenia pre vaše podnikanie
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map(({ title, items }, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-8 rounded-xl border border-gray-700/50 hover:shadow-xl hover:shadow-blue-900/5 transition-all hover:border-blue-700/30"
              >
                <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-blue-900/30 flex items-center justify-center mr-3 text-blue-300 text-sm">
                    {index + 1}
                  </span>
                  {title}
                </h3>
                <ul className="space-y-3">
                  {items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <FontAwesomeIcon
                        icon={faCheckCircle}
                        className="text-blue-400 w-4 h-4 mt-1"
                      />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Final Note */}
        <section className="bg-gradient-to-br from-blue-900/20 to-indigo-900/20 p-8 rounded-2xl border border-blue-800/30 relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-600 rounded-full opacity-20 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600 rounded-full opacity-20 blur-3xl" />
          <div className="relative z-10">
            <h3 className="text-2xl font-semibold text-white mb-4">
              Naša filozofia
            </h3>
            <p className="text-gray-300 text-lg leading-relaxed">
              V rámci vedenia účtovníctva v našej firme je ekonomické a daňové
              poradenstvo bezplatné. Pre ostatné firmy je spoplatnené podľa
              druhu výkonu.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mt-4">
              Ceny prispôsobujeme osobitne každej firme. Kontaktujte nás pre
              cenovú ponuku.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/#kontakt">
                <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-900/30 flex items-center justify-center gap-2">
                  Kontaktovať nás{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

const benefits = [
  {
    title: "Úspora nákladov",
    description:
      "Znížte náklady na mzdy, softvér a školenia vlastných účtovníkov.",
    icon: faChartBar,
  },
  {
    title: "Profesionalita",
    description:
      "Tím skúsených odborníkov s dlhoročnou praxou v oblasti účtovníctva.",
    icon: faShieldAlt,
  },
  {
    title: "Spoľahlivosť",
    description: "Dodržiavanie všetkých termínov a zákonných povinností.",
    icon: faClock,
  },
  {
    title: "Diskrétnosť",
    description: "Budujeme dlhodobý vzťah založený na dôvere a diskrétnosti.",
    icon: faCheckCircle,
  },
];

const sections = [
  {
    title: "Podvojné účtovníctvo",
    items: [
      "Podľa zákona č. 431/2002 Z. z. v znení neskorších predpisov",
      "Zaúčtovanie a posúdenie dokladov z daňového hľadiska",
      "Evidencia DPH",
      "Evidencia pohľadávok a záväzkov",
      "Ročná účtovná uzávierka podľa MF SR",
      "Vypracovanie daňového priznania právnických osôb vrátane príloh",
      "Odoslanie daňových priznaní na daňový úrad",
    ],
  },
  {
    title: "Jednoduché účtovníctvo",
    items: [
      "Podľa zákona č. 431/2002 Z. z. v znení neskorších predpisov",
      "Spracovanie účtovných dokladov a ich kontrola",
      "Evidencia DPH",
      "Evidencia pohľadávok a záväzkov",
      "Ročná účtovná uzávierka podľa MF SR",
      "Vypracovanie daňového priznania fyzických osôb vrátane príloh",
      "Odoslanie daňových priznaní na daňový úrad",
    ],
  },
  {
    title: "Spracovanie miezd",
    items: [
      "Výpočet miezd",
      "Prihlásenie/odhlásenie pracovníkov do/zo poisťovní",
      "Mesačné výkazy do Sociálnej a zdravotnej poisťovne",
      "Ročné hlásenia a prehľady pre daňový úrad",
      "Ročné zúčtovanie dane a zdravotného poistenia",
      "Mzdové a zápočtové listy",
      "Evidenčné listy dôchodkového poistenia",
    ],
  },
  {
    title: "Evidencia majetku",
    items: [
      "Spracovanie pokladničných dokladov a knihy",
      "Spracovanie služobných ciest",
      "Evidencia dlhodobého majetku a odpisových plánov",
      "Porovnanie rovnomerných a zrýchlených odpisov",
      "Evidencia krátkodobého hmotného majetku",
    ],
  },
];
