import Link from "next/link";
import {
  Building2,
  GitCompare,
  Layers,
  LayoutDashboard,
  FileText,
  Sparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { dashboardNavItems } from "@/lib/data/dashboard-preview";

const iconMap = {
  "layout-dashboard": LayoutDashboard,
  "building-2": Building2,
  layers: Layers,
  "git-compare": GitCompare,
  "file-text": FileText,
  sparkles: Sparkles,
} as const;

interface DashboardSidebarProps {
  className?: string;
  activeItem?: string;
}

export function DashboardSidebar({
  className,
  activeItem = "Dashboard",
}: DashboardSidebarProps) {
  return (
    <aside
      className={cn(
        "hidden w-64 shrink-0 flex-col border-r bg-muted/30 sm:flex",
        className
      )}
    >
      <div className="flex h-12 items-center gap-2 border-b px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-7 items-center justify-center rounded-md bg-foreground text-xs font-semibold text-background">
            M
          </div>
          <span className="text-sm font-semibold text-foreground">
            MarketOS
          </span>
        </Link>
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-3">
        {dashboardNavItems.map((item) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap];
          const isActive = item.label === activeItem;

          return (
            <Link key={item.label} href={item.href} aria-label={item.label}>
              <div
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="size-4 shrink-0" />
                <span className="truncate">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}