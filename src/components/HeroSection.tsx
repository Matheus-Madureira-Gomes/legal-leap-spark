import { motion } from "framer-motion";
import { Scale, Phone, Users, Award, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Clock, value: "+20", label: "Anos de Experiência" },
  { icon: Users, value: "+5.000", label: "Clientes Atendidos" },
  { icon: Award, value: "100%", label: "Compromisso Ético" },
];

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center mb-6">
            <Scale className="w-12 h-12 text-gold" />
          </div>

          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4">
            Advogado Trabalhista em{" "}
            <span className="text-gradient-gold">São Paulo – Água Branca</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-4 leading-relaxed">
            Escritório de advocacia especializado em Direito Trabalhista com mais de 20 anos de experiência 
            na defesa dos direitos do trabalhador e assessoria empresarial.
          </p>

          <p className="font-body text-sm md:text-base text-gold/90 max-w-xl mx-auto mb-10 font-medium">
            Consulta gratuita de 40 minutos • Atendimento presencial e online
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/5511931496563?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20gr%C3%A1tis."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground px-8 py-4 text-lg font-semibold rounded hover:bg-gold-dark transition-colors duration-300 tracking-wide"
            >
              <Phone className="w-5 h-5" />
              Fale com um Advogado Agora
            </a>
            <a
              href="#areas"
              className="inline-flex items-center justify-center gap-2 border-2 border-primary-foreground/30 text-primary-foreground px-8 py-4 text-lg font-medium rounded hover:border-gold hover:text-gold transition-colors duration-300 tracking-wide"
            >
              Conheça Nossas Especialidades
            </a>
          </div>

          {/* Authority stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="grid grid-cols-3 gap-6 max-w-lg mx-auto"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                <p className="font-heading text-2xl md:text-3xl font-bold text-primary-foreground">
                  {stat.value}
                </p>
                <p className="font-body text-xs text-primary-foreground/60 mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
