import { useEffect, useRef, useState } from "react";

interface BuildImage {
  url: string;
  title: string;
}

const images: BuildImage[] = [
  {
    url: "https://agenciareven.neocities.org/static/base_images/1.jpg",
    title: "Diseño Web",
  },
  {
    url: "https://agenciareven.neocities.org/static/base_images/2.jpg",
    title: "Desarrollo",
  },
  {
    url: "https://agenciareven.neocities.org/static/base_images/3.jpg",
    title: "Optimización",
  },
];

export default function BuildSection() {
  const [visibleImages, setVisibleImages] = useState<boolean[]>(
    new Array(images.length).fill(false),
  );
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const imgIndex = parseInt(
              entry.target.getAttribute("data-index") || "0",
            );
            setVisibleImages((prev) => {
              const newVisible = [...prev];
              newVisible[imgIndex] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    const images = containerRef.current?.querySelectorAll("[data-index]");
    images?.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 sm:py-32 px-4 bg-light-gray">
      <div className="max-w-6xl mx-auto">
        <div className="slide-in-up mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-blue mb-6 text-center">
            Build
          </h2>
          <p className="text-lg sm:text-xl text-dark-blue/70 text-center max-w-2xl mx-auto">
            Construimos sitios web a medida para tu marca, combinando diseño
            moderno con funcionalidad superior.
          </p>
        </div>

        {/* Image Gallery */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {images.map((image, index) => (
            <div
              key={index}
              data-index={index}
              className={`group relative overflow-hidden rounded-lg shadow-lg h-64 sm:h-80 transition-all duration-700 transform ${
                visibleImages[index]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative w-full h-full overflow-hidden bg-light-gray-dark">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-semibold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-sm text-white/80">
                      Soluciones personalizadas
                    </p>
                  </div>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
