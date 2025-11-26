import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import Dashboard from "@/components/Dashboard";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full glass-effect border border-primary/20 animate-fade-in-up">
                <span className="text-primary font-medium">// PLATAFORMA DE PAGAMENTOS</span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-fade-in-up [animation-delay:200ms]">
                Pagamentos{" "}
                <span className="gradient-text">otimizados</span> para
                impulsionar seu{" "}
                <span className="gradient-text">negócio digital</span>
              </h1>

              <p className="text-xl text-muted-foreground leading-relaxed animate-fade-in-up [animation-delay:400ms]">
                Junte-se à transformação das plataformas de pagamento com a EXEMPLO.
                Tenha controle total, taxas competitivas e integração simples
                para acelerar suas vendas no Pix e outros métodos de pagamento.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up [animation-delay:600ms]">
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
              >
                <Play className="mr-2 h-5 w-5" />
                Ver Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 animate-fade-in-up [animation-delay:800ms]">
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold gradient-text">500+</div>
                <div className="text-sm text-muted-foreground">Empresas ativas</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold gradient-text">R$ 10M+</div>
                <div className="text-sm text-muted-foreground">Processado</div>
              </div>
              <div className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-2xl font-bold gradient-text">99.9%</div>
                <div className="text-sm text-muted-foreground">Uptime</div>
              </div>
            </div>
          </div>

          <div className="relative animate-scale-in [animation-delay:400ms]">
            <div className="absolute inset-0 gradient-primary opacity-20 blur-3xl rounded-full animate-pulse-glow"></div>
            <div className="relative z-10 animate-float hover:scale-105 transition-transform duration-500">
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;