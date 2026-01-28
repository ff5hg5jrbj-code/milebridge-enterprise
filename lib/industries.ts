// lib/industries.ts
export interface CaseStudy {
  title: string;
  client: string;
  challenge: string;
  solution: string;
  results: string[];
}

export interface Industry {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  challenges: string[];
  solutions: string[];
  caseStudies: CaseStudy[];
}

export const industries: Industry[] = [
  {
    slug: "e-commerce",
    title: "E-Commerce",
    shortDescription: "Powering online retail with fast, reliable logistics solutions.",
    fullDescription: "The e-commerce industry demands speed, accuracy, and flexibility. We provide end-to-end logistics solutions from warehousing to last-mile delivery, ensuring your customers receive their orders on time, every time.",
    icon: "🛒",
    challenges: [
      "Peak season volume management",
      "Fast delivery expectations",
      "High return rates",
      "Multi-channel fulfillment",
      "Inventory visibility",
    ],
    solutions: [
      "Same-day and next-day delivery options",
      "Scalable warehousing infrastructure",
      "Real-time inventory tracking",
      "Reverse logistics management",
      "Multi-channel order fulfillment",
    ],
    caseStudies: [
      {
        title: "Fashion E-tailer Success",
        client: "Leading Fashion Retailer",
        challenge: "Managing 10x volume spike during festive season",
        solution: "Deployed flexible warehousing and hired seasonal delivery fleet",
        results: ["99.5% on-time delivery", "Zero stockouts", "30% cost reduction"],
      },
      {
        title: "Electronics Marketplace",
        client: "Major Electronics Platform",
        challenge: "High-value product security and fast delivery",
        solution: "Dedicated secure warehouses with express delivery network",
        results: ["Zero theft incidents", "Same-day delivery in 12 cities", "95% customer satisfaction"],
      },
    ],
  },
  {
    slug: "fmcg",
    title: "FMCG",
    shortDescription: "Fast-moving consumer goods distribution across India.",
    fullDescription: "FMCG brands need reliable, efficient distribution networks to ensure products reach retailers and consumers quickly. Our extensive network and temperature-controlled logistics ensure product quality and availability.",
    icon: "🛍️",
    challenges: [
      "Short product shelf life",
      "Temperature-sensitive products",
      "Wide distribution network",
      "Demand forecasting",
      "Last-mile challenges in rural areas",
    ],
    solutions: [
      "Temperature-controlled transportation",
      "Hub-and-spoke distribution model",
      "Rural distribution networks",
      "Real-time demand analytics",
      "Automated route optimization",
    ],
    caseStudies: [
      {
        title: "Dairy Distribution Excellence",
        client: "National Dairy Brand",
        challenge: "Maintaining cold chain across 500+ distribution points",
        solution: "Deployed temperature-controlled fleet with IoT monitoring",
        results: ["100% cold chain compliance", "50% reduction in spoilage", "Expanded to 200 new locations"],
      },
    ],
  },
  {
    slug: "pharmaceuticals",
    title: "Pharmaceuticals",
    shortDescription: "Compliant and secure pharmaceutical logistics solutions.",
    fullDescription: "Pharmaceutical logistics requires strict compliance, temperature control, and security. We provide specialized logistics solutions that meet regulatory requirements and ensure product integrity from manufacturer to patient.",
    icon: "💊",
    challenges: [
      "Regulatory compliance (FDA, DCGI)",
      "Temperature-sensitive products",
      "Product security and anti-counterfeiting",
      "Documentation requirements",
      "Expiry date management",
    ],
    solutions: [
      "GDP-compliant cold chain logistics",
      "Validated temperature-controlled vehicles",
      "Real-time temperature monitoring",
      "Secure chain of custody",
      "Regulatory documentation support",
    ],
    caseStudies: [
      {
        title: "Vaccine Distribution Program",
        client: "Pharmaceutical Manufacturer",
        challenge: "Distributing temperature-sensitive vaccines across India",
        solution: "Specialized cold chain network with 2-8°C control",
        results: ["100% temperature compliance", "Zero product loss", "Reached 500+ remote locations"],
      },
    ],
  },
  {
    slug: "automotive",
    title: "Automotive",
    shortDescription: "Specialized logistics for automotive parts and vehicles.",
    fullDescription: "The automotive industry requires specialized handling of parts, components, and finished vehicles. We provide just-in-time delivery, secure transportation, and efficient supply chain solutions for OEMs and aftermarket suppliers.",
    icon: "🚗",
    challenges: [
      "Just-in-time delivery requirements",
      "Heavy and bulky shipments",
      "High-value cargo security",
      "Spare parts distribution",
      "Reverse logistics for returns",
    ],
    solutions: [
      "Dedicated automotive logistics network",
      "Specialized handling equipment",
      "Real-time tracking and visibility",
      "Just-in-time delivery systems",
      "Aftermarket parts distribution",
    ],
    caseStudies: [
      {
        title: "OEM Parts Distribution",
        client: "Major Automotive OEM",
        challenge: "Just-in-time delivery to 50+ assembly plants",
        solution: "Dedicated logistics network with predictive analytics",
        results: ["99.9% on-time delivery", "Zero production line stoppages", "25% inventory reduction"],
      },
    ],
  },
  {
    slug: "electronics",
    title: "Electronics",
    shortDescription: "Secure logistics for high-value electronic goods.",
    fullDescription: "Electronics require careful handling, secure transportation, and rapid delivery. We provide specialized logistics solutions that protect your high-value products and ensure they reach customers in perfect condition.",
    icon: "📱",
    challenges: [
      "High-value product security",
      "Fragile goods handling",
      "Technology product launches",
      "Warranty and return management",
      "Counterfeit prevention",
    ],
    solutions: [
      "Secure warehousing with 24/7 surveillance",
      "Specialized packaging and handling",
      "Product launch logistics support",
      "Insurance coverage included",
      "End-to-end tracking",
    ],
    caseStudies: [
      {
        title: "Smartphone Launch Success",
        client: "Leading Smartphone Brand",
        challenge: "National launch with same-day availability in 100+ cities",
        solution: "Pre-positioned inventory with coordinated nationwide delivery",
        results: ["100% launch day availability", "Zero theft incidents", "Record sales achieved"],
      },
    ],
  },
  {
    slug: "industrial-b2b",
    title: "Industrial B2B",
    shortDescription: "Heavy equipment and industrial goods logistics.",
    fullDescription: "Industrial B2B requires specialized handling of heavy machinery, equipment, and raw materials. We provide project logistics, heavy haul capabilities, and supply chain solutions for manufacturing and industrial sectors.",
    icon: "🏭",
    challenges: [
      "Heavy and oversized cargo",
      "Project logistics coordination",
      "Multi-modal transportation",
      "Installation and setup requirements",
      "Documentation and compliance",
    ],
    solutions: [
      "Heavy haul transportation",
      "Project cargo management",
      "Customs clearance support",
      "Multi-modal logistics solutions",
      "On-site delivery and installation",
    ],
    caseStudies: [
      {
        title: "Manufacturing Plant Setup",
        client: "Industrial Equipment Manufacturer",
        challenge: "Transporting 200+ tons of machinery to remote factory location",
        solution: "Multi-modal transportation with specialized heavy haul vehicles",
        results: ["On-time project completion", "Zero equipment damage", "Successful installation"],
      },
    ],
  },
];
