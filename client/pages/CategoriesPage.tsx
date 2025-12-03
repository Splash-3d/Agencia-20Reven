import Header from "@/components/Header";
import BuildSection from "@/components/BuildSection";
import ConfianzaSection from "@/components/ConfianzaSection";
import Footer from "@/components/Footer";

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <BuildSection />
        <ConfianzaSection />
      </main>
      <Footer />
    </div>
  );
}
