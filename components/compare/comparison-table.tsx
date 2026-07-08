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

interface CompanyProfile {
  industry: string;
  founded: string;
  headquarters: string;
  employees: string;
  valuation: string;
  fundingStage: string;
  growth: string;
  businessModel: string;
}

interface ComparisonTableProps {
  companyA: string;
  companyB: string;
}

const COMPANY_DATA: Record<string, CompanyProfile> = {
  Meesho: {
    industry: "E-commerce (Social Commerce)",
    founded: "2015",
    headquarters: "Bengaluru, Karnataka",
    employees: "~5,500",
    valuation: "$3.9B",
    fundingStage: "Late Stage (Pre-IPO)",
    growth: "High YoY GMV Growth",
    businessModel: "Asset-light, Reseller-driven",
  },
  Flipkart: {
    industry: "E-commerce (Marketplace)",
    founded: "2007",
    headquarters: "Bengaluru, Karnataka",
    employees: "~40,000",
    valuation: "$36B",
    fundingStage: "Acquired (Walmart Majority Stake)",
    growth: "Steady, Market-Leading Scale",
    businessModel: "Inventory-led + Marketplace Hybrid",
  },
  Blinkit: {
    industry: "Quick Commerce",
    founded: "2013",
    headquarters: "Gurugram, Haryana",
    employees: "~4,200",
    valuation: "$13B",
    fundingStage: "Acquired (Eternal/Zomato)",
    growth: "Very High YoY Order Growth",
    businessModel: "Dark Store-based Rapid Delivery",
  },
  Zepto: {
    industry: "Quick Commerce",
    founded: "2021",
    headquarters: "Mumbai, Maharashtra",
    employees: "~3,000",
    valuation: "$5B",
    fundingStage: "Series F",
    growth: "Rapid Metro Expansion",
    businessModel: "Dark Store-based Rapid Delivery",
  },
  Swiggy: {
    industry: "Food Delivery & Quick Commerce",
    founded: "2014",
    headquarters: "Bengaluru, Karnataka",
    employees: "~6,000",
    valuation: "$11B",
    fundingStage: "Publicly Listed",
    growth: "Moderate, Diversifying Revenue",
    businessModel: "Marketplace + Instamart Quick Commerce",
  },
  PhonePe: {
    industry: "Fintech (Payments)",
    founded: "2015",
    headquarters: "Bengaluru, Karnataka",
    employees: "~3,300",
    valuation: "$12B",
    fundingStage: "Late Stage (Pre-IPO)",
    growth: "Dominant UPI Market Share Growth",
    businessModel: "Payments + Financial Services Cross-sell",
  },
  Nykaa: {
    industry: "Beauty & Fashion E-commerce",
    founded: "2012",
    headquarters: "Mumbai, Maharashtra",
    employees: "~3,500",
    valuation: "$2.5B",
    fundingStage: "Publicly Listed",
    growth: "Steady Category Expansion",
    businessModel: "Inventory-led + Owned Brands",
  },
  MakeMyTrip: {
    industry: "Travel & Tourism",
    founded: "2000",
    headquarters: "Gurugram, Haryana",
    employees: "~3,800",
    valuation: "$10B",
    fundingStage: "Publicly Listed",
    growth: "Strong Post-Pandemic Recovery",
    businessModel: "OTA Marketplace + Bundled Services",
  },
};

function buildRows(companyA: string, companyB: string) {
  const a = COMPANY_DATA[companyA];
  const b = COMPANY_DATA[companyB];

  if (!a || !b) return [];

  return [
    { label: "Industry", companyA: a.industry, companyB: b.industry },
    { label: "Founded", companyA: a.founded, companyB: b.founded },
    {
      label: "Headquarters",
      companyA: a.headquarters,
      companyB: b.headquarters,
    },
    { label: "Employees", companyA: a.employees, companyB: b.employees },
    { label: "Valuation", companyA: a.valuation, companyB: b.valuation },
    {
      label: "Funding Stage",
      companyA: a.fundingStage,
      companyB: b.fundingStage,
    },
    { label: "Growth", companyA: a.growth, companyB: b.growth },
    {
      label: "Business Model",
      companyA: a.businessModel,
      companyB: b.businessModel,
    },
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