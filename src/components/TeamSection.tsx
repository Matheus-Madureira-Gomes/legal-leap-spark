import { motion } from "framer-motion";
import { Mail, Phone, Globe, GraduationCap, Briefcase } from "lucide-react";

const team = [
  {
    name: "Carlos Alberto Santos",
    oab: "OAB/SP 273.782",
    role: "Sócio Fundador",
    phone: "(11) 98959-8475",
    email: "carlos@albertosantosadvogados.com.br",
    languages: ["Inglês", "Espanhol"],
    education: [
      "Graduado pela Universidade Paulista",
      "Pós Graduado pela Universidade Presbiteriana Mackenzie",
    ],
    areas: ["Direito Trabalhista", "Direito Trabalhista Patronal"],
  },
  {
    name: "Caroline Bachiega Rossi",
    oab: "OAB/SP 272.258",
    role: "Sócia",
    phone: "(11) 98959-8437",
    email: "caroline@albertosantosadvogados.com.br",
    languages: ["Inglês", "Espanhol"],
    education: [
      "Graduada pela Universidade Guarulhos",
      "Pós Graduada pela Universidade Presbiteriana Mackenzie",
    ],
    areas: ["Direito Trabalhista", "Direito Trabalhista Patronal"],
  },
];

const TeamSection = () => {
  return (
    <section id="equipe" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            Profissionais
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Nossa Equipe
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-8" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nossa equipe é composta por jovens profissionais, ousados e
            experientes. Nossa abordagem é moderna e diferenciada, ao mesmo
            tempo séria e com extremo profissionalismo. Acreditamos num
            atendimento individualizado, personalíssimo, objetivo, transparente
            e eficaz.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mt-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg hover:border-gold/30 transition-all duration-300"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 rounded-full bg-secondary flex items-center justify-center mx-auto mb-5">
                <span className="font-heading text-2xl font-bold text-gold">
                  {member.name.split(" ")[0][0]}
                  {member.name.split(" ").slice(-1)[0][0]}
                </span>
              </div>

              <div className="text-center mb-6">
                <h3 className="font-heading text-xl font-semibold text-foreground">
                  {member.name}
                </h3>
                <p className="text-gold font-body text-sm font-medium mt-1">
                  {member.oab}
                </p>
                <p className="text-muted-foreground font-body text-sm uppercase tracking-wider mt-1">
                  {member.role}
                </p>
              </div>

              <div className="space-y-4 text-sm font-body">
                {/* Contact */}
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-foreground">{member.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gold flex-shrink-0" />
                  <span className="text-foreground text-xs break-all">
                    {member.email}
                  </span>
                </div>

                <div className="border-t border-border pt-4 mt-4 space-y-3">
                  {/* Languages */}
                  <div className="flex items-start gap-3">
                    <Globe className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                        Idiomas
                      </p>
                      <p className="text-foreground">
                        {member.languages.join(" • ")}
                      </p>
                    </div>
                  </div>

                  {/* Education */}
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                        Formação
                      </p>
                      {member.education.map((edu) => (
                        <p key={edu} className="text-foreground">
                          {edu}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Areas */}
                  <div className="flex items-start gap-3">
                    <Briefcase className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-muted-foreground text-xs uppercase tracking-wider mb-1">
                        Áreas de Atuação
                      </p>
                      <p className="text-foreground">
                        {member.areas.join(" • ")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
