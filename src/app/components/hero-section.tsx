"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#141414] py-16 md:py-24 lg:py-32 px-4 md:px-0">
      {/* Background circles */}
      <div className="absolute -top-40 -right-40 w-[30rem] h-[30rem] bg-blue-900 rounded-full opacity-20 blur-[120px]" />
      <div className="absolute -bottom-40 -left-40 w-[30rem] h-[30rem] bg-indigo-900 rounded-full opacity-20 blur-[120px]" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Text Column */}
          <div className="space-y-6 text-center lg:text-left py-16 md:py-0">
            <div className="inline-block rounded-full bg-blue-900 px-4 py-1.5 text-sm font-medium text-blue-300 transition-transform hover:scale-105">
              Bezpečnostné systémy
            </div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
              Vaša
              <span className="relative px-4 inline-block text-white">
                bezpečnosť
              </span>{" "}
              – naša priorita!
            </h1>
            <p className="text-gray-400 md:text-xl lg:text-lg xl:text-xl max-w-xl mx-auto lg:mx-0">
              Spoločnosť M.M.K IT, s.r.o Vám ponúka kompletnú bezpečnosť a ochranu
              Vášho majetku! Získajte ešte dnes profesionálne zabezpečovacie
              systémy PARADOX pre pohodlie Vášho bezpečia!
            </p>
          </div>

          {/* Image Column */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <Image
                src="/alarmhouse.png"
                alt="Dom s bezpečnostným systémom"
                width={600}
                height={400}
                className="rounded-2xl shadow-lg shadow-blue-950 object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
