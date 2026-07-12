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
    description: "Horizontal e-commerce platforms enabling multi-category product discovery and transaction across electronics, fashion, and home goods.",
    marketSize: "$85B",
    growth: "+16% YoY",
    cagr: "17.2%",
    trackedCompanies: 8,
    topCompanies: ["Flipkart", "Amazon India", "Myntra", "AJIO", "JioMart"],
    futureOutlook: "Marketplace growth is expected to moderate from historical highs as category penetration deepens in metro India, shifting the growth narrative toward tier 2 and tier 3 expansion. Consolidation around three to four dominant platforms is likely to continue, with quick commerce increasingly cannibalizing routine replenishment categories previously served by traditional marketplaces. Private label expansion and retail media monetization will become primary levers for margin improvement as customer acquisition costs plateau. Vernacular commerce and voice-assisted shopping are expected to unlock the next wave of non-metro user growth through 2027.",
    keyTrends: [
      "Retail media networks becoming a material profit center for large platforms",
      "Quick commerce cannibalizing low-consideration marketplace categories",
      "Private label penetration increasing across fashion and electronics",
      "Vernacular and voice-first interfaces targeting non-metro user acquisition",
      "Live commerce and video-led discovery gaining early traction"
    ],
    majorPlayers: ["Flipkart", "Amazon India", "Reliance Retail", "Snapdeal", "Myntra"],
    funding: "$1.2B",
    aiSummary: "Marketplace remains India's largest consumer internet category by GMV, though growth has decelerated as quick commerce absorbs share in grocery and daily essentials. Walmart-backed Flipkart and Amazon India continue to hold a duopoly position, while Reliance's JioMart leverages offline retail integration as a structural differentiator. Margin expansion is increasingly dependent on advertising revenue and private label mix rather than pure transaction growth."
  },
  {
    slug: "quick-commerce",
    name: "Quick Commerce",
    description: "Ultra-fast grocery and essentials delivery through dark store networks, typically fulfilling orders within 10 to 20 minutes.",
    marketSize: "$6.5B",
    growth: "+85% YoY",
    cagr: "45.8%",
    trackedCompanies: 5,
    topCompanies: ["Blinkit", "Zepto", "Swiggy Instamart", "BigBasket", "Dunzo"],
    futureOutlook: "Quick commerce is on track to structurally displace a meaningful share of both online grocery and neighborhood kirana spend over the next three years, though path to profitability remains contingent on dark store density and average order value expansion. Category broadening into electronics, beauty, and pharmacy is expected to accelerate as operators seek to improve basket economics beyond low-margin grocery staples. Consolidation pressure is likely to intensify given the capital intensity of dark store rollouts, with two to three players expected to control the majority of national volume by 2027. Profitability inflection at the unit-economics level is emerging in mature metro clusters.",
    keyTrends: [
      "Dark store network densification in top eight metros nearing saturation",
      "Category expansion into pharmacy, electronics, and beauty for basket growth",
      "Consolidation pressure due to high cash burn and capital intensity",
      "Advertising and brand partnership revenue emerging as margin lever",
      "Unit economics turning positive in select high-density metro clusters"
    ],
    majorPlayers: ["Blinkit", "Zepto", "Swiggy Instamart", "BigBasket", "JioMart"],
    funding: "$2.8B",
    aiSummary: "Quick commerce has become the fastest-growing segment of Indian consumer internet, led by Blinkit under Zomato, Zepto, and Swiggy Instamart. Aggregate order volumes have scaled sharply even as unit economics remain under scrutiny outside top-tier metros. Capital intensity of dark store buildout continues to concentrate the competitive field around three well-funded operators."
  },
  {
    slug: "food-delivery",
    name: "Food Delivery",
    description: "On-demand restaurant food ordering and delivery platforms, including cloud kitchen operators.",
    marketSize: "$9.2B",
    growth: "+22% YoY",
    cagr: "14.5%",
    trackedCompanies: 5,
    topCompanies: ["Swiggy", "Zomato", "EatSure", "Rebel Foods", "Box8"],
    futureOutlook: "Food delivery has matured into a duopoly market structure between Swiggy and Zomato, with growth increasingly driven by membership programs, advertising, and dining-out monetization rather than order volume alone. Cloud kitchen operators face margin pressure as platform commissions and real estate costs compress unit economics, pushing further consolidation among multi-brand kitchen operators. Both leading platforms are expected to deepen bundling with quick commerce to improve delivery fleet utilization and customer lifetime value. Tier 2 and tier 3 penetration remains the primary volume growth vector through 2028.",
    keyTrends: [
      "Subscription membership programs improving order frequency and retention",
      "Cross-utilization of delivery fleets between food and quick commerce",
      "Cloud kitchen consolidation amid margin compression",
      "Advertising revenue from restaurant partners scaling materially",
      "Tier 2/3 city expansion as primary volume growth driver"
    ],
    majorPlayers: ["Swiggy", "Zomato", "Rebel Foods", "EatSure", "Box8"],
    funding: "$650M",
    aiSummary: "Food delivery has settled into a stable duopoly between publicly listed Swiggy and Zomato, both of which now derive a growing share of profitability from adjacent quick commerce and advertising rather than core delivery commissions. Cloud kitchen players such as Rebel Foods continue to pursue capacity utilization efficiencies to offset thinning aggregator margins."
  },
  {
    slug: "fintech",
    name: "Fintech",
    description: "Digital payments, lending, and neobanking platforms built primarily on UPI and India Stack infrastructure.",
    marketSize: "$140B",
    growth: "+27% YoY",
    cagr: "22.4%",
    trackedCompanies: 22,
    topCompanies: ["PhonePe", "Paytm", "Razorpay", "CRED", "BharatPe"],
    futureOutlook: "Fintech remains India's most funded consumer internet vertical, propelled by UPI's continued volume growth and expanding merchant digitization. Regulatory tightening around digital lending and payments banks is expected to favor well-capitalized, compliance-mature players over smaller NBFC-dependent lenders. Embedded finance and API-first infrastructure providers such as Razorpay and Cashfree are positioned to capture disproportionate value as commerce platforms increasingly embed payments and credit natively. Consolidation among consumer-facing wallets and neobanks is likely as UPI commoditizes basic payment rails, pushing differentiation toward credit, wealth, and insurance cross-sell.",
    keyTrends: [
      "UPI transaction volumes continuing exponential growth with thinning margins",
      "Regulatory tightening on digital lending and payments bank licensing",
      "Embedded finance and API infrastructure capturing disproportionate value",
      "Credit-led monetization replacing pure payments as the core revenue driver",
      "Consolidation among wallet-first neobanks as UPI commoditizes basic rails"
    ],
    majorPlayers: ["PhonePe", "Paytm", "Google Pay", "Razorpay", "CRED"],
    funding: "$3.4B",
    aiSummary: "Fintech continues to command the largest share of venture funding in Indian consumer internet, anchored by UPI's near-universal payments infrastructure. PhonePe and Paytm remain the dominant consumer payment rails, while Razorpay and Cashfree lead the merchant infrastructure layer. Regulatory scrutiny on lending NBFCs is reshaping competitive dynamics in favor of well-capitalized incumbents."
  },
  {
    slug: "wealthtech",
    name: "WealthTech",
    description: "Digital investing, stockbroking, and wealth management platforms serving retail and first-time investors.",
    marketSize: "$4.8B",
    growth: "+34% YoY",
    cagr: "26.1%",
    trackedCompanies: 5,
    topCompanies: ["Groww", "Zerodha", "Upstox", "Angel One", "Fi Money"],
    futureOutlook: "WealthTech growth is closely tied to retail equity participation, which has expanded rapidly on the back of demat account growth in tier 2 and tier 3 India. Discount broking margins are compressing as flat-fee pricing becomes standard, pushing platforms toward diversification into mutual funds, insurance distribution, and wealth advisory for revenue resilience. Regulatory changes around derivatives trading volumes present a near-term headwind for revenue concentrated in futures and options. Consolidation is expected among smaller brokers unable to match the scale economics of Groww and Zerodha.",
    keyTrends: [
      "Demat account growth decelerating from pandemic-era peaks but still expanding",
      "Regulatory changes on derivatives trading compressing broker revenue",
      "Diversification into mutual funds and insurance for revenue resilience",
      "AI-driven portfolio advisory tools reaching mass retail segments",
      "Consolidation pressure on sub-scale discount brokers"
    ],
    majorPlayers: ["Zerodha", "Groww", "Upstox", "Angel One", "ICICI Direct"],
    funding: "$450M",
    aiSummary: "WealthTech has scaled rapidly on the back of India's retail investing boom, with Groww and Zerodha jointly commanding the majority of active demat accounts among new-age brokers. Regulatory changes targeting derivatives trading volumes represent a material near-term risk to sector revenue concentration."
  },
  {
    slug: "insurtech",
    name: "InsurTech",
    description: "Digital insurance distribution and underwriting platforms for health, life, motor, and travel coverage.",
    marketSize: "$3.2B",
    growth: "+29% YoY",
    cagr: "24.7%",
    trackedCompanies: 3,
    topCompanies: ["PolicyBazaar", "Acko", "Digit Insurance"],
    futureOutlook: "InsurTech penetration remains structurally low relative to India's underinsured population, providing a long growth runway for digital-first distribution and underwriting platforms. Aggregator models such as PolicyBazaar are expected to face margin pressure from insurer commission caps, pushing expansion into direct underwriting through licensed subsidiaries. Embedded insurance distributed through fintech, travel, and e-commerce checkout flows is emerging as a significant new distribution channel. Full-stack digital insurers with proprietary underwriting data are best positioned to capture long-term value as the category matures.",
    keyTrends: [
      "Embedded insurance distribution through fintech and e-commerce checkout",
      "Commission cap regulation compressing aggregator margins",
      "Digital-first underwriters gaining share from traditional insurers",
      "Health insurance attachment rates rising post-pandemic",
      "Parametric and micro-insurance products targeting underserved segments"
    ],
    majorPlayers: ["PolicyBazaar", "Acko", "Digit Insurance", "LIC", "ICICI Lombard"],
    funding: "$380M",
    aiSummary: "InsurTech remains an underpenetrated but structurally attractive category, with PolicyBazaar dominating aggregation while Acko and Digit Insurance pursue full-stack digital underwriting models. Regulatory commission caps are pressuring aggregator economics, accelerating a shift toward embedded and direct-to-consumer distribution."
  },
  {
    slug: "healthtech",
    name: "HealthTech",
    description: "Digital healthcare platforms spanning teleconsultation, e-pharmacy, diagnostics, and surgical care delivery.",
    marketSize: "$12.5B",
    growth: "+18% YoY",
    cagr: "19.3%",
    trackedCompanies: 8,
    topCompanies: ["PharmEasy", "Tata 1mg", "Practo", "MediBuddy", "Pristyn Care"],
    futureOutlook: "HealthTech continues to grow steadily as digital adoption deepens across e-pharmacy, diagnostics, and outpatient surgical care, though the sector has undergone significant valuation recalibration following the 2022-23 funding correction. Consolidation among e-pharmacy players is likely as unit economics remain challenged by cold-chain and last-mile delivery costs for pharmaceuticals. Corporate wellness and insurance-linked teleconsultation are emerging as more durable revenue models compared to pure transactional e-pharmacy. Surgical care platforms such as Pristyn Care are expected to scale profitably by standardizing clinical protocols across partner hospital networks.",
    keyTrends: [
      "E-pharmacy consolidation amid persistent last-mile delivery cost pressure",
      "Corporate wellness and insurance-linked teleconsultation scaling durably",
      "Surgical care platforms standardizing protocols for profitable scale",
      "Diagnostics home-collection models expanding into tier 2/3 cities",
      "AI-assisted diagnosis tools entering primary care workflows"
    ],
    majorPlayers: ["PharmEasy", "Tata 1mg", "Apollo 24/7", "Practo", "MediBuddy"],
    funding: "$780M",
    aiSummary: "HealthTech has stabilized after a sharp funding correction, with e-pharmacy players like PharmEasy and Tata 1mg consolidating around scale while surgical care platforms such as Pristyn Care demonstrate stronger unit economics. Corporate and insurance-linked distribution channels are increasingly central to sector monetization strategy."
  },
  {
    slug: "edtech",
    name: "EdTech",
    description: "Online learning platforms spanning K-12 tutoring, test preparation, and professional upskilling.",
    marketSize: "$7.8B",
    growth: "+4% YoY",
    cagr: "11.2%",
    trackedCompanies: 7,
    topCompanies: ["PhysicsWallah", "upGrad", "Unacademy", "Vedantu", "BYJU'S"],
    futureOutlook: "EdTech has entered a mature, post-correction phase following the pandemic-driven boom and subsequent 2022-23 funding retrenchment, with growth now concentrated among affordability-focused and hybrid online-offline players. Test preparation and upskilling categories are expected to outperform pure K-12 supplemental learning, as return-on-investment clarity is higher for career-linked outcomes. PhysicsWallah's hybrid coaching-plus-digital model is emerging as the structurally advantaged format relative to pure-play digital tutoring. Consolidation and shutdowns among sub-scale K-12 platforms are expected to continue through 2026.",
    keyTrends: [
      "Hybrid offline-online coaching models outperforming pure digital tutoring",
      "Test preparation and upskilling categories showing more durable demand",
      "Continued consolidation and shutdowns among sub-scale K-12 platforms",
      "Affordability-first positioning gaining share from premium incumbents",
      "AI-based personalized learning tools entering mainstream product roadmaps"
    ],
    majorPlayers: ["PhysicsWallah", "upGrad", "BYJU'S", "Unacademy", "Vedantu"],
    funding: "$210M",
    aiSummary: "EdTech remains in a corrective phase following the pandemic-era funding boom, with BYJU'S undergoing significant financial restructuring while affordability-focused PhysicsWallah has emerged as the category's structural winner through its hybrid coaching model. Test preparation and professional upskilling verticals continue to show more resilient demand than pure K-12 supplemental learning."
  },
  {
    slug: "consumer-ai",
    name: "Consumer AI",
    description: "Generative AI and large language model platforms building consumer and enterprise-facing AI products, including India-specific foundation models.",
    marketSize: "$2.1B",
    growth: "+95% YoY",
    cagr: "52.3%",
    trackedCompanies: 5,
    topCompanies: ["Krutrim", "Sarvam AI", "Yellow.ai", "Haptik", "CoRover"],
    futureOutlook: "Consumer AI is the fastest-growing and least mature category in Indian consumer internet, with sovereign AI initiatives under the IndiaAI Mission expected to catalyze foundation model development at Krutrim and Sarvam AI over the next two years. Multilingual voice and text AI tailored to India's linguistic diversity represents the most differentiated opportunity relative to global foundation model providers. Enterprise conversational AI platforms such as Yellow.ai and Haptik are scaling profitably on automation cost savings for large customer service operations. Monetization models remain nascent, with most revenue currently concentrated in enterprise licensing rather than consumer subscriptions.",
    keyTrends: [
      "Sovereign foundation model development under the IndiaAI Mission",
      "Multilingual voice AI as a key differentiator versus global providers",
      "Enterprise conversational AI achieving profitable automation-driven scale",
      "Consumer monetization models still nascent relative to enterprise licensing",
      "Government and public sector adoption accelerating platform credibility"
    ],
    majorPlayers: ["Krutrim", "Sarvam AI", "Yellow.ai", "Haptik", "Reliance Jio"],
    funding: "$620M",
    aiSummary: "Consumer AI is India's highest-growth emerging category, led by Krutrim and Sarvam AI's pursuit of sovereign, India-specific foundation models under government-backed initiatives. Enterprise conversational AI providers Yellow.ai and Haptik have achieved more mature commercial traction, while consumer-facing monetization across the category remains largely unproven."
  },
  {
    slug: "enterprise-ai",
    name: "Enterprise AI",
    description: "AI-native software platforms serving enterprise workflow automation, contract intelligence, and healthcare data operations.",
    marketSize: "$3.6B",
    growth: "+38% YoY",
    cagr: "31.5%",
    trackedCompanies: 3,
    topCompanies: ["Innovaccer", "Icertis", "Whatfix"],
    futureOutlook: "Enterprise AI adoption among Indian-origin SaaS companies is accelerating as generative AI features become table-stakes differentiation within existing workflow software categories such as contract management and digital adoption. Innovaccer and Icertis are well positioned given their established enterprise data assets, which provide defensible training data moats relative to new entrants. Global enterprise buyers remain the primary revenue base, with India serving predominantly as an engineering and delivery hub rather than a demand market. M&A activity is expected to increase as incumbents seek to acquire AI capability rather than build natively.",
    keyTrends: [
      "Generative AI features becoming standard within existing SaaS categories",
      "Proprietary enterprise data assets providing defensible AI training moats",
      "Global enterprise demand remaining the primary revenue base",
      "Increased M&A activity to acquire rather than build AI capability",
      "Healthcare and legal verticals leading AI-native feature adoption"
    ],
    majorPlayers: ["Innovaccer", "Icertis", "Whatfix", "Freshworks", "Zoho"],
    funding: "$340M",
    aiSummary: "Enterprise AI among Indian-origin SaaS companies is scaling through embedded generative AI features within established workflow categories rather than standalone AI products. Innovaccer and Icertis benefit from proprietary enterprise data assets that create durable competitive moats as global enterprise buyers increasingly demand AI-native functionality."
  },
  {
    slug: "saas",
    name: "SaaS",
    description: "Business software platforms spanning CRM, billing, API infrastructure, HR technology, and contract management, primarily serving global enterprise customers.",
    marketSize: "$22B",
    growth: "+18% YoY",
    cagr: "16.8%",
    trackedCompanies: 9,
    topCompanies: ["Zoho", "Freshworks", "Postman", "Chargebee", "BrowserStack"],
    futureOutlook: "Indian-origin SaaS remains the most capital-efficient and globally competitive segment of the domestic technology ecosystem, with Zoho's bootstrapped model and Freshworks' Nasdaq listing serving as reference points for sustainable growth. Developer tools companies such as Postman and BrowserStack continue to expand share in global infrastructure categories where India-built products compete directly with Silicon Valley incumbents. Vertical SaaS in HR technology and healthcare data is emerging as a differentiated growth pocket relative to horizontal categories facing intensifying global competition. Profitability discipline remains stronger in this category than in most other Indian consumer internet verticals.",
    keyTrends: [
      "Developer tools achieving durable global market share against US incumbents",
      "Vertical SaaS in HR tech and healthcare data outperforming horizontal categories",
      "Bootstrapped and capital-efficient growth models gaining investor favor",
      "Generative AI features embedded across billing, HR, and testing platforms",
      "Nasdaq and global public listings validating India-built SaaS at scale"
    ],
    majorPlayers: ["Zoho", "Freshworks", "Postman", "Chargebee", "Icertis"],
    funding: "$980M",
    aiSummary: "Indian-origin SaaS continues to demonstrate the strongest capital efficiency and global competitiveness among domestic technology categories, anchored by Zoho's profitable bootstrapped model and Freshworks' public listing. Developer infrastructure companies Postman and BrowserStack have achieved genuine global category leadership, distinguishing this vertical from more domestically-focused consumer internet segments."
  },
  {
    slug: "hr-tech",
    name: "HR Tech",
    description: "Cloud-based workforce management platforms covering recruitment, payroll, performance management, and employee engagement.",
    marketSize: "$1.8B",
    growth: "+21% YoY",
    cagr: "18.4%",
    trackedCompanies: 2,
    topCompanies: ["Darwinbox", "Keka"],
    futureOutlook: "HR Tech is benefiting from accelerated enterprise digitization across emerging markets, with Darwinbox expanding aggressively into Southeast Asia and the Middle East as a regional alternative to global incumbents such as Workday and SAP SuccessFactors. Mobile-first, highly configurable platforms are gaining share from legacy on-premise HR systems in mid-market and large enterprise segments. Consolidation of point solutions into unified workforce platforms is expected as buyers seek to reduce vendor sprawl. AI-driven talent analytics and attrition prediction are becoming standard differentiators across leading platforms.",
    keyTrends: [
      "Emerging market expansion positioning regional players against global incumbents",
      "Consolidation of point HR solutions into unified workforce platforms",
      "AI-driven attrition prediction and talent analytics becoming standard",
      "Mobile-first configurability displacing legacy on-premise HR systems",
      "Mid-market enterprise segment driving the majority of new deal volume"
    ],
    majorPlayers: ["Darwinbox", "Keka", "Workday", "SAP SuccessFactors"],
    funding: "$180M",
    aiSummary: "HR Tech is a focused but rapidly scaling vertical SaaS category, led by Darwinbox's expansion across Asia and the Middle East as a credible regional alternative to global incumbents. Mobile-first configurability and AI-driven analytics are the primary differentiators driving displacement of legacy on-premise systems."
  },
  {
    slug: "travel",
    name: "Travel",
    description: "Online travel booking platforms covering flights, hotels, buses, trains, and holiday packages.",
    marketSize: "$26B",
    growth: "+15% YoY",
    cagr: "13.7%",
    trackedCompanies: 8,
    topCompanies: ["MakeMyTrip", "EaseMyTrip", "Ixigo", "Yatra", "OYO"],
    futureOutlook: "Online travel penetration continues to rise steadily as offline agent-dependent booking declines, with MakeMyTrip maintaining category leadership across flights and hotels following its Ibibo Group consolidation. Budget and value-focused platforms such as EaseMyTrip and Ixigo are gaining disproportionate share in tier 2 and tier 3 cities where price sensitivity remains the primary purchase driver. Corporate travel management is emerging as a higher-margin growth vector relative to consumer leisure travel. OYO's post-restructuring path toward profitability and a public listing will be a key sector catalyst through 2026.",
    keyTrends: [
      "Consumer shift from offline agents to online booking continuing steadily",
      "Value and budget-focused platforms gaining share in tier 2/3 cities",
      "Corporate travel management emerging as a higher-margin growth vector",
      "Rail and bus ticketing platforms benefiting from AI-driven prediction tools",
      "Hospitality aggregators pursuing profitability ahead of public listings"
    ],
    majorPlayers: ["MakeMyTrip", "OYO", "EaseMyTrip", "Ixigo", "Yatra"],
    funding: "$540M",
    aiSummary: "Travel remains a large, steadily growing category anchored by MakeMyTrip's dominant flights and hotels position following its Ibibo Group consolidation. Value-focused challengers EaseMyTrip and Ixigo continue to gain share in price-sensitive non-metro segments, while OYO's path to sustained profitability remains the sector's most closely watched catalyst."
  },
  {
    slug: "logistics",
    name: "Logistics",
    description: "Supply chain, express parcel, and last-mile delivery infrastructure supporting e-commerce and enterprise clients.",
    marketSize: "$18B",
    growth: "+14% YoY",
    cagr: "15.9%",
    trackedCompanies: 6,
    topCompanies: ["Delhivery", "Shadowfax", "Porter", "Ecom Express", "Xpressbees"],
    futureOutlook: "Logistics infrastructure growth remains closely tied to e-commerce and quick commerce order volumes, with Delhivery's public listing establishing a valuation benchmark for the broader sector. Consolidation is expected among mid-tier logistics providers unable to match the network density and technology investment of scale players. Intra-city and hyperlocal logistics providers such as Porter and Shadowfax are diversifying revenue beyond e-commerce into direct enterprise and quick commerce fulfillment contracts. Rural and semi-urban delivery coverage remains a key differentiator as e-commerce penetration deepens beyond metro markets.",
    keyTrends: [
      "Consolidation among mid-tier logistics providers lacking network scale",
      "Diversification into quick commerce and enterprise fulfillment contracts",
      "Rural and semi-urban delivery coverage as a key competitive differentiator",
      "Automation and sorting technology investment increasing across scale players",
      "Public listings establishing sector valuation benchmarks"
    ],
    majorPlayers: ["Delhivery", "Ecom Express", "Xpressbees", "Blue Dart", "Shadowfax"],
    funding: "$410M",
    aiSummary: "Logistics infrastructure continues to scale in line with e-commerce and quick commerce order growth, with publicly listed Delhivery serving as the sector's valuation benchmark. Intra-city specialists Porter and Shadowfax are increasingly diversifying revenue streams beyond core e-commerce parcel delivery into enterprise and quick commerce fulfillment."
  },
  {
    slug: "mobility",
    name: "Mobility",
    description: "Ride-hailing and shared transportation platforms spanning cabs, bike-taxis, and auto-rickshaws.",
    marketSize: "$9.5B",
    growth: "+24% YoY",
    cagr: "17.6%",
    trackedCompanies: 4,
    topCompanies: ["Ola", "Rapido", "Uber India", "Yulu"],
    futureOutlook: "Mobility growth is increasingly led by two-wheeler ride-hailing, where Rapido's affordability-driven bike-taxi model continues to gain disproportionate share from traditional cab aggregators in traffic-congested metros. Ola's diversification into electric vehicles and AI through its broader corporate group is reshaping its core ride-hailing focus and competitive positioning. Regulatory clarity on bike-taxi legality across states remains a key swing factor for sector growth. Diversification into food and parcel delivery by mobility platforms is expected to continue as operators seek to improve driver-partner utilization and earnings.",
    keyTrends: [
      "Two-wheeler ride-hailing gaining share from traditional cab aggregation",
      "Regulatory clarity on bike-taxi legality varying materially by state",
      "Diversification into food and parcel delivery for driver utilization",
      "Electric vehicle integration reshaping fleet economics for major operators",
      "Consolidation pressure on smaller regional ride-hailing players"
    ],
    majorPlayers: ["Ola", "Uber India", "Rapido", "Yulu"],
    funding: "$290M",
    aiSummary: "Mobility growth is increasingly concentrated in two-wheeler ride-hailing, where Rapido has emerged as a structurally advantaged challenger to traditional cab aggregators Ola and Uber India. Diversification into adjacent delivery services is becoming a common strategy across operators to improve driver-partner earnings and retention."
  },
  {
    slug: "ev",
    name: "EV",
    description: "Electric vehicle manufacturers and supporting charging infrastructure across two-wheelers and micro-mobility.",
    marketSize: "$11B",
    growth: "+42% YoY",
    cagr: "38.2%",
    trackedCompanies: 3,
    topCompanies: ["Ola Electric", "Ather", "Zypp Electric"],
    futureOutlook: "Electric two-wheeler adoption continues to accelerate on the back of government subsidies and declining battery costs, with Ola Electric and Ather competing for category leadership following Ather's public listing. Charging and battery-swapping infrastructure remains a critical bottleneck for sustained adoption outside major metros. Fleet electrification for last-mile delivery, led by players such as Zypp Electric, represents a faster-adopting and less subsidy-dependent growth vector than personal vehicle ownership. Domestic battery cell manufacturing capacity is expected to become a key strategic differentiator as import dependency decreases through 2028.",
    keyTrends: [
      "Government subsidy phase-down testing underlying consumer demand elasticity",
      "Charging and battery-swapping infrastructure as the primary adoption bottleneck",
      "Fleet electrification for delivery outpacing personal EV ownership growth",
      "Domestic battery cell manufacturing emerging as a strategic differentiator",
      "Public listings of EV manufacturers increasing sector capital market scrutiny"
    ],
    majorPlayers: ["Ola Electric", "Ather", "TVS Motor", "Bajaj Auto", "Zypp Electric"],
    funding: "$320M",
    aiSummary: "EV adoption in India is being led by the two-wheeler segment, with Ola Electric and newly public Ather Energy competing for category leadership amid a gradual phase-down of government purchase subsidies. Fleet electrification for last-mile delivery, led by Zypp Electric, is proving to be a more subsidy-resilient growth vector than personal vehicle adoption."
  },
  {
    slug: "d2c",
    name: "D2C Brands",
    description: "Direct-to-consumer brands across personal care, home goods, food, and fashion, distributing through owned channels and marketplaces.",
    marketSize: "$16B",
    growth: "+17% YoY",
    cagr: "19.8%",
    trackedCompanies: 16,
    topCompanies: ["Lenskart", "Mamaearth", "boAt", "Wakefit", "Licious"],
    futureOutlook: "D2C brands are increasingly shifting from pure digital distribution toward omnichannel retail as customer acquisition costs on performance marketing channels rise, with Lenskart's physical store network exemplifying the omnichannel playbook. Public listings such as Honasa Consumer's Mamaearth are establishing valuation benchmarks and increasing scrutiny on profitable growth over pure top-line expansion. House-of-brands strategies are becoming common as scaled D2C players acquire adjacent sub-brands to capture wallet share across a customer's lifecycle. Quick commerce distribution is emerging as a critical new channel for D2C brands seeking impulse-purchase visibility.",
    keyTrends: [
      "Omnichannel retail expansion as performance marketing costs rise",
      "House-of-brands strategies consolidating adjacent sub-brand acquisitions",
      "Quick commerce emerging as a critical impulse-purchase distribution channel",
      "Public listings increasing scrutiny on profitable, sustainable growth",
      "Category specialists disrupting incumbents in eyewear, meat, and mattresses"
    ],
    majorPlayers: ["Lenskart", "Mamaearth", "boAt", "Wakefit", "Sugar Cosmetics"],
    funding: "$890M",
    aiSummary: "D2C brands continue to scale through omnichannel expansion, exemplified by Lenskart's extensive physical retail footprint and pending public listing. Honasa Consumer's Mamaearth IPO has established an important public market benchmark, increasing investor focus on profitable unit economics across the broader D2C category."
  },
  {
    slug: "fashion-commerce",
    name: "Fashion Commerce",
    description: "Online fashion and apparel retail platforms spanning value, premium, and trend-led segments.",
    marketSize: "$14B",
    growth: "+16% YoY",
    cagr: "16.9%",
    trackedCompanies: 4,
    topCompanies: ["Myntra", "AJIO", "Bewakoof", "Nykaa Fashion"],
    futureOutlook: "Fashion commerce continues to grow steadily as online apparel penetration rises, with Myntra and AJIO maintaining category leadership through strong private label portfolios backed by Flipkart and Reliance respectively. Trend-led, youth-focused brands such as Bewakoof are carving differentiated positioning through social media-driven brand building rather than broad marketplace competition. Quick commerce fashion delivery pilots are testing whether instant gratification models can extend beyond grocery into apparel. Resale and rental fashion models remain a nascent but growing sub-segment as sustainability awareness increases among urban consumers.",
    keyTrends: [
      "Private label expansion driving margin improvement for large platforms",
      "Social media-driven brand building differentiating youth-focused challengers",
      "Quick commerce fashion delivery pilots testing instant gratification models",
      "Resale and rental fashion emerging as a nascent sustainability-driven segment",
      "Regional and vernacular fashion discovery gaining traction in non-metro markets"
    ],
    majorPlayers: ["Myntra", "AJIO", "Nykaa Fashion", "Flipkart Fashion"],
    funding: "$260M",
    aiSummary: "Fashion commerce remains led by Myntra and AJIO, both leveraging strong private label portfolios under Flipkart and Reliance ownership respectively. Trend-led challenger brands are increasingly differentiating through social-first brand building rather than competing directly on marketplace breadth."
  },
  {
    slug: "beauty-commerce",
    name: "Beauty Commerce",
    description: "Online beauty and personal care retail platforms combining marketplace distribution with owned brand portfolios.",
    marketSize: "$5.4B",
    growth: "+23% YoY",
    cagr: "21.3%",
    trackedCompanies: 3,
    topCompanies: ["Nykaa", "Mamaearth", "Sugar Cosmetics"],
    futureOutlook: "Beauty commerce continues to benefit from rising per-capita personal care spending and increasing willingness among Indian consumers to pay for premium and prestige beauty products online. Nykaa's omnichannel model combining physical stores with its digital marketplace remains the category benchmark following its successful public listing. Clean beauty and natural ingredient positioning, exemplified by Mamaearth, continues to resonate strongly with younger urban consumers. Quick commerce distribution of beauty products is emerging as an important incremental channel for impulse and replenishment purchases.",
    keyTrends: [
      "Rising willingness to pay for premium and prestige beauty products online",
      "Omnichannel store-plus-digital models becoming the category benchmark",
      "Clean beauty and natural ingredient positioning resonating with younger consumers",
      "Quick commerce emerging as an incremental beauty replenishment channel",
      "Private label economics improving profitability for marketplace-led players"
    ],
    majorPlayers: ["Nykaa", "Mamaearth", "Sugar Cosmetics", "Purplle"],
    funding: "$310M",
    aiSummary: "Beauty commerce remains anchored by publicly listed Nykaa, whose omnichannel store-and-digital model continues to set the category benchmark. Clean beauty challenger Mamaearth, also now public, and digitally native Sugar Cosmetics continue to compete for share among younger, ingredient-conscious urban consumers."
  },
  {
    slug: "social-commerce",
    name: "Social Commerce",
    description: "Reseller and group-buying commerce platforms distributing products through social networks and community leaders.",
    marketSize: "$4.2B",
    growth: "+11% YoY",
    cagr: "14.1%",
    trackedCompanies: 4,
    topCompanies: ["Meesho", "DealShare", "CityMall", "GlowRoad"],
    futureOutlook: "Social commerce growth has moderated from its pandemic-era peak as reseller-led models face increasing competition from mainstream marketplaces expanding into value categories and non-metro geographies. Meesho's transition into a broader zero-commission marketplace model, rather than pure reseller-led distribution, illustrates the category's evolution toward mainstream e-commerce competition. Group-buying platforms such as DealShare and CityMall continue to focus on hyperlocal pickup point models to manage last-mile costs in smaller towns. Consolidation is likely among sub-scale reseller platforms unable to match Meesho's supplier network density.",
    keyTrends: [
      "Meesho's evolution toward mainstream zero-commission marketplace positioning",
      "Group-buying platforms relying on hyperlocal pickup points for cost control",
      "Consolidation pressure on sub-scale reseller-led platforms",
      "Mainstream marketplaces expanding into value categories historically owned by social commerce",
      "Community leader and micro-entrepreneur networks remaining core to distribution"
    ],
    majorPlayers: ["Meesho", "DealShare", "CityMall", "GlowRoad"],
    funding: "$220M",
    aiSummary: "Social commerce growth has moderated as category leader Meesho evolves from a pure reseller model into a broader zero-commission marketplace competing directly with mainstream e-commerce platforms in value categories. Smaller group-buying players continue to rely on hyperlocal pickup point infrastructure to remain cost-competitive in non-metro markets."
  },
  {
    slug: "creator-economy",
    name: "Creator Economy",
    description: "Vernacular short-video and content platforms enabling regional language creators and monetization.",
    marketSize: "$2.6B",
    growth: "+9% YoY",
    cagr: "16.4%",
    trackedCompanies: 5,
    topCompanies: ["ShareChat", "Moj", "Josh", "Lokal", "Chingari"],
    futureOutlook: "The creator economy in India remains heavily shaped by the competitive vacuum left after TikTok's 2020 ban, with ShareChat's Moj and VerSe Innovation's Josh continuing to compete for vernacular short-video engagement against global incumbents Instagram Reels and YouTube Shorts. Creator monetization infrastructure remains underdeveloped relative to global markets, limiting platform differentiation to content discovery rather than creator economics. Hyperlocal content platforms such as Lokal are carving a differentiated niche in localized news and classifieds rather than competing directly in entertainment content. Consolidation or shutdown risk remains elevated for sub-scale players lacking clear monetization paths.",
    keyTrends: [
      "Continued competition against global incumbents Instagram Reels and YouTube Shorts",
      "Underdeveloped creator monetization infrastructure relative to global markets",
      "Hyperlocal content platforms differentiating through localized news and classifieds",
      "Consolidation and shutdown risk elevated for sub-scale vernacular platforms",
      "Regional language content depth remaining the core competitive moat"
    ],
    majorPlayers: ["ShareChat", "Instagram Reels", "YouTube Shorts", "Josh", "Lokal"],
    funding: "$180M",
    aiSummary: "India's creator economy platforms continue to compete for the vernacular short-video audience left available after TikTok's ban, with ShareChat's Moj and VerSe Innovation's Josh facing sustained pressure from Instagram Reels and YouTube Shorts. Creator monetization infrastructure remains a key gap relative to global markets, constraining platform differentiation."
  },
  {
    slug: "real-estate-tech",
    name: "Real Estate Tech",
    description: "Digital platforms for property search, brokerage-free rentals, and used vehicle marketplaces adjacent to home ownership.",
    marketSize: "$1.6B",
    growth: "+16% YoY",
    cagr: "15.2%",
    trackedCompanies: 3,
    topCompanies: ["NoBroker", "Housing.com", "MagicBricks"],
    futureOutlook: "Real Estate Tech continues to grow as digital property search and brokerage-free rental models gain trust among urban renters and buyers, with NoBroker expanding its value-added services portfolio to increase revenue per transaction. Housing.com's integration under Elara Technologies alongside PropTiger and Makaan continues to consolidate listings supply under fewer, larger platforms. Monetization remains challenged by the low-frequency nature of real estate transactions, pushing platforms toward adjacent recurring revenue streams such as packers and movers, home services, and rental agreements. Data-driven price transparency tools are becoming a key differentiator for consumer trust.",
    keyTrends: [
      "Expansion into adjacent recurring revenue streams beyond core listings",
      "Consolidation of listings supply under fewer, larger aggregator platforms",
      "Brokerage-free models gaining trust among digitally native urban renters",
      "Data-driven price transparency tools becoming a key trust differentiator",
      "Low transaction frequency continuing to constrain core monetization"
    ],
    majorPlayers: ["NoBroker", "Housing.com", "MagicBricks", "99acres"],
    funding: "$140M",
    aiSummary: "Real Estate Tech remains constrained by the inherently low-frequency nature of property transactions, pushing platforms like NoBroker toward adjacent recurring services for sustainable revenue. Housing.com's consolidated listings position under Elara Technologies continues to anchor supply-side scale in the category."
  },
  {
    slug: "agritech",
    name: "AgriTech",
    description: "Digital platforms connecting farmers with markets, inputs, and financing to improve agricultural supply chain efficiency.",
    marketSize: "$3.1B",
    growth: "+19% YoY",
    cagr: "22.8%",
    trackedCompanies: 2,
    topCompanies: ["DeHaat", "Ninjacart"],
    futureOutlook: "AgriTech remains an early-stage but structurally significant category given the scale of India's agricultural economy and the persistent inefficiency of traditional mandi-based supply chains. Full-stack platforms such as DeHaat are integrating input supply, advisory, and output market access to capture value across the farming lifecycle rather than competing on a single point solution. Farm-to-retail supply chain platforms like Ninjacart continue to focus on reducing spoilage and intermediary markups for fresh produce. Government policy support for direct farmer market access and digital agricultural infrastructure is expected to remain a meaningful tailwind through the next several years.",
    keyTrends: [
      "Full-stack platforms integrating inputs, advisory, and market access",
      "Farm-to-retail supply chains reducing spoilage and intermediary markups",
      "Government policy support for digital agricultural infrastructure",
      "Farmer-level credit and financing embedded within commerce platforms",
      "Data-driven crop advisory tools improving yield outcomes at scale"
    ],
    majorPlayers: ["DeHaat", "Ninjacart", "AgroStar", "Waycool"],
    funding: "$260M",
    aiSummary: "AgriTech remains an early but structurally important category, with full-stack platform DeHaat integrating input supply and market access while Ninjacart focuses on reducing supply chain inefficiency in fresh produce distribution. Government policy support for digital agricultural infrastructure continues to provide a meaningful sector tailwind."
  },
  {
    slug: "gaming",
    name: "Gaming",
    description: "Mobile gaming and real-money gaming platforms serving India's rapidly growing gamer base.",
    marketSize: "$3.9B",
    growth: "+12% YoY",
    cagr: "18.6%",
    trackedCompanies: 2,
    topCompanies: ["Dream11", "Mobile Premier League"],
    futureOutlook: "Gaming growth has been significantly reshaped by the 2023 GST regime change applying a 28 percent tax on the full deposit value for real-money gaming platforms, materially compressing unit economics for Dream11 and Mobile Premier League. Casual and hyper-casual mobile gaming, less exposed to real-money regulatory risk, is expected to be a more resilient growth vector over the near term. Esports and gaming content ecosystems remain nascent relative to global markets but are attracting increasing brand sponsorship interest. Regulatory clarity on skill-based versus chance-based game classification remains the single largest swing factor for sector economics.",
    keyTrends: [
      "GST regime change materially compressing real-money gaming unit economics",
      "Casual and hyper-casual gaming emerging as a more regulation-resilient vector",
      "Esports and gaming content ecosystems attracting rising sponsorship interest",
      "Regulatory clarity on skill versus chance classification remaining pivotal",
      "Consolidation among real-money gaming operators following tax cost pressure"
    ],
    majorPlayers: ["Dream11", "Mobile Premier League", "Nazara Technologies", "Winzo"],
    funding: "$95M",
    aiSummary: "Gaming has been materially disrupted by the 2023 GST policy change taxing full deposit value for real-money gaming platforms, compressing margins for category leaders Dream11 and Mobile Premier League. Casual gaming and esports remain smaller but comparatively regulation-resilient growth pockets within the broader sector."
  },
  {
    slug: "media-entertainment",
    name: "Media & Entertainment",
    description: "Digital streaming, audio, and content platforms serving India's growing base of internet-connected consumers.",
    marketSize: "$8.4B",
    growth: "+13% YoY",
    cagr: "13.9%",
    trackedCompanies: 2,
    topCompanies: ["JioCinema", "Gaana"],
    futureOutlook: "Digital media and entertainment continues to consolidate around a small number of large, telecom-backed streaming platforms following the JioCinema and Disney+ Hotstar merger under Reliance, reshaping competitive dynamics for remaining independent streaming and audio platforms. Advertising-supported free streaming tiers are increasingly central to subscriber acquisition strategy given India's price-sensitive consumer base. Regional language content investment continues to be a key differentiator for platform stickiness beyond metro audiences. Audio streaming remains a smaller but steadily growing category as smart speaker and connected car adoption increases.",
    keyTrends: [
      "Consolidation around telecom-backed platforms following major streaming mergers",
      "Advertising-supported free tiers central to subscriber acquisition strategy",
      "Regional language content investment driving non-metro platform stickiness",
      "Live sports rights remaining the single largest subscriber acquisition driver",
      "Connected car and smart speaker adoption gradually growing audio streaming"
    ],
    majorPlayers: ["JioCinema", "Disney+ Hotstar", "Netflix India", "Gaana", "Spotify India"],
    funding: "$120M",
    aiSummary: "Media and entertainment streaming has consolidated significantly following the merger of JioCinema and Disney+ Hotstar under Reliance, reshaping the competitive field for remaining independent platforms. Live sports rights and regional language content investment remain the primary levers for subscriber acquisition and retention in India's price-sensitive streaming market."
  },
  {
    slug: "b2b-commerce",
    name: "B2B Commerce",
    description: "Digital procurement, manufacturing, and supply chain platforms connecting Indian businesses across industrial and retail trade.",
    marketSize: "$32B",
    growth: "+19% YoY",
    cagr: "20.6%",
    trackedCompanies: 8,
    topCompanies: ["IndiaMART", "Udaan", "Moglix", "Zetwerk", "OfBusiness"],
    futureOutlook: "B2B commerce continues to digitize India's historically fragmented wholesale and manufacturing trade, with embedded financing increasingly central to platform differentiation as demonstrated by OfBusiness's combined commerce-and-credit model. Contract manufacturing platforms such as Zetwerk are expanding into higher-value categories including aerospace and electronics, moving beyond commodity metal fabrication. Consolidation pressure on pure marketplace models like Udaan is increasing as embedded finance and vertically integrated players demonstrate stronger unit economics. Rural and semi-urban distribution infrastructure remains a key differentiator for platforms serving kirana and FMCG supply chains.",
    keyTrends: [
      "Embedded financing becoming central to B2B platform differentiation",
      "Contract manufacturing platforms expanding into higher-value categories",
      "Consolidation pressure on pure marketplace models lacking credit integration",
      "Rural and semi-urban distribution infrastructure as a key differentiator",
      "Vertical integration into manufacturing improving unit economics for commerce platforms"
    ],
    majorPlayers: ["IndiaMART", "Udaan", "OfBusiness", "Zetwerk", "Infra.Market"],
    funding: "$1.1B",
    aiSummary: "B2B commerce remains one of the largest opportunity spaces in Indian consumer internet by addressable market size, with IndiaMART maintaining public-market leadership in classifieds-style lead generation while OfBusiness's combined commerce-and-credit model demonstrates stronger unit economics than pure marketplace peers like Udaan. Contract manufacturing platforms Zetwerk and Infra.Market continue to expand into higher-value, vertically integrated categories."
  }
];