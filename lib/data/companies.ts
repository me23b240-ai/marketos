export type TrendDirection = "up" | "down";

export interface Company {
  slug: string;
  name: string;
  industry: string;
  metric: string;
  trend: string;
  trendDirection: TrendDirection;
}

export const companies: Company[] = [
  {
    slug: "meesho",
    name: "Meesho",
    industry: "Social Commerce",
    metric: "₹6,000 Cr GMV",
    trend: "24%",
    trendDirection: "up",
  },
  {
    slug: "flipkart",
    name: "Flipkart",
    industry: "E-commerce",
    metric: "150M+ MAU",
    trend: "8%",
    trendDirection: "up",
  },
  {
    slug: "blinkit",
    name: "Blinkit",
    industry: "Quick Commerce",
    metric: "10 min avg. delivery",
    trend: "31%",
    trendDirection: "up",
  },
  {
    slug: "zepto",
    name: "Zepto",
    industry: "Quick Commerce",
    metric: "₹2,500 Cr ARR",
    trend: "45%",
    trendDirection: "up",
  },
  {
    slug: "swiggy",
    name: "Swiggy",
    industry: "Food Delivery",
    metric: "₹12,000 Cr GMV",
    trend: "3%",
    trendDirection: "down",
  },
  {
    slug: "phonepe",
    name: "PhonePe",
    industry: "Fintech",
    metric: "500M+ registered users",
    trend: "18%",
    trendDirection: "up",
  },
];
