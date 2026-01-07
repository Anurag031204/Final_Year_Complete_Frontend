import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Wallet, CreditCard, Plus, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const accounts = [
  {
    type: "Credit card",
    bank: "MasterCard",
    number: "3388 4556 8860 8***",
    amount: "₹25,000",
  },
  {
    type: "Checking",
    bank: "AB Bank Ltd",
    logo: "VISA",
    number: "693 456 69 9****",
    amount: "₹25,000",
  },
  {
    type: "Savings",
    bank: "Brac Bank Ltd.",
    number: "133 456 886 8****",
    amount: "₹25,000",
  },
  {
    type: "Investment",
    bank: "AB Bank Ltd",
    number: "698 456 866 2****",
    amount: "₹25,000",
  },
  {
    type: "Loan",
    bank: "City Bank Ltd.",
    number: "363 456 896 6****",
    amount: "₹25,000",
  },
];

const Balances = () => {
  return (
    <DashboardLayout>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-heading text-2xl text-foreground md:text-3xl">
          Balances
        </h1>
        <Button className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 text-sm font-semibold text-teal-950 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-md">
          <Plus className="h-4 w-4" />
          Add account
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {accounts.map((account) => (
          <div
            key={account.number}
            className="card-elevated flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="font-medium text-foreground">{account.type}</p>
                <p className="text-body-sm text-muted-foreground">
                  {account.bank}
                </p>
              </div>
              {account.logo ? (
                <span className="rounded-lg border border-border px-3 py-1 text-xs font-semibold tracking-wide text-slate-600">
                  {account.logo}
                </span>
              ) : (
                <div className="flex gap-1">
                  <div className="h-6 w-6 rounded-full bg-yellow-500 opacity-80" />
                  <div className="-ml-3 h-6 w-6 rounded-full bg-red-500 opacity-80" />
                </div>
              )}
            </div>

            <p className="mb-1 font-mono text-lg text-foreground">
              {account.number}
            </p>
            <p className="mb-3 text-body-sm text-muted-foreground">
              Account number
            </p>

            <p className="mb-1 font-heading text-2xl font-bold text-foreground">
              {account.amount}
            </p>
            <p className="mb-4 text-body-sm text-muted-foreground">
              Current balance
            </p>

            <div className="mt-auto flex items-center justify-between">
              <button className="text-body-sm font-medium text-rose-500 hover:text-rose-600 hover:underline">
                Remove
              </button>
              <Button
                size="sm"
                className="inline-flex items-center gap-1 rounded-full bg-teal-500 px-4 text-xs font-semibold text-teal-950 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-md"
              >
                Details
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        ))}

        {/* Add Account Card */}
        <div className="card-elevated flex min-h-[260px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-border bg-card/60 p-6 text-center">
          <Wallet className="mb-3 h-8 w-8 text-teal-500" />
          <Button className="mb-3 inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 text-sm font-semibold text-teal-950 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-md">
            <Plus className="h-4 w-4" /> Add account
          </Button>
          <button className="text-body-sm text-muted-foreground transition-colors hover:text-foreground hover:underline">
            Manage existing accounts
          </button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Balances;
