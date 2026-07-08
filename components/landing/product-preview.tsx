"use client";

import { motion } from "framer-motion";

import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar";
import { MarketPulseChart } from "@/components/dashboard/market-pulse-chart";
import { TrendingCompaniesTable } from "@/components/dashboard/trending-companies-table";
import { MetricCard } from "@/components/ui/metric-card";
import { Separator } from "@/components/ui/separator";
import { dashboardMetrics } from "@/lib/data/dashboard-preview";

export function ProductPreview() {
  return (
    <section className="border-t bg-muted/20">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mx-auto max-w-2xl text-center"
        >
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{
            duration: 0.6,
            delay: 0.1,
            ease: [0.21, 0.47, 0.32, 0.98],
          }}
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
                  {dashboardMetrics.map((metric) => (
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
        </motion.div>
      </div>
    </section>
  );
}
