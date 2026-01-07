import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-teal-950 via-slate-950 to-teal-900 text-teal-50">
      {/* Subtle scan line / noise overlay */}
      <div className="pointer-events-none fixed inset-0 opacity-[0.04] mix-blend-soft-light [background-image:repeating-linear-gradient(to_bottom,transparent_0,transparent_2px,#fff_2px,#fff_3px)]" />

      <div className="relative z-10 px-6 text-center">
        {/* Glitchy 404 */}
        <div className="relative mb-4 inline-block">
          <h1 className="text-6xl font-black tracking-widest text-teal-50 md:text-7xl">
            404
          </h1>

          {/* Glitch layers */}
          <span className="pointer-events-none absolute inset-0 -translate-x-1 translate-y-1 select-none text-6xl font-black tracking-widest text-teal-400/80 mix-blend-screen blur-[1px] md:text-7xl animate-[glitch_2.2s_infinite]">
            404
          </span>
          <span className="pointer-events-none absolute inset-0 translate-x-1 -translate-y-1 select-none text-6xl font-black tracking-widest text-cyan-400/80 mix-blend-screen blur-[1px] md:text-7xl animate-[glitch_3s_infinite]">
            404
          </span>
        </div>

        <p className="mb-2 text-sm uppercase tracking-[0.35em] text-teal-300/80">
          Page not found
        </p>

        <p className="mx-auto mb-8 max-w-md text-sm text-teal-100/70">
          The route
          <span className="mx-1 rounded bg-teal-900/70 px-1.5 py-0.5 font-mono text-xs text-teal-300/90">
            {location.pathname}
          </span>
          appears to be corrupted or does not exist in this timeline.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-teal-500/70 bg-teal-950/70 px-6 py-2 text-sm font-medium text-teal-50 shadow-[0_0_20px_rgba(45,212,191,0.25)] transition hover:border-teal-400 hover:bg-teal-900 hover:shadow-[0_0_30px_rgba(45,212,191,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-950"
        >
          <span className="h-1 w-1 animate-ping rounded-full bg-teal-400" />
          Return to dashboard
        </Link>
      </div>

      {/* Keyframes for glitch (global CSS, e.g. in globals.css) */}
      {/*
      @keyframes glitch {
        0% { transform: translate(0); clip-path: inset(10% 0 85% 0); }
        10% { transform: translate(-2px, 2px); clip-path: inset(40% 0 40% 0); }
        20% { transform: translate(2px, -2px); clip-path: inset(20% 0 60% 0); }
        30% { transform: translate(-1px, 1px); clip-path: inset(60% 0 20% 0); }
        40% { transform: translate(1px, -1px); clip-path: inset(5% 0 80% 0); }
        50% { transform: translate(0); clip-path: inset(30% 0 30% 0); }
        60% { transform: translate(1px, 1px); clip-path: inset(15% 0 70% 0); }
        70% { transform: translate(-1px, -1px); clip-path: inset(50% 0 25% 0); }
        80% { transform: translate(2px, 0); clip-path: inset(35% 0 40% 0); }
        90% { transform: translate(-2px, 0); clip-path: inset(25% 0 55% 0); }
        100% { transform: translate(0); clip-path: inset(10% 0 85% 0); }
      }
      */}
    </div>
  );
};

export default NotFound;
