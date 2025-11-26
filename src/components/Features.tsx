import { 
  Shield, 
  Zap, 
  BarChart3, 
  Headphones, 
  CreditCard, 
  Globe 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Segurança Total",
      description: "Protocolo de segurança bancária com criptografia de ponta e conformidade PCI DSS."
    },
    {
      icon: Zap,
      title: "Checkout Rápido",
      description: "Integração em segundos com nossa API intuitiva. Comece a aceitar pagamentos hoje mesmo."
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Relatórios em tempo real e insights para otimizar suas conversões e receita."
    },
    {
      icon: Headphones,
      title: "Suporte 24/7",
      description: "Equipe especializada disponível sempre que você precisar, com chat ao vivo."
    },
    {
      icon: CreditCard,
      title: "Múltiplos Métodos",
      description: "Pix, cartão de crédito, débito, boleto e PIX parcelado em uma só plataforma."
    },
    {
      icon: Globe,
      title: "API Global",
      description: "Documentação completa e SDK para todas as linguagens de programação populares."
    }
  ];

  return (
    <section id="funcionalidades" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-2 rounded-full glass-effect border border-secondary/20">
            <span className="text-secondary font-medium">// FUNCIONALIDADES</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            Uma plataforma <span className="gradient-text">completa</span> e 
            otimizada para potencializar seus resultados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tudo que você precisa para aceitar pagamentos digitais de forma segura, 
            rápida e eficiente em um só lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`group p-8 rounded-2xl glass-effect border border-white/10 hover:border-primary/20 transition-all duration-300 hover:scale-105 animate-fade-in-up`}
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mb-6 group-hover:animate-pulse-glow">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;