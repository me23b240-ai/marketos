import { Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { aiInsightOfTheDay } from "@/lib/data/dashboard-preview";

export function AiInsightCard() {
  return (
    <Card
      size="sm"
      className="relative overflow-hidden border-foreground/15 bg-muted/20 py-4"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-foreground/20" />

      <CardHeader className="gap-3 pb-2">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <div className="flex size-7 items-center justify-center rounded-md bg-foreground text-background">
              <Sparkles className="size-3.5" />
            </div>
            <CardTitle className="text-sm font-medium">
              AI Insight of the Day
            </CardTitle>
          </div>
          <Badge variant="outline" className="text-xs font-normal">
            {aiInsightOfTheDay.confidence}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-0">
        <blockquote className="border-l-2 border-foreground/20 pl-4 text-sm leading-relaxed text-foreground/90">
          &ldquo;{aiInsightOfTheDay.text}&rdquo;
        </blockquote>

        <div className="flex flex-wrap gap-1.5">
          {aiInsightOfTheDay.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs font-normal">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
