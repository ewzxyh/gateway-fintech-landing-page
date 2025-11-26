import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ManualKYC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold gradient-text">
                Manual KYC
              </h1>
              <p className="text-muted-foreground">
                Know Your Customer - Conheça Seu Cliente
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. O que é KYC?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  KYC (Know Your Customer) é um processo obrigatório de verificação da 
                  identidade dos clientes para prevenir fraudes, lavagem de dinheiro 
                  e financiamento ao terrorismo.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Documentos Necessários</h2>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold">Pessoa Física:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>CPF</li>
                    <li>RG ou CNH</li>
                    <li>Comprovante de residência (até 3 meses)</li>
                    <li>Selfie com documento</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold mt-6">Pessoa Jurídica:</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                    <li>CNPJ</li>
                    <li>Contrato Social</li>
                    <li>Comprovante de endereço da empresa</li>
                    <li>Documentos dos sócios/representantes legais</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Processo de Verificação</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold">Envio de Documentos</h4>
                      <p className="text-muted-foreground text-sm">Upload dos documentos através da plataforma</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold">Análise Automatizada</h4>
                      <p className="text-muted-foreground text-sm">Verificação automática dos dados e documentos</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold">Revisão Manual</h4>
                      <p className="text-muted-foreground text-sm">Análise por nossa equipe especializada</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h4 className="font-semibold">Aprovação</h4>
                      <p className="text-muted-foreground text-sm">Liberação da conta para uso completo</p>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Tempo de Análise</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O processo de KYC é concluído em até 24 horas úteis para a maioria dos casos. 
                  Documentos com inconsistências podem requerer tempo adicional.
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

export default ManualKYC;