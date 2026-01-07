import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Wallet,
  ArrowLeftRight,
  Receipt,
  CreditCard,
  Target,
  Settings,
  LogOut,
  Shield,
  Bell,
  Search,
  ChevronRight,
  ChevronLeft,
  MoreVertical,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const location = useLocation();

  const menuItems = [
    { icon: LayoutDashboard, label: "Overview", path: "/dashboard" },
    { icon: Wallet, label: "Balances", path: "/dashboard/balances" },
    { icon: ArrowLeftRight, label: "Transactions", path: "/dashboard/transactions" },
    { icon: Receipt, label: "Bills", path: "/dashboard/bills" },
    { icon: CreditCard, label: "Expenses", path: "/dashboard/expenses" },
    { icon: Target, label: "Goals", path: "/dashboard/goals" },
    { icon: Settings, label: "Settings", path: "/dashboard/settings" },
  ];

  return (
    <div className="flex min-h-screen bg-muted/40">
      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 z-40 h-screen border-r border-border bg-slate-950 text-slate-50 transition-all duration-300 ${sidebarCollapsed ? "w-20" : "w-64"
          }`}
      >
        <div className="flex h-full flex-col p-4">
          {/* Logo */}
          <div className="mb-8 flex items-center gap-2 px-2">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-500">
              <Shield className="h-5 w-5 text-slate-950" />
            </div>
            {!sidebarCollapsed && (
              <span className="font-heading text-lg font-semibold text-slate-50">
                <span className="text-teal-400">SPENDIFY</span>
              </span>
            )}
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors ${isActive
                      ? "bg-teal-500/15 text-teal-300"
                      : "text-slate-300/80 hover:bg-slate-800 hover:text-slate-50"
                    }`}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {!sidebarCollapsed && (
                    <span className="text-body-sm font-medium">{item.label}</span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <Link
            to="/"
            className="mt-2 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-rose-400 transition-colors hover:bg-rose-500/10 hover:text-rose-300"
          >

            <LogOut className="h-5 w-5 flex-shrink-0" />
            {!sidebarCollapsed && (
              <span className="text-body-sm font-medium">Logout</span>
            )}
          </Link>

          {/* User Profile */}
          <div className="mt-4 border-t border-slate-800 pt-4">
            <div className="flex items-center gap-3 px-2">
              <Avatar className="h-10 w-10">
                <AvatarImage src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100" />
                <AvatarFallback>AN</AvatarFallback>
              </Avatar>
              {!sidebarCollapsed && (
                <>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-body-sm font-medium text-slate-50">
                      Anurag
                    </p>
                    <p className="text-xs text-slate-400">View profile</p>
                  </div>
                  <button className="text-slate-400 hover:text-slate-100">
                    <MoreVertical className="h-4 w-4" />
                  </button>
                </>
              )}
            </div>
          </div>

          {/* Collapse Toggle */}
          <button
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="absolute -right-3 top-20 hidden h-6 w-6 items-center justify-center rounded-full bg-teal-500 text-slate-950 shadow-lg lg:flex"
          >
            {sidebarCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className={`flex-1 overflow-auto p-4 lg:p-8 transition-all duration-300 ${sidebarCollapsed ? "ml-20" : "ml-64"}`}>
        {/* Top Bar */}
        <div className="mb-6 flex items-center justify-end gap-4">
          <button className="relative rounded-full p-2 text-muted-foreground transition-colors hover:bg-card hover:text-foreground">
            <Bell className="h-5 w-5" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-teal-400" />
          </button>
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search"
              className="w-48 bg-card pl-9 text-sm md:w-64"
            />
          </div>
        </div>

        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
