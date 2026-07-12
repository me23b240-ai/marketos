// components/dashboard/trending-companies-table.tsx
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { growthRanking, parseGrowth, deriveTrendStatus } from "@/lib/dashboard/analytics";

const statusVariant = {
  Rising: "secondary",
  Stable: "outline",
  Declining: "destructive",
} as const;

export function TrendingCompaniesTable() {
  const rows = growthRanking.slice(0, 6);

  return (
    <Card size="sm" className="py-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Trending Companies</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        {rows.length === 0 ? (
          <p className="py-6 text-center text-sm text-muted-foreground">
            No company data available yet.
          </p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead>Company</TableHead>
                <TableHead className="hidden sm:table-cell">Industry</TableHead>
                <TableHead>Growth</TableHead>
                <TableHead className="text-right">Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((company) => {
                const status = deriveTrendStatus(parseGrowth(company.growth));

                return (
                  <TableRow key={company.slug ?? company.name}>
                    <TableCell className="font-medium">{company.name}</TableCell>
                    <TableCell className="hidden text-muted-foreground sm:table-cell">
                      {company.industry}
                    </TableCell>
                    <TableCell className="font-mono text-sm">{company.growth}</TableCell>
                    <TableCell className="text-right">
                      <Badge variant={statusVariant[status]}>{status}</Badge>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}