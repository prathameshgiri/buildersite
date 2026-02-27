import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import PremiumProjects from "./pages/PremiumProjects";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import WebsiteDesignDevelopment from "./pages/services/WebsiteDesignDevelopment";
import FrontendDevelopment from "./pages/services/FrontendDevelopment";
import BackendDevelopment from "./pages/services/BackendDevelopment";
import FullStackDevelopment from "./pages/services/FullStackDevelopment";
import EcommerceDevelopment from "./pages/services/EcommerceDevelopment";
import WebAppDevelopment from "./pages/services/WebAppDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";
import WebsiteMaintenanceSupport from "./pages/services/WebsiteMaintenanceSupport";
import SEOPerformanceOptimization from "./pages/services/SEOPerformanceOptimization";

const queryClient = new QueryClient();

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/premium-projects" element={<PremiumProjects />} />
            <Route
              path="/services/website-design"
              element={<WebsiteDesignDevelopment />}
            />
            <Route
              path="/services/frontend"
              element={<FrontendDevelopment />}
            />
            <Route path="/services/backend" element={<BackendDevelopment />} />
            <Route
              path="/services/full-stack"
              element={<FullStackDevelopment />}
            />
            <Route
              path="/services/ecommerce"
              element={<EcommerceDevelopment />}
            />
            <Route path="/services/web-app" element={<WebAppDevelopment />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route
              path="/services/maintenance"
              element={<WebsiteMaintenanceSupport />}
            />
            <Route
              path="/services/seo-performance"
              element={<SEOPerformanceOptimization />}
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
