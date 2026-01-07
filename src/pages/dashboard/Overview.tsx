import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  ChevronRight,
  TrendingUp,
  TrendingDown,
  Gamepad2,
  Shirt,
  Utensils,
  TramFront,
  Keyboard,
  Home,
  ShoppingBag,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const recentTransactions = [
  {
    icon: Gamepad2,
    name: "GTR 5",
    category: "Gadget & Gear",
    amount: "₹1,600.00",
    date: "17 May 2025",
  },
  {
    icon: Shirt,
    name: "Polo Shirt",
    category: "XL fashions",
    amount: "₹200.00",
    date: "17 May 2025",
  },
  {
    icon: Utensils,
    name: "Biriyani",
    category: "Hajir Biriyani",
    amount: "₹1,000.00",
    date: "17 May 2025",
  },
  {
    icon: TramFront,
    name: "Taxi Fare",
    category: "Uber",
    amount: "₹1,120.00",
    date: "17 May 2025",
  },
  {
    icon: Keyboard,
    name: "Keyboard",
    category: "Gadget & Gear",
    amount: "₹2,200.00",
    date: "17 May 2025",
  },
];

const upcomingBills = [
  { name: "Figma", plan: "Figma - Monthly", date: "May 15", amount: "₹150" },
  { name: "Adobe", plan: "Adobe - Yearly", date: "Jun 16", amount: "₹590" },
];

const expensesBreakdown = [
  { icon: Home, category: "Housing", amount: "₹250.00", change: 15, up: true },
  { icon: Utensils, category: "Food", amount: "₹350.00", change: 8, up: false },
  {
    icon: TramFront,
    category: "Transportation",
    amount: "₹50.00",
    change: 12,
    up: false,
  },
  {
    icon: Gamepad2,
    category: "Entertainment",
    amount: "₹80.00",
    change: 15,
    up: false,
  },
  {
    icon: ShoppingBag,
    category: "Shopping",
    amount: "₹420.00",
    change: 25,
    up: true,
  },
  { icon: Package, category: "Others", amount: "₹650.00", change: 23, up: true },
];

