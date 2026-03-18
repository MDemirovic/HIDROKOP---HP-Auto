import { useState, type ChangeEvent, type FocusEvent } from 'react';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export default function Contact() {
  const dateTemplate = 'dd/mm/yyyy';
  const [desiredDate, setDesiredDate] = useState(dateTemplate);
  const [dateError, setDateError] = useState('');
  const currentYear = new Date().getFullYear();
  const maxYear = currentYear + 2;

  const clampRange = (value: number, min: number, max: number) => {
    return Math.min(max, Math.max(min, value));
  };

  const isValidCalendarDate = (day: number, month: number, year: number) => {
    const test = new Date(year, month - 1, day);
    return test.getFullYear() === year && test.getMonth() === month - 1 && test.getDate() === day;
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    let digits = event.target.value.replace(/\D/g, '').slice(0, 8);
    let dayPart = digits.slice(0, 2);
    let monthPart = digits.slice(2, 4);
    let yearPart = digits.slice(4, 8);

    if (dayPart.length === 2) {
      const day = clampRange(parseInt(dayPart, 10), 1, 31);
      dayPart = day.toString().padStart(2, '0');
    }

    if (monthPart.length === 2) {
      const month = clampRange(parseInt(monthPart, 10), 1, 12);
      monthPart = month.toString().padStart(2, '0');
    }

    if (yearPart.length === 4) {
      const year = clampRange(parseInt(yearPart, 10), currentYear, maxYear);
      yearPart = year.toString();
    }

    digits = `${dayPart}${monthPart}${yearPart}`;

    const formatted = dateTemplate.split('');
    const editableIndexes = [0, 1, 3, 4, 6, 7, 8, 9];

    editableIndexes.forEach((index, i) => {
      if (digits[i]) {
        formatted[index] = digits[i];
      }
    });

    setDesiredDate(formatted.join(''));
    setDateError('');
    event.target.setCustomValidity('');
  };

  const handleDateBlur = (event: FocusEvent<HTMLInputElement>) => {
    if (desiredDate === dateTemplate) {
      setDateError('');
      event.target.setCustomValidity('');
      return;
    }

    const match = desiredDate.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
    if (!match) {
      const message = 'Unesite datum u formatu dd/mm/yyyy.';
      setDateError(message);
      event.target.setCustomValidity(message);
      return;
    }

    const day = parseInt(match[1], 10);
    const month = parseInt(match[2], 10);
    const year = parseInt(match[3], 10);

    if (year < currentYear || year > maxYear) {
      const message = `Godina mora biti između ${currentYear}. i ${maxYear}.`;
      setDateError(message);
      event.target.setCustomValidity(message);
      return;
    }

    if (!isValidCalendarDate(day, month, year)) {
      const message = 'Uneseni datum nije valjan.';
      setDateError(message);
      event.target.setCustomValidity(message);
      return;
    }

    setDateError('');
    event.target.setCustomValidity('');
  };

  return (
    <section id="kontakt" className="py-24 bg-zinc-950 relative">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-red-600 font-semibold tracking-wider uppercase mb-2">Kontakt</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Tu smo za vas i vaš auto</h3>
          <p className="text-zinc-400">Rezervirajte termin, postavite pitanje ili nas posjetite na našoj lokaciji.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="lg:w-1/3 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl h-full space-y-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-red-500 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Telefon</h4>
                  <a href="tel:051642111" className="text-zinc-400 hover:text-red-500 transition-colors">051 642 111</a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-red-500 shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Adresa</h4>
                  <p className="text-zinc-400">Zametska ulica 28<br />51000, Rijeka</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Hidrokop+-+HP+Auto,+Rijeka"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-red-500 text-sm hover:underline mt-2 inline-block"
                  >
                    Prikaži na mapi
                  </a>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-red-500 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Radno vrijeme</h4>
                  <p className="text-zinc-400">Pon - Pet: 08:00 - 16:00</p>
                  <p className="text-zinc-400">Subota: 08:00 - 14:00</p>
                  <p className="text-zinc-500 text-sm mt-1">Nedjelja: Zatvoreno</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-red-500 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href="mailto:hidrokopdoo@gmail.com" className="text-zinc-400 hover:text-red-500 transition-colors">hidrokopdoo@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="lg:w-2/3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl space-y-6" onSubmit={(e) => e.preventDefault()}>
              <h3 className="text-2xl font-bold text-white mb-6">Zatraži termin ili ponudu</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400">Ime i prezime *</label>
                  <input type="text" id="name" required className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Vaše ime" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-zinc-400">Broj telefona *</label>
                  <input type="tel" id="phone" required className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="051 642 111" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="car" className="text-sm font-medium text-zinc-400">Marka i model vozila *</label>
                  <input type="text" id="car" required className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors" placeholder="Npr. VW Golf 7 1.6 TDI" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-zinc-400">Vrsta usluge</label>
                  <select id="service" className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors appearance-none">
                    <option value="mali-servis">Mali servis</option>
                    <option value="veliki-servis">Veliki servis</option>
                    <option value="dijagnostika">Dijagnostika</option>
                    <option value="kocnice">Kočnice</option>
                    <option value="klima">Klima servis</option>
                    <option value="drugo">Nešto drugo / Ne znam</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="date" className="text-sm font-medium text-zinc-400">Željeni datum (opcionalno)</label>
                <input
                  type="text"
                  id="date"
                  inputMode="numeric"
                  value={desiredDate}
                  onChange={handleDateChange}
                  onBlur={handleDateBlur}
                  maxLength={10}
                  aria-invalid={dateError ? 'true' : 'false'}
                  className={`w-full bg-zinc-950 border rounded-lg px-4 py-3 text-white focus:outline-none transition-colors ${
                    dateError ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-red-500'
                  }`}
                />
                {dateError && <p className="text-xs text-red-500">{dateError}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-400">Poruka / Opis kvara</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-zinc-950 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-500 transition-colors resize-none"
                  placeholder="Opišite problem ili ostavite dodatnu napomenu..."
                ></textarea>
              </div>

              <button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Send className="w-5 h-5" />
                Pošalji upit
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
