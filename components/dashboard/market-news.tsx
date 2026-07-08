import { ArrowUpRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { marketNews } from "@/lib/data/dashboard-preview";

export function MarketNews() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-sm font-medium">Latest Market News</h2>
        <p className="text-xs text-muted-foreground">
          Curated signals from across the ecosystem
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {marketNews.map((item) => (
          <Card
            key={item.id}
            size="sm"
            className="group cursor-pointer py-4 transition-all hover:ring-foreground/20"
          >
            <CardHeader className="gap-2 pb-0">
              <div className="flex items-start justify-between gap-3">
                <Badge variant="outline" className="shrink-0 text-xs">
                  {item.category}
                </Badge>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <CardTitle className="text-sm leading-snug font-medium">
                {item.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-3">
              <p className="text-xs text-muted-foreground">
                {item.source} · {item.time}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
