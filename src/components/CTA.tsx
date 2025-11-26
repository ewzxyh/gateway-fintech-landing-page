import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="relative animate-scale-in">
          <div className="absolute inset-0 gradient-primary opacity-10 blur-3xl rounded-3xl animate-pulse-glow"></div>

          <div className="relative glass-effect rounded-3xl border border-white/10 p-12 text-center hover:border-primary/20 transition-all duration-500">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="space-y-4 animate-fade-in-up">
                <h2 className="text-4xl lg:text-5xl font-bold">
                  Pronto para <span className="gradient-text">revolucionar</span> seus pagamentos?
                </h2>

                <p className="text-xl text-muted-foreground">
                  Junte-se a centenas de empresas que já confiam na EXEMPLO para
                  processar seus pagamentos com segurança e eficiência.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:200ms]">
                <Button
                  size="lg"
                  className="gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 group animate-pulse-glow"
                  asChild
                >
                  <a href="https://app.gateway.app/register" rel="noopener noreferrer">
                    Criar Conta Gratuita
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/20 bg-transparent hover:bg-primary/10 hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="https://wa.me/5585985562548" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Falar com Especialista
                  </a>
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/10">
                {[
                  { value: "5 min", label: "Para integrar" },
                  { value: "Grátis", label: "Para começar" },
                  { value: "24/7", label: "Suporte" }
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`text-center animate-fade-in-up hover:scale-110 transition-transform duration-300`}
                    style={{
                      animationDelay: `${400 + (index * 100)}ms`
                    }}
                  >
                    <div className="text-2xl font-bold gradient-text mb-1">{item.value}</div>
                    <div className="text-sm text-muted-foreground">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;