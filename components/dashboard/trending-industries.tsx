import { TrendingUp } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { trendingIndustries } from "@/lib/data/dashboard-preview";

export function TrendingIndustries() {
  return (
    <Card size="sm" className="py-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Trending Industries</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        {trendingIndustries.map((industry) => (
          <div
            key={industry.name}
            className="flex items-center justify-between rounded-lg border bg-muted/30 px-3 py-2.5 transition-colors hover:bg-muted/50"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium">{industry.name}</p>
              <p className="text-xs text-muted-foreground">
                {industry.companies} companies tracked
              </p>
            </div>
            <Badge variant="secondary" className="shrink-0 gap-1 font-mono">
              <TrendingUp className="size-3" />
              {industry.growth}
            </Badge>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
