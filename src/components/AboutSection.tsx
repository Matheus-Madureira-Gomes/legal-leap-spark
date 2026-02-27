import { motion } from "framer-motion";
import { Shield, Users, Award } from "lucide-react";

const values = [
  {
    icon: Shield,
    title: "Ética e Transparência",
    description:
      "Atuamos com absoluto compromisso ético, mantendo total transparência em cada etapa do processo.",
  },
  {
    icon: Users,
    title: "Atendimento Personalizado",
    description:
      "Cada cliente é único. Oferecemos acompanhamento dedicado e esclarecimento idôneo durante todo o processo.",
  },
  {
    icon: Award,
    title: "Experiência Comprovada",
    description:
      "Posturas inovadoras aliadas à tradição jurídica para garantir os melhores resultados aos nossos clientes.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" as const },
  }),
};

const AboutSection = () => {
  return (
    <section id="escritorio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            Sobre Nós
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            O Escritório
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            O escritório Alberto Santos Advogados Associados pauta sua atuação no
            absoluto compromisso com a ética, pela qualidade das relações humanas
            e pelo dever de contribuir com o desenvolvimento da sociedade.
            Comprometido em oferecer um atendimento distinto e personalizado,
            firmamos uma parceria de mútua confiança com cada cliente.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center mx-auto mb-5 group-hover:bg-gold/10 transition-colors">
                <value.icon className="w-7 h-7 text-gold" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
