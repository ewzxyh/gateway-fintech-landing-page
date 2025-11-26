import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PLD = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold gradient-text">
                Prevenção à Lavagem de Dinheiro (PLD)
              </h1>
              <p className="text-muted-foreground">
                Última atualização: Janeiro de 2024
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Compromisso com a PLD</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A EXEMPLO está comprometida com o combate à lavagem de dinheiro e financiamento
                  ao terrorismo, cumprindo integralmente as leis brasileiras e melhores
                  práticas internacionais.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Monitoramento de Transações</h2>
                <p className="text-muted-forerado leading-relaxed mb-4">
                  Implementamos sistemas automatizados para monitorar:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Transações suspeitas ou incomuns</li>
                  <li>Padrões de movimentação atípicos</li>
                  <li>Operações acima de limites estabelecidos</li>
                  <li>Verificação em listas restritivas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Procedimentos KYC</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Aplicamos rigorosos procedimentos de Conheça Seu Cliente (KYC) para
                  verificar a identidade e legitimidade de nossos usuários antes de
                  autorizar transações.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Comunicação às Autoridades</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Reportamos ao COAF (Conselho de Controle de Atividades Financeiras)
                  todas as operações suspeitas identificadas em nosso monitoramento.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Treinamento e Capacitação</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Nossa equipe recebe treinamento contínuo sobre PLD/FT para manter
                  a eficácia de nossos controles e procedimentos.
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

export default PLD;