// components/dashboard/trending-industries.tsx
import { TrendingUp, TrendingDown } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { industryGrowth } from "@/lib/dashboard/analytics";

export function TrendingIndustries() {
  const rows = industryGrowth.slice(0, 5);

  return (
    <Card size="sm" className="py-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Trending Industries</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        {rows.length === 0 ? (
          <p className="py-6 text-center text-sm text-muted-foreground">
            No industry data available yet.
          </p>
        ) : (
          rows.map((industry) => {
            const isPositive = industry.averageGrowth >= 0;

            return (
              <div
                key={industry.industry}
                className="flex items-center justify-between rounded-lg border bg-muted/30 px-3 py-2.5 transition-colors hover:bg-muted/50"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{industry.industry}</p>
                  <p className="text-xs text-muted-foreground">
                    {industry.count} companies tracked
                  </p>
                </div>
                <Badge variant="secondary" className="shrink-0 gap-1 font-mono">
                  {isPositive ? (
                    <TrendingUp className="size-3" />
                  ) : (
                    <TrendingDown className="size-3" />
                  )}
                  {isPositive ? "+" : ""}
                  {industry.averageGrowth}%
                </Badge>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}