import Header from "@/components/Header";
import HeroWith3D from "@/components/HeroWith3D";
import SearchSection from "@/components/SearchSection";
import FeaturesSection from "@/components/FeaturesSection";
import BuildSection from "@/components/BuildSection";
import ConfianzaSection from "@/components/ConfianzaSection";
import CrearWebSection from "@/components/CrearWebSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <HeroWith3D />
        <SearchSection />
        <FeaturesSection />
        <BuildSection />
        <ConfianzaSection />
        <section id="crear-web">
          <CrearWebSection />
        </section>
        <section id="contacto">
          <ContactSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
