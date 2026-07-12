// app/(marketing)/ai/page.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Sparkles,
  Loader2,
  Check,
  Copy,
  RotateCcw,
  Trash2,
  Building2,
  ClipboardList,
  Clock,
  FileText,
  Target,
  Layers,
  Swords,
  TrendingUp,
  Users,
  ShieldAlert,
  AlertTriangle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { companies } from "@/lib/data/company-profile";

const COMPANIES: string[] = Array.isArray(companies)
  ? companies.map((c) => c?.name).filter((name): name is string => Boolean(name))
  : [];

const ANALYSIS_TYPES = [
  "Company Overview",
  "Competitive Positioning",
  "Growth and Market Trends",
  "Risk Assessment",
  "Financial Snapshot",
  "Strategic Outlook",
] as const;

const LOADING_STEPS = [
  "Loading company profile",
  "Reading industry information",
  "Evaluating competitors",
  "Analyzing business model",
] as const;

const EXAMPLE_ANALYSES: { label: string; icon: LucideIcon }[] = [
  { label: "SWOT Analysis", icon: Layers },
  { label: "Business Model", icon: Target },
  { label: "Competitive Landscape", icon: Swords },
  { label: "Growth Drivers", icon: TrendingUp },
  { label: "Founder Analysis", icon: Users },
  { label: "Risk Assessment", icon: ShieldAlert },
];

type WorkspaceStatus = "idle" | "loading";

interface AiApiResponse {
  text?: string;
  error?: string;
}

export default function AiWorkspacePage() {
  const [company, setCompany] = useState<string>(COMPANIES[0] ?? "");
  const [analysisType, setAnalysisType] = useState<string>(ANALYSIS_TYPES[0]);
  const [instructions, setInstructions] = useState<string>("");
  const [status, setStatus] = useState<WorkspaceStatus>("idle");

  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [generatedAt, setGeneratedAt] = useState<string>("");
  const [loadingStep, setLoadingStep] = useState(0);
  const [copied, setCopied] = useState(false);

  const abortControllerRef = useRef<AbortController | null>(null);
  const requestIdRef = useRef(0);
  const copiedTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (status !== "loading") {
      setLoadingStep(0);
      return;
    }
    const interval = setInterval(() => {
      setLoadingStep((prev) =>
        prev < LOADING_STEPS.length - 1 ? prev + 1 : prev
      );
    }, 900);
    return () => clearInterval(interval);
  }, [status]);

  useEffect(() => {
    return () => {
      abortControllerRef.current?.abort();
      if (copiedTimeoutRef.current) clearTimeout(copiedTimeoutRef.current);
    };
  }, []);

  const handleGenerate = async () => {
    if (!company) {
      setError("Select a company before generating a report.");
      return;
    }

    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;

    const currentRequestId = ++requestIdRef.current;

    setStatus("loading");
    setError(null);

    const trimmedInstructions = instructions.trim();

    try {
      const response = await fetch("/api/ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          company,
          analysisType,
          instructions: trimmedInstructions,
        }),
        signal: controller.signal,
      });

      if (requestIdRef.current !== currentRequestId) return;

      let data: AiApiResponse;
      try {
        data = (await response.json()) as AiApiResponse;
      } catch {
        throw new Error("Received an invalid response from the server.");
      }

      if (!response.ok) {
        throw new Error(
          data?.error || "Request failed with status " + response.status + "."
        );
      }

      if (!data.text || !data.text.trim()) {
        throw new Error("The AI returned an empty response. Please try again.");
      }

      setResult(data.text);
      setError(null);
      setGeneratedAt(
        new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    } catch (err) {
      if (requestIdRef.current !== currentRequestId) return;
      if (err instanceof DOMException && err.name === "AbortError") {
        return;
      }
      setResult("");
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      if (requestIdRef.current === currentRequestId) {
        setStatus("idle");
      }
    }
  };

  const handleClear = () => {
    abortControllerRef.current?.abort();
    requestIdRef.current += 1;
    setResult("");
    setError(null);
    setGeneratedAt("");
    setCopied(false);
    setStatus("idle");
  };

  const handleCopy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      if (copiedTimeoutRef.current) clearTimeout(copiedTimeoutRef.current);
      copiedTimeoutRef.current = setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard access denied or unavailable - fail silently.
    }
  };

  const hasResult = status === "idle" && !error && result.length > 0;
  const hasError = status === "idle" && Boolean(error);

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          AI Workspace
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          Analyze Indian Consumer Internet Companies using AI.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <Card className="border-border bg-card shadow-sm">
          <CardContent className="flex flex-col gap-5 pt-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="workspace-company"
                  className="text-sm font-medium text-foreground"
                >
                  Company
                </label>
                <select
                  id="workspace-company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  disabled={COMPANIES.length === 0}
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {COMPANIES.length === 0 ? (
                    <option value="">No companies available</option>
                  ) : (
                    COMPANIES.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))
                  )}
                </select>
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="workspace-analysis-type"
                  className="text-sm font-medium text-foreground"
                >
                  Analysis Type
                </label>
                <select
                  id="workspace-analysis-type"
                  value={analysisType}
                  onChange={(e) => setAnalysisType(e.target.value)}
                  className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                >
                  {ANALYSIS_TYPES.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="workspace-instructions"
                className="text-sm font-medium text-foreground"
              >
                Additional Instructions
                <span className="ml-1 font-normal text-muted-foreground">
                  (optional)
                </span>
              </label>
              <textarea
                id="workspace-instructions"
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="e.g. Focus on unit economics and recent funding activity"
                className="min-h-[100px] w-full resize-none rounded-md border border-input bg-background p-3 text-sm text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>

            <div className="flex justify-end">
              <Button
                onClick={handleGenerate}
                disabled={status === "loading" || COMPANIES.length === 0}
                className="gap-2 bg-foreground text-sm font-medium text-background hover:bg-foreground/90"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="h-4 w-4" />
                    Generate
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {hasResult && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="flex flex-wrap items-center gap-2"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            className="gap-1.5 border-border text-xs font-medium text-foreground hover:bg-muted"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" />
                Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                Copy Report
              </>
            )}
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleGenerate}
            disabled={status === "loading"}
            className="gap-1.5 border-border text-xs font-medium text-foreground hover:bg-muted"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Regenerate
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={handleClear}
            disabled={status === "loading"}
            className="gap-1.5 border-border text-xs font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <Trash2 className="h-3.5 w-3.5" />
            Clear
          </Button>
        </motion.div>
      )}

      <Card className="min-h-[320px] border-border bg-card shadow-sm">
        <CardHeader className="border-b border-border pb-4">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-foreground/5">
              <Sparkles className="h-4 w-4 text-foreground" />
            </div>
            <CardTitle className="text-base font-semibold tracking-tight text-foreground md:text-lg">
              AI Analysis
            </CardTitle>
          </div>
        </CardHeader>

        <CardContent className="min-h-[240px] pt-6">
          <AnimatePresence mode="wait">
            {status === "loading" ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <LoadingSteps currentStep={loadingStep} />
              </motion.div>
            ) : hasError ? (
              <motion.div
                key="error"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <ErrorState
                  message={error ?? "Something went wrong."}
                  onRetry={handleGenerate}
                />
              </motion.div>
            ) : hasResult ? (
              <motion.div
                key="report"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <ReportView
                  company={company}
                  analysisType={analysisType}
                  generatedAt={generatedAt}
                  result={result}
                />
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <EmptyState />
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}

