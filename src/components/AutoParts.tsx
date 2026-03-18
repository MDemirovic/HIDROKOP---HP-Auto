import { motion } from 'motion/react';
import { Settings, Battery, Disc, Wrench, Phone } from 'lucide-react';

const parts = [
  {
    icon: Settings,
    title: 'Motorna ulja i filteri',
    description: 'Vrhunska ulja i filteri za optimalan rad i dugovječnost vašeg motora.',
  },
  {
    icon: Disc,
    title: 'Kočioni sistemi',
    description: 'Diskovi, pločice i kočiona tekućina renomiranih svjetskih proizvođača.',
  },
  {
    icon: Battery,
    title: 'Akumulatori i elektrika',
    description: 'Pouzdani akumulatori i električni dijelovi za sve vremenske uslove.',
  },
  {
    icon: Wrench,
    title: 'Ovjes i upravljanje',
    description: 'Amortizeri, opruge i dijelovi ovjesa za sigurnu i udobnu vožnju.',
  },
];

export default function AutoParts() {
  return (
    <section id="autodijelovi" className="relative overflow-hidden bg-zinc-950 py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-28 right-[18%] h-[26rem] w-[32rem] rounded-full bg-red-700/10 blur-[120px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:38px_38px] opacity-35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_40%,rgba(120,20,20,0.16),rgba(9,9,11,0.98)_56%,#09090b_74%)]" />
        <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-zinc-950 via-zinc-950/95 to-transparent" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-red-300">
              Trgovina
            </p>
            <h2 className="mb-5 text-4xl font-serif font-semibold leading-tight text-zinc-100 md:text-6xl">
              Sve za vaš automobil na jednom mjestu
            </h2>
            <p className="text-base text-zinc-400 md:text-lg">
              Originalni i zamjenski autodijelovi uz stručan savjet i brzu dostupnost.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950/70 shadow-[0_25px_85px_-35px_rgba(0,0,0,0.95)] backdrop-blur-sm"
        >
          <div className="grid lg:grid-cols-[430px_1fr]">
            <div className="relative z-10 border-b border-white/10 bg-zinc-950/85 p-7 sm:p-8 lg:border-b-0 lg:border-r lg:p-12">
              <div aria-hidden className="absolute -right-12 top-10 hidden h-32 w-32 rounded-full bg-red-600/15 blur-2xl lg:block" />

              <h3 className="text-2xl font-semibold text-white sm:text-3xl">Autodijelovi i potrošni materijal</h3>
              <p className="mt-4 leading-relaxed text-zinc-300">
                Naše stručno osoblje pomoći će vam u odabiru pravog dijela za vaše vozilo, uz garanciju kvalitete
                i pristupačne cijene.
              </p>

              <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {parts.map((part) => {
                  const Icon = part.icon;
                  return (
                    <li
                      key={part.title}
                      className="rounded-2xl border border-white/10 bg-black/25 p-4 transition-colors hover:border-red-400/35"
                    >
                      <div className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-red-500/35 bg-red-500/10 text-red-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-100 sm:text-base">{part.title}</h4>
                          <p className="mt-1 text-xs leading-relaxed text-zinc-400 sm:text-sm">{part.description}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <a
                href="tel:051642111"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-red-400/45 bg-red-500/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-red-200 transition hover:border-red-300 hover:bg-red-500/25 sm:w-auto"
              >
                <Phone className="h-4 w-4" />
                Nazovite trgovinu
              </a>
            </div>

            <div className="relative min-h-[320px] sm:min-h-[420px] overflow-hidden bg-zinc-900">
              <img
                src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=1400&auto=format&fit=crop"
                alt="Autodijelovi i servis"
                className="absolute inset-0 h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(9,9,11,0.92),rgba(9,9,11,0.12)_45%,rgba(9,9,11,0.2))]" />

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto">
                <div className="max-w-md rounded-2xl border border-white/10 bg-zinc-950/70 p-4 backdrop-blur-sm sm:p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-red-300">Brza dostupnost</p>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-200 sm:text-base">
                    Većinu dijelova nabavljamo unutar 24h uz provjerene dobavljače i profesionalnu ugradnju.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
