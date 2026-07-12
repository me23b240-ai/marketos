// components/reports/report-section.tsx
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, User, Download, ArrowRight } from "lucide-react";

interface ReportSectionProps {
  title: string;
  category: string;
  description: string;
  publishedDate: string;
  readingTime: string;
  author: string;
  onDownloadHref?: string;
  onViewHref?: string;
}

export function ReportSection({
  title,
  category,
  description,
  publishedDate,
  readingTime,
  author,
  onDownloadHref = "#",
  onViewHref = "#",
}: ReportSectionProps) {
  return (
    <Card className="flex flex-col gap-4 border-border bg-card p-5 shadow-sm md:p-6">
      <CardHeader className="flex flex-col gap-3 p-0">
        <Badge
          variant="outline"
          className="w-fit border-border text-xs font-medium text-muted-foreground"
        >
          {category}
        </Badge>
        <h2 className="text-xl font-semibold leading-snug tracking-tight text-foreground md:text-2xl">
          {title}
        </h2>
      </CardHeader>

      <CardContent className="flex flex-col gap-4 p-0">
        <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
          {description}
        </p>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {publishedDate}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            {readingTime}
          </span>
          <span className="flex items-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            {author}
          </span>
        </div>
      </CardContent>

      <CardFooter className="flex flex-col gap-2 border-t border-border p-0 pt-4 sm:flex-row">
        <Button
          render={<Link href={onDownloadHref} />}
          variant="outline"
          className="w-full gap-1.5 border-border text-sm font-medium text-foreground hover:bg-muted sm:w-auto"
        >
          <Download className="h-3.5 w-3.5" />
          Download PDF
        </Button>
        <Button
          render={<Link href={onViewHref} />}
          className="w-full gap-1.5 bg-foreground text-sm font-medium text-background hover:bg-foreground/90 sm:w-auto"
        >
          View Report
          <ArrowRight className="h-3.5 w-3.5" />
        </Button>
      </CardFooter>
    </Card>
  );
}