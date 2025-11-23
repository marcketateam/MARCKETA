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
  title: "MARCKETA - وكالة تسويق رقمي وتصميم احترافية | Digital Marketing Agency",
  description:
    "MARCKETA وكالة إبداعية متخصصة في التسويق الرقمي والتصميم وإنتاج الفيديو وتطوير الويب. نقدم حلولاً تسويقية فعّالة تحقق أهدافك.",
  keywords: "التسويق الرقمي، تصميم، وكالة تسويق، إنتاج فيديو، تطوير ويب، digital marketing, design agency",
  metadataBase: new URL("https://www.marcketa.com"),
  canonical: "https://www.marcketa.com",
  openGraph: {
    type: "website",
    locale: "ar_EG",
    alternateLocale: ["en_US"],
    url: "https://www.marcketa.com",
    siteName: "MARCKETA",
    title: "MARCKETA - وكالة تسويق رقمي وتصميم احترافية",
    description: "وكالة إبداعية متخصصة في التسويق الرقمي والتصميم وإنتاج الفيديو وتطوير الويب",
    images: [
      {
        url: "https://www.marcketa.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MARCKETA - Digital Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MARCKETA - وكالة تسويق رقمي وتصميم",
    description: "وكالة إبداعية متخصصة في التسويق الرقمي والتصميم",
    images: ["https://www.marcketa.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://www.marcketa.com",
    languages: {
      "ar-EG": "https://www.marcketa.com/ar",
      "en-US": "https://www.marcketa.com/en",
    },
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
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
              name: "MARCKETA",
              url: "https://www.marcketa.com",
              logo: "https://www.marcketa.com/logo.png",
              description: "وكالة إبداعية متخصصة في التسويق الرقمي والتصميم",
              sameAs: [
                "https://www.facebook.com/marcketa",
                "https://www.instagram.com/marcketa",
                "https://www.linkedin.com/company/marcketa",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+20-1012673037",
                email: "marcketa.team@gmail.com",
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
              name: "MARCKETA",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://www.marcketa.com/search?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MARCKETA",
              image: "https://www.marcketa.com/logo.png",
              description: "وكالة إبداعية متخصصة في التسويق الرقمي والتصميم",
              address: {
                "@type": "PostalAddress",
                addressCountry: "EG",
              },
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                telephone: "+20-1012673037",
                email: "marcketa.team@gmail.com",
              },
            }),
          }}
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${archivoBlack.variable} ${cairo.variable} font-cairo antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
