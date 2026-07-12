// components/dashboard/market-pulse-chart.tsx
"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { growthByCohort } from "@/lib/dashboard/analytics";

export function MarketPulseChart() {
  const hasData = growthByCohort.length > 0;

  return (
    <div className="rounded-2xl border bg-white p-6">
      <h3 className="text-[14px] font-semibold text-foreground">
        Market Pulse
      </h3>
      <p className="mt-1 text-[12.5px] text-muted-foreground">
        Average growth by founding-year cohort
      </p>

      <div className="mt-6 h-[280px] w-full">
        {hasData ? (
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={growthByCohort} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="pulseGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#111111" stopOpacity={0.18} />
                  <stop offset="100%" stopColor="#111111" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid vertical={false} stroke="var(--border)" strokeDasharray="3 3" />
              <XAxis dataKey="year" tick={{ fontSize: 11, fill: "#A1A1AA" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fill: "#A1A1AA" }} axisLine={false} tickLine={false} unit="%" />
              <Tooltip contentStyle={{ borderRadius: 10, border: "1px solid #EDEDED", fontSize: 12 }} />
              <Area type="monotone" dataKey="averageGrowth" stroke="#111111" strokeWidth={2} fill="url(#pulseGradient)" />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            Not enough founding-year data to chart yet.
          </div>
        )}
      </div>
    </div>
  );
}