import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Escritório", href: "#escritorio" },
  { label: "Áreas de Atuação", href: "#areas" },
  { label: "Equipe", href: "#equipe" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy-dark/95 backdrop-blur-md border-b border-gold/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#inicio" className="flex flex-col">
          <span className="font-heading text-xl font-bold text-primary-foreground tracking-wide">
            Alberto Santos
          </span>
          <span className="text-xs text-gold tracking-[0.25em] uppercase">
            Advogados Associados
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-body font-medium text-primary-foreground/80 hover:text-gold transition-colors duration-300 tracking-wide uppercase"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://wa.me/5511931496563"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center gap-2 bg-gold text-accent-foreground px-5 py-2.5 text-sm font-semibold rounded tracking-wide hover:bg-gold-dark transition-colors duration-300"
          >
            <Phone className="w-4 h-4" />
            Consulta Grátis
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-navy-dark border-t border-gold/10 overflow-hidden"
          >
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-primary-foreground/80 hover:text-gold transition-colors font-body tracking-wide"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="https://wa.me/5511931496563"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground px-5 py-2.5 text-sm font-semibold rounded tracking-wide"
              >
                <Phone className="w-4 h-4" />
                Consulta Grátis
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
