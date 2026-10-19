import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Delivery from "./pages/Delivery";
import Equipment from "./pages/Equipment";
import Garbage from "./pages/Garbage";
import Calculator from "./pages/Calculator";
import Contacts from "./pages/Contacts";
import Blog from "./pages/Blog";
import FAQ from "./pages/FAQ";
import LandingPage from "./pages/LandingPage";
import NotFound from "./pages/NotFound";
import { materialsGroup } from "./data/materials";
import { equipmentGroup } from "./data/equipmentItems";
import { garbageGroup } from "./data/garbageItems";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/delivery/:slug" element={<LandingPage group={materialsGroup} />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/equipment/:slug" element={<LandingPage group={equipmentGroup} />} />
          <Route path="/garbage" element={<Garbage />} />
          <Route path="/garbage/:slug" element={<LandingPage group={garbageGroup} />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/faq" element={<FAQ />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;