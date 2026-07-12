// lib/dashboard/analytics.ts
import { companies } from "@/lib/data/company-profile";
import type { Company } from "@/lib/data/company-profile";

/* ============================================================
   PARSERS — raw string fields → numbers
   ============================================================ */

/**
 * Parses employee counts like "1200", "500-1000", "10,000+".
 * Ranges are averaged.
 */
export function parseEmployees(raw: string): number {
  if (!raw) return 0;
  const cleaned = raw.replace(/,/g, "").trim();

  const rangeMatch = cleaned.match(/(\d+)\s*-\s*(\d+)/);
  if (rangeMatch) {
    const low = Number(rangeMatch[1]);
    const high = Number(rangeMatch[2]);
    return Math.round((low + high) / 2);
  }

  const singleMatch = cleaned.match(/(\d+)/);
  if (singleMatch) {
    return Number(singleMatch[1]);
  }

  return 0;
}

/**
 * Parses valuation strings like "$1.2B", "$450M", "$900K".
 * Returns the value normalized to millions of USD.
 */
export function parseValuation(raw: string): number {
  if (!raw) return 0;
  const cleaned = raw.replace(/[$,\s]/g, "");
  const match = cleaned.match(/([\d.]+)\s*(B|M|K)?/i);
  if (!match) return 0;

  const value = parseFloat(match[1]);
  const unit = match[2]?.toUpperCase();

  if (Number.isNaN(value)) return 0;

  switch (unit) {
    case "B":
      return value * 1000;
    case "M":
      return value;
    case "K":
      return value / 1000;
    default:
      return value;
  }
}

/**
 * Parses growth strings like "45%", "+45%", "-12%".
 * Returns a signed number.
 */
export function parseGrowth(raw: string): number {
  if (!raw) return 0;
  const cleaned = raw.replace(/[%\s]/g, "");
  const value = parseFloat(cleaned);
  return Number.isNaN(value) ? 0 : value;
}
/**
 * Parses a founding year stored as a string (e.g. "2007") into a number.
 * Returns null if it can't be parsed, so callers can filter cleanly.
 */
export function parseFoundedYear(raw: string): number | null {
  if (!raw) return null;
  const match = raw.match(/\d{4}/);
  if (!match) return null;
  const year = Number(match[0]);
  return Number.isNaN(year) ? null : year;
}
/**
 * Parses funding-raised strings using the same B/M/K logic as valuation.
 */
export function parseFunding(raw: string): number {
  return parseValuation(raw);
}

/**
 * Buckets a growth percentage into a coarse trend label, used anywhere
 * we need a status badge instead of a raw number (e.g. trending tables).
 */
export function deriveTrendStatus(
  growth: number
): "Rising" | "Stable" | "Declining" {
  if (growth > 5) return "Rising";
  if (growth < -5) return "Declining";
  return "Stable";
}

/* ============================================================
   GENERIC GROUPING HELPER
   ============================================================ */

