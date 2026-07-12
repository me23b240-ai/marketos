// lib/dashboard/market-news.ts
import { unstable_cache } from "next/cache";

import { callGemini } from "@/lib/gemini/client";

export interface MarketNewsItem {
  title: string;
  category: string;
  source: string;
  url: string;
  publishedAt: string;
}

async function fetchMarketNews(): Promise<MarketNewsItem[]> {
  try {
    const prompt = `Search for real, recent news (last 7 days) about India's consumer internet, fintech, quick commerce, and startup ecosystem.

Return ONLY a valid JSON array (no markdown, no commentary) of up to 6 real news items in this exact shape:

[
  {
    "title": "real headline, in your own words, not copied verbatim from the source",
    "category": "one or two word category, e.g. Funding, Fintech, Commerce, Policy",
    "source": "real publication name",
    "url": "real source URL",
    "publishedAt": "ISO 8601 date if known, else empty string"
  }
]

Only include stories you can verify from search results. Do not invent headlines, sources, or URLs.`;

    const { text } = await callGemini({ prompt, useGrounding: true });

    const jsonMatch = text.match(/\[[\s\S]*\]/);
    if (!jsonMatch) return [];

    return JSON.parse(jsonMatch[0]) as MarketNewsItem[];
  } catch (error) {
    console.error("Failed to fetch market news:", error);
    return [];
  }
}

// Cached for 30 minutes — this hits a live model + live search on every
// miss, so we don't want it re-running on every page load.
export const getMarketNews = unstable_cache(
  fetchMarketNews,
  ["market-news"],
  { revalidate: 1800 }
);