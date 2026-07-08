export interface Industry {
    slug: string;
    name: string;
    description: string;
    marketSize: string;
    growth: string;
    cagr: string;
    trackedCompanies: number;
    topCompanies: string[];
    futureOutlook: string;
    keyTrends: string[];
    majorPlayers: string[];
    funding: string;
    aiSummary: string;
  }
  
  export const industries: Industry[] = [
    {
      slug: "marketplace",
      name: "Marketplace",
      description:
        "Online platforms connecting buyers and sellers across fashion, electronics, and everyday essentials at scale.",
      marketSize: "$120B",
      growth: "+18% YoY",
      cagr: "16.4%",
      trackedCompanies: 42,
      topCompanies: ["Flipkart", "Meesho", "Nykaa", "Ajio"],
      futureOutlook:
        "Consolidation among top players will continue as smaller regional marketplaces get absorbed, while social commerce and reseller-led models unlock deeper Tier 2/3 penetration.",
      keyTrends: [
        "Rise of social and reseller-driven commerce",
        "Deeper penetration into Tier 2/3 cities",
        "Private label and D2C brand expansion",
        "Voice and vernacular-first shopping experiences",
      ],
      majorPlayers: ["Flipkart", "Meesho", "Amazon India", "Nykaa"],
      funding: "$3.2B raised in the last 24 months",
      aiSummary:
        "Marketplace remains India's largest consumer internet category, driven by affordability-focused platforms expanding into non-metro markets while established players defend share through logistics and private-label investments.",
    },
    {
      slug: "quick-commerce",
      name: "Quick Commerce",
      description:
        "Hyper-local dark-store networks delivering groceries and daily essentials within 10-20 minutes.",
      marketSize: "$6.5B",
      growth: "+65% YoY",
      cagr: "48.2%",
      trackedCompanies: 18,
      topCompanies: ["Blinkit", "Zepto", "Swiggy Instamart", "BigBasket Now"],
      futureOutlook:
        "Quick commerce will expand beyond groceries into electronics, pharmacy, and fashion, with profitability improving as dark-store density and order frequency increase.",
      keyTrends: [
        "Category expansion beyond groceries",
        "Dark-store densification in metro clusters",
        "Consolidation of smaller regional players",
        "Improving unit economics via higher AOV",
      ],
      majorPlayers: ["Blinkit", "Zepto", "Swiggy Instamart"],
      funding: "$2.8B raised in the last 24 months",
      aiSummary:
        "Quick commerce is the fastest-growing consumer internet segment in India, with three well-capitalized players racing toward profitability through category expansion and denser urban coverage.",
    },
    {
      slug: "fintech",
      name: "Fintech",
      description:
        "Digital payments, lending, and wealth management platforms built on India's UPI and account aggregator rails.",
      marketSize: "$95B",
      growth: "+31% YoY",
      cagr: "22.7%",
      trackedCompanies: 56,
      topCompanies: ["PhonePe", "Paytm", "Razorpay", "Groww"],
      futureOutlook:
        "Embedded finance and lending-as-a-service will drive the next wave of growth, as payments players diversify revenue into credit, insurance, and wealth products.",
      keyTrends: [
        "Embedded lending and BNPL adoption",
        "UPI-based credit line expansion",
        "Consolidation among wealth-tech platforms",
        "Regulatory tightening on digital lending",
      ],
      majorPlayers: ["PhonePe", "Razorpay", "Paytm", "Groww"],
      funding: "$4.6B raised in the last 24 months",
      aiSummary:
        "Fintech continues to be India's most capital-intensive consumer internet category, with UPI-native players diversifying into credit and wealth management to build durable revenue streams.",
    },
    {
      slug: "travel",
      name: "Travel",
      description:
        "Online travel aggregators and booking platforms spanning flights, hotels, rail, and holiday packages.",
      marketSize: "$52B",
      growth: "+24% YoY",
      cagr: "14.9%",
      trackedCompanies: 21,
      topCompanies: ["MakeMyTrip", "Yatra", "EaseMyTrip", "Cleartrip"],
      futureOutlook:
        "Post-pandemic travel demand normalization and rising outbound travel will sustain growth, with AI-driven personalization becoming a key differentiator.",
      keyTrends: [
        "Growth in outbound and premium travel",
        "AI-powered itinerary personalization",
        "Rail and bus booking digitization",
        "Consolidation of regional OTAs",
      ],
      majorPlayers: ["MakeMyTrip", "EaseMyTrip", "Yatra"],
      funding: "$650M raised in the last 24 months",
      aiSummary:
        "Travel-tech has stabilized post-pandemic with steady double-digit growth, led by established OTAs expanding into premium and outbound segments.",
    },
    {
      slug: "consumer-ai",
      name: "Consumer AI",
      description:
        "Consumer-facing applications built on generative AI, spanning productivity, companionship, and creative tools.",
      marketSize: "$4.1B",
      growth: "+140% YoY",
      cagr: "58.3%",
      trackedCompanies: 34,
      topCompanies: ["Krutrim", "Sarvam AI", "CoRover", "Slang Labs"],
      futureOutlook:
        "Vernacular and voice-first AI assistants will unlock the next 500 million users, with domain-specific copilots emerging across healthcare, legal, and education.",
      keyTrends: [
        "Vernacular large language model development",
        "Rise of domain-specific AI copilots",
        "On-device and low-cost inference models",
        "Consumer AI companion apps gaining traction",
      ],
      majorPlayers: ["Krutrim", "Sarvam AI", "CoRover"],
      funding: "$980M raised in the last 24 months",
      aiSummary:
        "Consumer AI is the fastest-growing early-stage category in India, fueled by vernacular-first models and applications targeting the next wave of internet users.",
    },
    {
      slug: "edtech",
      name: "EdTech",
      description:
        "Online learning platforms covering K-12, test preparation, upskilling, and vernacular education.",
      marketSize: "$8.3B",
      growth: "+9% YoY",
      cagr: "12.1%",
      trackedCompanies: 29,
      topCompanies: ["BYJU'S", "PhysicsWallah", "Unacademy", "upGrad"],
      futureOutlook:
        "The sector is shifting from VC-funded aggressive growth toward profitability-led models, with hybrid online-offline formats and vernacular content driving durable demand.",
      keyTrends: [
        "Shift toward profitability over growth-at-all-costs",
        "Hybrid online-offline learning models",
        "Vernacular and Tier 2/3 focused platforms",
        "Consolidation and shutdowns among smaller players",
      ],
      majorPlayers: ["PhysicsWallah", "Unacademy", "upGrad"],
      funding: "$310M raised in the last 24 months",
      aiSummary:
        "EdTech has cooled from its pandemic-era highs, with affordability-focused and hybrid-model players like PhysicsWallah gaining share as capital discipline returns to the sector.",
    },
    {
      slug: "healthtech",
      name: "HealthTech",
      description:
        "Digital health platforms spanning teleconsultation, diagnostics, pharmacy delivery, and insurance.",
      marketSize: "$11.2B",
      growth: "+21% YoY",
      cagr: "19.8%",
      trackedCompanies: 26,
      topCompanies: ["PharmEasy", "Practo", "Tata 1mg", "Pristyn Care"],
      futureOutlook:
        "Consolidation of online pharmacy players will continue, while diagnostic and surgical-care platforms scale through asset-light franchise models.",
      keyTrends: [
        "Consolidation among online pharmacy platforms",
        "Growth of surgical and specialty care networks",
        "AI-assisted diagnostics adoption",
        "Insurance-linked healthtech bundling",
      ],
      majorPlayers: ["Tata 1mg", "PharmEasy", "Pristyn Care"],
      funding: "$540M raised in the last 24 months",
      aiSummary:
        "HealthTech is maturing beyond teleconsultation, with pharmacy and diagnostics players consolidating while specialty-care networks scale profitably.",
    },
    {
      slug: "food-delivery",
      name: "Food Delivery",
      description:
        "On-demand restaurant food delivery and dining-out discovery platforms serving urban India.",
      marketSize: "$18.4B",
      growth: "+16% YoY",
      cagr: "13.5%",
      trackedCompanies: 15,
      topCompanies: ["Swiggy", "Zomato", "EatSure", "Box8"],
      futureOutlook:
        "Growth will be driven by premiumization, cloud kitchen expansion, and bundling with quick commerce, as the duopoly deepens investment in retention and loyalty programs.",
      keyTrends: [
        "Bundling food delivery with quick commerce",
        "Cloud kitchen and private label expansion",
        "Premiumization of order baskets",
        "Loyalty and subscription-led retention",
      ],
      majorPlayers: ["Swiggy", "Zomato"],
      funding: "$420M raised in the last 24 months",
      aiSummary:
        "Food delivery has matured into a stable duopoly, with growth now driven by premiumization, cloud kitchens, and cross-selling into quick commerce.",
    },
  ];