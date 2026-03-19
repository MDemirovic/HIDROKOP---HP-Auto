import { useState, type ChangeEvent, type FocusEvent } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

import SectionHeading from './SectionHeading';

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
    <section id="kontakt" className="relative bg-zinc-950 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center" data-gsap="reveal" data-y="20">
          <SectionHeading
            align="center"
            title="Tu smo"
            subtitle="za vaš auto"
            inline
            description="Rezervirajte termin, postavite pitanje ili nas posjetite na našoj lokaciji."
            className="max-w-[760px]"
          />
        </div>

        <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row">
          {/* Contact Info */}
          <div data-gsap="reveal" data-x="-30" className="space-y-8 lg:w-1/3">
            <div className="h-full space-y-8 rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 shrink-0 rounded-full bg-zinc-800 text-red-500 flex items-center justify-center">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Telefon</h4>
                  <a href="tel:051642111" className="text-zinc-400 transition-colors hover:text-red-500">051 642 111</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 shrink-0 rounded-full bg-zinc-800 text-red-500 flex items-center justify-center">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Adresa</h4>
                  <p className="text-zinc-400">Zametska ulica 28<br />51000, Rijeka</p>
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Hidrokop+-+HP+Auto,+Rijeka"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 inline-block text-sm text-red-500 hover:underline"
                  >
                    Prikaži na mapi
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 shrink-0 rounded-full bg-zinc-800 text-red-500 flex items-center justify-center">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Radno vrijeme</h4>
                  <p className="text-zinc-400">Pon - Pet: 08:00 - 16:00</p>
                  <p className="text-zinc-400">Subota: 08:00 - 14:00</p>
                  <p className="mt-1 text-sm text-zinc-500">Nedjelja: Zatvoreno</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="h-12 w-12 shrink-0 rounded-full bg-zinc-800 text-red-500 flex items-center justify-center">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="mb-1 font-semibold text-white">Email</h4>
                  <a href="mailto:hidrokopdoo@gmail.com" className="text-zinc-400 transition-colors hover:text-red-500">
                    hidrokopdoo@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div data-gsap="reveal" data-x="30" data-delay="0.04" className="lg:w-2/3">
            <form className="space-y-6 rounded-2xl border border-zinc-800 bg-zinc-900 p-8" onSubmit={(e) => e.preventDefault()}>
              <h3 className="mb-6 text-2xl font-bold text-white">Zatraži termin ili ponudu</h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-zinc-400">Ime i prezime *</label>
                  <input type="text" id="name" required className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white transition-colors focus:border-red-500 focus:outline-none" placeholder="Vaše ime" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-zinc-400">Broj telefona *</label>
                  <input type="tel" id="phone" required className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white transition-colors focus:border-red-500 focus:outline-none" placeholder="051 642 111" />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="car" className="text-sm font-medium text-zinc-400">Marka i model vozila *</label>
                  <input type="text" id="car" required className="w-full rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white transition-colors focus:border-red-500 focus:outline-none" placeholder="Npr. VW Golf 7 1.6 TDI" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-zinc-400">Vrsta usluge</label>
                  <select id="service" className="w-full appearance-none rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white transition-colors focus:border-red-500 focus:outline-none">
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
                  className={`w-full rounded-lg border bg-zinc-950 px-4 py-3 text-white transition-colors focus:outline-none ${
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
                  className="w-full resize-none rounded-lg border border-zinc-800 bg-zinc-950 px-4 py-3 text-white transition-colors focus:border-red-500 focus:outline-none"
                  placeholder="Opišite problem ili ostavite dodatnu napomenu..."
                ></textarea>
              </div>

              <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-red-600 py-4 font-medium text-white transition-colors hover:bg-red-700">
                <Send className="h-5 w-5" />
                Pošalji upit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
