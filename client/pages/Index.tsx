import Header from "@/components/Header";
import HeroWith3D from "@/components/HeroWith3D";
import SearchSection from "@/components/SearchSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <HeroWith3D />
        <section id="features">
          <SearchSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