function LoadingSteps({ currentStep }: { currentStep: number }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center gap-6 py-6 text-center"
    >
      <div className="flex w-full max-w-xs flex-col gap-3">
        {LOADING_STEPS.map((step, index) => {
          const isDone = index < currentStep;
          const isActive = index === currentStep;

          return (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.25, delay: index * 0.05 }}
              className="flex items-center gap-2.5"
            >
              <span
                className={
                  isDone
                    ? "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-foreground text-background"
                    : isActive
                    ? "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-foreground/40"
                    : "flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-border"
                }
              >
                {isDone ? (
                  <Check className="h-3 w-3" />
                ) : isActive ? (
                  <Loader2 className="h-3 w-3 animate-spin text-foreground" />
                ) : null}
              </span>
              <span
                className={
                  isDone
                    ? "text-sm text-foreground"
                    : isActive
                    ? "text-sm font-medium text-foreground"
                    : "text-sm text-muted-foreground"
                }
              >
                {step}
              </span>
            </motion.div>
          );
        })}
      </div>

      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="flex gap-1">
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]" />
          <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
        </span>
        Generating strategic report...
      </div>
    </div>
  );
}

function ReportView({
  company,
  analysisType,
  generatedAt,
  result,
}: {
  company: string;
  analysisType: string;
  generatedAt: string;
  result: string;
}) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-col gap-6">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-foreground" />
          <h2 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
            AI Strategy Report
          </h2>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <Building2 className="h-3.5 w-3.5" />
            {company}
          </span>
          <span className="flex items-center gap-1.5">
            <ClipboardList className="h-3.5 w-3.5" />
            {analysisType}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5" />
            Generated {generatedAt ? "at " + generatedAt : "just now"}
          </span>
        </div>
      </div>

      <div className="h-px w-full bg-border" />

      <div className="overflow-x-auto">
        <div className="prose prose-sm max-w-none prose-neutral leading-7 dark:prose-invert md:prose-base prose-headings:font-semibold prose-headings:tracking-tight prose-h1:text-xl prose-h2:text-lg prose-h3:text-base prose-p:text-foreground/90 prose-li:text-foreground/90 prose-strong:text-foreground prose-a:text-foreground prose-a:underline prose-table:text-sm prose-pre:bg-muted prose-pre:text-foreground prose-code:text-foreground">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{result}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}

function ErrorState({
  message,
  onRetry,
}: {
  message: string;
  onRetry: () => void;
}) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center gap-4 py-8 text-center"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
        <AlertTriangle className="h-5 w-5 text-muted-foreground" />
      </div>
      <div className="flex max-w-sm flex-col gap-1.5">
        <p className="text-sm font-medium text-foreground">
          Could not generate this report
        </p>
        <p className="text-sm text-muted-foreground">{message}</p>
      </div>
      <Button
        variant="outline"
        size="sm"
        onClick={onRetry}
        className="gap-1.5 border-border text-xs font-medium text-foreground hover:bg-muted"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        Try Again
      </Button>
    </div>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-muted">
        <Sparkles className="h-6 w-6 text-muted-foreground" />
      </div>

      <div className="flex max-w-sm flex-col gap-1.5">
        <p className="text-sm font-medium text-foreground">
          Generate an AI analysis to begin
        </p>
        <p className="text-sm text-muted-foreground">
          Select a company and analysis type above to produce a detailed
          strategic report powered by AI.
        </p>
      </div>

      <div className="grid w-full max-w-md grid-cols-2 gap-2 sm:grid-cols-3">
        {EXAMPLE_ANALYSES.map(({ label, icon: Icon }) => (
          <div
            key={label}
            className="flex items-center gap-1.5 rounded-md border border-border bg-muted/30 px-2.5 py-2 text-left text-xs text-muted-foreground"
          >
            <Icon className="h-3.5 w-3.5 shrink-0" />
            <span className="truncate">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}