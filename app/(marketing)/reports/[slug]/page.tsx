// app/reports/[slug]/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  Clock,
  CalendarDays,
  ArrowLeft,
  Lightbulb,
  BarChart3,
  TrendingUp,
  ShieldAlert,
  Compass,
} from "lucide-react";
import { REPORTS, getReportBySlug } from "@/lib/data/reports";

interface ReportPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return REPORTS.map((report) => ({ slug: report.slug }));
}

export async function generateMetadata({
  params,
}: ReportPageProps): Promise<Metadata> {
  const { slug } = await params;
  const report = getReportBySlug(slug);

  if (!report) {
    return { title: "Report Not Found | MarketOS" };
  }

  return {
    title: `${report.title} | MarketOS`,
    description: report.heroDescription,
  };
}

export default async function ReportDetailPage({ params }: ReportPageProps) {
  const { slug } = await params;
  const report = getReportBySlug(slug);

  if (!report) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-8 p-4 pb-16 md:p-6 lg:p-8">
      {/* Back link */}
      <Link
        href="/reports"
        className="flex w-fit items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to Reports
      </Link>

      {/* Hero */}
      <div className="flex flex-col gap-4 border-b border-border pb-8">
        <div className="flex flex-wrap items-center gap-2">
          <Badge
            variant="outline"
            className="border-border text-xs font-medium text-muted-foreground"
          >
            {report.category}
          </Badge>
          <Badge className="gap-1 bg-foreground text-xs font-medium text-background hover:bg-foreground/90">
            <Sparkles className="h-3 w-3" />
            AI Generated
          </Badge>
        </div>

        <h1 className="max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-foreground md:text-4xl">
          {report.title}
        </h1>

        <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {report.heroDescription}
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {report.readingTime}
          </span>
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            Updated {report.updated}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto flex w-full max-w-3xl flex-col gap-10">
        {/* Executive Summary */}
        <section className="flex flex-col gap-3">
          <h2 className="text-xl font-semibold tracking-tight text-foreground">
            Executive Summary
          </h2>
          <p className="text-base leading-relaxed text-foreground/90">
            {report.executiveSummary}
          </p>
        </section>

        {/* Key Insights */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <Lightbulb className="h-4 w-4 text-foreground" />
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Key Insights
            </h2>
          </div>
          <ul className="flex flex-col gap-3">
            {report.keyInsights.map((insight) => (
              <li
                key={insight}
                className="flex gap-3 text-sm leading-relaxed text-foreground/90 md:text-base"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                <span>{insight}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Market Statistics */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-4 w-4 text-foreground" />
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Market Statistics
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {report.marketStatistics.map((stat) => (
              <Card
                key={stat.label}
                className="border-border bg-card shadow-sm"
              >
                <CardContent className="flex flex-col gap-1 p-4">
                  <span className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Opportunities */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4 text-foreground" />
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Opportunities
            </h2>
          </div>
          <ul className="flex flex-col gap-3">
            {report.opportunities.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-foreground/90 md:text-base"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Risks */}
        <section className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <ShieldAlert className="h-4 w-4 text-foreground" />
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Risks
            </h2>
          </div>
          <ul className="flex flex-col gap-3">
            {report.risks.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-foreground/90 md:text-base"
              >
                <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground/40" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Future Outlook */}
        <section className="flex flex-col gap-3 rounded-xl border border-border bg-muted/30 p-5 md:p-6">
          <div className="flex items-center gap-2">
            <Compass className="h-4 w-4 text-foreground" />
            <h2 className="text-xl font-semibold tracking-tight text-foreground">
              Future Outlook
            </h2>
          </div>
          <ul className="flex flex-col gap-3">
            {report.aiTakeaways.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-sm leading-relaxed text-foreground md:text-base"
              >
                <Sparkles className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground/60" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}