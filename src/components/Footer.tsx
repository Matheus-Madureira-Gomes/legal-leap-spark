import { Scale } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-navy-dark py-12 border-t border-gold/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <Scale className="w-6 h-6 text-gold" />
            <div>
              <p className="font-heading text-lg font-bold text-primary-foreground">
                Alberto Santos
              </p>
              <p className="text-xs text-primary-foreground/50 tracking-[0.2em] uppercase">
                Advogados Associados
              </p>
            </div>
          </div>

          <div className="flex gap-8 text-sm font-body">
            {[
              { label: "Início", href: "#inicio" },
              { label: "Escritório", href: "#escritorio" },
              { label: "Áreas", href: "#areas" },
              { label: "Equipe", href: "#equipe" },
              { label: "Contato", href: "#contato" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-primary-foreground/60 hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gold/10 text-center">
          <p className="text-xs font-body text-primary-foreground/50 mb-1">
            Rua Guaicurus, 1133 – Água Branca – CEP 05033-002 – São Paulo – SP
          </p>
          <p className="text-xs font-body text-primary-foreground/50 mb-3">
            Tel: (11) 3871-5386 | WhatsApp: (11) 93149-6563
          </p>
          <p className="text-sm font-body text-primary-foreground/40">
            © {new Date().getFullYear()} Alberto Santos Advogados Associados. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
