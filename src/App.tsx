import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Suspense, useEffect } from "react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import WhatsAppFloat from "@/components/common/float/floatcontactbtn";
import ScrollToTop from "@/components/common/float/scrolltotop";
import ErrorBoundary from "./components/ErrorBoundary";
import PerformanceMonitor, { preloadCriticalResources, detectMemoryLeaks } from "./utils/performance";
import {
    LazyHome,
    LazyAbout,
    LazyServices,
    LazyService,
    LazyTestimonialsPage,
    LazyContact,
    LazyPortfolio,
    BrandedPageLoader
} from "./utils/lazyComponents";
const queryClient = new QueryClient();

const App = () => {
    const phoneNumbers = {
        primary: "8318943040",
        secondary: "9125138209",
    };

    useEffect(() => {
        // Initialize performance monitoring
        new PerformanceMonitor();

        // Preload critical resources
        preloadCriticalResources();

        // Detect memory leaks in development
        detectMemoryLeaks();
    }, []);

    return (
        <ErrorBoundary>
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
                                <Route path="/service" element={
                                    <Suspense fallback={<BrandedPageLoader />}>
                                        <LazyService />
                                    </Suspense>
                                } />
                                <Route path="/services" element={
                                    <Suspense fallback={<BrandedPageLoader />}>
                                        <LazyServices />
                                    </Suspense>
                                } />
                                <Route path="/testimonials" element={
                                    <Suspense fallback={<BrandedPageLoader />}>
                                        <LazyTestimonialsPage />
                                    </Suspense>
                                } />
                                <Route path="/about" element={
                                    <Suspense fallback={<BrandedPageLoader />}>
                                        <LazyAbout />
                                    </Suspense>
                                } />
                                <Route path="/home" element={
                                    <Suspense fallback={<BrandedPageLoader />}>
                                        <LazyHome />
                                    </Suspense>
                                } />
                                <Route path="/contact" element={
                                    <Suspense fallback={<BrandedPageLoader />}>
                                        <LazyContact />
                                    </Suspense>
                                } />
                                <Route path="/portfolio" element={
                                    <Suspense fallback={<BrandedPageLoader />}>
                                        <LazyPortfolio />
                                    </Suspense>
                                } />
                                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                            <WhatsAppFloat phoneNumbers={phoneNumbers} />
                            <ScrollToTop />
                        </BrowserRouter>
                    </TooltipProvider>
                </ThemeProvider>
            </QueryClientProvider>
        </ErrorBoundary>
    );
};

export default App;
