// components/dashboard/ai-insight-card.tsx
import { Suspense } from "react";
import { Sparkles } from "lucide-react";

import { getDailyInsight } from "@/lib/dashboard/ai-daily-insight";

async function AiInsightContent() {
  const insight = await getDailyInsight();

  if (!insight) {
    return (
      <p className="mt-4 text-[13px] text-muted-foreground">
        Not enough data to generate an insight right now.
      </p>
    );
  }

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-lg bg-foreground text-background">
            <Sparkles className="size-3.5" />
          </div>
          <h3 className="text-[14px] font-semibold text-foreground">
            AI Insight of the Day
          </h3>
        </div>
        <span className="rounded-full bg-muted px-2.5 py-1 text-[11px] font-medium text-muted-foreground">
          {insight.confidence} confidence
        </span>
      </div>

      <p className="mt-4 text-[14px] leading-relaxed text-foreground">
        &ldquo;{insight.text}&rdquo;
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {insight.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-muted px-2.5 py-1 text-[11.5px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
    </>
  );
}

function AiInsightSkeleton() {
  return <div className="h-32 animate-pulse rounded-xl bg-muted/30" />;
}

export function AiInsightCard() {
  return (
    <div className="rounded-2xl border bg-white p-6">
      <Suspense fallback={<AiInsightSkeleton />}>
        <AiInsightContent />
      </Suspense>
    </div>
  );
}