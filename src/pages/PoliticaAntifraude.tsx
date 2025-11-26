import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaAntifraude = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold gradient-text">
                Política Antifraude
              </h1>
              <p className="text-muted-foreground">
                Última atualização: Janeiro de 2024
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Compromisso</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A EXEMPLO mantém tolerância zero à fraude e implementa controles
                  rigorosos para proteger nossos clientes e parceiros contra
                  atividades fraudulentas.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Sistema de Detecção</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Utilizamos tecnologias avançadas para identificar fraudes:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Machine Learning para análise de padrões</li>
                  <li>Monitoramento em tempo real</li>
                  <li>Análise comportamental de usuários</li>
                  <li>Verificação de geolocalização</li>
                  <li>Validação de dispositivos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Tipos de Fraude Monitoradas</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Uso de cartões clonados ou roubados</li>
                  <li>Chargeback fraudulento</li>
                  <li>Criação de contas falsas</li>
                  <li>Transações não autorizadas</li>
                  <li>Lavagem de dinheiro</li>
                  <li>Phishing e engenharia social</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Medidas Preventivas</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Verificação de Identidade:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>KYC rigoroso no onboarding</li>
                    <li>Verificação biométrica</li>
                    <li>Validação de documentos</li>
                  </ul>

                  <h3 className="text-lg font-semibold mt-6">Controles de Transação:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>Limites dinâmicos baseados no perfil</li>
                    <li>Autenticação forte para transações</li>
                    <li>Análise de risco em tempo real</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Resposta a Incidentes</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Quando uma fraude é detectada, nossa equipe especializada age
                  imediatamente para bloquear a atividade suspeita, proteger
                  os fundos e investigar o incidente em colaboração com
                  autoridades competentes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">6. Educação e Prevenção</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Oferecemos recursos educacionais para nossos clientes sobre
                  como identificar e evitar tentativas de fraude, incluindo
                  dicas de segurança e alertas sobre novas ameaças.
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

export default PoliticaAntifraude;