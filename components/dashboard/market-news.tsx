// components/dashboard/market-news.tsx
import { Suspense } from "react";
import { ArrowUpRight, Newspaper } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  getMarketNews,
  type MarketNewsItem,
} from "@/lib/dashboard/market-news";

function formatRelativeTime(publishedAt: string): string | null {
  if (!publishedAt) return null;

  const date = new Date(publishedAt);

  if (Number.isNaN(date.getTime())) return null;

  const diffMs = Date.now() - date.getTime();
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

  if (diffHours < 1) return "Just now";
  if (diffHours < 24) return `${diffHours}h ago`;

  const diffDays = Math.floor(diffHours / 24);
  return `${diffDays}d ago`;
}

function NewsCard({ item }: { item: MarketNewsItem }) {
  const relativeTime = formatRelativeTime(item.publishedAt);
  const isLinkable = Boolean(item.url);

  return (
    <a
      href={isLinkable ? item.url : "#"}
      target={isLinkable ? "_blank" : undefined}
      rel={isLinkable ? "noopener noreferrer" : undefined}
      className={isLinkable ? "block" : "pointer-events-none block"}
    >
      <Card
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
            {item.source}
            {relativeTime ? ` · ${relativeTime}` : ""}
          </p>
        </CardContent>
      </Card>
    </a>
  );
}

async function MarketNewsContent() {
  const news = await getMarketNews();

  if (news.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed py-10 text-center">
        <Newspaper className="size-5 text-muted-foreground" />

        <p className="text-sm text-muted-foreground">
          No recent news available right now.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {news.map((item, index) => (
        <NewsCard
          key={`${item.url}-${index}`}
          item={item}
        />
      ))}
    </div>
  );
}

function MarketNewsSkeleton() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="h-32 animate-pulse rounded-xl bg-muted/30"
        />
      ))}
    </div>
  );
}

export function MarketNews() {
  return (
    <section>
      <div className="mb-4">
        <h2 className="text-sm font-medium">Latest Market News</h2>

        <p className="text-xs text-muted-foreground">
          Curated signals from across the ecosystem
        </p>
      </div>

      <Suspense fallback={<MarketNewsSkeleton />}>
        <MarketNewsContent />
      </Suspense>
    </section>
  );
}