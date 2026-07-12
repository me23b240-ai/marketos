// app/reports/page.tsx
"use client";

import { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { REPORTS } from "@/lib/data/reports";
import { ReportCard } from "@/components/reports/report-card";
import { ReportSidebar } from "@/components/reports/report-sidebar";

const CATEGORIES = [
  "All",
  "E-commerce",
  "Quick Commerce",
  "Artificial Intelligence",
  "Fintech",
  "Travel",
  "Food & Delivery",
  "Healthcare",
  "Education",
];

export default function ReportsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredReports = useMemo(() => {
    return REPORTS.filter((report) => {
      const matchesCategory =
        activeCategory === "All" || report.category === activeCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        report.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        report.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Reports
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          AI-generated research and market intelligence.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative w-full md:max-w-md">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search reports..."
          className="h-10 w-full rounded-md border border-input bg-background pl-9 pr-3 text-sm text-foreground shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
      </div>

      {/* Category Chips */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((category) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={
                isActive
                  ? "inline-flex h-8 items-center rounded-full bg-foreground px-3 text-xs font-medium text-background transition-colors"
                  : "inline-flex h-8 items-center rounded-full border border-border bg-background px-3 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              }
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Report Grid */}
      {filteredReports.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredReports.map((report) => (
            <ReportCard
              key={report.slug}
              slug={report.slug}
              title={report.title}
              category={report.category}
              description={report.heroDescription}
              readingTime={report.readingTime}
              updated={report.updated}
            />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-2 rounded-xl border border-dashed border-border py-16 text-center">
          <p className="text-sm font-medium text-foreground">
            No reports found
          </p>
          <p className="text-sm text-muted-foreground">
            Try a different search term or category.
          </p>
        </div>
      )}
    </div>
  );
}