import { motion } from 'motion/react';

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
    <section className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-red-600 font-semibold tracking-wider uppercase mb-2">Galerija</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Zavirite u našu radionicu</h3>
          <p className="text-zinc-400">Čistoća, red i profesionalan alat su osnova dobrog servisa.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`rounded-2xl overflow-hidden group relative ${index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div className="aspect-[4/3] w-full h-full">
                <img 
                  src={src} 
                  alt={`Galerija slika ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

