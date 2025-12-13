"use client"

import { useContext } from "react"
import { Briefcase, Palette, Video, Globe, Megaphone, Camera } from "lucide-react"
import { LanguageContext } from "@/app/language-context"

const services = [
  {
    id: 1,
    icon: Megaphone,
    titleAr: "التسويق والإعلان",
    titleEn: "Marketing & Advertising",
    descriptionAr: "استراتيجيات تسويقية مبتكرة لزيادة وعيك العلامة التجارية",
    descriptionEn: "Innovative marketing strategies to increase brand awareness",
  },
  {
    id: 2,
    icon: Palette,
    titleAr: "التصميم والهوية",
    titleEn: "Design & Branding",
    descriptionAr: "تصميم عصري وجذاب يعكس شخصية علامتك التجارية",
    descriptionEn: "Modern design reflecting your brand identity",
  },
  {
    id: 3,
    icon: Video,
    titleAr: "الإنتاج والفيديو",
    titleEn: "Video Production",
    descriptionAr: "محتوى فيديو احترافي يروي قصة علامتك بفعالية",
    descriptionEn: "Professional video content for your brand",
  },
  {
    id: 4,
    icon: Globe,
    titleAr: "الويب والرقمي",
    titleEn: "Web & Digital",
    descriptionAr: "مواقع ويب وتطبيقات رقمية تجمع بين الجمال والأداء",
    descriptionEn: "Beautiful and functional web solutions",
  },
  {
    id: 5,
    icon: Camera,
    titleAr: "التصوير الفوتوغرافي",
    titleEn: "Photography",
    descriptionAr: "صور احترافية تعكس جودة منتجاتك وخدماتك",
    descriptionEn: "Professional photography for your products",
  },
  {
    id: 6,
    icon: Briefcase,
    titleAr: "الفعاليات والتنظيم",
    titleEn: "Events Management",
    descriptionAr: "تنظيم فعاليات لا تُنسى تترك انطباعاً قوياً",
    descriptionEn: "Memorable events that make an impact",
  },
]

export default function Services() {
  const { language } = useContext(LanguageContext)

  const t = {
    ar: {
      title: "خدماتنا",
      subtitle: "نقدم مجموعة شاملة من الخدمات الإبداعية",
    },
    en: {
      title: "Our Services",
      subtitle: "We offer a comprehensive range of creative services",
    },
  }

  const current = language === "ar" ? t.ar : t.en

  return (
    <section id="services" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "ARCHIVO BLACK" }}>
            {current.title}
          </h2>
          <p className="text-xl text-gray-600">{current.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className="p-8 border border-gray-200 rounded-lg hover:border-[#dd2c00] hover:shadow-lg transition-all group"
              >
                <div className="mb-4 inline-block p-4 bg-[#dd2c00]/10 rounded-lg group-hover:bg-[#dd2c00] transition">
                  <Icon className="w-6 h-6 text-[#dd2c00] group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-bold mb-3" style={{ fontFamily: "ARCHIVO BLACK" }}>
                  {language === "ar" ? service.titleAr : service.titleEn}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {language === "ar" ? service.descriptionAr : service.descriptionEn}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
