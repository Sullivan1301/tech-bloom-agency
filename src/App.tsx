import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Analytics from "@/components/Analytics";
import PersistentFlower from "@/components/PersistentFlower";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import FlowerEasterEgg from "@/components/FlowerEasterEgg";
import PageTransition from "@/components/PageTransition";
import DarkModeFlower from "@/components/DarkModeFlower";
import Index from "./pages/Index";
import Services from "./pages/Services";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Tarifs from "./pages/Tarifs";
import MentionsLegales from "./pages/MentionsLegales";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Analytics />
      <CustomCursor />
      <ScrollProgressBar />
      <FlowerEasterEgg />
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <PageTransition>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/realisations" element={<Portfolio />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/tarifs" element={<Tarifs />} />
            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
        <PersistentFlower />
        <DarkModeFlower />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
