'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faClock,
  faBullseye,
  faTags,
  faMobileScreen,
  faVideo,
  faCheckCircle,
} from '@fortawesome/free-solid-svg-icons'

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-[#141414] relative overflow-hidden px-4 md:px-6">
      {/* Background elements */}
      <div className="absolute -bottom-40 -right-0 w-80 h-80 bg-blue-900 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute -top-80 -left-32 w-[30rem] h-[30rem] bg-indigo-900 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 border border-indigo-800 rounded-full opacity-20"></div>
      <div className="absolute top-40 right-40 w-20 h-20 border border-blue-700 rounded-full opacity-20"></div>

      {/* Section header */}
      <div className="relative z-10 max-w-6xl mx-auto text-center space-y-4">
        <div className="inline-block rounded-full bg-blue-900 px-4 py-1.5 text-sm font-medium text-blue-300 transition-transform hover:scale-105">
          Výhody
        </div>
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
          Výhody ktoré získate u nás
        </h2>
        <p className="max-w-2xl mx-auto text-gray-400 md:text-xl">
          Profesionálne služby pre vašu bezpečnosť a pokoj mysle
        </p>
      </div>

      {/* Features grid */}
      <div className="relative z-10 mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <div
            key={i}
            className="group flex flex-col items-center space-y-4 rounded-xl border border-gray-700 bg-gray-800/50 p-6 shadow-sm transition-all duration-300 hover:border-blue-700 hover:shadow-lg hover:shadow-blue-900/40 hover:-translate-y-1"
          >
            <div className="rounded-full bg-blue-900 p-3 transition-colors duration-300 group-hover:bg-blue-800">
              <FontAwesomeIcon icon={feature.icon} className="h-6 w-6 text-blue-300" />
            </div>
            <h3 className="text-xl font-bold text-white text-center">{feature.title}</h3>
            <p className="text-center text-gray-400">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

const features = [
  {
    icon: faClock,
    title: 'Rýchla montáž',
    description: 'Profesionálna a rýchla inštalácia bezpečnostných systémov',
  },
  {
    icon: faBullseye,
    title: 'Strategické umiestnenie čidiel',
    description: 'Optimálne umiestnenie senzorov pre maximálnu účinnosť',
  },
  {
    icon: faTags,
    title: 'Bezkonkurenčné ceny',
    description: 'Kvalitné služby za prijateľné ceny',
  },
  {
    icon: faMobileScreen,
    title: 'Okamžité upozornenie na telefón',
    description: 'Rýchle notifikácie v prípade narušenia bezpečnosti',
  },
  {
    icon: faVideo,
    title: 'Videozáznam z objektu',
    description: 'Monitorovanie a záznam z vášho objektu',
  },
  {
    icon: faCheckCircle,
    title: 'Profesionálny tím',
    description: 'Skúsení odborníci s dlhoročnými skúsenosťami',
  },
]
