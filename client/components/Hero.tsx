import { useState, useEffect } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://agenciareven.neocities.org/static/base_images/1.jpg')",
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 text-white">
        <h1 className="fade-in text-5xl sm:text-6xl lg:text-7xl font-bold mb-4">
          Agencia Reven
        </h1>
        <p className="fade-in-delay-1 text-2xl sm:text-3xl font-semibold mb-6">
          Páginas Web Personalizadas
        </p>
        <p className="fade-in-delay-2 text-lg sm:text-xl font-medium">
          Disponibles de Lunes a Domingo
        </p>
      </div>
    </div>
  );
}
