
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/components/AuthProvider";
import Dashboard from "./pages/Dashboard";
import AnalysisDashboard from "./pages/AnalysisDashboard";
import UnifiedDashboard from "./pages/UnifiedDashboard";
import SegmentedDashboard from "./pages/SegmentedDashboard";
import OrcamentosAnalysis from "./pages/OrcamentosAnalysis";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard/:analysisId" element={<UnifiedDashboard />} />
            <Route path="/dashboard/:analysisId/:segmento" element={<SegmentedDashboard />} />
            <Route path="/orcamentos/:analysisId" element={<OrcamentosAnalysis />} />
            <Route path="/auth" element={<Auth />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;