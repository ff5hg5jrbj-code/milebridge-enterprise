// lib/services.ts
export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  benefits: string[];
  useCases: string[];
}

export const services: Service[] = [
  {
    slug: "contract-logistics",
    title: "Contract Logistics & Warehousing",
    shortDescription: "End-to-end warehousing and fulfillment solutions tailored to your business needs.",
    fullDescription: "Our contract logistics solutions provide comprehensive warehousing, inventory management, and order fulfillment services. We operate 2 million sq. ft. of warehouse space across India with state-of-the-art facilities equipped with modern technology for efficient storage and distribution.",
    icon: "📦",
    benefits: [
      "Reduced operational costs by up to 30%",
      "99.8% order accuracy rate",
      "Real-time inventory visibility",
      "Flexible storage solutions",
      "Advanced WMS integration",
      "Multi-channel fulfillment capability",
    ],
    useCases: [
      "E-commerce order fulfillment",
      "B2B distribution",
      "Seasonal inventory management",
      "Returns processing",
      "Kitting and assembly",
    ],
  },
  {
    slug: "express-freight",
    title: "Express & Freight Solutions",
    shortDescription: "Fast and reliable freight services for time-sensitive shipments across India.",
    fullDescription: "Our express freight solutions ensure your cargo reaches its destination quickly and safely. With a fleet of 1,000+ vehicles and a network spanning all major cities, we offer both express and standard freight services tailored to your timeline and budget requirements.",
    icon: "🚚",
    benefits: [
      "Same-day and next-day delivery options",
      "Real-time shipment tracking",
      "Dedicated account managers",
      "Flexible scheduling",
      "Temperature-controlled transport",
      "Insurance coverage included",
    ],
    useCases: [
      "Urgent spare parts delivery",
      "High-value goods transport",
      "Pharmaceutical distribution",
      "Perishable goods",
      "Industrial equipment",
    ],
  },
  {
    slug: "last-mile",
    title: "Last-Mile Delivery",
    shortDescription: "Efficient last-mile delivery solutions connecting your products to end customers.",
    fullDescription: "Our last-mile delivery network ensures seamless delivery to end customers with coverage across 19,000+ pin codes in India. We combine technology, local expertise, and a customer-first approach to provide reliable and efficient delivery experiences.",
    icon: "🏪",
    benefits: [
      "Coverage across 19,000+ pin codes",
      "Same-day delivery in metro cities",
      "Real-time delivery updates",
      "Proof of delivery with photos",
      "Failed delivery management",
      "Customer communication via SMS/email",
    ],
    useCases: [
      "E-commerce deliveries",
      "Food and grocery delivery",
      "Hyperlocal services",
      "Cash-on-delivery support",
      "Scheduled deliveries",
    ],
  },
  {
    slug: "cross-border",
    title: "Cross-Border & International",
    shortDescription: "Seamless international logistics solutions connecting India with global markets.",
    fullDescription: "Navigate the complexities of international trade with our cross-border logistics services. We handle customs clearance, documentation, and multi-modal transport to ensure your goods move smoothly across borders.",
    icon: "✈️",
    benefits: [
      "End-to-end customs clearance",
      "Multi-modal transport options",
      "Compliance management",
      "Competitive international rates",
      "Trade documentation support",
      "Regional expertise across 15+ countries",
    ],
    useCases: [
      "Import/export services",
      "Air and sea freight",
      "Cross-border e-commerce",
      "Trade compliance consulting",
      "International warehousing",
    ],
  },
  {
    slug: "technology",
    title: "Alyte Technology Platform",
    shortDescription: "Proprietary logistics technology for real-time visibility and control.",
    fullDescription: "Alyte is our cutting-edge logistics technology platform that provides complete visibility into your supply chain. With AI-powered analytics, IoT-enabled tracking, and predictive insights, Alyte transforms how you manage logistics operations.",
    icon: "📱",
    benefits: [
      "Real-time GPS tracking",
      "AI-powered route optimization",
      "Predictive analytics and insights",
      "Automated alerts and notifications",
      "API integration with your systems",
      "Mobile app for on-the-go management",
    ],
    useCases: [
      "Fleet management",
      "Shipment tracking",
      "Performance analytics",
      "Route optimization",
      "Automated reporting",
    ],
  },
];
