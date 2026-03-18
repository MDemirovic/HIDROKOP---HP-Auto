/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import AutoParts from './components/AutoParts';
import About from './components/About';
import Location from './components/Location';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-50 min-h-screen font-sans selection:bg-red-600 selection:text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <AutoParts />
        <Reviews />
        <About />
        <Location />
        <Gallery />
        <Contact />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
