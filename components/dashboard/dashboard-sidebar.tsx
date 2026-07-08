"use client";

import Link from "next/link";
import {
  Building2,
  GitCompare,
  Layers,
  LayoutDashboard,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { dashboardNavItems } from "@/lib/data/dashboard-preview";

const iconMap = {
  "layout-dashboard": LayoutDashboard,
  "building-2": Building2,
  layers: Layers,
  "git-compare": GitCompare,
} as const;

const hrefMap: Record<string, string> = {
  Dashboard: "/dashboard",
  Companies: "/companies",
  Industries: "/industries",
  Compare: "/compare",
};

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
        "hidden w-14 shrink-0 flex-col border-r bg-muted/30 sm:flex",
        className
      )}
    >
      <div className="flex h-12 items-center justify-center border-b">
        <Link href="/">
          <div className="flex size-7 cursor-pointer items-center justify-center rounded-md bg-foreground text-xs font-semibold text-background">
            M
          </div>
        </Link>
      </div>

      <nav className="flex flex-1 flex-col gap-1 p-2">
        {dashboardNavItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = item.label === activeItem;

          return (
            <Link
              key={item.label}
              href={hrefMap[item.label] || "#"}
              aria-label={item.label}
            >
              <div
                className={cn(
                  "flex size-10 cursor-pointer items-center justify-center rounded-lg transition-colors",
                  isActive
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <Icon className="size-4" />
              </div>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}