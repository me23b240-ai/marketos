export const dashboardMetrics = [
  {
    label: "Market Size",
    value: "₹4.2T",
    change: "+12.4% YoY",
  },
  {
    label: "Funding",
    value: "₹18,400 Cr",
    change: "+8.2% this quarter",
  },
  {
    label: "Companies",
    value: "2,847",
    change: "+142 new this year",
  },
  {
    label: "Industries",
    value: "24",
    change: "6 high-growth sectors",
  },
] as const;

export const marketPulseData = [
  { month: "Jan", value: 62 },
  { month: "Feb", value: 68 },
  { month: "Mar", value: 65 },
  { month: "Apr", value: 74 },
  { month: "May", value: 78 },
  { month: "Jun", value: 82 },
  { month: "Jul", value: 79 },
  { month: "Aug", value: 86 },
  { month: "Sep", value: 91 },
  { month: "Oct", value: 88 },
  { month: "Nov", value: 94 },
  { month: "Dec", value: 97 },
] as const;

export const dashboardNavItems = [
  { label: "Dashboard", icon: "layout-dashboard" },
  { label: "Companies", icon: "building-2" },
  { label: "Industries", icon: "layers" },
  { label: "Compare", icon: "git-compare" },
] as const;

export const dashboardKpis = [
  {
    label: "Tracked Companies",
    value: "2,847",
    change: "+142 added this month",
  },
  {
    label: "Industries Covered",
    value: "24",
    change: "6 high-growth sectors",
  },
  {
    label: "Funding Tracked",
    value: "₹18,400 Cr",
    change: "+8.2% this quarter",
  },
  {
    label: "Daily Insights",
    value: "12",
    change: "4 new today",
  },
] as const;

export const trendingIndustries = [
  {
    name: "Quick Commerce",
    growth: "+38%",
    companies: 28,
  },
  {
    name: "Fintech",
    growth: "+22%",
    companies: 156,
  },
  {
    name: "Consumer AI",
    growth: "+51%",
    companies: 42,
  },
  {
    name: "Travel",
    growth: "+14%",
    companies: 67,
  },
] as const;

export const marketNews = [
  {
    id: "1",
    title: "Quick commerce players raise ₹2,400 Cr in Q1 as metro density improves",
    source: "Economic Times",
    time: "2h ago",
    category: "Funding",
  },
  {
    id: "2",
    title: "UPI transaction volume crosses 16B monthly mark for the first time",
    source: "Mint",
    time: "5h ago",
    category: "Fintech",
  },
  {
    id: "3",
    title: "Social commerce GMV grows 28% YoY as tier-2 adoption accelerates",
    source: "Inc42",
    time: "8h ago",
    category: "Commerce",
  },
] as const;

export const aiInsightOfTheDay = {
  text: "Zepto continues to outpace category growth in metro markets, but rising logistics costs could compress margins.",
  tags: ["Quick Commerce", "Unit Economics", "Metro Markets"],
  confidence: "High confidence",
} as const;

export const trendingCompanies = [
  {
    company: "Meesho",
    industry: "Social Commerce",
    growth: "+24%",
    status: "Active" as const,
  },
  {
    company: "Blinkit",
    industry: "Quick Commerce",
    growth: "+31%",
    status: "Active" as const,
  },
  {
    company: "Zepto",
    industry: "Quick Commerce",
    growth: "+45%",
    status: "Active" as const,
  },
  {
    company: "PhonePe",
    industry: "Fintech",
    growth: "+18%",
    status: "Active" as const,
  },
] as const;
