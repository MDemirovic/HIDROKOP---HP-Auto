import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Renata Gacanin',
    rating: 5,
    text: 'Ja do sad nisam vidjela ljubaznije ,uljudnije ,brze i normalne majstore... Hvalaaa Vam na tome,i sve aute vozim tamo ..',
    date: '2025-09-15'
  },
  {
    name: 'Vida Kesin',
    rating: 5,
    text: 'Jako dobri majstori,uvijek pomognu. Povoljne cijene i problem se uvijek riješi. Moje sve preporuke.',
    date: '2021-03-15'
  },
  {
    name: 'Virna Medanic',
    rating: 5,
    text: 'Ekipa za 10, efikasnost i usluga na razini!',
    date: '2025-12-15'
  }
];

function getTimeAgo(dateString: string) {
  const past = new Date(dateString);
  const now = new Date();
  
  let diffMonths = (now.getFullYear() - past.getFullYear()) * 12 + (now.getMonth() - past.getMonth());
  
  if (diffMonths < 1) return 'prije manje od mjesec dana';
  if (diffMonths < 12) return `prije ${diffMonths} mj.`;
  
  const years = Math.floor(diffMonths / 12);
  return `prije ${years} god.`;
}

export default function Reviews() {
  return (
    <section
      id="recenzije"
      className="relative overflow-hidden py-24 border-b border-zinc-800/50 bg-[linear-gradient(to_bottom,#09090b_0%,#0d0d10_22%,#18181b_100%)]"
    >
      <div className="container relative mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-red-600 font-semibold tracking-wider uppercase mb-2">Iskustva Klijenata</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Šta kažu o nama</h3>
          <p className="text-zinc-400">Naša najveća reklama su zadovoljni klijenti. Pročitajte njihova iskustva.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-950 border border-zinc-800 p-8 rounded-2xl relative flex flex-col h-full"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-zinc-800" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-red-500 text-red-500" />
                ))}
              </div>
              
              <p className="text-zinc-300 mb-8 italic relative z-10 flex-grow">"{review.text}"</p>
              
              <div className="mt-auto text-left">
                <h4 className="text-white font-semibold">{review.name}</h4>
                <p className="text-zinc-500 text-sm">{getTimeAgo(review.date)}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="https://www.google.com/search?client=opera&hs=zvq&sca_esv=a314a699d70fed9c&hl=hr-HR&sxsrf=ANbL-n7lM_gxmR_77jIYh1vM6PXn35SFkA:1773821290702&q=osvrti+za+hidrokop+-+hp+auto+rijeka&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOakuFacSYri16nIBB-xwC9ETiyWb6nlclAlEh0T3H1Tuk1y2wcUxhIMdEcre7jjNJWI7k2E%3D&uds=ALYpb_mgZNSyW_-r_VJg3_KzT_ZRa-QxgIIexvg3FhoqSS-11l5Eq5OlClHh4d7dIAnv9lV9MMQRa_UwwXI_NuSodSzRa5EKuE-4SbhRJc6U61fdUMJ6RsKyOdEb-oqx3uYC8exMr22g&sa=X&ved=2ahUKEwjwo7Wf_6iTAxVhzgIHHRMXOS8Q3PALegQIGhAE&biw=1666&bih=993&dpr=1" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
            Pogledajte sve recenzije na Google <Star className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

