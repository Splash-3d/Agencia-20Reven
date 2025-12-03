import { useEffect, useRef, useState } from "react";

export default function SearchSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    { icon: "🌐", name: "Websites" },
    { icon: "🛍️", name: "E-commerce" },
    { icon: "📱", name: "Apps Web" },
    { icon: "⚡", name: "Landing Pages" },
  ];

  return (
    <section ref={sectionRef} className="py-20 sm:py-32 px-4 bg-light-gray">
      <div className="max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-dark-blue mb-4 text-center">
            Search
          </h2>
          <p className="text-lg sm:text-xl text-dark-blue/70 text-center max-w-2xl mx-auto mb-12">
            Encuentra la solución para crear una página web que se adapte a tu
            negocio y necesidades específicas.
          </p>

          {/* Category Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`p-6 bg-white rounded-lg border border-light-gray-dark text-center hover:shadow-lg hover:border-primary transition-all duration-300 transform hover:scale-105 cursor-pointer group transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <div className="text-4xl mb-3 transition-transform duration-300 group-hover:scale-125">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-dark-blue group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
