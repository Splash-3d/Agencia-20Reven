import { useEffect, useRef, useState } from "react";

interface Feature {
  icon: string;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: "🎨",
    title: "Diseño Moderno",
    description:
      "Interfaces limpias y atractivas que reflejan la identidad de tu marca",
  },
  {
    icon: "⚡",
    title: "Rendimiento Rápido",
    description:
      "Sitios optimizados que cargan al instante en cualquier dispositivo",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    description: "Experiencia perfecta en móvil, tablet y desktop",
  },
  {
    icon: "🔒",
    title: "Seguridad",
    description: "Protección avanzada de datos y cumplimiento normativo",
  },
  {
    icon: "📊",
    title: "Analítica",
    description: "Dashboard completo para monitorear el rendimiento",
  },
  {
    icon: "🌍",
    title: "SEO Optimizado",
    description: "Posicionamiento en buscadores desde el primer día",
  },
];

export default function FeaturesSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    new Array(features.length).fill(false),
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisibleCards((prev) => {
              const newVisible = [...prev];
              newVisible[cardIndex] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    const cards = containerRef.current?.querySelectorAll("[data-index]");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 sm:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-blue mb-4">
            Nuestras Características
          </h2>
          <p className="text-lg text-dark-blue/70 max-w-2xl mx-auto">
            Tecnología y diseño unidos para crear experiencias web excepcionales
          </p>
        </div>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              data-index={index}
              className={`p-8 rounded-lg border border-light-gray-dark bg-white transition-all duration-700 hover:shadow-xl hover:-translate-y-2 cursor-pointer group ${
                visibleCards[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="text-5xl mb-4 transition-transform duration-300 group-hover:scale-110">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-dark-blue mb-3">
                {feature.title}
              </h3>
              <p className="text-dark-blue/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
