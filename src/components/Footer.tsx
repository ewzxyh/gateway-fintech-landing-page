import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const links = {
    produto: [
      { name: "Funcionalidades", href: "#funcionalidades" },
      { name: "Preços", href: "#precos" },
      { name: "API", href: "#api" },
      { name: "Documentação", href: "#docs" }
    ],
    empresa: [
      { name: "Sobre", href: "#sobre" },
      { name: "Blog", href: "#blog" },
      { name: "Carreiras", href: "#carreiras" },
      { name: "Contato", href: "https://wa.me/5585985562548" }
    ],
    suporte: [
      { name: "Central de Ajuda", href: "#ajuda" },
      { name: "Status", href: "#status" },
      { name: "Suporte Técnico", href: "https://wa.me/5585985562548" },
      { name: "Comunidade", href: "#comunidade" }
    ]
  };

  return (
    <footer className="py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <a href="#" className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="gradient-text">Case</span>
                <span className="text-foreground">Pay</span>
              </div>
            </a>
            
            <p className="text-muted-foreground max-w-md leading-relaxed">
              Transformando a forma como empresas brasileiras processam pagamentos digitais 
              com tecnologia de ponta e suporte excepcional.
            </p>

            <div className="flex space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-primary/10 transition-colors"
              >
                <Mail className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Produto</h3>
            <ul className="space-y-3">
              {links.produto.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Empresa</h3>
            <ul className="space-y-3">
              {links.empresa.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    {...(link.href.startsWith('http') && { rel: "noopener noreferrer" })}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Suporte</h3>
            <ul className="space-y-3">
              {links.suporte.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                    {...(link.href.startsWith('http') && { rel: "noopener noreferrer" })}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 CasePay. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="/termos-de-uso" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
            <a href="/politica-privacidade" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="/pld" className="hover:text-primary transition-colors">
              PLD
            </a>
            <a href="/manual-kyc" className="hover:text-primary transition-colors">
              Manual KYC
            </a>
            <a href="/politica-compliance" className="hover:text-primary transition-colors">
              Política de Compliance
            </a>
            <a href="/politica-seguranca" className="hover:text-primary transition-colors">
              Política de Segurança
            </a>
            <a href="/politica-antifraude" className="hover:text-primary transition-colors">
              Política Antifraude
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;