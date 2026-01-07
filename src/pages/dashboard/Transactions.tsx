import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { ArrowUpRight, ArrowDownLeft, Filter, CreditCard, Home, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const transactions = [
  { icon: CreditCard, name: "GTR 5", category: "Gadget & Gear", amount: "-₹1,600.00", date: "17 May 2025", type: "expense" },
  { icon: Wallet, name: "Salary", category: "Income", amount: "+₹50,000.00", date: "15 May 2025", type: "income" },
  { icon: CreditCard, name: "Polo Shirt", category: "XL fashions", amount: "-₹200.00", date: "14 May 2025", type: "expense" },
  { icon: CreditCard, name: "Biriyani", category: "Hajir Biriyani", amount: "-₹1,000.00", date: "13 May 2025", type: "expense" },
  { icon: CreditCard, name: "Taxi Fare", category: "Uber", amount: "-₹1,120.00", date: "12 May 2025", type: "expense" },
  { icon: Wallet, name: "Freelance Payment", category: "Income", amount: "+₹15,000.00", date: "10 May 2025", type: "income" },
  { icon: CreditCard, name: "Keyboard", category: "Gadget & Gear", amount: "-₹2,200.00", date: "8 May 2025", type: "expense" },
  { icon: Home, name: "Rent", category: "Housing", amount: "-₹12,000.00", date: "5 May 2025", type: "expense" },
];

const Transactions = () => {
  return (
    <DashboardLayout>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-heading text-2xl text-foreground md:text-3xl">
          Transactions
        </h1>
        <Button
          variant="outline"
          size="sm"
          className="inline-flex items-center gap-2 rounded-full border-border bg-white/70 px-4 text-body-sm font-medium text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-400 hover:bg-white hover:text-teal-600"
        >
          <Filter className="h-4 w-4" />
          <span>Filter</span>
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-50 text-teal-600">
            <ArrowDownLeft className="h-6 w-6" />
          </div>
          <div>
            <p className="text-body-sm text-muted-foreground">Total income</p>
            <p className="font-heading text-xl font-semibold text-foreground">
              ₹65,000.00
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-50 text-rose-500">
            <ArrowUpRight className="h-6 w-6" />
          </div>
          <div>
            <p className="text-body-sm text-muted-foreground">Total expenses</p>
            <p className="font-heading text-xl font-semibold text-foreground">
              ₹18,120.00
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <CreditCard className="h-6 w-6" />
          </div>
          <div>
            <p className="text-body-sm text-muted-foreground">Net balance</p>
            <p className="font-heading text-xl font-semibold text-emerald-600">
              +₹46,880.00
            </p>
          </div>
        </div>
      </div>

      {/* Transactions List */}
      <div className="rounded-2xl border border-border bg-card shadow-sm">
        <div className="border-b border-border/80 px-4 py-3 flex items-center justify-between">
          <div className="inline-flex items-center gap-1 rounded-full bg-muted/70 p-1.5">
            <button className="rounded-full bg-white px-4 py-1.5 text-body-sm font-medium text-teal-600 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              All
            </button>
            <button className="rounded-full px-4 py-1.5 text-body-sm text-muted-foreground transition-all hover:bg-white hover:text-foreground">
              Income
            </button>
            <button className="rounded-full px-4 py-1.5 text-body-sm text-muted-foreground transition-all hover:bg-white hover:text-foreground">
              Expenses
            </button>
          </div>
        </div>
        {/* ...rest of card */}
      </div>


      <div className="divide-y divide-border/80">
        {transactions.map((tx, index) => {
          const Icon = tx.icon;
          const isIncome = tx.type === "income";

          return (
            <div
              key={index}
              className="flex items-center gap-4 px-4 py-3 transition-colors hover:bg-muted/60"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted text-teal-600">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-foreground">{tx.name}</p>
                <p className="text-body-sm text-muted-foreground">
                  {tx.category}
                </p>
              </div>
              <div className="text-right">
                <p
                  className={`font-medium ${isIncome ? "text-emerald-600" : "text-foreground"
                    }`}
                >
                  {tx.amount}
                </p>
                <p className="text-xs text-muted-foreground">{tx.date}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="border-t border-border p-4 text-center">
        <Button
          variant="outline"
          size="sm"
          className="inline-flex items-center justify-center rounded-full border-transparent bg-teal-500 px-5 text-body-sm font-medium text-teal-950 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-600"
        >
          Load more
        </Button>

      </div>
    </DashboardLayout >
  );
};

export default Transactions;