function groupCountBy<T>(
  items: T[],
  keyFn: (item: T) => string
): { key: string; count: number }[] {
  const map = new Map<string, number>();
  for (const item of items) {
    const key = keyFn(item);
    if (!key) continue;
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return Array.from(map.entries()).map(([key, count]) => ({ key, count }));
}

/* ============================================================
   STATS
   ============================================================ */

export interface DashboardStats {
  totalCompanies: number;
  totalIndustries: number;
  totalCities: number;
  publicCompanies: number;
  privateCompanies: number;
  averageFoundedYear: number;
  oldestCompany: Company | null;
  newestCompany: Company | null;
}

function computeStats(data: Company[]): DashboardStats {
  const totalCompanies = data.length;

  const industries = new Set(data.map((c) => c.industry).filter(Boolean));

  // No dedicated `city` field on Company — hq is "City, Country".
  // Extract the city portion for distribution purposes.
  const cities = new Set(
    data.map((c) => c.hq?.split(",")[0]?.trim()).filter(Boolean)
  );

  // No `isPublic` field on Company — derive it from `stage`.
  const publicCompanies = data.filter(
    (c) => c.stage?.toLowerCase() === "public"
  ).length;
  const privateCompanies = totalCompanies - publicCompanies;

  const foundedYears = data
    .map((c) => parseFoundedYear(c.founded))
    .filter((year): year is number => year !== null);

  const averageFoundedYear = foundedYears.length
    ? Math.round(foundedYears.reduce((sum, year) => sum + year, 0) / foundedYears.length)
    : 0;

  const sortedByFounded = [...data]
    .map((c) => ({ company: c, year: parseFoundedYear(c.founded) }))
    .filter((entry): entry is { company: Company; year: number } => entry.year !== null)
    .sort((a, b) => a.year - b.year);

  const oldestCompany = sortedByFounded[0]?.company ?? null;
  const newestCompany = sortedByFounded[sortedByFounded.length - 1]?.company ?? null;

  return {
    totalCompanies,
    totalIndustries: industries.size,
    totalCities: cities.size,
    publicCompanies,
    privateCompanies,
    averageFoundedYear,
    oldestCompany,
    newestCompany,
  };
}

/* ============================================================
   DISTRIBUTIONS
   ============================================================ */

export interface IndustryDistributionItem {
  industry: string;
  count: number;
}

function computeIndustryDistribution(data: Company[]): IndustryDistributionItem[] {
  return groupCountBy(data, (c) => c.industry)
    .map(({ key, count }) => ({ industry: key, count }))
    .sort((a, b) => b.count - a.count);
}

export interface CityDistributionItem {
  city: string;
  count: number;
}
function computeCityDistribution(data: Company[]): CityDistributionItem[] {
  return groupCountBy(data, (c) => c.hq?.split(",")[0]?.trim() ?? "")
    .map(({ key, count }) => ({ city: key, count }))
    .sort((a, b) => b.count - a.count);
}

export interface StageDistributionItem {
  stage: string;
  count: number;
}

function computeStageDistribution(data: Company[]): StageDistributionItem[] {
  return groupCountBy(data, (c) => c.stage)
    .map(({ key, count }) => ({ stage: key, count }))
    .sort((a, b) => b.count - a.count);
}

export interface FoundedTimelineItem {
  year: number;
  count: number;
}

function computeFoundedTimeline(data: Company[]): FoundedTimelineItem[] {
  return groupCountBy(data, (c) => {
    const year = parseFoundedYear(c.founded);
    return year !== null ? String(year) : "";
  })
    .map(({ key, count }) => ({ year: Number(key), count }))
    .sort((a, b) => a.year - b.year);
}

/* ============================================================
   RANKINGS
   ============================================================ */

function computeValuationRanking(data: Company[]): Company[] {
  return [...data]
    .sort((a, b) => parseValuation(b.valuation) - parseValuation(a.valuation))
    .slice(0, 10);
}

function computeEmployeeRanking(data: Company[]): Company[] {
  return [...data]
    .sort((a, b) => parseEmployees(b.employees) - parseEmployees(a.employees))
    .slice(0, 10);
}

function computeGrowthRanking(data: Company[]): Company[] {
  return [...data]
    .sort((a, b) => parseGrowth(b.growth) - parseGrowth(a.growth))
    .slice(0, 10);
}

/* ============================================================
   RECENTLY ADDED
   ============================================================ */

export interface RecentCompanyItem extends Company {
  addedAt?: string;
}

/**
 * Sorts by an `addedAt` timestamp if present on the data. Falls back to
 * sorting by founding year (descending) when no addedAt field exists,
 * so this never silently returns mock/static data.
 */
function computeRecentlyAdded(data: Company[]): Company[] {
  const hasAddedAt = data.some((c) => typeof (c as RecentCompanyItem).addedAt === "string");

  if (hasAddedAt) {
    return [...data]
      .sort((a, b) => {
        const aDate = new Date((a as RecentCompanyItem).addedAt ?? 0).getTime();
        const bDate = new Date((b as RecentCompanyItem).addedAt ?? 0).getTime();
        return bDate - aDate;
      })
      .slice(0, 6);
  }

  return [...data]
    .map((c) => ({ company: c, year: parseFoundedYear(c.founded) ?? 0 }))
    .sort((a, b) => b.year - a.year)
    .map((entry) => entry.company)
    .slice(0, 6);
}

/* ============================================================
   INDUSTRY / COHORT GROWTH
   ============================================================ */

export interface IndustryGrowthItem {
  industry: string;
  count: number;
  averageGrowth: number;
}

function computeIndustryGrowth(data: Company[]): IndustryGrowthItem[] {
  const map = new Map<string, { total: number; growthSum: number }>();

  for (const c of data) {
    if (!c.industry) continue;
    const entry = map.get(c.industry) ?? { total: 0, growthSum: 0 };
    entry.total += 1;
    entry.growthSum += parseGrowth(c.growth);
    map.set(c.industry, entry);
  }

  return Array.from(map.entries())
    .map(([industry, { total, growthSum }]) => ({
      industry,
      count: total,
      averageGrowth: total ? Math.round(growthSum / total) : 0,
    }))
    .sort((a, b) => b.averageGrowth - a.averageGrowth);
}

export interface GrowthByCohortItem {
  year: number;
  averageGrowth: number;
}

function computeGrowthByCohort(data: Company[]): GrowthByCohortItem[] {
  const map = new Map<number, { total: number; sum: number }>();

  for (const c of data) {
    const year = parseFoundedYear(c.founded);
    if (year === null) continue;
    const entry = map.get(year) ?? { total: 0, sum: 0 };
    entry.total += 1;
    entry.sum += parseGrowth(c.growth);
    map.set(year, entry);
  }

  return Array.from(map.entries())
    .map(([year, { total, sum }]) => ({
      year,
      averageGrowth: total ? Math.round(sum / total) : 0,
    }))
    .sort((a, b) => a.year - b.year);
}

/* ============================================================
   PUBLIC EXPORTS — computed once from the static companies array
   ============================================================ */

export const stats: DashboardStats = computeStats(companies);
export const industryDistribution: IndustryDistributionItem[] =
  computeIndustryDistribution(companies);
export const cityDistribution: CityDistributionItem[] = computeCityDistribution(companies);
export const stageDistribution: StageDistributionItem[] = computeStageDistribution(companies);
export const foundedTimeline: FoundedTimelineItem[] = computeFoundedTimeline(companies);
export const valuationRanking: Company[] = computeValuationRanking(companies);
export const employeeRanking: Company[] = computeEmployeeRanking(companies);
export const growthRanking: Company[] = computeGrowthRanking(companies);
export const recentlyAdded: Company[] = computeRecentlyAdded(companies);
export const industryGrowth: IndustryGrowthItem[] = computeIndustryGrowth(companies);
export const growthByCohort: GrowthByCohortItem[] = computeGrowthByCohort(companies);
export const totalValuationTracked: number = companies.reduce(
  (sum, c) => sum + parseValuation(c.valuation),
  0
);