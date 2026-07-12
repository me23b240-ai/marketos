import Link from "next/link";
import { Search, ArrowUpRight, MapPin, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";

const filters = [
  "All",
  "Marketplace",
  "Quick Commerce",
  "Fintech",
  "Travel",
  "Consumer AI",
  "EdTech",
  "HealthTech",
];

import { companies } from "@/lib/data/company-profile";

export default function CompaniesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              Companies
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Explore India&apos;s leading consumer internet companies.
            </p>
          </div>

          <div className="relative w-full max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
            <Input
              placeholder="Search companies..."
              className="pl-9"
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
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-neutral-200 bg-card text-muted-foreground hover:border-neutral-300 hover:bg-neutral-50"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Featured Companies Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.slug}
              className="group flex flex-col justify-between rounded-xl border border-border bg-card p-5 transition-all duration-200 hover:-translate-y-1 hover:border-border hover:shadow-lg"
            >
              <div>
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-muted-foreground">
                    {company.name.charAt(0)}
                  </div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-600">
                    <Sparkles className="h-3 w-3" />
                    {company.growth}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-foreground">
                  {company.name}
                </h3>
                <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                  {company.industry}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {company.description}
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {company.hq}
                  </span>
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 font-medium text-muted-foreground">
                    {company.stage}
                  </span>
                </div>
              </div>

              <Link
                href={`/companies/${company.slug}`}
                className="mt-5 inline-flex items-center justify-center gap-1 rounded-lg border border-border py-2 text-sm font-medium text-foreground transition group-hover:border-border group-hover:bg-primary group-hover:text-primary-foreground"
              >
                View Profile
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}