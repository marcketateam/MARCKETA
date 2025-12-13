"use client"

import { useContext } from "react"
import { LanguageContext } from "@/app/language-context"
import { Check } from "lucide-react"

export default function Packages() {
  const { language } = useContext(LanguageContext)

  const t = {
    ar: {
      title: "باقاتنا",
      subtitle: "اختر الباقة المناسبة لاحتياجات مشروعك",
      miniServicesNote: "تبدأ أسعار الخدمات المصغرة من 250 ريال",
      includes: "تشمل:",
      package1Title: "باقة الانطلاق",
      package1Subtitle: "مناسبة للصفحات التي تحتاج إلى بداية احترافية ومظهر قوي وثابت",
      package1Features: [
        "تأسيس صفحات السوشيال ميديا فيسبوك وانستاجرام",
        "خطة شهرية + تحليل أداء",
        "8 بوستات احترافية (تصميم + سكريبت)",
        "6 ستوري ضمن خطة المحتوى",
        "2 فيديو أو موشن جرافيك حسب طبيعة النشاط",
      ],
      package1Goal: "تأسيس شكل احترافي للصفحة، تحسين المظهر العام، وتجهيز البراند للنمو.",
      package1Price: "950 ر.س شهريًا",
      package2Title: "الباقة الاحترافية",
      package2Subtitle: "مناسبة للأنشطة التي هدفها مبيعات، نمو فعلي، وبناء حضور قوي",
      package2Features: [
        "تأسيس صفحات السوشيال ميديا فيسبوك وانستاجرام",
        "تقرير شهري شامل + خطة أهداف واضحة",
        "إدارة شاملة لفيسبوك وإنستجرام",
        "15 بوست احترافي",
        "12 ستوري",
        "4 فيديوهات",
        "إدارة الرد على الرسائل والاستفسارات",
        "تطوير وتحسين الهوية البصرية للصفحة",
      ],
      package2Goal: "رفع التفاعل، تعزيز الثقة، زيادة المبيعات، وإدارة الصفحات بشكل كامل بدون أي مجهود من جانبكم.",
      package2Price: "1,600 ر.س شهريًا",
      specialOfferTitle: "عرض خاص عند الحجز لمدة 3 شهور مقدمًا",
      specialOfferSubtitle: "توفير ممتاز + مزايا إضافية",
      package1Label: "الباقة الأولى:",
      package2Label: "الباقة الثانية:",
      offer1: "2,400 ر.س بدل 2,850 ر.س",
      offer2: "4,200 ر.س بدل 4,800 ر.س",
      bonusTitle: "وتحصل مجانًا على:",
      bonusFeatures: [
        "2 فيديو إضافي",
        "4 بوستات إضافية",
        "جلسة استراتيجية لتحليل البيزنس ووضع خطة محتوى مبنية على أهداف النشاط",
      ],
      goalLabel: "هدف الباقة:",
      contactUs: "تواصل معنا",
    },
    en: {
      title: "Our Packages",
      subtitle: "Choose the right package for your project needs",
      miniServicesNote: "Mini services start from 250 SAR",
      includes: "Includes:",
      package1Title: "Startup Package",
      package1Subtitle: "Suitable for pages that need a professional start and strong, stable appearance",
      package1Features: [
        "Setup Facebook and Instagram social media pages",
        "Monthly plan + performance analysis",
        "8 professional posts (design + script)",
        "6 stories within content plan",
        "2 videos or motion graphics according to business nature",
      ],
      package1Goal: "Establish a professional page appearance, improve overall look, and prepare the brand for growth.",
      package1Price: "950 SAR monthly",
      package2Title: "Professional Package",
      package2Subtitle: "Suitable for businesses aiming for sales, real growth, and building a strong presence",
      package2Features: [
        "Setup Facebook and Instagram social media pages",
        "Comprehensive monthly report + clear goals plan",
        "Complete Facebook and Instagram management",
        "15 professional posts",
        "12 stories",
        "4 videos",
        "Managing replies to messages and inquiries",
        "Developing and improving page visual identity",
      ],
      package2Goal:
        "Increase engagement, build trust, boost sales, and manage pages completely without any effort from your side.",
      package2Price: "1,600 SAR monthly",
      specialOfferTitle: "Special Offer for 3 Months Prepayment",
      specialOfferSubtitle: "Great savings + additional benefits",
      package1Label: "First Package:",
      package2Label: "Second Package:",
      offer1: "2,400 SAR instead of 2,850 SAR",
      offer2: "4,200 SAR instead of 4,800 SAR",
      bonusTitle: "Get for free:",
      bonusFeatures: [
        "2 additional videos",
        "4 additional posts",
        "Strategic session for business analysis and content plan based on business goals",
      ],
      goalLabel: "Package Goal:",
      contactUs: "Contact Us",
    },
  }

  const current = language === "ar" ? t.ar : t.en

  return (
    <section id="packages" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "ARCHIVO BLACK" }}>
            {current.title}
          </h2>
          <p className="text-xl text-gray-600 mb-6">{current.subtitle}</p>
          <p className="text-lg text-[#dd2c00] font-semibold">{current.miniServicesNote}</p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Package 1 */}
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-[#dd2c00] transition-all hover:shadow-xl">
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "ARCHIVO BLACK" }}>
                {current.package1Title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{current.package1Subtitle}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">{current.includes}</h4>
              <ul className="space-y-3">
                {current.package1Features.map((feature, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-[#dd2c00] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 p-4 bg-gray-50 rounded-lg">
              <p className="font-semibold text-sm mb-2">{current.goalLabel}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{current.package1Goal}</p>
            </div>

            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-3xl font-bold text-[#dd2c00]" style={{ fontFamily: "ARCHIVO BLACK" }}>
                {current.package1Price}
              </p>
            </div>
          </div>

          {/* Package 2 */}
          <div className="bg-white p-8 rounded-2xl border-2 border-[#dd2c00] hover:shadow-2xl transition-all relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#dd2c00] text-white px-6 py-1 rounded-full text-sm font-bold">
              {language === "ar" ? "الأكثر طلبًا" : "Most Popular"}
            </div>
            <div className="mb-6">
              <h3 className="text-3xl font-bold mb-2" style={{ fontFamily: "ARCHIVO BLACK" }}>
                {current.package2Title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">{current.package2Subtitle}</p>
            </div>

            <div className="mb-6">
              <h4 className="font-bold text-lg mb-3">{current.includes}</h4>
              <ul className="space-y-3">
                {current.package2Features.map((feature, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <Check className="w-5 h-5 text-[#dd2c00] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6 p-4 bg-[#dd2c00]/5 rounded-lg border border-[#dd2c00]/20">
              <p className="font-semibold text-sm mb-2">{current.goalLabel}</p>
              <p className="text-gray-700 text-sm leading-relaxed">{current.package2Goal}</p>
            </div>

            <div className="text-center pt-6 border-t border-gray-200">
              <p className="text-3xl font-bold text-[#dd2c00]" style={{ fontFamily: "ARCHIVO BLACK" }}>
                {current.package2Price}
              </p>
            </div>
          </div>
        </div>

        {/* Special Offer */}
        <div className="bg-gradient-to-r from-[#202a45] to-[#dd2c00] p-8 md:p-12 rounded-2xl text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold mb-3" style={{ fontFamily: "ARCHIVO BLACK" }}>
              {current.specialOfferTitle}
            </h3>
            <p className="text-xl opacity-90">{current.specialOfferSubtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <p className="text-lg mb-2 opacity-90">{current.package1Label}</p>
              <p className="text-2xl font-bold" style={{ fontFamily: "ARCHIVO BLACK" }}>
                {current.offer1}
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center">
              <p className="text-lg mb-2 opacity-90">{current.package2Label}</p>
              <p className="text-2xl font-bold" style={{ fontFamily: "ARCHIVO BLACK" }}>
                {current.offer2}
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <h4 className="text-xl font-bold mb-4 text-center">{current.bonusTitle}</h4>
            <ul className="space-y-3 max-w-2xl mx-auto">
              {current.bonusFeatures.map((feature, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <Check className="w-5 h-5 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center mt-8">
            <button
              onClick={() => window.open("https://wa.me/966535291659", "_blank", "noopener,noreferrer")}
              className="px-8 py-4 bg-white text-[#dd2c00] font-bold text-lg rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105"
            >
              {current.contactUs}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
