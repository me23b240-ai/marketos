// app/search/search-results.tsx

"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Building2, Layers, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { companies } from "@/lib/data/company-profile";
import { industries } from "@/lib/data/industries";

interface ResultItem {
  name: string;
  type: "Company" | "Industry";
  description: string;
  href: string;
}

export function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q")?.trim() ?? "";

  const normalizedQuery = query.toLowerCase();

  const companyResults: ResultItem[] = companies
    .filter(
      (company) =>
        company.name.toLowerCase().includes(normalizedQuery) ||
        company.description?.toLowerCase().includes(normalizedQuery)
    )
    .map((company) => ({
      name: company.name,
      type: "Company",
      description: company.description ?? "",
      href: `/companies/${company.slug}`,
    }));

  const industryResults: ResultItem[] = industries
    .filter(
      (industry) =>
        industry.name.toLowerCase().includes(normalizedQuery) ||
        industry.description?.toLowerCase().includes(normalizedQuery)
    )
    .map((industry) => ({
      name: industry.name,
      type: "Industry",
      description: industry.description ?? "",
      href: `/industries/${industry.slug}`,
    }));

  const results = query
    ? [...companyResults, ...industryResults]
    : [];

  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <div className="text-center">
        <h1 className="text-[32px] font-semibold tracking-tight text-foreground sm:text-[40px]">
          Search Results
        </h1>
        <p className="mt-3 text-[15px] text-muted-foreground">
          Results for &quot;{query}&quot;
        </p>
      </div>

      <div className="mt-14">
        {results.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed px-6 py-20 text-center">
            <p className="text-sm text-muted-foreground">
              No results found.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {results.map((item) => {
              const Icon = item.type === "Company" ? Building2 : Layers;
              return (
                <div
                  key={`${item.type}-${item.name}`}
                  className="flex flex-col justify-between rounded-2xl border bg-white p-5 transition-shadow hover:shadow-sm"
                >
                  <div>
                    <div className="flex items-center gap-2.5">
                      <div className="flex size-8 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                        <Icon className="size-4" />
                      </div>
                      <div>
                        <p className="text-[14px] font-medium text-foreground">
                          {item.name}
                        </p>
                        <p className="text-[11.5px] text-muted-foreground">
                          {item.type}
                        </p>
                      </div>
                    </div>
                    <p className="mt-4 text-[13px] leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="mt-5 w-fit rounded-full"
                  >
                    <Link href={item.href} className="flex items-center gap-1.5">
                      Open
                      <ArrowRight className="size-3.5" />
                    </Link>
                  </Button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}