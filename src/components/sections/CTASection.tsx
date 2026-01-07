import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-primary">
      <div className="container-grid">
        <div className="flex justify-center">
          <div className="w-full max-w-3xl rounded-3xl bg-primary/20 p-8 text-center text-primary-foreground shadow-xl shadow-black/20 backdrop-blur-md animate-fade-in-up md:p-10">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Ready to get started?
            </p>

            <h2 className="mb-2 font-heading text-heading-2 md:text-4xl">
              Interested?
            </h2>

            <h3 className="mb-8 font-heading text-heading-1 md:text-5xl">
              Let&apos;s secure your transactions.
            </h3>

            <Link to="/login">
              <Button
                size="lg"
                className="group inline-flex items-center gap-2 rounded-full bg-primary-foreground px-8 py-2 text-sm font-semibold text-primary shadow-lg shadow-black/25 transition-all hover:-translate-y-0.5 hover:bg-primary-foreground/90 hover:shadow-xl hover:shadow-black/30"
              >
                <span>Contact us</span>
                <span className="relative flex h-5 w-5 items-center justify-center rounded-full bg-primary/15">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary transition-transform group-hover:translate-x-0.5" />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
