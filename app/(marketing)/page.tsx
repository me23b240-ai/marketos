import Navbar from "@/components/layout/navbar";
import { CompanyShowcase } from "@/components/landing/company-showcase";
import { Hero } from "@/components/landing/hero";
import { ProductPreview } from "@/components/landing/product-preview";
import { CTASection } from "@/components/landing/cta-section";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>

      <main className="min-h-screen bg-background">
        <Hero />
        <CompanyShowcase />
        <ProductPreview />
        <CTASection />
      </main>
    </>
  );
}
