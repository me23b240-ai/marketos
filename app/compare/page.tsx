// app/compare/page.tsx
"use client";

import { useState } from "react";
import type { Metadata } from "next";
import { ComparisonTable } from "@/components/compare/comparison-table";
import { ComparisonSummary } from "@/components/compare/comparison-summary";

const COMPANIES = [
  "Meesho",
  "Flipkart",
  "Blinkit",
  "Zepto",
  "Swiggy",
  "PhonePe",
  "Nykaa",
  "MakeMyTrip",
] as const;

export default function ComparePage() {
  const [companyA, setCompanyA] = useState<string>("Meesho");
  const [companyB, setCompanyB] = useState<string>("Flipkart");

  const [submitted, setSubmitted] = useState<{
    companyA: string;
    companyB: string;
  } | null>(null);

  const handleCompare = () => {
    setSubmitted({ companyA, companyB });
  };

  return (
    <div className="flex flex-col gap-6 p-4 md:p-6 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          Compare Companies
        </h1>
        <p className="text-sm text-muted-foreground md:text-base">
          Compare Indian consumer internet companies side by side.
        </p>
      </div>

      {/* Selector Card */}
      <div className="rounded-xl border border-border bg-card p-4 shadow-sm md:p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:gap-6">
          {/* Company A */}
          <div className="flex w-full flex-col gap-1.5 md:w-1/3">
            <label
              htmlFor="company-a"
              className="text-sm font-medium text-foreground"
            >
              Company A
            </label>
            <select
              id="company-a"
              value={companyA}
              onChange={(e) => setCompanyA(e.target.value)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {COMPANIES.map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>

          {/* Company B */}
          <div className="flex w-full flex-col gap-1.5 md:w-1/3">
            <label
              htmlFor="company-b"
              className="text-sm font-medium text-foreground"
            >
              Company B
            </label>
            <select
              id="company-b"
              value={companyB}
              onChange={(e) => setCompanyB(e.target.value)}
              className="h-10 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {COMPANIES.map((company) => (
                <option key={company} value={company}>
                  {company}
                </option>
              ))}
            </select>
          </div>

          {/* Compare Button */}
          <div className="flex w-full md:w-1/3">
            <button
              type="button"
              onClick={handleCompare}
              className="inline-flex h-10 w-full items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 md:w-auto"
            >
              Compare
            </button>
          </div>
        </div>
      </div>

      {/* Comparison Results */}
      {submitted && (
        <div className="flex flex-col gap-6">
          <ComparisonTable
            companyA={submitted.companyA}
            companyB={submitted.companyB}
          />
          <ComparisonSummary
            companyA={submitted.companyA}
            companyB={submitted.companyB}
          />
        </div>
      )}
    </div>
  );
}