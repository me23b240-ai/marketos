// app/industries/page.tsx
import Link from "next/link";
import { Search, ArrowUpRight, Building2, TrendingUp } from "lucide-react";
import { industries } from "@/lib/data/industries";

const filters = ["All", ...industries.map((i) => i.name)];

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Industries
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore consumer internet industries shaping India&apos;s market.
            </p>
          </div>

          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search industries..."
              className="w-full rounded-lg border border-border bg-muted/40 py-2 pl-9 pr-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition focus:border-foreground/30 focus:bg-card focus:ring-2 focus:ring-muted"
            />
          </div>
        </div>

        {/* Filter Chips */}
        <div className="mt-8 flex flex-wrap gap-2">
          {filters.map((filter, i) => (
            <button
              key={filter}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${
                i === 0
                  ? "border-foreground bg-foreground text-background"
                  : "border-border bg-card text-muted-foreground hover:border-foreground/30 hover:bg-muted"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Industries Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-foreground/30 hover:shadow-lg"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-muted-foreground">
                    {industry.name.charAt(0)}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                    <TrendingUp className="h-3 w-3" />
                    {industry.growth}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {industry.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {industry.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 font-medium text-foreground/80">
                    {industry.marketSize}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-muted px-2 py-0.5 font-medium text-foreground/80">
                    CAGR {industry.cagr}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Building2 className="h-3.5 w-3.5" />
                    {industry.trackedCompanies} companies
                  </span>
                </div>
              </div>

              <div className="mt-5 inline-flex items-center justify-center gap-1 rounded-lg border border-border py-2 text-sm font-medium text-foreground transition group-hover:border-foreground group-hover:bg-foreground group-hover:text-background">
                View Industry
                <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}