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
        <div className="mx-auto mb-14 max-w-3xl text-center" data-gsap="reveal" data-y="20">
          <p className="mb-3 inline-flex rounded-full border border-red-500/40 bg-red-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-red-300">
            Trgovina
          </p>
          <h2 className="mb-5 text-4xl font-serif font-semibold leading-tight text-zinc-100 md:text-6xl">
            Sve za vaš automobil na jednom mjestu
          </h2>
          <p className="text-base text-zinc-400 md:text-lg">
            Originalni i zamjenski autodijelovi uz stručan savjet i brzu dostupnost.
          </p>
        </div>

        <div data-gsap="reveal" data-y="30" className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-14">
            <div className="relative">
              <img src="/back.png" alt="Trgovina autodijelova" className="h-full min-h-[360px] w-full object-cover" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-white sm:text-3xl">Trgovina autodijelova</h3>
              <p className="mt-4 max-w-xl leading-relaxed text-zinc-300">
                U sklopu servisa nudimo i trgovinu autodijelova za većinu marki i modela vozila. Kod nas možete pronaći
                originalne i kvalitetne zamjenske dijelove, uz stručan savjet prije kupnje.
              </p>
              <p className="mt-3 max-w-xl leading-relaxed text-zinc-400">
                Fokusirani smo na pouzdanost, brzu nabavu i realne cijene. Većinu artikala možemo osigurati u kratkom
                roku kako bi vaše vozilo što prije bilo spremno za cestu.
              </p>

              <a
                href="tel:051642111"
                className="mt-7 inline-flex items-center justify-center gap-2 rounded-xl border border-red-400/45 bg-red-500/15 px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-red-200 transition hover:border-red-300 hover:bg-red-500/25"
              >
                <Phone className="h-4 w-4" />
                Nazovite trgovinu
              </a>

              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {parts.map((part) => {
                  const Icon = part.icon;
                  return (
                    <li key={part.title} className="border-b border-zinc-800/80 pb-4">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-500/12 text-red-300">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-semibold text-zinc-100 sm:text-base">{part.title}</h4>
                          <p className="mt-1 text-sm leading-relaxed text-zinc-400">{part.description}</p>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
