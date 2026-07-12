// lib/data/dashboard-preview.ts

// Only remaining live export from this file — still consumed by
// components/dashboard/dashboard-sidebar.tsx for nav rendering.
//
// Everything else that used to live here (dashboardMetrics,
// marketPulseData, dashboardKpis, trendingIndustries, marketNews,
// aiInsightOfTheDay, trendingCompanies) has been removed: each one is
// now computed live from lib/dashboard/analytics.ts or fetched via the
// AI-backed lib/dashboard/*.ts files (ai-daily-insight, funding-estimate,
// market-news), so keeping the mock versions around here would just be
// dead code that could silently drift out of sync with real data.
export const dashboardNavItems = [
  {
    label: "Dashboard",
    icon: "layout-dashboard",
    href: "/dashboard",
  },
  {
    label: "Companies",
    icon: "building-2",
    href: "/companies",
  },
  {
    label: "Industries",
    icon: "layers",
    href: "/industries",
  },
  {
    label: "Compare",
    icon: "git-compare",
    href: "/compare",
  },
  {
    label: "Reports",
    icon: "file-text",
    href: "/reports",
  },
  {
    label: "AI Workspace",
    icon: "sparkles",
    href: "/ai",
  },
] as const;

export const dashboardMetrics = [
  {
    label: "Tracked Companies",
    value: "120+",
    change: "+18 this month",
  },
  {
    label: "Industries",
    value: "18",
    change: "Growing",
  },
  {
    label: "Market Signals",
    value: "350+",
    change: "Live",
  },
  {
    label: "AI Reports",
    value: "Unlimited",
    change: "Powered by Gemini",
  },
];