import { Button } from "@/components/ui/button";
import { Check, TrendingUp, Clock, DollarSign } from "lucide-react";

const Benefits = () => {
  const benefits = [
    "Taxa negociável a partir de 2,99%",
    "Integração em menos de 5 minutos",
    "Suporte técnico especializado",
    "Dashboard intuitivo e completo",
    "API RESTful documentada",
    "Webhook em tempo real",
    "Análise de risco automática",
    "Compliance total com LGPD"
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "98.5%",
      label: "Taxa de aprovação",
      description: "Alta conversão em pagamentos"
    },
    {
      icon: Clock,
      value: "< 2s",
      label: "Tempo de resposta",
      description: "API ultra rápida"
    },
    {
      icon: DollarSign,
      value: "2,99%",
      label: "Taxa a partir de",
      description: "Preço justo e competitivo"
    }
  ];

  return (
    <section id="beneficios" className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <div className="inline-block px-4 py-2 rounded-full glass-effect border border-primary/20">
                <span className="text-primary font-medium">// BENEFÍCIOS</span>
              </div>

              <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
                Por que escolher a{" "}
                <span className="gradient-text">EXEMPLO</span>?
              </h2>

              <p className="text-xl text-muted-foreground leading-relaxed">
                Oferecemos a melhor experiência em pagamentos digitais
                com tecnologia de ponta e suporte excepcional.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`flex items-center space-x-3 animate-fade-in-up`}
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center flex-shrink-0">
                    <Check className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="gradient-primary hover:opacity-90 transition-all duration-300 hover:scale-105 animate-pulse-glow animate-fade-in-up [animation-delay:500ms]"
            >
              Começar Agora
            </Button>
          </div>

          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl glass-effect border border-white/10 hover:border-primary/20 transition-all duration-300 hover:scale-105 animate-fade-in-up`}
                style={{
                  animationDelay: `${300 + (index * 150)}ms`
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center group-hover:animate-pulse-glow">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>

                  <div>
                    <div className="text-3xl font-bold gradient-text mb-1">
                      {stat.value}
                    </div>
                    <div className="text-lg font-semibold text-foreground mb-1">
                      {stat.label}
                    </div>
                    <div className="text-muted-foreground">
                      {stat.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;