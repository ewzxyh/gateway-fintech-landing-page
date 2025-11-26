import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidade = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold gradient-text">
                Política de Privacidade
              </h1>
              <p className="text-muted-foreground">
                Última atualização: Janeiro de 2024
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Coleta de Dados</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Coletamos apenas os dados necessários para fornecer nossos serviços:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Dados de identificação (nome, CPF/CNPJ, email)</li>
                  <li>Informações bancárias para processamento</li>
                  <li>Dados de transações</li>
                  <li>Logs de acesso e uso da plataforma</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Uso dos Dados</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Utilizamos seus dados exclusivamente para fornecer nossos serviços de pagamento, 
                  cumprir obrigações legais e melhorar nossa plataforma.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Compartilhamento</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Não vendemos ou alugamos seus dados pessoais. Compartilhamos informações apenas 
                  com parceiros necessários para processar transações ou quando exigido por lei.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Segurança</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Implementamos medidas técnicas e organizacionais adequadas para proteger 
                  seus dados contra acesso não autorizado, alteração, divulgação ou destruição.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Seus Direitos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Conforme a LGPD, você tem o direito de acessar, corrigir, excluir ou 
                  portar seus dados. Entre em contato conosco para exercer esses direitos.
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

export default PoliticaPrivacidade;