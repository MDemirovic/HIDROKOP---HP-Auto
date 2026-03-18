import { motion } from 'motion/react';
import { Phone, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="pocetna" className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img 
          src="/bg.png" 
          alt="Auto Servis" 
          className="absolute top-0 right-0 w-[115%] md:w-[106%] h-full max-w-none object-cover object-[70%_center] md:object-center"
        />
        {/* Cinematic gradient: darkens only the left side (and bottom on mobile) so text is readable, leaving the car visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent w-full md:w-3/4"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent md:hidden"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-start justify-center h-full pt-10 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl w-full text-left"
        >
          {/* Small Label */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-8 h-[2px] bg-red-600"></div>
            <span className="text-red-500 text-sm md:text-base font-bold tracking-[0.2em] uppercase">
              Hidrokop HP Auto
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-[1.1]">
            Autoservis i prodaja <br className="hidden md:block" />
            <span className="text-zinc-400 font-light">autodijelova.</span>
          </h1>
          
          {/* Supporting Text */}
          <p className="text-lg text-zinc-400 mb-10 max-w-xl font-light leading-relaxed">
            Od brze dijagnostike i pouzdanih popravaka do širokog asortimana kvalitetnih autodijelova - sve za vaš automobil na jednom mjestu.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
            <a 
              href="tel:051642111" 
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.2)] hover:shadow-[0_0_30px_rgba(220,38,38,0.4)]"
            >
              <Phone className="w-4 h-4" />
              <span>Nazovi odmah</span>
            </a>
            
            <a 
              href="#usluge" 
              className="group flex items-center justify-center gap-3 w-full sm:w-auto px-8 py-4 bg-transparent border border-zinc-700 hover:border-zinc-400 text-zinc-300 hover:text-white rounded-full font-medium transition-all duration-300"
            >
              <span>Naše usluge</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

