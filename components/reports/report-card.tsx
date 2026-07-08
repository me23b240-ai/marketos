// components/reports/report-card.tsx
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Sparkles,
  Clock,
  CalendarDays,
  ArrowRight,
  FileText,
} from "lucide-react";

interface ReportCardProps {
  slug: string;
  title: string;
  category: string;
  description: string;
  readingTime: string;
  updated: string;
}

export function ReportCard({
  slug,
  title,
  category,
  description,
  readingTime,
  updated,
}: ReportCardProps) {
  return (
    <Link href={`/reports/${slug}`} className="group block h-full">
      <Card className="flex h-full flex-col overflow-hidden border-border bg-card shadow-sm transition-colors hover:border-foreground/20 hover:shadow-md">
        {/* Cover Placeholder */}
        <div className="flex aspect-[16/9] w-full items-center justify-center border-b border-border bg-muted/30">
          <FileText className="h-8 w-8 text-muted-foreground/40" />
        </div>

        <CardHeader className="flex flex-col gap-2 pb-2">
          <div className="flex items-center justify-between gap-2">
            <Badge
              variant="outline"
              className="border-border text-xs font-medium text-muted-foreground"
            >
              {category}
            </Badge>
            <Badge className="gap-1 bg-foreground text-xs font-medium text-background hover:bg-foreground/90">
              <Sparkles className="h-3 w-3" />
              AI Generated
            </Badge>
          </div>
          <h2 className="text-base font-semibold leading-snug tracking-tight text-foreground">
            {title}
          </h2>
        </CardHeader>

        <CardContent className="flex flex-1 flex-col justify-between gap-3 pt-0">
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" />
              {readingTime}
            </span>
            <span className="flex items-center gap-1">
              <CalendarDays className="h-3.5 w-3.5" />
              Updated {updated}
            </span>
          </div>
        </CardContent>

        <CardFooter className="border-t border-border pt-3">
          <span className="flex items-center gap-1 text-sm font-medium text-foreground transition-transform group-hover:translate-x-0.5">
            Open Report
            <ArrowRight className="h-3.5 w-3.5" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
}