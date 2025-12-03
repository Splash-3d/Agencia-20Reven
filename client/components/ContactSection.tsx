import { useState, useEffect, useRef } from "react";

export default function ContactSection() {
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

  return (
    <section
      ref={sectionRef}
      className={`py-20 sm:py-32 px-4 bg-white transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl sm:text-5xl font-bold text-dark-blue mb-6 transition-all duration-1000 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          ¿Listo para Comenzar?
        </h2>

        <p
          className={`text-xl text-dark-blue/70 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Contáctanos hoy y obtén una consulta gratuita sobre tu proyecto. Nos
          encantaría trabajar contigo.
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-300 transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="mailto:agenciarevenweb@gmail.com"
            className="inline-block px-8 py-4 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
          >
            Enviar Email
          </a>
          <a
            href="#crear-web"
            className="inline-block px-8 py-4 border-2 border-primary text-primary hover:bg-primary/10 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Crear Mi Web
          </a>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div
            className={`p-6 transition-all duration-1000 delay-400 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-semibold text-dark-blue mb-2">Email</h3>
            <a
              href="mailto:agenciarevenweb@gmail.com"
              className="text-primary hover:underline"
            >
              agenciarevenweb@gmail.com
            </a>
          </div>

          <div
            className={`p-6 transition-all duration-1000 delay-500 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-4xl mb-3">📱</div>
            <h3 className="font-semibold text-dark-blue mb-2">WhatsApp</h3>
            <a
              href="https://wa.me/your-number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Contacta por WhatsApp
            </a>
          </div>

          <div
            className={`p-6 transition-all duration-1000 delay-600 transform ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <div className="text-4xl mb-3">⏰</div>
            <h3 className="font-semibold text-dark-blue mb-2">Horario</h3>
            <p className="text-dark-blue/70">Lunes a Domingo</p>
          </div>
        </div>
      </div>
    </section>
  );
}
