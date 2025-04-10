"use client";

import * as React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Services() {
  return (
    <section
      id="systemy"
      className="py-16 md:py-24 bg-[#141414] relative overflow-hidden px-4 md:px-6"
    >
      {/* Background visuals */}
      <div className="absolute -top-40 right-0 w-80 h-80 bg-blue-900 rounded-full opacity-30 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-blue-900/30 rounded-full blur-2xl" />
      <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-indigo-900/30 rounded-full blur-2xl" />

      <div className="relative max-w-7xl mx-auto space-y-12">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Info Block */}
          <div className="flex flex-col items-center justify-center gap-20 h-full">
            <div className="text-center space-y-4">
              <div className="inline-flex items-center rounded-full bg-blue-900 px-4 py-1.5 text-sm font-medium text-blue-300 transition-transform hover:scale-105">
                <span>Systémy</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl bg-gradient-to-r from-blue-300 to-indigo-300 bg-clip-text text-transparent">
                Elektronické zabezpečovacie systémy
              </h2>
              <p className="max-w-3xl mx-auto text-gray-400 md:text-xl">
                Komplexné riešenia pre zabezpečenie vášho majetku
              </p>
            </div>
            <div className="rounded-xl border border-gray-700 bg-gray-800/50 p-6 shadow-sm hover:border-blue-700 hover:shadow-lg hover:shadow-blue-900/40 transition-all">
              <p className="text-gray-300 leading-relaxed">
                Elektronické zabezpečovacie systémy slúžia na ochranu objektov
                pred nevítanými návštevníkmi. V prípade narušenia spúšťajú
                zvukové a vizuálne alarmy alebo odosielajú upozornenia správcovi
                či bezpečnostnej službe. Riadiacim centrom je zabezpečovacia
                ústredňa, ktorá vyhodnocuje dáta zo senzorov a reaguje podľa
                preddefinovaných scenárov. Detektory monitorujú pohyb, otvorenie
                dverí a okien, otrasy, či rozbitie skla. Systém je zálohovaný
                batériou, má možnosti diaľkového ovládania a zaznamenáva všetky
                udalosti. Systémy sa jednoducho inštalujú a rozširujú o ďalšie
                komponenty.
              </p>
            </div>
          </div>

          {/* Accordion */}
          <Accordion.Root type="single" collapsible className="space-y-4">
            {accordionItems.map(({ value, title, description }) => (
              <Accordion.Item
                key={value}
                value={value}
                className="border border-gray-700 rounded-xl shadow-sm transition-all hover:border-blue-700 hover:shadow-blue-900/40"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="flex w-full items-center justify-between px-5 py-4 text-left text-lg font-semibold text-gray-200 transition-colors group data-[state=open]:text-blue-300 hover:text-blue-300">
                    {title}
                    <FontAwesomeIcon icon={faChevronDown} className="h-4 w-4" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="px-5 pb-5 text-gray-300 data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp">
                  <p>{description}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
    </section>
  );
}

type AccordionItem = {
  value: string;
  title: string;
  description: string;
};

const accordionItems: AccordionItem[] = [
  {
    value: "galaxy",
    title: "GALAXY",
    description:
      "Obsahuje rad ústrední EZS na vysokej technologickej úrovni. Všetky komunikujú slovne cez displej vo viacerých jazykoch. Podporujú programovanie slučiek a výstupov, vzdialené moduly, segmentáciu systému, čítacie hlavy, kalendár, letný čas a diaľkovú správu.",
  },
  {
    value: "aritech",
    title: "ARITECH",
    description:
      "Profesionálne zabezpečovacie systémy vhodné pre malé aj veľké objekty. Umožňujú integráciu s rôznymi detektormi a ponúkajú flexibilitu inštalácie.",
  },
  {
    value: "paradox-digiplex",
    title: "DIGIPLEX",
    description:
      "Systém pre vysokú úroveň zabezpečenia. Určený pre náročné aplikácie s množstvom pripojených zón, používateľov a funkcií.",
  },
  {
    value: "paradox-esprit",
    title: "ESPRIT",
    description:
      "Cenovo dostupný systém s podporou 4 až 24 slučiek. Jednoduchá konfigurácia a inštalácia.",
  },
  {
    value: "paradox-spectra",
    title: "SPECTRA",
    description:
      "Pokračovanie rady Esprit so zvýšenou kapacitou a rozšírenými funkciami. Ideálne riešenie pre domácnosti a malé firmy.",
  },
  {
    value: "paradox-magellan",
    title: "MAGELLAN",
    description:
      "Bezdrôtový systém s elegantným vzhľadom, navrhnutý pre moderné domácnosti. Spája dizajn, pohodlie a bezpečnosť.",
  },
  {
    value: "dsc",
    title: "DSC",
    description:
      "Kanadská značka známa kvalitnými, modulárnymi systémami. Podporuje rôzne jazyky, integráciu s kamerami a smart systémami.",
  },
  {
    value: "others",
    title: "Ďalšie systémy",
    description:
      "Tiež montujeme systémy značiek ROKONET, JABLOTRON, SATEL a iné podľa potreby klienta.",
  },
];
