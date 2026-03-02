import { motion } from "framer-motion";
import { Scale, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <Scale className="w-12 h-12 text-gold" />
          </div>

          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Justiça com{" "}
            <span className="text-gradient-gold">Excelência</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto mb-4 leading-relaxed">
            Há mais de 20 anos defendendo os direitos dos nossos clientes com
            ética, compromisso e resultados concretos.
          </p>

          <p className="font-body text-sm text-primary-foreground/50 mb-10">
            Advogados Trabalhistas em São Paulo – Água Branca | +5.000 clientes atendidos
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5511931496563?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20gr%C3%A1tis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground px-8 py-4 text-lg font-semibold rounded hover:bg-gold-dark transition-colors duration-300 tracking-wide"
            >
              <Phone className="w-5 h-5" />
              Agende sua Consulta Grátis
            </a>
            <a
              href="#escritorio"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 text-lg font-medium rounded hover:border-gold hover:text-gold transition-colors duration-300 tracking-wide"
            >
              Conheça o Escritório
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
