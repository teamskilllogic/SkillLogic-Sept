
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Service from "./pages/Service";
import Services from "./pages/services/services";

const queryClient = new QueryClient();

const App = () => {
  const phoneNumbers = {
    primary: "8318943040",
    secondary: "9125138209"
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/service" element={<Service />} />
              <Route path="/services" element={<Services />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <WhatsAppFloat phoneNumbers={phoneNumbers} />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
