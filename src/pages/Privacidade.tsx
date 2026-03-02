import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacidade = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-28 pb-24 bg-background">
        <div className="container mx-auto px-6 max-w-3xl">
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">
            Política de Privacidade
          </h1>

          <div className="font-body text-muted-foreground space-y-6 leading-relaxed text-sm">
            <p>
              A <strong className="text-foreground">Alberto Santos Advogados Associados</strong> está comprometida 
              com a proteção dos dados pessoais de seus clientes e usuários, em conformidade com a 
              Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018).
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground pt-4">
              1. Dados Coletados
            </h2>
            <p>
              Coletamos apenas os dados necessários para a prestação dos nossos serviços: nome, telefone, 
              e-mail e informações relacionadas ao caso jurídico, fornecidos voluntariamente pelo usuário 
              através dos formulários de contato ou atendimento via WhatsApp.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground pt-4">
              2. Finalidade do Tratamento
            </h2>
            <p>
              Os dados são utilizados exclusivamente para: agendamento de consultas, atendimento jurídico, 
              comunicação com o cliente e cumprimento de obrigações legais.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground pt-4">
              3. Compartilhamento de Dados
            </h2>
            <p>
              Seus dados não são compartilhados com terceiros, exceto quando necessário para cumprimento 
              de determinação legal ou judicial.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground pt-4">
              4. Cookies
            </h2>
            <p>
              Este site utiliza cookies essenciais para o funcionamento e melhoria da experiência do usuário. 
              Você pode gerenciar as preferências de cookies através do seu navegador.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground pt-4">
              5. Direitos do Titular
            </h2>
            <p>
              Conforme a LGPD, você tem direito a: acessar, corrigir, eliminar seus dados pessoais, 
              revogar consentimento e solicitar portabilidade. Para exercer esses direitos, entre em 
              contato pelo e-mail contato@albertosantosadvogados.com.br.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground pt-4">
              6. Segurança
            </h2>
            <p>
              Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados pessoais 
              contra acessos não autorizados, destruição, perda ou alteração.
            </p>

            <h2 className="font-heading text-xl font-semibold text-foreground pt-4">
              7. Contato
            </h2>
            <p>
              Para dúvidas sobre esta política, entre em contato:<br />
              <strong className="text-foreground">E-mail:</strong> contato@albertosantosadvogados.com.br<br />
              <strong className="text-foreground">Telefone:</strong> (11) 3871-5386<br />
              <strong className="text-foreground">Endereço:</strong> Rua Guaicurus, 1133 – Água Branca, CEP 05033-002, São Paulo – SP
            </p>

            <p className="text-xs text-muted-foreground/70 pt-6 border-t border-border">
              Última atualização: Março de 2026.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Privacidade;
