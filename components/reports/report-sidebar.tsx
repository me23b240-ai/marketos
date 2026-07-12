// components/reports/report-sidebar.tsx
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, LayoutGrid, Building2 } from "lucide-react";

interface SidebarItem {
  label: string;
  href: string;
}

interface ReportSidebarProps {
  activeHref?: string;
}

const FEATURED_REPORTS: SidebarItem[] = [
  { label: "Marketplace Landscape 2026", href: "/reports/marketplace-landscape-2026" },
  { label: "Quick Commerce Report", href: "/reports/quick-commerce-report" },
  { label: "Consumer AI in India", href: "/reports/consumer-ai-in-india" },
  { label: "Fintech Ecosystem", href: "/reports/fintech-ecosystem" },
];

const INDUSTRIES: SidebarItem[] = [
  { label: "E-commerce", href: "/industries/e-commerce" },
  { label: "Quick Commerce", href: "/industries/quick-commerce" },
  { label: "Fintech", href: "/industries/fintech" },
  { label: "Travel", href: "/industries/travel" },
  { label: "Healthcare", href: "/industries/healthcare" },
];

const COMPANIES: SidebarItem[] = [
  { label: "Meesho", href: "/companies/meesho" },
  { label: "Flipkart", href: "/companies/flipkart" },
  { label: "Blinkit", href: "/companies/blinkit" },
  { label: "PhonePe", href: "/companies/phonepe" },
];

function SidebarSection({
  title,
  icon,
  items,
  activeHref,
}: {
  title: string;
  icon: React.ReactNode;
  items: SidebarItem[];
  activeHref?: string;
}) {
  return (
    <Card className="flex flex-col gap-1 border-border bg-card p-3 shadow-sm">
      <div className="flex items-center gap-1.5 px-2 pb-1.5 pt-1">
        <span className="text-muted-foreground">{icon}</span>
        <h3 className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {title}
        </h3>
      </div>
      <nav className="flex flex-col gap-0.5">
        {items.map((item) => {
          const isActive = item.href === activeHref;
          return (
            <Button
              key={item.href}
              render={<Link href={item.href} />}
              variant={isActive ? "default" : "ghost"}
              className={
                isActive
                  ? "h-auto w-full justify-start bg-foreground px-2 py-1.5 text-sm font-medium text-background hover:bg-foreground/90"
                  : "h-auto w-full justify-start px-2 py-1.5 text-sm font-normal text-muted-foreground hover:bg-muted hover:text-foreground"
              }
            >
              {item.label}
            </Button>
          );
        })}
      </nav>
    </Card>
  );
}

export function ReportSidebar({ activeHref }: ReportSidebarProps) {
  return (
    <aside className="flex w-full flex-col gap-4 md:w-[240px] md:shrink-0">
      <SidebarSection
        title="Featured Reports"
        icon={<FileText className="h-3.5 w-3.5" />}
        items={FEATURED_REPORTS}
        activeHref={activeHref}
      />
      <SidebarSection
        title="Industries"
        icon={<LayoutGrid className="h-3.5 w-3.5" />}
        items={INDUSTRIES}
        activeHref={activeHref}
      />
      <SidebarSection
        title="Companies"
        icon={<Building2 className="h-3.5 w-3.5" />}
        items={COMPANIES}
        activeHref={activeHref}
      />
    </aside>
  );
}