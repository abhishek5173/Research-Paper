"use client";

import { useEffect, useState } from "react";

export default function ResearchInsights() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpanded(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`overflow-hidden rounded-4xl bg-linear-to-br from-slate-900 via-indigo-900 to-blue-900 text-white shadow-2xl transition-all duration-700 mt-6 ${
        expanded ? "h-162" : "h-30"
      }`}
    >
      <div className="p-8">
        <div className="flex items-center justify-between">
          <div>
            <span className="rounded-full bg-white/10 px-4 py-2 text-sm backdrop-blur">
              AI Research Intelligence
            </span>

            <h2 className="mt-4 text-4xl font-black">
              Research Insights Engine
            </h2>

            <p className="mt-2 text-slate-300">
              Discover hidden patterns across publications,
              citations, authors, and emerging topics.
            </p>
          </div>

       {!expanded && (
           <div className="rounded-2xl bg-white/10 px-6 py-4 backdrop-blur">
            Loading Insights...
          </div>
       )}
        </div>

        {expanded && (
          <>
            <div className="mt-10 grid gap-6 md:grid-cols-4">
              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-slate-300">
                  Publications
                </p>
                <h3 className="mt-2 text-4xl font-bold">
                  125K
                </h3>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-slate-300">
                  Citations
                </p>
                <h3 className="mt-2 text-4xl font-bold">
                  2.8M
                </h3>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-slate-300">
                  Authors
                </p>
                <h3 className="mt-2 text-4xl font-bold">
                  12K
                </h3>
              </div>

              <div className="rounded-3xl bg-white/10 p-6 backdrop-blur">
                <p className="text-slate-300">
                  Topics
                </p>
                <h3 className="mt-2 text-4xl font-bold">
                  420
                </h3>
              </div>
            </div>

            <div className="mt-10 rounded-3xl bg-white/5 p-8 backdrop-blur">
              <h3 className="text-2xl font-bold">
                Top Emerging Research Areas
              </h3>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl bg-cyan-500/10 p-5">
                  <h4 className="font-semibold">
                    Artificial Intelligence
                  </h4>
                  <p className="mt-2 text-cyan-200">
                    +42% publication growth
                  </p>
                </div>

                <div className="rounded-2xl bg-purple-500/10 p-5">
                  <h4 className="font-semibold">
                    Quantum Computing
                  </h4>
                  <p className="mt-2 text-purple-200">
                    +31% publication growth
                  </p>
                </div>

                <div className="rounded-2xl bg-green-500/10 p-5">
                  <h4 className="font-semibold">
                    Cyber Security
                  </h4>
                  <p className="mt-2 text-green-200">
                    +27% publication growth
                  </p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}