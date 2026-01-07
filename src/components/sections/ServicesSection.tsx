import { FileText, TrendingUp, Shield } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: FileText,
      title: "Financial Reporting",
      description:
        "Get clear, real-time summaries of your cash flow, spending patterns, and high-risk transactions.",
      bg: "from-teal-500/10 to-teal-900/20",
    },
    {
      icon: TrendingUp,
      title: "Investment Insights",
      description:
        "Track performance across accounts and uncover trends with intelligent, signal-based analytics.",
      bg: "from-teal-400/10 to-teal-800/20",
    },
    {
      icon: Shield,
      title: "Secure Transactions",
      description:
        "Protect every payment with bank-grade encryption, anomaly detection, and instant alerts.",
      bg: "from-teal-300/10 to-teal-700/20",
    },
  ];

  return (
    <section className="section-padding bg-secondary">
      <div className="container-grid">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in-up">
          <span className="text-body-sm font-medium uppercase tracking-wider text-teal-500">
            Our services
          </span>
          <h2 className="mt-2 font-heading text-heading-1 text-foreground md:text-5xl">
            What we offer
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`
                group relative overflow-hidden rounded-2xl border border-teal-800/30 
                bg-teal-700/90 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.7)]
                transition-all duration-300 hover:-translate-y-2 
                hover:border-teal-400/70 hover:shadow-[0_24px_60px_rgba(45,212,191,0.45)]
                animate-fade-in-up
              `}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Teal gradient wash */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${service.bg} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* Accent strip */}
              <span className="relative mb-4 block h-0.5 w-10 rounded-full bg-teal-500/70 transition-all group-hover:w-16" />

              {/* Icon */}
              <div className="relative mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-900/80 text-teal-300 shadow-lg shadow-black transition-transform group-hover:-translate-y-1 group-hover:shadow-teal-500/30">
                <service.icon className="h-7 w-7" aria-hidden="true" />
              </div>

              {/* Badge */}
              <div className="relative mb-4 inline-flex items-center gap-2 rounded-full bg-teal-900/80 px-3 py-1 text-body-sm text-teal-200/90">
                <span className="flex h-1.5 w-1.5 rounded-full bg-teal-400" />
                <span className="text-xs font-medium">0{index + 1}</span>
              </div>

              {/* Content */}
              <h3 className="relative mb-3 font-heading text-heading-3 text-slate-50 transition-colors group-hover:text-teal-300">
                {service.title}
              </h3>
              <p className="relative text-body text-slate-300/80">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
