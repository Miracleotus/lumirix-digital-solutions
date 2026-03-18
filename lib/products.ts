export type Product = {
  id: string;
  sku: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  category: "Branding" | "Web Design" | "Marketing" | "Design";
};

export const products: Product[] = [
  {
    id: "1",
    sku: "LD-BRD-001",
    name: "Complete Brand Identity Architecture",
    shortDesc: "A full visual identity system, including logo, typography, and color strategy.",
    fullDesc: "Build a brand that commands attention. This package includes primary/secondary logo design, comprehensive brand guidelines, custom color palettes, typography systems, and core brand messaging.",
    price: 1800,
    category: "Branding",
  },
  {
    id: "2",
    sku: "LD-WEB-001",
    name: "Custom Website Design & Development",
    shortDesc: "High-performance, fully custom website tailored to your brand.",
    fullDesc: "A complete 5-to-7 page website build focused on immersive UI/UX design and high conversion rates. Includes mobile optimization, rapid load speeds, custom graphics, and fundamental on-page SEO.",
    price: 3500,
    category: "Web Design",
  },
  {
    id: "3",
    sku: "LD-WEB-002",
    name: "E-Commerce Storefront Build",
    shortDesc: "Scalable, high-converting online store setup and design.",
    fullDesc: "Launch a digital storefront designed to sell. Includes product architecture, secure payment gateway integration, custom cart design, and the upload of your first 50 products optimized for search.",
    price: 4200,
    category: "Web Design",
  },
  {
    id: "4",
    sku: "LD-WEB-003",
    name: "High-Converting Landing Page",
    shortDesc: "Strategic UI/UX design and copywriting for a single campaign page.",
    fullDesc: "Maximize your ad spend. We design and write a highly targeted, conversion-optimized landing page for your specific product launch, lead magnet, or ad campaign.",
    price: 900,
    category: "Web Design",
  },
  {
    id: "5",
    sku: "LD-BRD-002",
    name: "Corporate Rebranding Package",
    shortDesc: "A complete visual and strategic overhaul for established businesses.",
    fullDesc: "Breathe new life into your existing company. We audit your current brand, modernize your logo, refresh your digital assets, and realign your visual identity with your updated business goals.",
    price: 2500,
    category: "Branding",
  },
  {
    id: "6",
    sku: "LD-DSN-001",
    name: "Social Media Branding Kit",
    shortDesc: "Cohesive visual templates for your social media channels.",
    fullDesc: "Keep your brand consistent across all platforms. Includes customized profile pictures, banner designs, and 15 editable post/story templates tailored to your brand guidelines.",
    price: 450,
    category: "Design",
  },
  {
    id: "7",
    sku: "LD-WEB-004",
    name: "UI/UX Website Wireframing",
    shortDesc: "Strategic blueprinting and user flow design for complex web projects.",
    fullDesc: "We map out the user journey and structural layout of your application or website before development begins, ensuring intuitive navigation and optimal user experience.",
    price: 1100,
    category: "Web Design",
  },
  {
    id: "8",
    sku: "LD-MKT-001",
    name: "Comprehensive SEO Strategy",
    shortDesc: "In-depth technical, on-page, and off-page SEO implementation.",
    fullDesc: "Dominate search engine results. This service includes deep keyword research, technical website audits, metadata optimization, and a strategic content roadmap to drive organic traffic.",
    price: 850,
    category: "Marketing",
  },
  {
    id: "9",
    sku: "LD-MKT-002",
    name: "Digital Ad Campaign Management",
    shortDesc: "Setup and optimization for Google or Meta ad campaigns.",
    fullDesc: "Drive targeted traffic immediately. We handle ad creative, copywriting, audience targeting, and initial bid strategies to maximize your Return on Ad Spend (ROAS).",
    price: 700,
    category: "Marketing",
  },
  {
    id: "10",
    sku: "LD-WEB-005",
    name: "Monthly Web Maintenance Retainer",
    shortDesc: "Ongoing technical support, security updates, and performance optimization.",
    fullDesc: "Keep your website running flawlessly. Includes daily backups, plugin updates, security monitoring, and up to 2 hours of design/content updates per month.",
    price: 300,
    category: "Web Design",
  },
];