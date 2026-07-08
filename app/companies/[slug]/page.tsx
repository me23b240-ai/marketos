import Link from "next/link";
import { notFound } from "next/navigation";
import { AIExecutiveBrief } from "@/components/company/ai-executive-brief";
import {
  ArrowLeft,
  MapPin,
  Sparkles,
  Building2,
  Calendar,
  Users,
  TrendingUp,
  Globe,
  Wallet,
} from "lucide-react";

const companies = [
  {
    name: "Meesho",
    slug: "meesho",
    industry: "Marketplace",
    description:
      "Social commerce platform democratizing internet access for small businesses.",
    longDescription:
      "Meesho enables individual entrepreneurs and small businesses to start their online stores without any upfront investment. By leveraging social networks like WhatsApp and Facebook, Meesho has built one of India's largest reseller-driven commerce platforms, focused on affordability and accessibility for Tier 2 and Tier 3 markets.",
    growth: "+42% YoY",
    hq: "Bengaluru, India",
    stage: "Series F",
    founded: "2015",
    employees: "3,000+",
    valuation: "$5.0B",
    website: "meesho.com",
  },
  {
    name: "Flipkart",
    slug: "flipkart",
    industry: "Marketplace",
    description:
      "India's homegrown e-commerce giant powering millions of daily transactions.",
    longDescription:
      "Flipkart is one of India's largest e-commerce marketplaces, offering everything from electronics to fashion and groceries. With deep logistics infrastructure and a loyal customer base, Flipkart continues to compete at scale against global players while championing homegrown innovation.",
    growth: "+18% YoY",
    hq: "Bengaluru, India",
    stage: "Acquired",
    founded: "2007",
    employees: "50,000+",
    valuation: "$37.0B",
    website: "flipkart.com",
  },
  {
    name: "Blinkit",
    slug: "blinkit",
    industry: "Quick Commerce",
    description:
      "10-minute grocery delivery redefining instant commerce in urban India.",
    longDescription:
      "Blinkit pioneered the quick commerce category in India, building a dense network of dark stores to deliver groceries and essentials in minutes. Now part of a larger consumer internet ecosystem, Blinkit continues to expand into new categories and cities at rapid pace.",
    growth: "+65% YoY",
    hq: "Gurugram, India",
    stage: "Public",
    founded: "2013",
    employees: "5,000+",
    valuation: "$13.0B",
    website: "blinkit.com",
  },
  {
    name: "Zepto",
    slug: "zepto",
    industry: "Quick Commerce",
    description:
      "Dark-store led quick commerce network built for hyper-fast delivery.",
    longDescription:
      "Zepto built its quick commerce network from the ground up with a hyper-local dark store model, optimizing for speed and freshness. Backed by marquee global investors, Zepto has scaled rapidly across major Indian metros.",
    growth: "+120% YoY",
    hq: "Mumbai, India",
    stage: "Series F",
    founded: "2021",
    employees: "2,500+",
    valuation: "$5.0B",
    website: "zepto.com",
  },
  {
    name: "Swiggy",
    slug: "swiggy",
    industry: "Quick Commerce",
    description:
      "Food and grocery delivery super-app serving hundreds of Indian cities.",
    longDescription:
      "Swiggy started as a food delivery platform and has since evolved into a full consumer super-app, spanning food, groceries (Instamart), and dining out. Its logistics network is among the largest in the country.",
    growth: "+22% YoY",
    hq: "Bengaluru, India",
    stage: "Public",
    founded: "2014",
    employees: "6,000+",
    valuation: "$12.7B",
    website: "swiggy.com",
  },
  {
    name: "PhonePe",
    slug: "phonepe",
    industry: "Fintech",
    description:
      "UPI-first digital payments platform powering India's cashless economy.",
    longDescription:
      "PhonePe is a leading digital payments platform in India, built on top of UPI rails. Beyond payments, it has expanded into insurance, lending, and wealth management, becoming a core part of India's financial infrastructure.",
    growth: "+35% YoY",
    hq: "Bengaluru, India",
    stage: "Series E",
    founded: "2015",
    employees: "4,000+",
    valuation: "$12.0B",
    website: "phonepe.com",
  },
  {
    name: "Nykaa",
    slug: "nykaa",
    industry: "Marketplace",
    description:
      "Beauty and lifestyle commerce platform blending content with retail.",
    longDescription:
      "Nykaa blends editorial content with e-commerce to create a discovery-first shopping experience for beauty and fashion. Its omnichannel approach spans online marketplace and physical retail stores across India.",
    growth: "+15% YoY",
    hq: "Mumbai, India",
    stage: "Public",
    founded: "2012",
    employees: "3,500+",
    valuation: "$2.3B",
    website: "nykaa.com",
  },
  {
    name: "MakeMyTrip",
    slug: "makemytrip",
    industry: "Travel",
    description:
      "Full-stack online travel platform for flights, hotels, and holidays.",
    longDescription:
      "MakeMyTrip is India's leading online travel aggregator, offering flights, hotels, holiday packages, and rail bookings. With deep penetration across Tier 1 and Tier 2 cities, it remains a category leader in Indian travel-tech.",
    growth: "+27% YoY",
    hq: "Gurugram, India",
    stage: "Public",
    founded: "2000",
    employees: "4,200+",
    valuation: "$3.1B",
    website: "makemytrip.com",
  },
];

