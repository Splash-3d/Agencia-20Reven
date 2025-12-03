import { useState, useEffect, useRef } from "react";

export default function HeroWith3D() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const rafRef = useRef<number>();
  const mousePosRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };

    const animateMousePos = () => {
      setMousePos(mousePosRef.current);
      rafRef.current = requestAnimationFrame(animateMousePos);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    rafRef.current = requestAnimationFrame(animateMousePos);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-dark-blue">
      {/* Animated SVG Cube */}
      <div className="absolute top-20 right-10 lg:top-32 lg:right-20 opacity-20">
        <svg
          width="300"
          height="300"
          viewBox="0 0 300 300"
          className="animate-spin"
          style={{ animationDuration: "20s" }}
        >
          <defs>
            <linearGradient
              id="cubeGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#4BA3FF" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>

          {/* Cube faces */}
          <g transform="translate(150, 150)">
            {/* Front face */}
            <polygon
              points="-50,-50 50,-50 50,50 -50,50"
              fill="url(#cubeGradient)"
              opacity="0.9"
            />
            {/* Top face */}
            <polygon
              points="-50,-50 0,-100 50,-50 0,0"
              fill="url(#cubeGradient)"
              opacity="0.7"
            />
            {/* Right face */}
            <polygon
              points="50,-50 100,0 100,100 50,50"
              fill="url(#cubeGradient)"
              opacity="0.8"
            />
          </g>
        </svg>
      </div>

      {/* Parallax background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://agenciareven.neocities.org/static/base_images/1.jpg')",
          transform: `translateY(${scrollY * 0.5}px)`,
          opacity: 0.5,
          willChange: "transform",
        }}
      />

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-dark-blue" />

      {/* Interactive mouse-follow effect - optimized */}
      <div
        className="absolute w-96 h-96 rounded-full bg-primary/10 blur-3xl pointer-events-none"
        style={{
          left: `${mousePos.x * 100}%`,
          top: `${mousePos.y * 100}%`,
          transform: "translate(-50%, -50%)",
          willChange: "left, top",
        }}
      />

      {/* Animated orbs for visual interest */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-accent/5 blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4 text-white z-10">
        <h1 className="fade-in text-5xl sm:text-6xl lg:text-7xl font-bold mb-4 drop-shadow-lg">
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
            href="#features"
            className="px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Comenzar Ahora
          </a>
          <a
            href="/explore"
            className="px-8 py-4 border-2 border-white text-white hover:bg-white/10 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Más Información
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
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
