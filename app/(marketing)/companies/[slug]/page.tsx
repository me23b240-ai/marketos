import Link from "next/link";
import { notFound } from "next/navigation";
import { AIExecutiveBrief } from "@/components/company/ai-executive-brief";
import {
  ArrowLeft,
  MapPin,
  Sparkles,
  Building2,
  Calendar,
  Users,
  TrendingUp,
  Globe,
  Wallet,
} from "lucide-react";

import { companies } from "@/lib/data/company-profile";

export default async function CompanyProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);

  if (!company) {
    notFound();
  }

  const stats = [
    { label: "Founded", value: company.founded, icon: Calendar },
    { label: "Employees", value: company.employees, icon: Users },
    { label: "Valuation", value: company.valuation, icon: Wallet },
    { label: "Growth", value: company.growth, icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10">
        {/* Back link */}
        <Link
          href="/companies"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Companies
        </Link>

        {/* Header */}
        <div className="mt-8 flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-muted text-xl font-semibold text-muted-foreground">
              {company.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                  {company.name}
                </h1>
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                  <Sparkles className="h-3 w-3" />
                  {company.growth}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {company.industry}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {company.hq}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="h-4 w-4" />
                  {company.website}
                </span>
              </div>
            </div>
          </div>

          <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground">
            <Building2 className="h-4 w-4" />
            {company.stage}
          </span>
        </div>

        {/* Stats grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border p-4 transition hover:border-border hover:shadow-sm"
            >
              <stat.icon className="h-4 w-4 text-muted-foreground" />
              <p className="mt-3 text-lg font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* About */}
        <div className="mt-10">
          <h2 className="text-base font-semibold text-foreground">
            About {company.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {company.longDescription}
          </p>
        </div>

        {/* AI Executive Brief */}

        <div className="mt-10">
          <AIExecutiveBrief
            summary="Meesho continues to strengthen its position in Tier II and Tier III India through an asset-light marketplace model and a rapidly growing reseller ecosystem. Its focus on affordability, logistics efficiency, and seller empowerment creates a strong competitive moat, though increasing customer acquisition costs and quick commerce competition remain key risks."

            opportunities={[
              "Expand into private labels and financial services",
              "Increase monetization of the reseller ecosystem",
              "Strengthen penetration in Tier III markets",
            ]}

            risks={[
              "Growing competition from Flipkart and Amazon",
              "Margin pressure from logistics costs",
              "Increasing customer acquisition costs",
            ]}

            confidence={87}

            tags={[
              "Marketplace",
              "Social Commerce",
              "Series F",
              "India",
            ]}
          />
        </div>
      </div>
    </div>
  );
}