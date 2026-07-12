// lib/dashboard/insights.ts
import {
  stats,
  cityDistribution,
  industryDistribution,
  valuationRanking,
  stageDistribution,
} from "@/lib/dashboard/analytics";

function toPercent(part: number, total: number): number {
  if (total <= 0) return 0;
  return Math.round((part / total) * 100);
}

function currentYear(): number {
  return new Date().getFullYear();
}

function buildTopCityInsight(): string | null {
  const top = cityDistribution[0];
  if (!top || stats.totalCompanies === 0) return null;

  const share = toPercent(top.count, stats.totalCompanies);
  return `${top.city} accounts for ${share}% of tracked startups.`;
}

function buildTopIndustryInsight(): string | null {
  const top = industryDistribution[0];
  if (!top) return null;

  return `${top.industry} is the largest tracked sector.`;
}

function buildAverageAgeInsight(): string | null {
  if (!stats.averageFoundedYear) return null;

  const age = currentYear() - stats.averageFoundedYear;
  if (age <= 0) return null;

  return `The average company age is ${age} years.`;
}

function buildPublicShareInsight(): string | null {
  if (stats.totalCompanies === 0) return null;

  const share = toPercent(stats.publicCompanies, stats.totalCompanies);
  return `Only ${share}% of tracked companies are publicly listed.`;
}

function buildTopValuationInsight(): string | null {
  const top = valuationRanking[0];
  if (!top) return null;

  return `The largest valuation belongs to ${top.name} at ${top.valuation}.`;
}

function buildTopStageInsight(): string | null {
  const top = stageDistribution[0];
  if (!top || stats.totalCompanies === 0) return null;

  const share = toPercent(top.count, stats.totalCompanies);
  return `${top.stage} is the most common stage, representing ${share}% of companies.`;
}

/**
 * Generates a fixed set of executive insights, computed entirely from
 * analytics.ts. If a given insight can't be produced from the current
 * dataset, it is skipped rather than rendered with placeholder text.
 */
function generateInsights(): string[] {
  const builders = [
    buildTopCityInsight,
    buildTopIndustryInsight,
    buildAverageAgeInsight,
    buildPublicShareInsight,
    buildTopValuationInsight,
    buildTopStageInsight,
  ];

  const insights: string[] = [];

  for (const build of builders) {
    const insight = build();
    if (insight) insights.push(insight);
    if (insights.length === 5) break;
  }

  return insights;
}

export const insights: string[] = generateInsights();