import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaSeguranca = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold gradient-text">
                Política de Segurança Cibernética
              </h1>
              <p className="text-muted-foreground">
                Última atualização: Janeiro de 2024
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Objetivo</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Estabelecer diretrizes para proteção dos ativos digitais, dados e 
                  sistemas da CasePay contra ameaças cibernéticas, garantindo a 
                  confidencialidade, integridade e disponibilidade das informações.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Medidas de Proteção</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Infraestrutura:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Firewall de aplicação web (WAF)</li>
                    <li>Criptografia AES-256 para dados em repouso</li>
                    <li>TLS 1.3 para dados em trânsito</li>
                    <li>Autenticação multifator obrigatória</li>
                    <li>Monitoramento 24/7 de ameaças</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mt-6">Desenvolvimento:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Secure Development Lifecycle (SDL)</li>
                    <li>Testes de penetração regulares</li>
                    <li>Code review automatizado</li>
                    <li>Análise de vulnerabilidades</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Gestão de Incidentes</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Mantemos um plano de resposta a incidentes que inclui:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Detecção e classificação de incidentes</li>
                  <li>Contenção e erradicação de ameaças</li>
                  <li>Recuperação de sistemas</li>
                  <li>Análise pós-incidente</li>
                  <li>Comunicação às autoridades quando necessário</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Conformidade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa segurança está alinhada com padrões internacionais como 
                  ISO 27001, PCI DSS e diretrizes do Banco Central do Brasil 
                  para instituições de pagamento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Treinamento</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Todos os colaboradores recebem treinamento regular sobre 
                  segurança da informação, incluindo identificação de phishing, 
                  proteção de credenciais e boas práticas de segurança.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PoliticaSeguranca;