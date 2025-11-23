"use client"

import { useContext } from "react"
import { LanguageContext } from "@/app/language-context"

const projects = [
  {
    id: 1,
    titleAr: "حملة تسويقية رقمية",
    titleEn: "Digital Marketing Campaign",
    categoryAr: "التسويق",
    categoryEn: "Marketing",
    image: "/digital-marketing-campaign.png",
  },
  {
    id: 2,
    titleAr: "تصميم هوية بصرية",
    titleEn: "Brand Identity Design",
    categoryAr: "التصميم",
    categoryEn: "Design",
    image: "/brand-identity-design.png",
  },
  {
    id: 3,
    titleAr: "فيديو تسويقي احترافي",
    titleEn: "Professional Marketing Video",
    categoryAr: "الفيديو",
    categoryEn: "Video",
    image: "/professional-video-production.jpg",
  },
  {
    id: 4,
    titleAr: "موقع ويب متطور",
    titleEn: "Modern Website Design",
    categoryAr: "الويب",
    categoryEn: "Web",
    image: "/modern-web-design.png",
  },
  {
    id: 5,
    titleAr: "جلسة تصوير فوتوغرافية",
    titleEn: "Professional Photography",
    categoryAr: "التصوير",
    categoryEn: "Photography",
    image: "/professional-photo-session.png",
  },
  {
    id: 6,
    titleAr: "حدث علامة تجارية",
    titleEn: "Brand Event",
    categoryAr: "الفعاليات",
    categoryEn: "Events",
    image: "/brand-event-management.jpg",
  },
]

export default function Portfolio() {
  const { language } = useContext(LanguageContext)

  const t = {
    ar: {
      title: "أعمالنا",
      subtitle: "مشاريع ناجحة لعملائنا الكرام",
    },
    en: {
      title: "Our Portfolio",
      subtitle: "Successful projects for our valued clients",
    },
  }

  const current = language === "ar" ? t.ar : t.en

  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "ARCHIVO BLACK" }}>
            {current.title}
          </h2>
          <p className="text-xl text-gray-600">{current.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all overflow-hidden hover:translate-y-[-4px] cursor-pointer"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={language === "ar" ? project.titleAr : project.titleEn}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#202a45] mb-2" style={{ fontFamily: "ARCHIVO BLACK" }}>
                  {language === "ar" ? project.titleAr : project.titleEn}
                </h3>
                <p className="text-sm text-[#dd2c00] font-semibold">
                  {language === "ar" ? project.categoryAr : project.categoryEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
