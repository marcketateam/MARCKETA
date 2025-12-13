import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Packages from "@/components/packages"
import Portfolio from "@/components/portfolio"
import Clients from "@/components/clients"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Packages />
      <Clients />
      <CTA />
      <Footer />
    </main>
  )
}
