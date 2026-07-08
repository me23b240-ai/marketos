import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  label: string;
  value: string;
  change?: string;
  className?: string;
}

export function MetricCard({
  label,
  value,
  change,
  className,
}: MetricCardProps) {
  return (
    <Card size="sm" className={cn("py-4", className)}>
      <CardHeader className="gap-1 pb-0">
        <CardTitle className="text-xs font-normal text-muted-foreground">
          {label}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-2">
        <p className="text-2xl font-semibold tracking-tight">{value}</p>
        {change && (
          <p className="mt-1 text-xs text-muted-foreground">{change}</p>
        )}
      </CardContent>
    </Card>
  );
}
