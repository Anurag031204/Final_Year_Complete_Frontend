import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  Plus,
  Calendar,
  Check,
  Clock,
  Paintbrush,
  Camera,
  Film,
  Music2,
  Cloud,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const bills = [
  {
    name: "Figma",
    plan: "Monthly",
    amount: "₹150",
    dueDate: "May 15, 2025",
    status: "paid",
    icon: Paintbrush,
  },
  {
    name: "Adobe",
    plan: "Yearly",
    amount: "₹590",
    dueDate: "Jun 16, 2025",
    status: "pending",
    icon: Camera,
  },
  {
    name: "Netflix",
    plan: "Monthly",
    amount: "₹499",
    dueDate: "May 20, 2025",
    status: "pending",
    icon: Film,
  },
  {
    name: "Spotify",
    plan: "Monthly",
    amount: "₹119",
    dueDate: "May 22, 2025",
    status: "paid",
    icon: Music2,
  },
  {
    name: "AWS",
    plan: "Monthly",
    amount: "₹2,500",
    dueDate: "May 25, 2025",
    status: "pending",
    icon: Cloud,
  },
  {
    name: "GitHub",
    plan: "Monthly",
    amount: "₹350",
    dueDate: "May 28, 2025",
    status: "paid",
    icon: Github,
  },
];

const Bills = () => {
  return (
    <DashboardLayout>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-heading text-2xl text-foreground md:text-3xl">
          Bills
        </h1>
        <Button className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 text-sm font-semibold text-teal-950 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-md">
          <Plus className="h-4 w-4" /> Add bill
        </Button>
      </div>

      {/* Summary */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="card-elevated rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-3">
            <Calendar className="h-5 w-5 text-teal-500" />
            <span className="text-body-sm text-muted-foreground">
              Total bills
            </span>
          </div>
          <p className="font-heading text-2xl font-bold text-foreground">
            ₹4,208
          </p>
          <p className="text-body-sm text-muted-foreground">This month</p>
        </div>

        <div className="card-elevated rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-3">
            <Check className="h-5 w-5 text-emerald-600" />
            <span className="text-body-sm text-muted-foreground">Paid</span>
          </div>
          <p className="font-heading text-2xl font-bold text-emerald-600">
            ₹1,068
          </p>
          <p className="text-body-sm text-muted-foreground">3 bills paid</p>
        </div>

        <div className="card-elevated rounded-2xl border border-border bg-card p-4 shadow-sm">
          <div className="mb-2 flex items-center gap-3">
            <Clock className="h-5 w-5 text-amber-500" />
            <span className="text-body-sm text-muted-foreground">Pending</span>
          </div>
          <p className="font-heading text-2xl font-bold text-amber-500">
            ₹3,140
          </p>
          <p className="text-body-sm text-muted-foreground">3 bills pending</p>
        </div>
      </div>

      {/* Bills List */}
      <div className="card-elevated rounded-2xl border border-border bg-card shadow-sm">
        <div className="grid grid-cols-5 gap-4 border-b border-border px-4 py-3 text-body-sm font-medium text-muted-foreground">
          <span>Service</span>
          <span>Plan</span>
          <span>Due date</span>
          <span>Amount</span>
          <span>Status</span>
        </div>

        <div className="divide-y divide-border/80">
          {bills.map((bill) => {
            const Icon = bill.icon;
            const isPaid = bill.status === "paid";

            return (
              <div
                key={bill.name}
                className="grid grid-cols-5 items-center gap-4 px-4 py-3 transition-colors hover:bg-muted/60"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-50 text-teal-600">
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="font-medium text-foreground">
                    {bill.name}
                  </span>
                </div>
                <span className="text-body-sm text-muted-foreground">
                  {bill.plan}
                </span>
                <span className="text-body-sm text-muted-foreground">
                  {bill.dueDate}
                </span>
                <span className="font-medium text-foreground">
                  {bill.amount}
                </span>
                <div>
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${
                      isPaid
                        ? "bg-emerald-50 text-emerald-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {isPaid ? (
                      <Check className="h-3 w-3" />
                    ) : (
                      <Clock className="h-3 w-3" />
                    )}
                    {isPaid ? "Paid" : "Pending"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Bills;
