// lib/dashboard/ai-daily-insight.ts
import { unstable_cache } from "next/cache";

import { callGemini } from "@/lib/gemini/client";
import {
  stats,
  industryGrowth,
  growthRanking,
  valuationRanking,
} from "@/lib/dashboard/analytics";

export interface DailyInsight {
  text: string;
  tags: string[];
  confidence: "High" | "Medium" | "Low";
}

async function fetchDailyInsight(): Promise<DailyInsight | null> {
  try {
    const topIndustry = industryGrowth[0];
    const topGrowthCompany = growthRanking[0];
    const topValuationCompany = valuationRanking[0];

    if (!topIndustry || !topGrowthCompany) return null;

    const prompt = `You are a market analyst. Using ONLY the real figures below — do not invent any numbers — write ONE sharp, one-sentence executive insight in the style of a market intelligence terminal.

DATA:
- Total tracked companies: ${stats.totalCompanies}
- Fastest growing tracked company: ${topGrowthCompany.name} (${topGrowthCompany.industry}, growth: ${topGrowthCompany.growth})
- Top industry by average growth: ${topIndustry.industry} (${topIndustry.count} companies, average growth ${topIndustry.averageGrowth}%)
- Highest valued tracked company: ${topValuationCompany?.name ?? "N/A"} (${topValuationCompany?.valuation ?? "N/A"})

Return ONLY valid JSON, no markdown, in this shape:
{
  "text": "<one sentence insight, referencing only the figures given above>",
  "tags": ["<short tag>", "<short tag>", "<short tag>"],
  "confidence": "High"
}`;

    const { text } = await callGemini({ prompt, useGrounding: false });

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return null;

    return JSON.parse(jsonMatch[0]) as DailyInsight;
  } catch (error) {
    console.error("Failed to generate daily insight:", error);
    return null;
  }
}

export const getDailyInsight = unstable_cache(
  fetchDailyInsight,
  ["daily-insight"],
  { revalidate: 1800 }
);