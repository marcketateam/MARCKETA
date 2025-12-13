"use client"

import { useState, useContext, useEffect } from "react"
import Link from "next/link"
import { LanguageContext } from "@/app/language-context"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, setLanguage } = useContext(LanguageContext)

  const t = {
    ar: {
      services: "الخدمات",
      packages: "الباقات",
      portfolio: "أعمالنا",
      clients: "عملاؤنا",
      contact: "تواصل معنا",
      toggleLanguage: "EN",
    },
    en: {
      services: "Services",
      packages: "Packages",
      portfolio: "Portfolio",
      clients: "Clients",
      contact: "Contact Us",
      toggleLanguage: "AR",
    },
  }

  const current = language === "ar" ? t.ar : t.en

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleLanguage = () => {
    setLanguage(language === "ar" ? "en" : "ar")
  }

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/30 backdrop-blur-md border-b border-white/20" : "bg-white border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-[#dd2c00]"
          style={{ fontFamily: language === "ar" ? "var(--font-cairo)" : "var(--font-archivo)" }}
        >
          {language === "ar" ? "ماركيتا" : "MARCKETA"}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8 items-center">
          <Link href="#services" className="text-sm hover:text-[#dd2c00] transition">
            {current.services}
          </Link>
          <Link href="#packages" className="text-sm hover:text-[#dd2c00] transition">
            {current.packages}
          </Link>
          <Link href="#portfolio" className="text-sm hover:text-[#dd2c00] transition">
            {current.portfolio}
          </Link>
          <Link href="#clients" className="text-sm hover:text-[#dd2c00] transition">
            {current.clients}
          </Link>
          <button
            onClick={toggleLanguage}
            className="px-4 py-1 text-sm font-semibold bg-[#dd2c00] text-white hover:bg-[#c41f00] transition rounded-md ml-4"
          >
            {current.toggleLanguage}
          </button>
          <button
            onClick={() => window.open("https://wa.me/966535291659", "_blank", "noopener,noreferrer")}
            className="px-6 py-2 bg-[#dd2c00] text-white text-sm font-semibold hover:bg-[#c41f00] transition"
          >
            {current.contact}
          </button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-2xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 p-4">
          <nav className="flex flex-col gap-4">
            <Link href="#services" className="text-sm hover:text-[#dd2c00] transition">
              {current.services}
            </Link>
            <Link href="#packages" className="text-sm hover:text-[#dd2c00] transition">
              {current.packages}
            </Link>
            <Link href="#portfolio" className="text-sm hover:text-[#dd2c00] transition">
              {current.portfolio}
            </Link>
            <Link href="#clients" className="text-sm hover:text-[#dd2c00] transition">
              {current.clients}
            </Link>
            <button
              onClick={toggleLanguage}
              className="px-4 py-1 text-sm font-semibold bg-[#dd2c00] text-white hover:bg-[#c41f00] transition rounded-md"
            >
              {current.toggleLanguage}
            </button>
            <button
              onClick={() => window.open("https://wa.me/966535291659", "_blank", "noopener,noreferrer")}
              className="w-full px-6 py-2 bg-[#dd2c00] text-white text-sm font-semibold hover:bg-[#c41f00] transition"
            >
              {current.contact}
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
