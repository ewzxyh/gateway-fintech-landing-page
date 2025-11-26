import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermosDeUso = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl lg:text-5xl font-bold gradient-text">
                Termos de Uso
              </h1>
              <p className="text-muted-foreground">
                Última atualização: Janeiro de 2024
              </p>
            </div>

            <div className="glass-effect rounded-2xl p-8 space-y-6">
              <section>
                <h2 className="text-2xl font-bold mb-4">1. Aceitação dos Termos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ao utilizar os serviços da EXEMPLO, você concorda em cumprir e estar legalmente
                  vinculado a estes Termos de Uso. Se você não concordar com qualquer parte
                  destes termos, não deve usar nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">2. Descrição dos Serviços</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  A EXEMPLO oferece soluções de pagamento digital, incluindo:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Processamento de transações Pix</li>
                  <li>Gateway de pagamentos por cartão</li>
                  <li>API de integração</li>
                  <li>Dashboard de gestão</li>
                  <li>Relatórios e analytics</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">3. Responsabilidades do Usuário</h2>
                <p className="text-muted-foreground leading-relaxed">
                  O usuário é responsável por manter a segurança de suas credenciais de acesso,
                  fornecer informações precisas e cumprir todas as leis aplicáveis ao usar
                  nossos serviços.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">4. Taxas e Pagamentos</h2>
                <p className="text-muted-foreground leading-relaxed">
                  As taxas aplicáveis aos serviços estão disponíveis em nossa página de preços
                  e podem ser alteradas mediante aviso prévio de 30 dias.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold mb-4">5. Limitação de Responsabilidade</h2>
                <p className="text-muted-foreground leading-relaxed">
                  A EXEMPLO não será responsável por danos indiretos, incidentais ou
                  consequenciais decorrentes do uso de nossos serviços.
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

export default TermosDeUso;