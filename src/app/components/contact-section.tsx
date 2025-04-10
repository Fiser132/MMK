"use client";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

export default function ContactSection() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (mapRef.current) {
        const iframe = mapRef.current.querySelector("iframe");
        if (iframe) {
          iframe.style.height = `${mapRef.current.offsetHeight}px`;
        }
      }
    });

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) {
        observer.unobserve(mapRef.current);
      }
    };
  }, []);

  return (
    <section
      id="kontakt"
      className="py-16 md:py-24 bg-[#141414] relative overflow-hidden px-4 md:px-6"
    >
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-blue-900 rounded-full opacity-30 blur-3xl" />
      <div className="absolute -top-40 -left-0 w-80 h-80 bg-indigo-900 rounded-full opacity-30 blur-3xl" />
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-800 rounded-full opacity-20" />
      <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-indigo-800 rounded-full opacity-20" />

      <div className="flex items-center justify-center mb-10">
        <div className="inline-block rounded-full bg-blue-900 px-4 py-1.5 text-sm font-medium text-blue-300 transition-transform hover:scale-105">
          Kontakt
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Card */}
        <div className="space-y-8">
          {/* Company Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 p-8 border border-gray-700 hover:border-blue-600 transition-all duration-300 shadow-xl hover:shadow-blue-800/30">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Kontakt
                </span>
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded mt-2" />
            </div>

            <div className="space-y-4 text-[15px] text-gray-300 leading-relaxed">
              <div className="text-white font-semibold">M.M.K., s.r.o.</div>
              <div>Kriková 10, 821 07 Bratislava</div>
              <div>IČO: 44 158 785</div>
              <div>IČDPH: SK2023104600</div>

              <div className="pt-4 border-t border-gray-700">
                <div className="text-white font-semibold mb-3">
                  Kralovič Milan
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-8 w-8 flex items-center justify-center bg-blue-900 text-blue-300 rounded-md">
                    <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
                  </div>
                  <a
                    href="tel:0905437275"
                    className="hover:text-blue-300 transition-colors"
                  >
                    0905 437 275
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-8 w-8 flex items-center justify-center bg-blue-900 text-blue-300 rounded-md">
                    <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                  </div>
                  <div className="space-y-1">
                    <a
                      href="mailto:mmk@mmk.sk"
                      className="block hover:text-blue-300 transition-colors"
                    >
                      mmk@mmk.sk
                    </a>
                    <a
                      href="mailto:kralovic@mmk.sk"
                      className="block hover:text-blue-300 transition-colors"
                    >
                      kralovic@mmk.sk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accounting Card */}
          <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 p-8 border border-gray-700 hover:border-indigo-600 transition-all duration-300 shadow-xl hover:shadow-indigo-800/30">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white tracking-tight">
                <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">
                  Účtovníctvo
                </span>
              </h3>
              <div className="h-1 w-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded mt-2" />
            </div>

            <div className="space-y-4 text-[15px] text-gray-300 leading-relaxed">
              <div className="text-white font-semibold">Mošovská Miriama</div>

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex items-center justify-center bg-blue-900 text-blue-300 rounded-md">
                  <FontAwesomeIcon icon={faPhone} className="h-4 w-4" />
                </div>
                <a
                  href="tel:0905840680"
                  className="hover:text-blue-300 transition-colors"
                >
                  0905 840 680
                </a>
              </div>

              <div className="flex items-center gap-3">
                <div className="h-8 w-8 flex items-center justify-center bg-blue-900 text-blue-300 rounded-md">
                  <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <a
                    href="mailto:mmk@mmk.sk"
                    className="block hover:text-blue-300 transition-colors"
                  >
                    mmk@mmk.sk
                  </a>
                  <a
                    href="mailto:mosovska@mmk.sk"
                    className="block hover:text-blue-300 transition-colors"
                  >
                    mosovska@mmk.sk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div
          ref={mapRef}
          className="relative overflow-hidden rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-blue-600 transition-all duration-300 shadow-xl hover:shadow-blue-800/30 min-h-[400px] md:min-h-full"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.7842456953824!2d17.1726935!3d48.1525097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476c8eb1c6e93a85%3A0x9f9a2f6d1c5c5c5c!2sKrikov%C3%A1%2010%2C%20821%2007%20Bratislava!5e0!3m2!1sen!2ssk!4v1649855555555!5m2!1sen!2ssk"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "100%" }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Company Location"
            className="absolute inset-0"
          />
        </div>
      </div>
    </section>
  );
}
