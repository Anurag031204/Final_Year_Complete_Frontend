import { Link } from "react-router-dom";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBusinessman from "@/assets/hero-businessman.png";
import coins from "@/assets/coins.png";
import star from "@/assets/star.png";

const HeroSection = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-background to-secondary">
      {/* Ambient glow / orbs */}
      <div className="pointer-events-none absolute -left-32 top-0 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />

      <div className="container-grid relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="relative z-10 text-center lg:text-left">
            {/* Floating Coins - Top Left */}
            <img
              src={coins}
              alt="Coins graphic"
              className="absolute -left-10 -top-10 hidden h-24 w-24 opacity-80 animate-float lg:block"
            />

            <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/60 px-3 py-1 text-xs font-medium text-primary shadow-sm backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Real-time fraud detection for your payments
            </p>

            <h1 className="mb-6 font-heading text-heading-1 text-foreground md:text-5xl lg:text-6xl animate-fade-in-up">
              Your watchdog for
              <br />
              <span className="text-primary">every transaction</span>
            </h1>

            <p
              className="mx-auto mb-8 max-w-lg text-body-lg text-muted-foreground lg:mx-0 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Monitor and secure every swipe, tap, and transfer with bank‑grade protection and
              intelligent alerts.
            </p>

            <div
              className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              {/* Primary CTA */}
              <Link to="/login" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-full bg-primary px-8 text-primary-foreground shadow-lg shadow-primary/30 transition-all hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/40 sm:w-auto"
                >
                  <span className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-white/30 via-transparent to-transparent opacity-0 transition-all duration-500 group-hover:translate-x-[120%] group-hover:opacity-100" />
                  <span className="relative">Join us</span>
                  <span className="relative h-2 w-2 rounded-full bg-primary-foreground/80 group-hover:animate-ping" />
                </Button>
              </Link>

              {/* Secondary CTA */}
              <button
                type="button"
                className="group inline-flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/60 bg-background/70 text-primary transition-all group-hover:-translate-y-0.5 group-hover:scale-105 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg group-hover:shadow-primary/30">
                  <Play className="ml-0.5 h-5 w-5 transition-transform group-hover:scale-110" />
                </div>
                <span className="underline-offset-4 group-hover:underline">Play demo</span>
              </button>
            </div>

            {/* Trust / small metric row */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-muted-foreground lg:justify-start">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>99.9% uptime monitoring</span>
              </div>
              <div className="h-4 w-px bg-border/60" />
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-background/80 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                  New
                </span>
                <span>AI-powered anomaly detection</span>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div
            className="relative flex justify-center lg:justify-end animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            {/* Interactive card backdrop for the illustration */}
            <div className="group relative w-full max-w-md rounded-3xl border border-border/70 bg-background/80 p-4 shadow-2xl shadow-primary/10 backdrop-blur transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 hover:shadow-primary/30 lg:max-w-lg [transform:perspective(1200px)_rotateY(4deg)] hover:[transform:perspective(1200px)_rotateY(0deg)]">
              {/* Floating Star */}
              <img
                src={star}
                alt="Top rated security"
                className="absolute -top-6 right-6 h-12 w-12 animate-float drop-shadow-[0_0_14px_rgba(0,0,0,0.35)]"
                style={{ animationDelay: "1s" }}
              />

              {/* More Coins */}
              <img
                src={coins}
                alt="Coins graphic"
                className="absolute -bottom-8 left-0 h-16 w-16 animate-float"
                style={{ animationDelay: "0.5s" }}
              />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-tr from-primary/10 via-background to-secondary/40 p-4">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-60 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.14),transparent_55%)]" />
                <img
                  src={heroBusinessman}
                  alt="Business owner monitoring secure transactions"
                  className="relative z-10 w-full object-contain transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105"
                />
              </div>  
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
