import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

import localFont from "next/font/local"
import ClientLayout from "./client-layout"

const archivoBlack = localFont({
  src: [
    {
      path: "../public/fonts/ArchivoBlack-Regular.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-archivo",
})

const cairo = localFont({
  src: [
    {
      path: "../public/fonts/Cairo-Regular.ttf",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-cairo",
})

export const metadata: Metadata = {
  title: "MARCKETA - ماركيتا | وكالة تسويق رقمي وتصميم احترافية | Digital Marketing Agency Saudi Arabia",
  description:
    "ماركيتا MARCKETA وكالة إبداعية سعودية متخصصة في التسويق الرقمي، تصميم الهوية البصرية، إدارة السوشيال ميديا، إنتاج الفيديو والموشن جرافيك، تصميم وتطوير المواقع الإلكترونية. نقدم باقات احترافية تبدأ من 250 ريال.",
  keywords:
    "ماركيتا، MARCKETA، وكالة تسويق سعودية، تسويق رقمي السعودية، تصميم هوية بصرية، إدارة سوشيال ميديا، تصميم انستقرام، إنتاج فيديو، موشن جرافيك، تطوير مواقع، تصميم مواقع، باقات تسويق، وكالة إعلانية جدة، التسويق الإلكتروني، digital marketing Saudi Arabia, social media management, brand identity design, video production",
  authors: [{ name: "MARCKETA" }],
  creator: "MARCKETA",
  publisher: "MARCKETA",
  metadataBase: new URL("https://www.marcketa.com"),
  alternates: {
    canonical: "https://www.marcketa.com",
    languages: {
      "ar-SA": "https://www.marcketa.com/ar",
      "en-US": "https://www.marcketa.com/en",
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    alternateLocale: ["en_US"],
    url: "https://www.marcketa.com",
    siteName: "MARCKETA - ماركيتا",
    title: "MARCKETA - ماركيتا | وكالة تسويق رقمي احترافية في السعودية",
    description:
      "وكالة إبداعية سعودية متخصصة في التسويق الرقمي، تصميم الهوية البصرية، إدارة السوشيال ميديا، إنتاج الفيديو. باقات احترافية تبدأ من 250 ريال",
    images: [
      {
        url: "https://www.marcketa.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MARCKETA - ماركيتا | Digital Marketing Agency",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MARCKETA - ماركيتا | وكالة تسويق رقمي",
    description: "وكالة إبداعية سعودية متخصصة في التسويق الرقمي والتصميم",
    images: ["https://www.marcketa.com/og-image.jpg"],
    creator: "@marcketa",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  category: "Marketing & Advertising",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MARCKETA - ماركيتا",
              alternateName: ["MARCKETA", "ماركيتا"],
              url: "https://www.marcketa.com",
              logo: "https://www.marcketa.com/logo.png",
              image: "https://www.marcketa.com/og-image.jpg",
              description: "وكالة إبداعية سعودية متخصصة في التسويق الرقمي والتصميم",
              address: {
                "@type": "PostalAddress",
                addressCountry: "SA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+966535291659",
                email: "marcketa.team@gmail.com",
                availableLanguage: ["Arabic", "English"],
              },
              sameAs: [
                "https://www.facebook.com/marcketa",
                "https://www.instagram.com/marcketa",
                "https://www.linkedin.com/company/marcketa",
              ],
              areaServed: {
                "@type": "Country",
                name: "Saudi Arabia",
              },
              priceRange: "250 SAR - 5000 SAR",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              name: "MARCKETA - ماركيتا",
              description: "وكالة تسويق رقمي وتصميم احترافية",
              url: "https://www.marcketa.com",
              telephone: "+966535291659",
              email: "marcketa.team@gmail.com",
              priceRange: "250 SAR - 5000 SAR",
              areaServed: "Saudi Arabia",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "خدمات التسويق الرقمي",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "التسويق الرقمي وإدارة السوشيال ميديا",
                      description: "إدارة حسابات التواصل الاجتماعي والحملات الإعلانية",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "تصميم الهوية البصرية",
                      description: "تصميم شعارات وهويات بصرية احترافية",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "إنتاج الفيديو والموشن جرافيك",
                      description: "إنتاج محتوى فيديو احترافي",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.marcketa.com",
              name: "MARCKETA - ماركيتا",
              inLanguage: ["ar-SA", "en-US"],
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://www.marcketa.com/search?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="MARCKETA" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${archivoBlack.variable} ${cairo.variable} font-cairo antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
