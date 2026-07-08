import { AiInsightCard } from "@/components/dashboard/ai-insight-card";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { MarketNews } from "@/components/dashboard/market-news";
import { MarketPulseChart } from "@/components/dashboard/market-pulse-chart";
import { TrendingCompaniesTable } from "@/components/dashboard/trending-companies-table";
import { TrendingIndustries } from "@/components/dashboard/trending-industries";
import { MetricCard } from "@/components/ui/metric-card";
import { dashboardKpis } from "@/lib/data/dashboard-preview";

export default function DashboardPage() {
  return (
    <>
      <DashboardHeader />

      <div className="flex flex-1 flex-col gap-6 p-4 sm:gap-8 sm:p-6">
        <section className="grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {dashboardKpis.map((kpi) => (
            <MetricCard
              key={kpi.label}
              label={kpi.label}
              value={kpi.value}
              change={kpi.change}
            />
          ))}
        </section>

        <section className="grid gap-6 xl:grid-cols-3">
          <div className="space-y-6 xl:col-span-2">
            <MarketPulseChart />
            <TrendingCompaniesTable />
          </div>

          <div className="space-y-6">
            <AiInsightCard />
            <TrendingIndustries />
          </div>
        </section>

        <MarketNews />
      </div>
    </>
  );
}
