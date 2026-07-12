"use client";

import { motion } from "framer-motion";

import { CompanyCard } from "@/components/landing/company-card";
import { companies } from "@/lib/data/companies";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] as const },
};

export function CompanyShowcase() {
  return (
    <section className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Company Intelligence
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
            India&apos;s leading consumer internet companies
          </h2>
          <p className="mt-4 text-muted-foreground">
            Track metrics, trends, and competitive signals across the
            ecosystem.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {companies.map((company, index) => (
            <motion.div
              key={company.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
            >
              <CompanyCard company={company} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
