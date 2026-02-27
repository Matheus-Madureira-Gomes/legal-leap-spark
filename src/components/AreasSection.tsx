import { motion } from "framer-motion";
import {
  Briefcase,
  Home,
  FileText,
  Users,
  ShieldCheck,
  Landmark,
} from "lucide-react";

const areas = [
  { icon: Briefcase, title: "Direito Trabalhista", description: "Defesa dos direitos do trabalhador e do empregador em todas as esferas." },
  { icon: Home, title: "Direito Civil", description: "Contratos, responsabilidade civil, direito de família e sucessões." },
  { icon: FileText, title: "Direito do Consumidor", description: "Proteção dos seus direitos nas relações de consumo." },
  { icon: Users, title: "Direito Previdenciário", description: "Aposentadorias, benefícios e revisões junto ao INSS." },
  { icon: ShieldCheck, title: "Direito Criminal", description: "Atuação em defesa criminal com ética e estratégia." },
  { icon: Landmark, title: "Direito Administrativo", description: "Licitações, concursos públicos e processos administrativos." },
];

const AreasSection = () => {
  return (
    <section id="areas" className="py-24 bg-navy-gradient">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            Especialidades
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            Áreas de Atuação
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-primary/50 backdrop-blur border border-gold/10 rounded-lg p-8 hover:border-gold/30 transition-all duration-300 group"
            >
              <area.icon className="w-8 h-8 text-gold mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-heading text-lg font-semibold text-primary-foreground mb-2">
                {area.title}
              </h3>
              <p className="font-body text-sm text-primary-foreground/65 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
