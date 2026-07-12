// lib/dashboard/funding-estimate.ts
import { unstable_cache } from "next/cache";

import { callGemini } from "@/lib/gemini/client";
import { stats } from "@/lib/dashboard/analytics";

export interface FundingEstimate {
  amount: string;
  changeLabel: string;
  isEstimate: true;
}

async function fetchFundingEstimate(): Promise<FundingEstimate | null> {
  try {
    const prompt = `Search for real, recent news (this quarter) about total startup funding raised in India's consumer internet sector — fintech, quick commerce, e-commerce, and related categories combined.

Based only on what you find in search results, produce a single best-estimate total funding figure for this quarter, in Indian Rupees Crore (₹ Cr) or Lakh Cr as appropriate, and an approximate quarter-over-quarter change percentage if you can find or reasonably infer one from the reporting.

There are ${stats.totalCompanies} companies tracked on this platform — you do not need to match this exact count, this is just context.

Return ONLY valid JSON, no markdown, no commentary, in this exact shape:
{
  "amount": "₹18,400 Cr",
  "changeLabel": "+8.2% this quarter"
}

If you cannot find enough real data to produce a credible estimate, return:
{
  "amount": "N/A",
  "changeLabel": "Insufficient data"
}`;

    const { text } = await callGemini({ prompt, useGrounding: true });

    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return null;

    const parsed = JSON.parse(jsonMatch[0]) as { amount: string; changeLabel: string };
    if (!parsed.amount || parsed.amount === "N/A") return null;

    return { ...parsed, isEstimate: true };
  } catch (error) {
    console.error("Failed to fetch funding estimate:", error);
    return null;
  }
}

// Cached 30 min — this hits live search grounding on every miss.
export const getFundingEstimate = unstable_cache(
  fetchFundingEstimate,
  ["funding-estimate"],
  { revalidate: 1800 }
);