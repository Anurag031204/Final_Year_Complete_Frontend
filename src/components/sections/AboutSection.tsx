import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const stats = [
    { value: "10+", label: "Years of experience" },
    { value: "400k", label: "Active customers" },
    { value: "9.5/10", label: "Average rating" },
    { value: "A+", label: "Security score" },
  ];

  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-grid">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <span className="text-body-sm font-medium uppercase tracking-wider text-primary">
              About Spendify
            </span>

            <h2 className="mt-2 mb-6 font-heading text-heading-1 text-foreground md:text-5xl">
              Agile. Secure. Built to grow with every transaction.
            </h2>

            <p className="mb-4 text-body text-muted-foreground">
              Spendify combines real‑time monitoring with intelligent risk analysis to keep every
              payment and payout protected, without slowing your customers down.
            </p>

            <p className="mb-8 text-body text-muted-foreground">
              From startups to enterprises, teams rely on Spendify to detect anomalies, reduce
              fraud loss, and gain clear visibility into transaction health across channels.
            </p>

            <Button
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground shadow-md shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/40"
            >
              <span>Read about us</span>
              <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-primary-foreground/10">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-foreground transition-transform group-hover:translate-x-0.5" />
              </span>
            </Button>
          </div>

          {/* Right Content - Stats Grid */}
          <div
            className="grid grid-cols-2 gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/70 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:shadow-lg hover:shadow-primary/15"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-60 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_55%)]" />
                <div className="relative">
                  <div className="mb-1 font-heading text-3xl font-bold text-foreground md:text-4xl">
                    {stat.value}
                  </div>
                  <div className="text-body-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
