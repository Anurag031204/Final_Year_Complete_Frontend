import { Button } from "@/components/ui/button";
import featuresBg from "@/assets/features-bg.jpg";
import coins from "@/assets/coins.png";

const FeaturesSection = () => {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{
        backgroundImage: `url(${featuresBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-foreground/80" />

      <div className="container-grid relative z-10">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="max-w-xl text-background animate-fade-in-up">
            <span className="text-body-sm font-medium uppercase tracking-wider text-primary">
              Key features
            </span>

            <h2 className="mt-2 mb-6 font-heading text-heading-1 md:text-5xl">
              Manage all your finances from one secure dashboard.
            </h2>

            <p className="mb-4 text-body text-background/80">
              Connect your cards, accounts, and wallets to get a real‑time view of every
              transaction, across banks and platforms, in a single, clean interface.
            </p>

            <p className="mb-8 text-body text-background/80">
              Spot suspicious activity instantly, set smart alerts, and automate insights so you
              can focus on decisions—not spreadsheets.
            </p>

            <Button
              className="group inline-flex items-center gap-2 rounded-full bg-background px-7 py-2 text-sm font-semibold text-foreground shadow-lg shadow-black/30 transition-all hover:-translate-y-0.5 hover:bg-background/90 hover:shadow-xl hover:shadow-black/40"
            >
              <span>Start now</span>
              <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-primary/10">
                <span className="h-1.5 w-1.5 rounded-full bg-primary transition-transform group-hover:translate-x-0.5" />
              </span>
            </Button>
          </div>

          {/* Right Content - Floating Image / Card */}
          <div
            className="relative flex justify-center animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="group relative w-full max-w-xs rounded-3xl border border-background/20 bg-background/5 p-6 shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-primary/40 lg:max-w-sm">
              {/* Soft glow */}
              <div className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-primary/10 opacity-30 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

              {/* Coins image */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-primary/20 via-background/20 to-transparent p-4">
                <img
                  src={coins}
                  alt="Financial growth illustration"
                  className="mx-auto h-40 w-40 object-contain transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-1"
                />
              </div>

              {/* Mini feature bullets */}
              <div className="mt-5 space-y-3 text-xs text-foreground/80">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span className="text-white">Instant anomaly detection on new transactions</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  <span className="text-white">Unified view across cards, banks, and wallets</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span className="text-white">Custom alerts for high‑risk or unusual activity</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
