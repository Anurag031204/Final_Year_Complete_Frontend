import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  TrendingUp,
  TrendingDown,
  PieChart,
  Home,
  Utensils,
  TramFront,
  Gamepad2,
  ShoppingBag,
  Package,
} from "lucide-react";

const expenses = [
  {
    icon: Home,
    category: "Housing",
    amount: "₹12,000",
    percentage: 35,
    change: 15,
    up: true,
  },
  {
    icon: Utensils,
    category: "Food",
    amount: "₹8,500",
    percentage: 25,
    change: 8,
    up: false,
  },
  {
    icon: TramFront,
    category: "Transportation",
    amount: "₹3,500",
    percentage: 10,
    change: 12,
    up: false,
  },
  {
    icon: Gamepad2,
    category: "Entertainment",
    amount: "₹2,800",
    percentage: 8,
    change: 15,
    up: false,
  },
  {
    icon: ShoppingBag,
    category: "Shopping",
    amount: "₹4,200",
    percentage: 12,
    change: 25,
    up: true,
  },
  {
    icon: Package,
    category: "Others",
    amount: "₹3,400",
    percentage: 10,
    change: 23,
    up: true,
  },
];

const parseAmount = (value: string) =>
  parseInt(value.replace(/[₹,]/g, ""), 10) || 0;

const Expenses = () => {
  const totalExpenses = expenses.reduce(
    (sum, exp) => sum + parseAmount(exp.amount),
    0,
  );

  const trendMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const trendValues = [60, 75, 55, 80, 70, 65]; // 0–100, used directly as % height

  return (
    <DashboardLayout>
      <h1 className="mb-8 font-heading text-2xl text-foreground md:text-3xl">
        Expenses
      </h1>

      {/* Summary */}
      <div className="mb-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Monthly Breakdown */}
        <div className="card-elevated lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-4 font-heading text-lg text-foreground">
            Monthly breakdown
          </h3>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {expenses.map((expense) => {
              const Icon = expense.icon;
              return (
                <div
                  key={expense.category}
                  className="rounded-xl bg-muted p-4 transition-all hover:-translate-y-1 hover:bg-background hover:shadow-md"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mb-1 text-body-sm text-muted-foreground">
                    {expense.category}
                  </p>
                  <p className="mb-2 font-heading font-bold text-foreground">
                    {expense.amount}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">
                      {expense.percentage}%
                    </span>
                    <div
                      className={`flex items-center gap-1 text-sm ${
                        expense.up ? "text-emerald-600" : "text-rose-500"
                      }`}
                    >
                      {expense.up ? (
                        <TrendingUp className="h-3 w-3" />
                      ) : (
                        <TrendingDown className="h-3 w-3" />
                      )}
                      {expense.change}%
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Total + Pie */}
        <div className="card-elevated rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="mb-4 flex items-center gap-2">
            <PieChart className="h-5 w-5 text-teal-500" />
            <h3 className="font-heading text-lg text-foreground">Total</h3>
          </div>

          <div className="relative mx-auto mb-4 h-40 w-40">
            <svg className="h-full w-full" viewBox="0 0 100 100">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="hsl(var(--secondary))"
                strokeWidth="20"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="20"
                strokeDasharray={`${75 * 2.51} 251`}
                strokeLinecap="round"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-xs text-muted-foreground">Total</span>
              <span className="font-heading text-xl font-bold text-foreground">
                ₹{totalExpenses.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="space-y-2">
            {expenses.slice(0, 4).map((expense) => {
              const Icon = expense.icon;
              return (
                <div
                  key={expense.category}
                  className="flex items-center justify-between text-sm"
                >
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-teal-50 text-teal-600">
                      <Icon className="h-3 w-3" />
                    </span>
                    {expense.category}
                  </span>
                  <span className="font-medium text-foreground">
                    {expense.percentage}%
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Expenses;
