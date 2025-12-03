import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchSection from "@/components/SearchSection";
import BuildSection from "@/components/BuildSection";
import ConfianzaSection from "@/components/ConfianzaSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <Hero />
        <SearchSection />
        <BuildSection />
        <ConfianzaSection />
      </main>
      <Footer />
    </div>
  );
}
