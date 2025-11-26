import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import TermosDeUso from "./pages/TermosDeUso";
import PoliticaPrivacidade from "./pages/PoliticaPrivacidade";
import PLD from "./pages/PLD";
import ManualKYC from "./pages/ManualKYC";
import PoliticaCompliance from "./pages/PoliticaCompliance";
import PoliticaSeguranca from "./pages/PoliticaSeguranca";
import PoliticaAntifraude from "./pages/PoliticaAntifraude";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/termos-de-uso" element={<TermosDeUso />} />
          <Route path="/politica-privacidade" element={<PoliticaPrivacidade />} />
          <Route path="/pld" element={<PLD />} />
          <Route path="/manual-kyc" element={<ManualKYC />} />
          <Route path="/politica-compliance" element={<PoliticaCompliance />} />
          <Route path="/politica-seguranca" element={<PoliticaSeguranca />} />
          <Route path="/politica-antifraude" element={<PoliticaAntifraude />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
