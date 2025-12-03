import { useEffect, useRef, useState } from "react";

export default function ConfianzaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 sm:py-32 px-4 bg-white overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`group order-2 lg:order-1 overflow-hidden rounded-lg shadow-lg h-80 sm:h-96 transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <img
              src="https://agenciareven.neocities.org/static/base_images/2.jpg"
              alt="Confianza en Agencia Reven"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div
            className={`order-1 lg:order-2 transition-all duration-1000 transform ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-dark-blue mb-6">
              Confía en{" "}
              <span className="text-gradient">Agencia Reven</span>
            </h2>
            <p className="text-lg sm:text-xl text-dark-blue/70 leading-relaxed mb-8">
              Diseñamos páginas web únicas y de calidad que reflejan la
              identidad de tu negocio. Con años de experiencia en el desarrollo
              web, nos compromete a entregar soluciones efectivas que impulsen
              tu presencia digital y el crecimiento de tu empresa.
            </p>

            {/* Features list */}
            <div className="space-y-4">
              {[
                "Diseño personalizado y moderno",
                "Optimización SEO garantizada",
                "Soporte técnico 24/7",
                "Escalabilidad y crecimiento",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="text-dark-blue font-medium">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
