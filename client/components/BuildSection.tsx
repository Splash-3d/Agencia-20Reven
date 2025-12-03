export default function BuildSection() {
  const images = [
    "https://agenciareven.neocities.org/static/base_images/1.jpg",
    "https://agenciareven.neocities.org/static/base_images/2.jpg",
    "https://agenciareven.neocities.org/static/base_images/3.jpg",
  ];

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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-lg h-64 sm:h-80"
            >
              <div className="relative w-full h-full overflow-hidden bg-light-gray-dark">
                <img
                  src={image}
                  alt={`Galería ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
