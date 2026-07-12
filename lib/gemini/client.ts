const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const GEMINI_MODEL = "gemini-2.5-flash";

interface CallGeminiOptions {
  prompt: string;
  useGrounding?: boolean;
}

interface CallGeminiResult {
  text: string;
  groundingMetadata: unknown;
}

export async function callGemini({
  prompt,
  useGrounding = false,
}: CallGeminiOptions): Promise<CallGeminiResult> {
  if (!GEMINI_API_KEY) {
    throw new Error("GEMINI_API_KEY is not set in .env.local");
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${GEMINI_API_KEY}`;

  const body: Record<string, unknown> = {
    contents: [{ parts: [{ text: prompt }] }],
  };

  if (useGrounding) {
    body.tools = [{ google_search: {} }];
  }

  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
    // Server-side only — never call this from a client component,
    // GEMINI_API_KEY would leak if this ran in the browser.
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Gemini API error (${response.status}): ${errorText}`);
  }

  const data = await response.json();
  const candidate = data.candidates?.[0];
  const text =
    candidate?.content?.parts?.map((p: { text?: string }) => p.text ?? "").join("\n") ??
    "";
  const groundingMetadata = candidate?.groundingMetadata ?? null;

  return { text, groundingMetadata };
}