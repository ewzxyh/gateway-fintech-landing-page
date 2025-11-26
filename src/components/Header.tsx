import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#" className="flex items-center group cursor-pointer">
            <div className="text-xl font-bold">
              <span className="gradient-text">Case</span>
              <span className="text-foreground">Pay</span>
            </div>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#funcionalidades" className="text-muted-foreground hover:text-primary transition-colors">
              Funcionalidades
            </a>
            <a href="#beneficios" className="text-muted-foreground hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#precos" className="text-muted-foreground hover:text-primary transition-colors">
              Preços
            </a>
            <a href="https://wa.me/5585985562548" className="text-muted-foreground hover:text-primary transition-colors" rel="noopener noreferrer">
              Contato
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button 
              variant="ghost" 
              className="text-foreground hover:text-primary"
              asChild
            >
              <a href="https://app.casepay.app/login"  rel="noopener noreferrer">
                Login
              </a>
            </Button>
            <Button 
              variant="default" 
              className="gradient-primary hover:opacity-90 transition-opacity"
              asChild
            >
              <a href="https://app.casepay.app/register"  rel="noopener noreferrer">
                Criar Conta
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;