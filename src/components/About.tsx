import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="o-nama" className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          <motion.div 
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-red-900/20">
              <img 
                src="/HPUlaz.png" 
                alt="Hidrokop-HP Auto Ulaz" 
                className="w-full h-[500px] object-cover object-[20%_center]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent"></div>
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-zinc-900 border border-zinc-800 p-8 rounded-2xl shadow-xl hidden md:block">
              <div className="flex items-center gap-4">
                <div className="text-red-600 font-bold text-5xl">15+</div>
                <div className="text-zinc-300 font-medium leading-tight">
                  Godina<br/>Iskustva
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-red-600 font-semibold tracking-wider uppercase mb-2">O Firmi</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Vaš pouzdan partner na cesti</h3>
            
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Hidrokop-HP Auto je nastao iz strasti prema automobilima i želje da vozačima pružimo poštenu, stručnu i brzu uslugu. Znamo koliko je frustrirajuće kada auto stane, zato smo tu da taj stres svedemo na minimum.
              </p>
              <p>
                Naš pristup je jednostavan: nema skrivenih troškova, nema nepotrebnih popravki. Fokusirani smo na kvalitet i povjerenje, jer želimo da nam se vratite i da nas preporučite prijateljima.
              </p>
            </div>

            <ul className="mt-8 space-y-4">
              {[
                'Stručan tim sa certifikatima',
                'Najmodernija oprema za dijagnostiku',
                'Garancija na ugrađene dijelove',
                'Pristup rješavanju problema'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300">
                  <CheckCircle2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

