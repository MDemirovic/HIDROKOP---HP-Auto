import { motion } from 'motion/react';
import { Settings, Battery, Disc, Wrench, ArrowRight } from 'lucide-react';

const parts = [
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Motorna ulja i filteri',
    description: 'Vrhunska ulja i filteri za optimalan rad i dugovječnost vašeg motora.'
  },
  {
    icon: <Disc className="w-6 h-6" />,
    title: 'Kočioni sistemi',
    description: 'Diskovi, pločice i kočiona tekućina renomiranih svjetskih proizvođača.'
  },
  {
    icon: <Battery className="w-6 h-6" />,
    title: 'Akumulatori i elektrika',
    description: 'Pouzdani akumulatori i električni dijelovi za sve vremenske uslove.'
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Ovjes i upravljanje',
    description: 'Amortizeri, opruge i dijelovi ovjesa za sigurnu i udobnu vožnju.'
  }
];

export default function AutoParts() {
  return (
    <section id="autodijelovi" className="py-24 bg-zinc-950 relative border-t border-zinc-900">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-red-600 font-semibold tracking-wider uppercase mb-2">Trgovina</h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">Sve za vaš automobil na jednom mjestu</h3>
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              Uz vrhunski servis, nudimo i bogat asortiman originalnih i zamjenskih autodijelova. 
              Naše stručno osoblje pomoći će vam u odabiru pravog dijela za vaše vozilo, uz garanciju kvalitete i pristupačne cijene.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {parts.map((part, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-red-600/10 flex items-center justify-center text-red-500 shrink-0">
                    {part.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">{part.title}</h4>
                    <p className="text-sm text-zinc-500 leading-relaxed">{part.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div 
            className="lg:w-1/2 w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-zinc-800 shadow-2xl shadow-black/50">
              <img 
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1000&auto=format&fit=crop" 
                alt="Autodijelovi" 
                className="w-full h-full object-cover grayscale-[0.3] hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-zinc-900/90 backdrop-blur-md border border-zinc-800/50 p-6 rounded-xl shadow-xl">
                  <h4 className="text-white font-bold text-lg mb-2">Trebate specifičan dio?</h4>
                  <p className="text-zinc-400 text-sm mb-4">Nazovite nas i provjerite dostupnost. Većinu dijelova možemo nabaviti u roku od 24 sata.</p>
                  <a href="tel:051642111" className="inline-flex items-center text-red-500 font-medium hover:text-red-400 transition-colors group">
                    Pozovite trgovinu <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

