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
import { trendingCompanies } from "@/lib/data/dashboard-preview";

export function TrendingCompaniesTable() {
  return (
    <Card size="sm" className="py-4">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">Trending Companies</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
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
            {trendingCompanies.map((row) => (
              <TableRow key={row.company}>
                <TableCell className="font-medium">{row.company}</TableCell>
                <TableCell className="hidden text-muted-foreground sm:table-cell">
                  {row.industry}
                </TableCell>
                <TableCell className="font-mono text-sm">{row.growth}</TableCell>
                <TableCell className="text-right">
                  <Badge variant="secondary">{row.status}</Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
