import { motion } from "framer-motion";
import { Scale, ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
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

          <p className="font-body text-lg md:text-xl text-primary-foreground/75 max-w-2xl mx-auto mb-10 leading-relaxed">
            Há mais de 20 anos defendendo os direitos dos nossos clientes com
            ética, compromisso e resultados concretos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contato"
              className="inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground px-8 py-4 text-lg font-semibold rounded hover:bg-gold-dark transition-colors duration-300 tracking-wide"
            >
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <a href="#escritorio" className="text-primary-foreground/50 hover:text-gold transition-colors">
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
