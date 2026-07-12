// components/compare/comparison-summary.tsx
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  TrendingUp,
  TrendingDown,
  Compass,
  Trophy,
} from "lucide-react";

interface ComparisonSummaryProps {
  companyA: string;
  companyB: string;
}

interface SummaryProfile {
  strengths: string[];
  weaknesses: string[];
}

import { companies } from "@/lib/data/company-profile";

export function ComparisonSummary({
  companyA,
  companyB,
}: ComparisonSummaryProps) {
  const a = companies.find((c) => c.name === companyA);
  const b = companies.find((c) => c.name === companyB);

  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="border-b border-border pb-4">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground/5">
              <Sparkles className="h-4 w-4 text-foreground" />
            </div>
            <CardTitle className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
              AI Comparison Summary
            </CardTitle>
          </div>
          <Badge
            variant="outline"
            className="w-fit border-border text-xs font-medium text-muted-foreground"
          >
            92% Confidence
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col gap-6 pt-6">
        {/* Executive Summary */}
        <section className="flex flex-col gap-2">
          <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Executive Summary
          </h3>
          <p className="text-sm leading-relaxed text-foreground">
            {companyA} and {companyB} represent two distinct positions within
            India&apos;s consumer internet landscape. Comparing their scale,
            business model, and growth trajectory highlights where each
            company holds a structural advantage, and where the other is
            better positioned to close the gap over the next 12–24 months.
          </p>
        </section>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Strengths */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5">
              <TrendingUp className="h-3.5 w-3.5 text-foreground" />
              <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Highlights
              </h3>
            </div>

            <ul className="flex flex-col gap-2 text-sm">
              <li><strong>{companyA}</strong>: {a?.description}</li>
              <li><strong>Growth:</strong> {a?.growth}</li>
              <li><strong>{companyB}</strong>: {b?.description}</li>
              <li><strong>Growth:</strong> {b?.growth}</li>
            </ul>
          </section>

          {/* Weaknesses */}
          <section className="flex flex-col gap-2">
            <div className="flex items-center gap-1.5">
              <TrendingDown className="h-3.5 w-3.5 text-foreground" />
              <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Company Details
              </h3>
            </div>

            <ul className="flex flex-col gap-2 text-sm">
              <li><strong>{companyA}</strong>: {a?.stage}</li>
              <li><strong>HQ:</strong> {a?.hq}</li>
              <li><strong>{companyB}</strong>: {b?.stage}</li>
              <li><strong>HQ:</strong> {b?.hq}</li>
            </ul>
          </section>
        </div>

        {/* Strategic Outlook */}
        <section className="flex flex-col gap-2">
          <div className="flex items-center gap-1.5">
            <Compass className="h-3.5 w-3.5 text-foreground" />
            <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Strategic Outlook
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-foreground">
            {companyA}&apos;s path forward depends on converting its current
            strengths into durable competitive advantages, while{" "}
            {companyB} faces the challenge of defending its position against
            faster-moving, more focused competitors. Both companies are
            expected to sharpen category focus and margin discipline over the
            next few funding or reporting cycles.
          </p>
        </section>

        {/* Winner */}
        <section className="flex flex-col gap-2 rounded-lg border border-border bg-muted/30 p-4">
          <div className="flex items-center gap-1.5">
            <Trophy className="h-3.5 w-3.5 text-foreground" />
            <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Winner (Current Position)
            </h3>
          </div>
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-sm font-semibold text-foreground">
              {companyB}
            </span>
            <span className="text-sm text-muted-foreground">
              Currently leads on scale and market position
            </span>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}