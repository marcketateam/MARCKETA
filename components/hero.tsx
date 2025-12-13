"use client"

import type React from "react"
import { useState, useContext } from "react"
import { LanguageContext } from "@/app/language-context"

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const { language } = useContext(LanguageContext)

  const t = {
    ar: {
      title: "نحن نقدم",
      titleHighlight: "الحلول",
      subtitle: "تحويل أفكارك إلى واقع بصري مذهل من خلال استراتيجيات تسويقية مبتكرة وتصميم عالي الجودة",
      callExpert: "استدعِ خبير",
      learnMore: "تعرف أكثر",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      phone: "رقم هاتفك",
      send: "أرسل",
    },
    en: {
      title: "We Offer",
      titleHighlight: "Solutions",
      subtitle:
        "Transform your ideas into stunning visual reality through innovative marketing strategies and high-quality design",
      callExpert: "Call An Expert",
      learnMore: "Learn More",
      name: "Your Name",
      email: "Your Email",
      phone: "Your Phone",
      send: "Send",
    },
  }

  const current = language === "ar" ? t.ar : t.en

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hello, I'm ${formData.name}`
    window.open(`https://wa.me/966535291659?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-16 bg-gradient-to-br from-[#202a45] to-[#0f1419]">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img src="/modern-city-aerial-view.jpg" alt="Background" className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1
              className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              style={{ fontFamily: "ARCHIVO BLACK" }}
            >
              {current.title} <span className="text-[#dd2c00]">{current.titleHighlight}</span>
              {language === "ar" ? " الإبداعية" : "!"}
            </h1>
            <p className="text-xl text-gray-300 mb-8">{current.subtitle}</p>
            <div className="flex gap-4">
              <button
                onClick={() => window.open("https://wa.me/966535291659", "_blank", "noopener,noreferrer")}
                className="px-8 py-3 bg-[#dd2c00] text-white font-semibold hover:bg-[#c41f00] transition"
              >
                {current.callExpert}
              </button>
              <button className="px-8 py-3 border-2 border-[#dd2c00] text-[#dd2c00] font-semibold hover:bg-[#dd2c00] hover:text-white transition">
                {current.learnMore}
              </button>
            </div>
          </div>

          {/* Right Form */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder={current.name}
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded focus:outline-none focus:border-[#dd2c00]"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder={current.email}
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded focus:outline-none focus:border-[#dd2c00]"
                  required
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder={current.phone}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-gray-400 rounded focus:outline-none focus:border-[#dd2c00]"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-[#dd2c00] text-white font-semibold hover:bg-[#c41f00] transition rounded"
              >
                {current.send}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
