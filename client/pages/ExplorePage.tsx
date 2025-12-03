import Header from "@/components/Header";
import FeaturesSection from "@/components/FeaturesSection";
import BuildSection from "@/components/BuildSection";
import Footer from "@/components/Footer";

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-16">
        <FeaturesSection />
        <BuildSection />
      </main>
      <Footer />
    </div>
  );
}
