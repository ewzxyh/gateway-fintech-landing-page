import { TrendingUp, TrendingDown, CreditCard, Smartphone, DollarSign, Users, BarChart3, PieChart } from "lucide-react";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main Dashboard Container */}
      <div className="bg-card border border-border rounded-2xl p-6 shadow-lg glass-effect">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold text-foreground">Dashboard</h2>
            <p className="text-muted-foreground">Visão geral das transações</p>
          </div>
          <div className="text-sm text-muted-foreground">
            14 ago 2024 - 21 ago 2024
          </div>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Vendido</p>
                <p className="text-2xl font-bold gradient-text">R$ 32.189,69</p>
              </div>
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Taxa Média</p>
                <p className="text-2xl font-bold text-secondary">R$ 75,12</p>
              </div>
              <BarChart3 className="h-8 w-8 text-secondary" />
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Pedidos Pagos</p>
                <p className="text-2xl font-bold gradient-text">463</p>
              </div>
              <Users className="h-8 w-8 text-primary" />
            </div>
          </Card>
          
          <Card className="p-4 bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Saldo Disponível</p>
                <p className="text-2xl font-bold text-secondary">R$ 124,96</p>
              </div>
              <DollarSign className="h-8 w-8 text-secondary" />
            </div>
          </Card>
        </div>

        {/* Bottom Section */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Financial Summary */}
          <Card className="p-5 glass-effect">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Resumo Financeiro</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 rounded-full border-4 border-primary/20"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-primary border-t-transparent animate-spin" style={{animationDuration: '3s'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">58%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pix</p>
                  <p className="font-semibold text-foreground">R$ 18.630,00</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="relative w-12 h-12">
                  <div className="absolute inset-0 rounded-full border-4 border-secondary/20"></div>
                  <div className="absolute inset-0 rounded-full border-4 border-secondary border-t-transparent" style={{transform: 'rotate(45deg)'}}></div>
                  <div className="absolute inset-0 flex items-center justify-center animate-scale-in">
                    <span className="text-xs font-bold text-secondary animate-fade-in">42%</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Cartão</p>
                  <p className="font-semibold text-foreground">R$ 13.559,69</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Payment Methods */}
          <Card className="p-5 glass-effect">
            <h3 className="text-lg font-semibold mb-4 text-foreground">Métodos de Pagamento</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Smartphone className="h-4 w-4 text-primary" />
                  <span className="text-sm text-foreground">Pix</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-3/5 h-full bg-gradient-primary rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">58%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-4 w-4 text-secondary" />
                  <span className="text-sm text-foreground">Cartão Crédito</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-2/5 h-full bg-secondary rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">42%</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <PieChart className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-foreground">Boleto</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-0 h-full bg-muted-foreground rounded-full"></div>
                  </div>
                  <span className="text-sm font-medium text-foreground">0%</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-primary rounded-full opacity-20 blur-xl animate-pulse-glow"></div>
      <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-primary rounded-full opacity-30 blur-lg animate-pulse-glow [animation-delay:1s]"></div>
    </div>
  );
};

export default Dashboard;