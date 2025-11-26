import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaCompliance = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold gradient-text">
                Política de Compliance
              </h1>
              <p className="text-muted-foreground">
                Última atualização: Janeiro de 2024
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Objetivo</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Esta política estabelece as diretrizes para garantir que todas as atividades 
                  da CasePay estejam em conformidade com as leis, regulamentações e normas 
                  aplicáveis ao setor de pagamentos.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Princípios do Compliance</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Integridade em todas as operações</li>
                  <li>Transparência nos processos</li>
                  <li>Responsabilidade corporativa</li>
                  <li>Conformidade regulatória</li>
                  <li>Melhoria contínua</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Área de Compliance</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A área de Compliance da CasePay é responsável por:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Monitorar mudanças regulatórias</li>
                  <li>Implementar políticas e procedimentos</li>
                  <li>Realizar treinamentos</li>
                  <li>Conduzir auditorias internas</li>
                  <li>Reportar não conformidades</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Regulamentações Aplicáveis</h2>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Lei 9.613/98 (Lei de Lavagem de Dinheiro)</li>
                  <li>Lei 13.709/18 (LGPD)</li>
                  <li>Resoluções do Banco Central</li>
                  <li>Normas do COAF</li>
                  <li>Regulamentações da CVM</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Canal de Denúncias</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mantemos um canal confidencial para reportar violações ou suspeitas 
                  de não conformidade. Todas as denúncias são investigadas com sigilo 
                  e imparcialidade.
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

export default PoliticaCompliance;