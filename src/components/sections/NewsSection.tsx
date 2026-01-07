import { Button } from "@/components/ui/button";
import news1 from "@/assets/news-1.jpg";
import news2 from "@/assets/news-2.jpg";
import news3 from "@/assets/news-3.jpg";

const NewsSection = () => {
  const articles = [
    {
      image: news1,
      date: "January 15, 2024",
      title: "How to Start a Successful Business in 2024",
      description:
        "Practical steps to structure your finances, manage risk, and keep every transaction under control.",
    },
    {
      image: news2,
      date: "January 18, 2024",
      title: "Grow Your Business with Smarter Payments",
      description:
        "Use payment data to understand customer behavior and unlock new growth opportunities.",
    },
    {
      image: news3,
      date: "January 22, 2024",
      title: "The 4 Pillars of Secure Online Revenue",
      description:
        "From authentication to monitoring, learn the essentials of a modern security stack.",
    },
  ];

  const tealVariants = [
    "from-teal-500/15 to-teal-900/40",
    "from-teal-400/15 to-teal-800/40",
    "from-teal-300/15 to-teal-700/40",
  ];

  return (
    <section id="news" className="section-padding bg-background">
      <div className="container-grid">
        {/* Header */}
        <div className="mb-12 text-center animate-fade-in-up">
          <span className="text-body-sm font-medium uppercase tracking-wider text-teal-400">
            Insights & updates
          </span>
          <h2 className="mt-2 font-heading text-heading-1 text-foreground md:text-5xl">
            Latest from Spendify
          </h2>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((article, index) => (
            <article
              key={article.title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-teal-800/40 bg-teal-700/90 shadow-[0_18px_40px_rgba(15,23,42,0.65)] transition-all duration-300 hover:-translate-y-2 hover:border-teal-400/70 hover:shadow-[0_24px_60px_rgba(45,212,191,0.35)] animate-fade-in-up"
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              {/* Teal gradient glow background */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tealVariants[index]} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-teal-950/80 via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="relative flex flex-1 flex-col p-6">
                <span className="text-body-sm text-teal-200/80">{article.date}</span>

                <h3 className="mt-2 mb-2 font-heading text-heading-3 text-slate-50 transition-colors group-hover:text-teal-300">
                  {article.title}
                </h3>

                <p className="mb-4 flex-1 text-body-sm text-slate-300/80">
                  {article.description}
                </p>

                <Button
                  variant="outline"
                  size="sm"
                  className="group/read inline-flex w-fit items-center gap-1 rounded-full border-teal-400/80 bg-teal-500/5 px-4 text-xs font-medium text-teal-300 transition-all hover:bg-teal-400 hover:text-slate-950"
                >
                  <span>Read more</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-teal-300 transition-transform group-hover/read:translate-x-0.5" />
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
