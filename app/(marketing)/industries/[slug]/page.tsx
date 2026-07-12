// app/industries/[slug]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  Building2,
  TrendingUp,
  Sparkles,
  Landmark,
  Users,
  Compass,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { industries } from "@/lib/data/industries";

export default async function IndustryProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  const kpis = [
    { label: "Market Size", value: industry.marketSize, icon: Landmark },
    { label: "CAGR", value: industry.cagr, icon: TrendingUp },
    {
      label: "Tracked Companies",
      value: String(industry.trackedCompanies),
      icon: Building2,
    },
    { label: "Growth", value: industry.growth, icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10">
        {/* Back link */}
        <Link
          href="/industries"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Industries
        </Link>

        {/* Hero */}
        <div className="mt-8 flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-muted text-xl font-semibold text-muted-foreground">
              {industry.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                  {industry.name}
                </h1>
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="h-3 w-3" />
                  {industry.growth}
                </span>
              </div>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                {industry.description}
              </p>
            </div>
          </div>

          <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg border border-border bg-muted px-3 py-1.5 text-sm font-medium text-foreground/80">
            <Building2 className="h-4 w-4" />
            {industry.trackedCompanies} companies tracked
          </span>
        </div>

        {/* KPI Cards */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {kpis.map((kpi) => (
            <div
              key={kpi.label}
              className="rounded-xl border border-border bg-card p-4 transition hover:border-foreground/30 hover:shadow-sm"
            >
              <kpi.icon className="h-4 w-4 text-muted-foreground" />
              <p className="mt-3 text-lg font-semibold text-foreground">
                {kpi.value}
              </p>
              <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                {kpi.label}
              </p>
            </div>
          ))}
        </div>

        {/* AI Executive Summary */}
        <div className="mt-10 rounded-xl border border-border bg-card p-6 transition hover:border-foreground/30 hover:shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground">
              <Sparkles className="h-4 w-4 text-background" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground">
                AI Executive Summary
              </h3>
              <p className="text-xs text-muted-foreground">
                Generated industry analysis
              </p>
            </div>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {industry.aiSummary}
          </p>
          <div className="mt-5 flex items-center gap-1.5 border-t border-border pt-4 text-xs text-muted-foreground">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>AI-generated insight — verify before making decisions.</span>
          </div>
        </div>

        {/* Key Trends & Major Players */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-1.5">
              <Compass className="h-3.5 w-3.5 text-foreground/70" />
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Key Trends
              </h3>
            </div>
            <ul className="mt-4 space-y-2">
              {industry.keyTrends.map((trend, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm leading-relaxed text-foreground/90"
                >
                  <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  <span>{trend}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-border bg-card p-6">
            <div className="flex items-center gap-1.5">
              <Users className="h-3.5 w-3.5 text-foreground/70" />
              <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Major Players
              </h3>
            </div>
            <ul className="mt-4 space-y-2">
              {industry.majorPlayers.map((player, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm leading-relaxed text-foreground/90"
                >
                  <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                  <span>{player}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Funding & Future Outlook */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-muted/40 p-6">
            <h3 className="text-sm font-semibold text-foreground">Funding</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {industry.funding}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-muted/40 p-6">
            <h3 className="text-sm font-semibold text-foreground">
              Future Outlook
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {industry.futureOutlook}
            </p>
          </div>
        </div>

        {/* Top Companies */}
        <div className="mt-10">
          <h3 className="text-sm font-semibold text-foreground">
            Top Companies
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {industry.topCompanies.map((company) => (
              <span
                key={company}
                className="rounded-md border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground/80"
              >
                {company}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}