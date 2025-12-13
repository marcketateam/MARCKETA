"use client"

import { useContext } from "react"
import { LanguageContext } from "@/app/language-context"

export default function CTA() {
  const { language } = useContext(LanguageContext)

  const t = {
    ar: {
      title: "هل أنت مستعد للنمو؟",
      description: "دعنا نساعدك في بناء استراتيجية تسويقية فعّالة تحقق أهدافك",
      button: "احجز استشارة مجانية",
    },
    en: {
      title: "Ready to Grow?",
      description: "Let us help you build an effective marketing strategy that achieves your goals",
      button: "Book a Free Consultation",
    },
  }

  const current = language === "ar" ? t.ar : t.en

  return (
    <section className="py-20 px-6 bg-[#202a45]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" style={{ fontFamily: "ARCHIVO BLACK" }}>
          {current.title}
        </h2>
        <p className="text-xl text-gray-300 mb-8">{current.description}</p>
        <button
          onClick={() => {
            window.open("https://wa.me/966535291659", "_blank", "noopener,noreferrer")
          }}
          className="px-10 py-4 bg-[#dd2c00] text-white text-lg font-semibold hover:bg-[#c41f00] transition"
        >
          {current.button}
        </button>
      </div>
    </section>
  )
}
