"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-[#141414]/90 backdrop-blur-md shadow-xs shadow-blue-950" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative h-226 w-32">
          <Image
            src="/mmkLogo.png"
            alt="M.M.K Logo"
            fill
            className="object-contain"
            priority
          
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-10">
          {[
            { label: "Systémy", href: "/#systemy" },
            { label: "Účtovníctvo", href: "/uctovnictvo" },
            { label: "Kontakt", href: "/#kontakt" },
          ].map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="relative text-md font-medium text-white uppercase transition-colors hover:text-blue-300 group"
            >
              {label}
              <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-blue-400 to-indigo-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          aria-label="Toggle mobile menu"
          className="md:hidden text-gray-300 hover:text-blue-400 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#141414]/95 backdrop-blur-md border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col space-y-4">
            {[
              { label: "Systémy", href: "/#systemy" },
              { label: "Účtovníctvo", href: "/uctovnictvo" },
              { label: "Kontakt", href: "/#kontakt" },
            ].map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-300 text-sm py-2 border-b border-gray-700 hover:text-blue-300 transition-colors"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
