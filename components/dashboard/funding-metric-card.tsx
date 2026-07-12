// components/dashboard/funding-metric-card.tsx
import { Suspense } from "react";
import { TrendingUp } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getFundingEstimate } from "@/lib/dashboard/funding-estimate";
import { totalValuationTracked } from "@/lib/dashboard/analytics";

function formatUsdMillions(millions: number): string {
  if (millions <= 0) return "$0";
  if (millions >= 1000) return `$${(millions / 1000).toFixed(1)}B`;
  return `$${Math.round(millions)}M`;
}

async function FundingMetricContent() {
  const estimate = await getFundingEstimate();

  if (estimate) {
    return (
      <>
        <CardHeader className="gap-1 pb-0">
          <CardTitle className="text-xs font-normal text-muted-foreground">
            Funding This Quarter
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-2">
          <p className="text-2xl font-semibold tracking-tight">{estimate.amount}</p>
          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
            <TrendingUp className="size-3" />
            <span>{estimate.changeLabel}</span>
          </div>
        </CardContent>
      </>
    );
  }

  return (
    <>
      <CardHeader className="gap-1 pb-0">
        <CardTitle className="text-xs font-normal text-muted-foreground">
          Tracked Valuation
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-2xl font-semibold tracking-tight">
          {formatUsdMillions(totalValuationTracked)}
        </p>
        <p className="mt-1 text-xs text-muted-foreground">Across tracked companies</p>
      </CardContent>
    </>
  );
}

function FundingMetricSkeleton() {
  return (
    <>
      <CardHeader className="gap-1 pb-0">
        <div className="h-3 w-24 animate-pulse rounded bg-muted/40" />
      </CardHeader>
      <CardContent className="pt-2">
        <div className="h-7 w-28 animate-pulse rounded bg-muted/40" />
        <div className="mt-2 h-3 w-20 animate-pulse rounded bg-muted/40" />
      </CardContent>
    </>
  );
}

export function FundingMetricCard() {
  return (
    <Card size="sm" className="py-4">
      <Suspense fallback={<FundingMetricSkeleton />}>
        <FundingMetricContent />
      </Suspense>
    </Card>
  );
}