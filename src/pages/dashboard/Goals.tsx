import DashboardLayout from "@/components/dashboard/DashboardLayout";
import {
  Plus,
  Target,
  TrendingUp,
  PiggyBank,
  Car,
  Plane,
  Home,
  GraduationCap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const goals = [
  { name: "Emergency Fund", target: 100000, current: 65000, icon: PiggyBank },
  { name: "New Car", target: 500000, current: 125000, icon: Car },
  { name: "Vacation", target: 50000, current: 35000, icon: Plane },
  { name: "Home Down Payment", target: 1000000, current: 250000, icon: Home },
  { name: "Education Fund", target: 200000, current: 80000, icon: GraduationCap },
];

const Goals = () => {
  const totalSaved = goals.reduce((sum, g) => sum + g.current, 0);

  return (
    <DashboardLayout>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="font-heading text-2xl text-foreground md:text-3xl">
          Goals
        </h1>
        <Button className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-5 text-sm font-semibold text-teal-950 shadow-sm transition-all hover:-translate-y-0.5 hover:bg-teal-600 hover:shadow-md">
          <Plus className="h-4 w-4" />
          Add goal
        </Button>
      </div>

      {/* Summary */}
      <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="card-elevated flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal-50 text-teal-600">
            <Target className="h-7 w-7" />
          </div>
          <div>
            <p className="text-body-sm text-muted-foreground">Active goals</p>
            <p className="font-heading text-3xl font-bold text-foreground">
              {goals.length}
            </p>
          </div>
        </div>

        <div className="card-elevated flex items-center gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
            <TrendingUp className="h-7 w-7" />
          </div>
          <div>
            <p className="text-body-sm text-muted-foreground">Total saved</p>
            <p className="font-heading text-3xl font-bold text-emerald-600">
              ₹{totalSaved.toLocaleString()}
            </p>
          </div>
        </div>
      </div>

      {/* Goals Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {goals.map((goal) => {
          const progress = (goal.current / goal.target) * 100;
          const Icon = goal.icon;

          return (
            <div
              key={goal.name}
              className="card-elevated rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-foreground">{goal.name}</h3>
                  <p className="text-body-sm text-muted-foreground">
                    ₹{goal.current.toLocaleString()} of ₹
                    {goal.target.toLocaleString()}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="mb-1 flex justify-between text-sm">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-medium text-foreground">
                    {progress.toFixed(0)}%
                  </span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-teal-500 transition-all"
                    style={{ width: `${Math.min(progress, 100)}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-body-sm text-muted-foreground">
                  ₹{(goal.target - goal.current).toLocaleString()} remaining
                </span>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full border-teal-500/70 px-4 text-xs font-medium text-teal-600 transition-all hover:bg-teal-500 hover:text-teal-950"
                >
                  Add funds
                </Button>
              </div>
            </div>
          );
        })}
      </div>
    </DashboardLayout>
  );
};

export default Goals;
