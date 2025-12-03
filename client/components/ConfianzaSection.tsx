export default function ConfianzaSection() {
  return (
    <section className="py-20 sm:py-32 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="fade-in order-2 lg:order-1 overflow-hidden rounded-lg shadow-lg h-80 sm:h-96">
            <img
              src="https://agenciareven.neocities.org/static/base_images/2.jpg"
              alt="Confianza en Agencia Reven"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="fade-in order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl font-bold text-dark-blue mb-6">
              Confía en Agencia Reven
            </h2>
            <p className="text-lg sm:text-xl text-dark-blue/70 leading-relaxed">
              Diseñamos páginas web únicas y de calidad que reflejan la
              identidad de tu negocio. Con años de experiencia en el desarrollo
              web, nos compromete a entregar soluciones efectivas que impulsen
              tu presencia digital y el crecimiento de tu empresa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
