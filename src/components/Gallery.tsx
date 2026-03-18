const images = [
  new URL('../../images/1.jpg', import.meta.url).href,
  new URL('../../images/2.jpg', import.meta.url).href,
  new URL('../../images/3.jpg', import.meta.url).href,
  new URL('../../images/4.jpg', import.meta.url).href,
  new URL('../../images/5.jfif', import.meta.url).href,
  new URL('../../images/6.jpeg', import.meta.url).href,
];

export default function Gallery() {
  return (
    <section className="relative bg-zinc-950 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center" data-gsap="reveal" data-y="20">
          <h2 className="mb-2 text-red-600 font-semibold uppercase tracking-wider">Galerija</h2>
          <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">Zavirite u našu radionicu</h3>
          <p className="text-zinc-400">Čistoća, red i profesionalan alat su osnova dobrog servisa.</p>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              data-gsap="reveal"
              data-scale="0.95"
              data-y="16"
              data-delay={`${index * 0.06}`}
              className={`group relative overflow-hidden rounded-2xl ${index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className="aspect-[4/3] h-full w-full">
                <img
                  src={src}
                  alt={`Galerija slika ${index + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-950/20 transition-colors duration-500 group-hover:bg-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
