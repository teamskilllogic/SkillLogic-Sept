import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Home } from "./pages/home/home";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Service from "./pages/Service";
import Services from "./pages/services/services";
import TestimonialsPage from "./pages/Testimonials/testimonials";
import About from "./pages/about/about";
import Contact from "./pages/contact/Contact";
import WhatsAppFloat from "@/components/common/float/floatcontactbtn";
import ScrollToTop from "@/components/common/float/scrolltotop";
const queryClient = new QueryClient();

const App = () => {
  const phoneNumbers = {
    primary: "8318943040",
    secondary: "9125138209",
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter
            future={{
              v7_startTransition: true,
              v7_relativeSplatPath: true,
            }}
          >
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/service" element={<Service />} />
              <Route path="/services" element={<Services />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/home" element={<Home />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <WhatsAppFloat phoneNumbers={phoneNumbers} />
            <ScrollToTop />
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
