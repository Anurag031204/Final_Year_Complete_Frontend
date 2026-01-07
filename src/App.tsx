// App.tsx
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ErrorBoundary from "@/components/ErrorBoundary";

import Index from "./pages/Index";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

// Dashboard pages
import DashboardOverview from "./pages/dashboard/Overview";
import Balances from "./pages/dashboard/Balances";
import Transactions from "./pages/dashboard/Transactions";
import Bills from "./pages/dashboard/Bills";
import Expenses from "./pages/dashboard/Expenses";
import Goals from "./pages/dashboard/Goals";
import Settings from "./pages/dashboard/Settings";

const queryClient = new QueryClient();

const App = () => (
  <ErrorBoundary>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />

          {/* Auth */}
          <Route path="/login" element={<Login mode="login" />} />
          <Route path="/signup" element={<Login mode="signup" />} />

          {/* Dashboard Routes */}
          <Route path="/dashboard" element={<DashboardOverview />} />
          <Route path="/dashboard/balances" element={<Balances />} />
          <Route path="/dashboard/transactions" element={<Transactions />} />
          <Route path="/dashboard/bills" element={<Bills />} />
          <Route path="/dashboard/expenses" element={<Expenses />} />
          <Route path="/dashboard/goals" element={<Goals />} />
          <Route path="/dashboard/settings" element={<Settings />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ErrorBoundary>
);

export default App;
