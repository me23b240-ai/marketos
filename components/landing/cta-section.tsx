"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

function fadeUp(delay = 0) {
  return {
    initial: { opacity: 0, y: 16 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.6, delay, ease: EASE },
  };
}

export function CTASection() {
  return (
    <section className="w-full bg-white py-24 sm:py-32">
      <div className="mx-auto flex max-w-2xl flex-col items-center px-6 text-center">
        <motion.h2
          {...fadeUp(0)}
          className="text-[32px] font-semibold leading-tight tracking-tight text-foreground sm:text-[44px]"
        >
          Ready to explore India&apos;s Consumer Internet?
        </motion.h2>

        <motion.p
          {...fadeUp(0.1)}
          className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted-foreground"
        >
          Discover companies, industries, reports and AI-powered
          insights—all in one place.
        </motion.p>

        <motion.div
          {...fadeUp(0.2)}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <Link href="/companies" className="rounded-full px-6">
            <Button size="lg" className="flex items-center gap-2">
              Explore Companies
              <ArrowRight className="size-4" />
            </Button>
          </Link>

          <Link href="/dashboard" className="rounded-full px-6">
            <Button size="lg" variant="outline" className="rounded-full px-6">
              Open Dashboard
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}