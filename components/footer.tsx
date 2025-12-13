"use client"

import Link from "next/link"
import { Mail, Phone } from "lucide-react"
import { useContext } from "react"
import { LanguageContext } from "@/app/language-context"

export default function Footer() {
  const { language } = useContext(LanguageContext)

  const t = {
    ar: {
      brand: "شركة إبداعية متخصصة في التسويق الرقمي والتصميم",
      links: "الروابط",
      home: "الرئيسية",
      services: "الخدمات",
      portfolio: "أعمالنا",
      clients: "عملاؤنا",
      ourServices: "خدماتنا",
      digital: "التسويق الرقمي",
      design: "التصميم والهوية",
      video: "إنتاج الفيديو",
      web: "تطوير الويب",
      contact: "تواصل معنا",
      email: "البريد الإلكتروني",
      phone: "الهاتف",
      rights: "جميع الحقوق محفوظة",
      privacy: "سياسة الخصوصية",
      terms: "شروط الاستخدام",
    },
    en: {
      brand: "Creative agency specializing in digital marketing and design",
      links: "Links",
      home: "Home",
      services: "Services",
      portfolio: "Portfolio",
      clients: "Clients",
      ourServices: "Our Services",
      digital: "Digital Marketing",
      design: "Design & Branding",
      video: "Video Production",
      web: "Web Development",
      contact: "Contact Us",
      email: "Email",
      phone: "Phone",
      rights: "All rights reserved",
      privacy: "Privacy Policy",
      terms: "Terms of Use",
    },
  }

  const current = language === "ar" ? t.ar : t.en

  return (
    <footer className="bg-[#000000] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 mb-12">
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-[#dd2c00] mb-4" style={{ fontFamily: "var(--font-archivo)" }}>
            MARCKETA
          </h3>
          <p className="text-gray-400">{current.brand}</p>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-bold mb-4">{current.links}</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="/" className="hover:text-[#dd2c00] transition">
                {current.home}
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-[#dd2c00] transition">
                {current.services}
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-[#dd2c00] transition">
                {current.portfolio}
              </Link>
            </li>
            <li>
              <Link href="#clients" className="hover:text-[#dd2c00] transition">
                {current.clients}
              </Link>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-bold mb-4">{current.ourServices}</h4>
          <ul className="space-y-2 text-gray-400">
            <li>
              <Link href="#services" className="hover:text-[#dd2c00] transition">
                {current.digital}
              </Link>
            </li>
            <li>
              <Link href="#services" className="hover:text-[#dd2c00] transition">
                {current.design}
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-[#dd2c00] transition">
                {current.video}
              </Link>
            </li>
            <li>
              <Link href="#portfolio" className="hover:text-[#dd2c00] transition">
                {current.web}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-bold mb-4">{current.contact}</h4>
          <ul className="space-y-3 text-gray-400">
            <li className="flex items-center gap-2">
              <Mail className="w-5 h-5" />
              <span>marcketa.team@gmail.com</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-5 h-5" />
              <a
                href="https://wa.me/966535291659"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#dd2c00] transition"
                dir="ltr"
              >
                966535291659
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>&copy; 2025 MARCKETA. {current.rights}.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-[#dd2c00] transition">
              {current.privacy}
            </Link>
            <Link href="#" className="hover:text-[#dd2c00] transition">
              {current.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
