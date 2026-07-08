import { Bell, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function formatDashboardDate(date: Date) {
  return date.toLocaleDateString("en-IN", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function DashboardHeader() {
  const today = formatDashboardDate(new Date());

  return (
    <header className="flex flex-col gap-4 border-b px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-sm text-muted-foreground">Welcome back</p>
        <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
          Dashboard
        </h1>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative w-full sm:w-72">
          <Search className="pointer-events-none absolute top-1/2 left-2.5 size-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search companies, industries..."
            className="pl-8"
          />
        </div>

        <div className="flex items-center justify-between gap-3 sm:justify-end">
          <time
            dateTime={new Date().toISOString().split("T")[0]}
            className="text-sm text-muted-foreground"
          >
            {today}
          </time>
          <Button
            variant="outline"
            size="icon"
            aria-label="Notifications"
            className="shrink-0"
          >
            <Bell className="size-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}
