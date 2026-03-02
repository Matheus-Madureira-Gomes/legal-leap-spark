import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, FileText } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ nome: "", telefone: "", empresa: "", mensagem: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Olá! Meu nome é ${form.nome}. Telefone: ${form.telefone}. ${form.empresa ? `Empresa: ${form.empresa}. ` : ""}${form.mensagem}`
    );
    window.open(`https://wa.me/5511931496563?text=${msg}`, "_blank");
    toast({ title: "Redirecionando para o WhatsApp...", description: "Você será atendido em breve." });
  };

  return (
    <section id="contato" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-gold font-body text-sm uppercase tracking-[0.3em] mb-3">
            Fale Conosco
          </p>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Agende sua Consulta Grátis
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            A entrevista dura aproximadamente 40 minutos. Entre em contato e
            receba orientação jurídica especializada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="bg-card border border-border rounded-lg p-8">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">
                Informações de Contato
              </h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Telefone", value: "(11) 3871-5386" },
                  { icon: Phone, label: "WhatsApp", value: "(11) 93149-6563" },
                  { icon: Mail, label: "E-mail", value: "contato@albertosantosadvogados.com.br" },
                  { icon: MapPin, label: "Endereço", value: "Rua Guaicurus, 1133 – Água Branca, CEP 05033-002, São Paulo – SP" },
                  { icon: Clock, label: "Horário", value: "Seg – Sex: 9h às 18h" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground font-body">{item.label}</p>
                      <p className="text-foreground font-body font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents hint */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-heading text-sm font-semibold text-foreground mb-2">
                    Documentos para a Entrevista
                  </h4>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">
                    Não são obrigatórios, mas podem ser levados no dia:
                  </p>
                  <ul className="text-xs text-muted-foreground font-body mt-2 space-y-1">
                    <li>• TRCT (Termo de Rescisão do Contrato de Trabalho)</li>
                    <li>• RG e CPF ou CNH</li>
                    <li>• CTPS (Carteira Profissional)</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form
              onSubmit={handleSubmit}
              className="bg-card border border-border rounded-lg p-8 space-y-5"
            >
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                  Nome completo *
                </label>
                <input
                  type="text"
                  required
                  value={form.nome}
                  onChange={(e) => setForm({ ...form, nome: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder="Seu nome"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                  Telefone / Celular *
                </label>
                <input
                  type="tel"
                  required
                  value={form.telefone}
                  onChange={(e) => setForm({ ...form, telefone: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder="(00) 00000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                  Empresa e data de demissão
                </label>
                <input
                  type="text"
                  value={form.empresa}
                  onChange={(e) => setForm({ ...form, empresa: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition"
                  placeholder="Se aplicável"
                />
              </div>
              <div>
                <label className="block text-sm font-body font-medium text-foreground mb-1.5">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  value={form.mensagem}
                  onChange={(e) => setForm({ ...form, mensagem: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition resize-none"
                  placeholder="Descreva brevemente seu caso"
                />
              </div>
              <label className="flex items-start gap-2 text-xs text-muted-foreground font-body">
                <input type="checkbox" required className="mt-1 accent-gold" />
                <span>
                  Concordo com a{" "}
                  <a href="/privacidade" className="text-gold hover:underline">
                    Política de Privacidade
                  </a>{" "}
                  e autorizo o tratamento dos meus dados conforme a LGPD.
                </span>
              </label>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 bg-gold text-accent-foreground px-6 py-3.5 font-semibold rounded hover:bg-gold-dark transition-colors duration-300 tracking-wide"
              >
                <Send className="w-4 h-4" />
                Enviar pelo WhatsApp
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
