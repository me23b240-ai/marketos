"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24 text-center md:py-32 lg:py-36">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="flex flex-col items-center"
      >
        <Badge variant="outline" className="mb-6 px-3 py-1 text-xs font-normal">
          The Intelligence Platform for Indian Consumer Internet
        </Badge>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl lg:text-7xl">
          The Operating System for Indian Consumer Internet.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          Market intelligence, company analysis, competitive benchmarking and
          AI-powered strategic insights for founders, operators and investors.
        </p>

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
          <Button size="lg" className="h-10 px-5">
            Explore Companies
            <ArrowRight className="ml-1" />
          </Button>
          <Button variant="outline" size="lg" className="h-10 px-5">
            View Demo
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
