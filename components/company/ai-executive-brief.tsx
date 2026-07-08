"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  TrendingUp,
  AlertTriangle,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

export interface AIExecutiveBriefProps {
  summary: string;
  opportunities: string[];
  risks: string[];
  confidence: number; // 0-100
  tags?: string[];
  className?: string;
}

function getConfidenceLabel(confidence: number) {
  if (confidence >= 80) return "High Confidence";
  if (confidence >= 50) return "Moderate Confidence";
  return "Low Confidence";
}

export function AIExecutiveBrief({
  summary,
  opportunities,
  risks,
  confidence,
  tags = [],
  className,
}: AIExecutiveBriefProps) {
  const clampedConfidence = Math.max(0, Math.min(100, confidence));

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "rounded-xl border border-border bg-card p-6 transition-all hover:border-border hover:shadow-sm",
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              AI Executive Brief
            </h3>
            <p className="text-xs text-muted-foreground">
              Generated summary &amp; analysis
            </p>
          </div>
        </div>

        <div className="flex flex-col items-end gap-1.5">
          <span className="text-xs font-medium text-muted-foreground">
            {getConfidenceLabel(clampedConfidence)}
          </span>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-20 overflow-hidden rounded-full bg-muted">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${clampedConfidence}%` }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                className="h-full rounded-full bg-primary"
              />
            </div>
            <span className="text-xs font-semibold tabular-nums text-foreground">
              {clampedConfidence}%
            </span>
          </div>
        </div>
      </div>

      {/* Tags */}
      {tags.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="rounded-full border border-border bg-card px-2.5 py-0.5 text-xs font-medium text-muted-foreground hover:bg-muted"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}

      <Separator className="my-5 bg-border" />

      {/* Summary */}
      <p className="text-sm leading-relaxed text-muted-foreground">{summary}</p>

      {/* Opportunities & Risks */}
      <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {/* Opportunities */}
        <div>
          <div className="flex items-center gap-1.5">
            <TrendingUp className="h-3.5 w-3.5 text-green-600" />
            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Opportunities
            </h4>
          </div>
          <ul className="mt-3 space-y-2">
            {opportunities.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Risks */}
        <div>
          <div className="flex items-center gap-1.5">
            <AlertTriangle className="h-3.5 w-3.5 text-amber-600" />
            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Risks
            </h4>
          </div>
          <ul className="mt-3 space-y-2">
            {risks.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground"
              >
                <ChevronRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center gap-1.5 border-t border-border pt-4 text-xs text-muted-foreground">
        <ShieldCheck className="h-3.5 w-3.5" />
        <span>AI-generated insight — verify before making decisions.</span>
      </div>
    </motion.div>
  );
}