export default async function CompanyProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companies.find((c) => c.slug === slug);

  if (!company) {
    notFound();
  }

  const stats = [
    { label: "Founded", value: company.founded, icon: Calendar },
    { label: "Employees", value: company.employees, icon: Users },
    { label: "Valuation", value: company.valuation, icon: Wallet },
    { label: "Growth", value: company.growth, icon: TrendingUp },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-6 py-12 md:px-10">
        {/* Back link */}
        <Link
          href="/companies"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Companies
        </Link>

        {/* Header */}
        <div className="mt-8 flex flex-col gap-6 border-b border-border pb-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-muted text-xl font-semibold text-muted-foreground">
              {company.name.charAt(0)}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-semibold tracking-tight text-foreground">
                  {company.name}
                </h1>
                <span className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-600">
                  <Sparkles className="h-3 w-3" />
                  {company.growth}
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-muted-foreground">
                {company.industry}
              </p>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="h-4 w-4" />
                  {company.hq}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="h-4 w-4" />
                  {company.website}
                </span>
              </div>
            </div>
          </div>

          <span className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground">
            <Building2 className="h-4 w-4" />
            {company.stage}
          </span>
        </div>

        {/* Stats grid */}
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-border p-4 transition hover:border-border hover:shadow-sm"
            >
              <stat.icon className="h-4 w-4 text-muted-foreground" />
              <p className="mt-3 text-lg font-semibold text-foreground">
                {stat.value}
              </p>
              <p className="mt-0.5 text-xs font-medium text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* About */}
        <div className="mt-10">
          <h2 className="text-base font-semibold text-foreground">
            About {company.name}
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {company.longDescription}
          </p>
        </div>

        {/* AI Executive Brief */}

        <div className="mt-10">
          <AIExecutiveBrief
            summary="Meesho continues to strengthen its position in Tier II and Tier III India through an asset-light marketplace model and a rapidly growing reseller ecosystem. Its focus on affordability, logistics efficiency, and seller empowerment creates a strong competitive moat, though increasing customer acquisition costs and quick commerce competition remain key risks."

            opportunities={[
              "Expand into private labels and financial services",
              "Increase monetization of the reseller ecosystem",
              "Strengthen penetration in Tier III markets",
            ]}

            risks={[
              "Growing competition from Flipkart and Amazon",
              "Margin pressure from logistics costs",
              "Increasing customer acquisition costs",
            ]}

            confidence={87}

            tags={[
              "Marketplace",
              "Social Commerce",
              "Series F",
              "India",
            ]}
          />
        </div>
      </div>
    </div>
  );
}