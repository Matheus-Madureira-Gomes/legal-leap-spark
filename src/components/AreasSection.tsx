import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Building2,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";

const workerTopics = [
  "Reconhecimento de vínculo empregatício, com pagamento das verbas trabalhistas",
  "Contrato de experiência",
  "Aviso Prévio, férias, 13º salário",
  "Nulidade de Justa Causa aplicada",
  "Pagamento de horas extras e horas de intervalo de refeição e descanso",
  "Reconhecimento de desvio ou acúmulo de funções e equiparação salarial",
  "Ações indenizatórias de danos morais e materiais por doença profissional",
  "Pensão mensal vitalícia por doenças acidentárias e incapacidade",
  "Violação de estabilidade gestante",
  "Violação de estabilidade de dirigentes da CIPA e representação sindical",
  "Violação de estabilidade acidentária",
  "Reintegração e readmissão por dispensas ilegais e arbitrárias",
  "Indenização por assédio moral e/ou sexual",
  "Manutenção do plano de saúde após dispensa ou aposentadoria",
  "Contratações fraudulentas por terceirização ilícita",
  "Retirada de benefícios (Auxílio-Alimentação, transporte, planos de saúde)",
  "Adicionais de insalubridade, periculosidade e noturno",
  "Pagamentos incorretos e diferenças de FGTS",
  "Devolução de descontos indevidos",
  "Pagamentos de Ajuda de Custo, Aluguel, Combustível e Gratificações",
  "Redução salarial",
  "Rescisão Indireta",
];

const employerTopics = [
  "Assessoria de empresas e seus dirigentes através de pareceres e consultas",
  "Orientação sobre rotinas trabalhistas e rescisões de contratos",
  "Elaboração de recursos e defesas administrativas",
  "Elaboração de defesas e recursos em processos trabalhistas até instâncias superiores",
  "Reclamatórias trabalhistas",
];

const areas = [
  {
    icon: Briefcase,
    title: "Direito Trabalhista",
    subtitle: "Em Defesa do Trabalhador",
    description:
      "Atuamos no ramo do Direito Trabalhista, em especial na defesa dos interesses dos trabalhadores contra o poder econômico dos empregadores. Destacamos as diversas matérias abordadas nas ações que diariamente propomos na Justiça do Trabalho.",
    topics: workerTopics,
  },
  {
    icon: Building2,
    title: "Direito Trabalhista Patronal",
    subtitle: "Assessoria Empresarial",
    description:
      "Prestamos assessoria completa a empresas e seus dirigentes, com orientação estratégica em todas as esferas do Direito Trabalhista patronal.",
    topics: employerTopics,
  },
];

const AreasSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

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

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {areas.map((area, i) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="bg-primary/50 backdrop-blur border border-gold/10 rounded-lg p-8 hover:border-gold/30 transition-all duration-300"
            >
              <area.icon className="w-10 h-10 text-gold mb-4" />
              <h3 className="font-heading text-2xl font-semibold text-primary-foreground mb-1">
                {area.title}
              </h3>
              <p className="text-gold font-body text-sm uppercase tracking-wider mb-4">
                {area.subtitle}
              </p>
              <p className="font-body text-sm text-primary-foreground/65 leading-relaxed mb-6">
                {area.description}
              </p>

              <button
                onClick={() =>
                  setExpandedIndex(expandedIndex === i ? null : i)
                }
                className="inline-flex items-center gap-2 text-gold font-body text-sm font-medium hover:text-gold-light transition-colors"
              >
                {expandedIndex === i ? "Ver menos" : "Ver todos os serviços"}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    expandedIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {expandedIndex === i && (
                  <motion.ul
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mt-4 space-y-2"
                  >
                    {area.topics.map((topic) => (
                      <li
                        key={topic}
                        className="flex items-start gap-2 text-sm font-body text-primary-foreground/70"
                      >
                        <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
