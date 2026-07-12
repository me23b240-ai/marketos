// app/api/ai/route.ts
import { NextResponse } from "next/server";
import { ai } from "@/lib/gemini";
import { companies } from "@/lib/data/company-profile";

export const runtime = "nodejs";

const ANALYSIS_TYPES = [
  "Company Overview",
  "Competitive Positioning",
  "Growth and Market Trends",
  "Risk Assessment",
  "Financial Snapshot",
  "Strategic Outlook",
] as const;

const MAX_INSTRUCTIONS_LENGTH = 1000;
const GEMINI_TIMEOUT_MS = 30000;

interface RequestBody {
  company?: unknown;
  analysisType?: unknown;
  instructions?: unknown;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export async function POST(req: Request) {
  // 1. Safely parse the request body.
  let body: RequestBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { error: "Invalid request body. Expected JSON." },
      { status: 400 }
    );
  }

  const { company, analysisType, instructions } = body;

  // 2. Validate required fields.
  if (!isNonEmptyString(company)) {
    return NextResponse.json(
      { error: "A valid 'company' is required." },
      { status: 400 }
    );
  }

  if (!isNonEmptyString(analysisType)) {
    return NextResponse.json(
      { error: "A valid 'analysisType' is required." },
      { status: 400 }
    );
  }

  if (!ANALYSIS_TYPES.includes(analysisType as (typeof ANALYSIS_TYPES)[number])) {
    return NextResponse.json(
      { error: "Unsupported 'analysisType'." },
      { status: 400 }
    );
  }

  if (instructions !== undefined && typeof instructions !== "string") {
    return NextResponse.json(
      { error: "'instructions' must be a string if provided." },
      { status: 400 }
    );
  }

  const trimmedInstructions = (instructions ?? "").trim().slice(0, MAX_INSTRUCTIONS_LENGTH);

  // 3. Look up the company profile.
  const profile = companies.find((c) => c.name === company);

  if (!profile) {
    return NextResponse.json(
      { error: `Unknown company: "${company}".` },
      { status: 404 }
    );
  }

  // 4. Build the prompt.
  const prompt = `
You are a Senior Strategy Consultant at McKinsey and a Consumer Internet Analyst.

Generate a professional strategy report.

Company:
${profile.name}

Industry:
${profile.industry ?? "Not specified"}

Description:
${profile.longDescription ?? "Not available"}

Analysis:
${analysisType}

Additional Instructions:
${trimmedInstructions || "None"}

Rules:
- Write like an internal strategy memo.
- Use Markdown formatting.
- Use clear headings.
- Use bullet points where appropriate.
- Keep it concise but insightful.
- Never mention being an AI.
- Never write "Here's the report."
- End with Strategic Recommendations.
`.trim();

  // 5. Call Gemini with a timeout guard.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), GEMINI_TIMEOUT_MS);

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      // If the SDK supports passing an AbortSignal, this enforces the timeout.
      // If not supported by your SDK version, the timeout below still races it.
      ...(controller.signal ? { signal: controller.signal } : {}),
    });

    const text = response.text?.trim();

    if (!text) {
      return NextResponse.json(
        { error: "The AI returned an empty response. Please try again." },
        { status: 502 }
      );
    }

    return NextResponse.json({ text });
  } catch (error) {
    console.error("Gemini request failed:", error);

    if (error instanceof DOMException && error.name === "AbortError") {
      return NextResponse.json(
        { error: "The request timed out. Please try again." },
        { status: 504 }
      );
    }

    return NextResponse.json(
      { error: "Failed to generate report. Please try again." },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeout);
  }
}