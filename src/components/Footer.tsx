export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-4 text-sm text-zinc-600">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="w-[64px] md:w-auto overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Hidrokop-HP Auto Logo" 
                className="h-16 md:h-20 w-auto max-w-none" 
              />
            </div>
            <p>&copy; {new Date().getFullYear()} Hidrokop-HP Auto. Sva prava zadržana.</p>
          </div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-zinc-400">Politika privatnosti</a>
            <a href="#" className="hover:text-zinc-400">Uslovi korištenja</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

