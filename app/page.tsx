import Navbar from "@/components/layout/navbar";
import { CompanyShowcase } from "@/components/landing/company-showcase";
import { Hero } from "@/components/landing/hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        <Hero />
        <CompanyShowcase />
      </main>
    </>
  );
}
