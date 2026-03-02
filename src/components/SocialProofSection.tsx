import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Excelente atendimento. O Dr. Carlos foi muito atencioso e resolveu meu caso trabalhista de forma rápida e eficiente. Recebi tudo que tinha direito.",
    author: "M. Silva",
    case: "Rescisão Trabalhista",
  },
  {
    text: "Fui muito bem atendida pela Dra. Caroline. Profissional dedicada que me explicou cada etapa do processo. Recomendo de olhos fechados!",
    author: "A. Oliveira",
    case: "Horas Extras e FGTS",
  },
  {
    text: "Procurei o escritório após uma demissão injusta. Ganhei a causa e recebi a indenização que merecia. Equipe de primeira!",
    author: "R. Santos",
    case: "Nulidade de Justa Causa",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            Depoimentos
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            O Que Nossos Clientes Dizem
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-gold/30 transition-all duration-300 relative"
            >
              <Quote className="w-8 h-8 text-gold/20 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-heading text-sm font-semibold text-foreground">
                  {t.author}
                </p>
                <p className="font-body text-xs text-gold">{t.case}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
