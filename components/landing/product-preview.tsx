// components/landing/product-preview.tsx
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { MarketPulseChart } from "@/components/dashboard/market-pulse-chart";
import { TrendingCompaniesTable } from "@/components/dashboard/trending-companies-table";
import { FadeInOnScroll } from "@/components/landing/fade-in-on-scroll";
import { MetricCard } from "@/components/ui/metric-card";
import { Separator } from "@/components/ui/separator";
import { dashboardNavItems } from "@/lib/data/dashboard-preview";

export function ProductPreview() {
  return (
    <section className="border-t bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <FadeInOnScroll className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Product Preview
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            Your command center for market intelligence
          </h2>
          <p className="mt-4 text-muted-foreground">
            Monitor metrics, track market pulse, and surface trending companies
            — all in one workspace.
          </p>
        </FadeInOnScroll>

        <FadeInOnScroll
          delay={0.1}
          y={24}
          className="mt-12 overflow-hidden rounded-2xl border bg-card shadow-2xl shadow-black/5 ring-1 ring-foreground/10"
        >
          <div className="flex min-h-[520px]">
            <DashboardSidebar />

            <div className="flex min-w-0 flex-1 flex-col">
              <div className="flex h-12 items-center border-b px-4 sm:px-6">
                <p className="text-sm font-medium">Dashboard</p>
              </div>

              <div className="flex flex-1 flex-col gap-4 p-4 sm:gap-6 sm:p-6">
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
                  {previewMetrics.map((metric) => (
                    <MetricCard
                      key={metric.label}
                      label={metric.label}
                      value={metric.value}
                      change={metric.change}
                    />
                  ))}
                </div>

                <MarketPulseChart />

                <Separator />

                <TrendingCompaniesTable />
              </div>
            </div>
          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}

const previewMetrics = [
  {
    label: "Tracked Companies",
    value: "120+",
    change: "+18 this month",
  },
  {
    label: "Industries",
    value: "18",
    change: "Growing",
  },
  {
    label: "Market Signals",
    value: "350+",
    change: "Updated Daily",
  },
  {
    label: "AI Reports",
    value: "Unlimited",
    change: "Gemini Powered",
  },
];