const DashboardOverview = () => {
  return (
    <DashboardLayout>
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-heading text-2xl text-foreground md:text-3xl">
          Hello Anurag
        </h1>
        <p className="flex items-center gap-2 text-body-sm text-muted-foreground">
          <ChevronRight className="h-4 w-4" />
          May 19, 2025
        </p>
      </div>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Total Balance */}
        <div className="card-elevated rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-body text-muted-foreground">Total balance</h3>
            <span className="text-body-sm text-muted-foreground">
              All accounts
            </span>
          </div>
          <p className="mb-6 font-heading text-3xl font-bold text-foreground">
            ₹2,40,399
          </p>

          {/* Credit Card */}
          <div className="rounded-xl bg-gradient-to-r from-teal-500 via-teal-400 to-teal-600 p-4 text-white">
            <p className="text-xs opacity-80">Account type</p>
            <p className="font-medium">Credit card</p>
            <p className="mt-2 text-sm opacity-80">**** **** **** 2598</p>
            <div className="mt-4 flex items-center justify-between">
              <p className="font-semibold">₹25,000</p>
              <div className="flex gap-2">
                <div className="h-6 w-6 rounded-full bg-yellow-500 opacity-80" />
                <div className="-ml-3 h-6 w-6 rounded-full bg-red-500 opacity-80" />
              </div>
            </div>
          </div>
        </div>

        {/* Goals */}
        <div className="card-elevated rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-body text-muted-foreground">Goals</h3>
            <span className="text-body-sm text-muted-foreground">
              May, 2025
            </span>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-body-sm text-muted-foreground">
                Target achieved
              </span>
              <span className="font-heading text-xl font-semibold text-foreground">
                ₹12,500
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-body-sm text-muted-foreground">
                This month target
              </span>
              <span className="font-heading text-xl font-semibold text-foreground">
                ₹20,000
              </span>
            </div>
          </div>

          {/* Progress Circle */}
          <div className="mt-6 flex justify-center">
            <div className="relative h-32 w-32">
              <svg className="h-full w-full" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--border))"
                  strokeWidth="8"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  fill="none"
                  stroke="hsl(var(--primary))"
                  strokeWidth="8"
                  strokeDasharray={`${62.5 * 2.51} 251`}
                  strokeLinecap="round"
                  transform="rotate(-90 50 50)"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-heading text-xl font-bold text-foreground">
                  12K
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Bills */}
        <div className="card-elevated rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-body text-muted-foreground">Upcoming bills</h3>
            <button className="text-body-sm font-medium text-teal-600 hover:text-teal-700 hover:underline">
              View all
            </button>
          </div>

          <div className="space-y-4">
            {upcomingBills.map((bill) => {
              const [month, day] = bill.date.split(" ");
              return (
                <div
                  key={bill.name}
                  className="flex items-center gap-4 rounded-lg bg-muted p-3 transition-colors hover:bg-background"
                >
                  <div className="text-center">
                    <p className="text-xs text-muted-foreground">{month}</p>
                    <p className="font-heading text-xl font-bold text-foreground">
                      {day}
                    </p>
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{bill.name}</p>
                    <p className="text-body-sm text-muted-foreground">
                      {bill.plan}
                    </p>
                  </div>
                  <p className="font-heading font-semibold text-foreground">
                    {bill.amount}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="card-elevated rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-body font-medium text-foreground">
              Recent transactions
            </h3>
            <button className="inline-flex items-center gap-1 text-body-sm font-medium text-teal-600 hover:text-teal-700 hover:underline">
              View all <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          {/* Tabs */}
          <div className="mb-4 inline-flex gap-2 rounded-full bg-muted/70 p-1">
            <button className="rounded-full bg-background px-4 py-1.5 text-body-sm font-medium text-teal-600 shadow-sm">
              All
            </button>
            <button className="rounded-full px-4 py-1.5 text-body-sm text-muted-foreground transition-colors hover:bg-background hover:text-foreground">
              Revenue
            </button>
            <button className="rounded-full px-4 py-1.5 text-body-sm text-muted-foreground transition-colors hover:bg-background hover:text-foreground">
              Expenses
            </button>
          </div>

          <div className="space-y-3">
            {recentTransactions.map((tx) => {
              const Icon = tx.icon;
              return (
                <div
                  key={tx.name}
                  className="flex items-center gap-3 py-2"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-teal-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-foreground">{tx.name}</p>
                    <p className="text-body-sm text-muted-foreground">
                      {tx.category}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-foreground">
                      {tx.amount}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {tx.date}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Statistics */}
        <div className="card-elevated rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-body font-medium text-foreground">
              Statistics
            </h3>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-body-sm">
                <span className="h-3 w-3 rounded-sm bg-foreground" /> This
                week
              </span>
              <span className="flex items-center gap-2 text-body-sm text-muted-foreground">
                <span className="h-3 w-3 rounded-sm bg-muted" /> Last week
              </span>
            </div>
          </div>

          <p className="mb-4 text-body-sm text-muted-foreground">
            Weekly comparison
          </p>

          {/* Simple Bar Chart */}
          <div className="flex h-48 items-end justify-between gap-2">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, i) => {
              const heights = [30, 60, 45, 70, 55, 80, 40];
              const heights2 = [20, 40, 35, 50, 45, 60, 30];
              return (
                <div
                  key={day}
                  className="flex flex-1 flex-col items-center gap-2"
                >
                  <div className="flex h-40 w-full items-end justify-center gap-1">
                    <div
                      className="h-full w-3 rounded-t bg-foreground"
                      style={{ height: `${heights[i]}%` }}
                    />
                    <div
                      className="h-full w-3 rounded-t bg-muted"
                      style={{ height: `${heights2[i]}%` }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {day}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expenses Breakdown */}
        <div className="card-elevated rounded-2xl border border-border bg-card p-6 shadow-sm lg:col-span-3">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-body font-medium text-foreground">
              Expenses breakdown
            </h3>
            <span className="text-body-sm text-muted-foreground">
              *Compare to last month
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {expensesBreakdown.map((expense) => {
              const Icon = expense.icon;
              return (
                <div
                  key={expense.category}
                  className="rounded-xl bg-card p-4 text-center shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mb-1 text-body-sm text-muted-foreground">
                    {expense.category}
                  </p>
                  <p className="mb-2 font-heading font-bold text-foreground">
                    {expense.amount}
                  </p>
                  <div
                    className={`flex items-center justify-center gap-1 text-sm ${
                      expense.up ? "text-emerald-600" : "text-rose-500"
                    }`}
                  >
                    {expense.up ? (
                      <TrendingUp className="h-4 w-4" />
                    ) : (
                      <TrendingDown className="h-4 w-4" />
                    )}
                    {expense.change}%
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardOverview;
