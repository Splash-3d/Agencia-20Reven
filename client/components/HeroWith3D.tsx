import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, Lights } from "@react-three/drei";
import AnimatedCube from "./AnimatedCube";

export default function HeroWith3D() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0">
        <Canvas>
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <Lights />
          <AnimatedCube />
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
        </Canvas>
      </div>

      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://agenciareven.neocities.org/static/base_images/1.jpg')",
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: 0.6,
        }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />

      {/* Interactive mouse-follow effect */}
      <div
        className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"
        style={{
          left: `${mousePos.x * 50 + 50}%`,
          top: `${mousePos.y * 50 + 50}%`,
          transform: "translate(-50%, -50%)",
          transition: "all 0.3s ease-out",
        }}
      />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 text-white">
        <h1 className="fade-in text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 text-shadow-lg">
          Agencia Reven
        </h1>
        <p className="fade-in-delay-1 text-2xl sm:text-3xl font-semibold mb-6 glow-effect">
          Páginas Web Personalizadas
        </p>
        <p className="fade-in-delay-2 text-lg sm:text-xl font-medium mb-8">
          Disponibles de Lunes a Domingo
        </p>

        <div className="fade-in-delay-2 mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="#crear-web"
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl inline-block"
          >
            Comenzar Ahora
          </a>
          <a
            href="#contacto"
            className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block"
          >
            Más Información
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  );
}
