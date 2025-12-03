import Header from "./Header";
import Footer from "./Footer";

interface PlaceholderPageProps {
  title: string;
}

export default function PlaceholderPage({ title }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <main className="flex-1 pt-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-dark-blue mb-4">{title}</h1>
          <p className="text-xl text-dark-blue/70 mb-8">
            Esta página está en construcción.
          </p>
          <p className="text-lg text-dark-blue/60">
            Continúa explorando nuestro contenido principal o vuelve a la{" "}
            <a href="/" className="text-primary hover:underline font-semibold">
              página principal
            </a>
            .
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
