// components/compare/comparison-table.tsx
import {
  Card,
  CardContent,
  CardDescription,
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
import { companies } from "@/lib/data/company-profile";

interface ComparisonTableProps {
  companyA: string;
  companyB: string;
}


function buildRows(companyA: string, companyB: string) {
  const a = companies.find((c) => c.name === companyA);
  const b = companies.find((c) => c.name === companyB);

  if (!a || !b) return [];

  return [
    { label: "Industry", companyA: a.industry, companyB: b.industry },
    { label: "Founded", companyA: a.founded, companyB: b.founded },
    { label: "Headquarters", companyA: a.hq, companyB: b.hq },
    { label: "Employees", companyA: a.employees, companyB: b.employees },
    { label: "Valuation", companyA: a.valuation, companyB: b.valuation },
    { label: "Funding Stage", companyA: a.stage, companyB: b.stage },
    { label: "Growth", companyA: a.growth, companyB: b.growth },
    { label: "Website", companyA: a.website, companyB: b.website },
  ];
}

export function ComparisonTable({ companyA, companyB }: ComparisonTableProps) {
  const rows = buildRows(companyA, companyB);

  return (
    <Card className="border-border bg-card shadow-sm">
      <CardHeader className="border-b border-border pb-4">
        <CardTitle className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
          Company Comparison
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {companyA} vs {companyB} — key attributes at a glance.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-0">
        <div className="w-full overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="w-1/3 min-w-[140px] text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  Attribute
                </TableHead>
                <TableHead className="w-1/3 min-w-[160px] text-sm font-semibold text-foreground">
                  {companyA}
                </TableHead>
                <TableHead className="w-1/3 min-w-[160px] text-sm font-semibold text-foreground">
                  {companyB}
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow
                  key={row.label}
                  className={
                    index % 2 === 0
                      ? "border-border bg-transparent hover:bg-muted/50"
                      : "border-border bg-muted/20 hover:bg-muted/50"
                  }
                >
                  <TableCell className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                    {row.label}
                  </TableCell>
                  <TableCell className="text-sm text-foreground">
                    {row.companyA}
                  </TableCell>
                  <TableCell className="text-sm text-foreground">
                    {row.companyB}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}