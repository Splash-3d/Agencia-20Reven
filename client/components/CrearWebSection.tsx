import { useState, useEffect, useRef } from "react";

interface Characteristic {
  id: string;
  label: string;
  icon: string;
}

const characteristics: Characteristic[] = [
  { id: "ecommerce", label: "Tienda Online", icon: "🛍️" },
  { id: "blog", label: "Blog", icon: "📝" },
  { id: "portfolio", label: "Portafolio", icon: "🎨" },
  { id: "booking", label: "Reservas", icon: "📅" },
  { id: "cms", label: "Gestor de Contenido", icon: "⚙️" },
];

export default function CrearWebSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });
  const [selected, setSelected] = useState<string[]>([]);
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

  const toggleCharacteristic = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          description: formData.description,
          characteristics: {
            ecommerce: selected.includes("ecommerce"),
            blog: selected.includes("blog"),
            portfolio: selected.includes("portfolio"),
            booking: selected.includes("booking"),
            cms: selected.includes("cms"),
          },
          budget: "",
          timeline: "",
        }),
      });

      if (response.ok) {
        alert(
          "¡Solicitud enviada! Nos pondremos en contacto pronto. Revisa tu email."
        );
        setFormData({ name: "", email: "", description: "" });
        setSelected([]);
      } else {
        alert("Error al enviar. Intenta de nuevo.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error al enviar la solicitud.");
    }
  };

  return (
    <section
      ref={sectionRef}
      className={`py-20 sm:py-32 px-4 bg-gradient-to-br from-dark-blue via-dark-blue to-dark-blue/90 text-white transition-all duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Crea tu Web Personalizada
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Cuéntanos qué necesitas y te ayudaremos a diseñar la web perfecta
            para tu negocio
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
          {/* Características */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">
              ¿Qué características necesitas?
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {characteristics.map((char) => (
                <button
                  key={char.id}
                  type="button"
                  onClick={() => toggleCharacteristic(char.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                    selected.includes(char.id)
                      ? "border-primary bg-primary/20 shadow-lg"
                      : "border-white/30 hover:border-white/60"
                  }`}
                >
                  <div className="text-3xl mb-2">{char.icon}</div>
                  <div className="text-sm font-medium text-center">
                    {char.label}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Inputs */}
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                Nombre *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
                placeholder="Tu nombre o empresa"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors"
                placeholder="tu@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Describe tu idea *
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/30 text-white placeholder-white/50 focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Cuéntanos sobre tu proyecto, tus metas, público objetivo..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              Enviar Solicitud
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
