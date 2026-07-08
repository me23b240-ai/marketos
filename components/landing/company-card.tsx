// components/landing/company-card.tsx
import { TrendingDown, TrendingUp } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Company } from "@/lib/data/companies";

interface CompanyCardProps {
  company: Company;
}

export function CompanyCard({ company }: CompanyCardProps) {
  const isUp = company.trendDirection === "up";

  return (
    <Link href={`/companies/${company.slug}`} className="block">
      <Card
        className={cn(
          "cursor-pointer py-5 transition-all duration-200",
          "hover:-translate-y-0.5 hover:shadow-md hover:ring-foreground/20"
        )}
      >
        <CardHeader className="gap-0">
          <div className="flex w-full items-start justify-between">
            <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-foreground">
              {company.name.charAt(0)}
            </div>
            <Badge
              variant={isUp ? "secondary" : "destructive"}
              className="gap-1 font-mono text-xs"
            >
              {isUp ? (
                <TrendingUp className="size-3" />
              ) : (
                <TrendingDown className="size-3" />
              )}
              {isUp ? "+" : "-"}
              {company.trend}
            </Badge>
          </div>

          <CardTitle className="mt-4 text-base font-semibold">
            {company.name}
          </CardTitle>
          <CardDescription>{company.industry}</CardDescription>
        </CardHeader>

        <CardContent className="pt-4">
          <p className="font-mono text-sm font-medium tracking-tight">
            {company.metric}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}