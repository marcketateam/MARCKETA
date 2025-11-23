"use client"

import { useContext } from "react"
import { LanguageContext } from "@/app/language-context"

const clients = [
  { id: 1, name: "Sante", logo: "/images/59491221-350612608923633-4898747102617665536-n.jpg" },
  { id: 2, name: "Ridia", logo: "/images/logo1.png" },
  { id: 3, name: "InShape", logo: "/images/449259521-1034261178348175-9196448832805121499-n.jpg" },
  { id: 4, name: "K.TAG AUTO", logo: "/images/473633419-948624477227463-2168328276245604422-n.jpg" },
  { id: 5, name: "Seara", logo: "/images/491547054-689760773448509-6813088221494038549-n.jpg" },
  { id: 6, name: "HEXA", logo: "/images/350591006-780436047004284-2198179333630352442-n.jpg" },
]

export default function Clients() {
  const { language } = useContext(LanguageContext)

  const t = {
    ar: {
      title: "عملاؤنا",
      subtitle: "علامات تجارية رائدة تثق بنا",
    },
    en: {
      title: "Our Clients",
      subtitle: "Leading brands trust us",
    },
  }

  const current = language === "ar" ? t.ar : t.en

  return (
    <section id="clients" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "ARCHIVO BLACK" }}>
            {current.title}
          </h2>
          <p className="text-xl text-gray-600">{current.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center justify-center">
          {clients.map((client) => (
            <div
              key={client.id}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow"
            >
              <img
                src={client.logo || "/placeholder.svg"}
                alt={client.name}
                className="max-h-20 max-w-full object-contain hover:scale-105 transition-transform"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
