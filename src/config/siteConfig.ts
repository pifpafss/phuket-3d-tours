// ============================================
// SITE CONFIGURATION
// Edit this file to update all content and links
// ============================================

export const siteConfig = {
  // Brand
  name: "Phuket 3D Tours",
  tagline: "3D virtual tours for real estate and rentals.",
  location: "Phuket, Thailand",
  
  // Contact Links - UPDATE THESE
  whatsappLink: "https://wa.me/66XXXXXXXXXX",
  telegramLink: "https://t.me/your_telegram",
  email: "hello@phuket3dtours.com",
  
  // SEO
  seo: {
    title: "3D Real Estate Tours in Phuket | Matterport Virtual Tours",
    description: "Professional 3D scanning and virtual tours for villas, condos, and apartments in Phuket, Thailand. Matterport, LIDAR, Insta360. 60+ properties scanned.",
  },
  
  // Stats
  stats: {
    propertiesScanned: "60+",
  },
  
  // Hero Section
  hero: {
    heading: "3D Real Estate Tours in Phuket",
    subheading1: "Sell and rent properties faster with interactive 3D models and virtual walkthroughs.",
    subheading2: "Matterport / LIDAR / Insta360 for villas, condos and construction projects.",
    trustLine: "Based in Phuket • 60+ properties scanned",
    ctaPrimary: "Get a demo",
    ctaSecondary: "Order 3D tour",
  },
};

// Portfolio Items - Add more items here
export interface PortfolioItem {
  id: string;
  name: string;
  location: string;
  type: "villa" | "condo" | "apartment" | "construction";
  tourUrl: string;
  embedUrl?: string; // Optional Matterport iframe URL
  thumbnail?: string;
}

export const portfolioItems: PortfolioItem[] = [
  { id: "1", name: "Oceanfront Villa", location: "Kamala", type: "villa", tourUrl: "https://example.com/tour-1" },
  { id: "2", name: "Modern Pool Condo", location: "Patong", type: "condo", tourUrl: "https://example.com/tour-2" },
  { id: "3", name: "Hillside Retreat", location: "Surin", type: "villa", tourUrl: "https://example.com/tour-3" },
  { id: "4", name: "Beachfront Apartment", location: "Kata", type: "apartment", tourUrl: "https://example.com/tour-4" },
  { id: "5", name: "Luxury Penthouse", location: "Rawai", type: "condo", tourUrl: "https://example.com/tour-5" },
  { id: "6", name: "Tropical Garden Villa", location: "Nai Harn", type: "villa", tourUrl: "https://example.com/tour-6" },
  { id: "7", name: "Sea View Studio", location: "Bang Tao", type: "apartment", tourUrl: "https://example.com/tour-7" },
  { id: "8", name: "Development Project", location: "Cherng Talay", type: "construction", tourUrl: "https://example.com/tour-8" },
  { id: "9", name: "Private Pool Villa", location: "Layan", type: "villa", tourUrl: "https://example.com/tour-9" },
  { id: "10", name: "Mountain View Condo", location: "Chalong", type: "condo", tourUrl: "https://example.com/tour-10" },
  { id: "11", name: "Boutique Residence", location: "Kamala", type: "condo", tourUrl: "https://example.com/tour-11" },
  { id: "12", name: "Infinity Pool Villa", location: "Surin", type: "villa", tourUrl: "https://example.com/tour-12" },
];

// Why Section Features
export const whyFeatures = [
  {
    icon: "TrendingUp",
    title: "30–50% more engagement",
    description: "3D tours keep visitors on listings longer than photos alone, increasing the chance of inquiry.",
  },
  {
    icon: "Globe",
    title: "Remote exploration",
    description: "Clients explore every corner of the property from anywhere in the world, anytime.",
  },
  {
    icon: "Clock",
    title: "Fewer wasted viewings",
    description: "Buyers and renters pre-qualify themselves, so you only meet serious prospects.",
  },
  {
    icon: "Star",
    title: "Stand out everywhere",
    description: "Your listings shine on websites, social media, and ads with immersive 3D content.",
  },
];

// Who Benefits
export const beneficiaries = [
  {
    icon: "Building2",
    title: "Developers",
    description: "Show projects before completion. Attract investors and pre-sell units with immersive virtual walkthroughs.",
  },
  {
    icon: "Users",
    title: "Real Estate Agents",
    description: "Pre-qualify buyers and renters online. Close deals faster by letting clients explore properties 24/7.",
  },
  {
    icon: "Home",
    title: "Rental Managers",
    description: "Showcase villas and apartments to international guests. Reduce booking questions with complete virtual access.",
  },
  {
    icon: "Briefcase",
    title: "Investors & Owners",
    description: "Present assets professionally. Increase perceived value and attract premium buyers or tenants.",
  },
];

// How It Works Steps
export const processSteps = [
  {
    step: 1,
    title: "Send a request",
    description: "Contact us via WhatsApp, Telegram, or the form below with your property details.",
  },
  {
    step: 2,
    title: "We scan on-site",
    description: "Our team visits and captures your property with Matterport, LIDAR, or Insta360 technology.",
  },
  {
    step: 3,
    title: "Get your 3D tour",
    description: "Receive a ready-to-use 3D tour for your website, portals, social media, and ads.",
  },
];

// Trust Points
export const trustPoints = [
  "60+ properties already scanned",
  "Experience with villas, condos, and apartments",
  "Based locally in Phuket",
  "Modern equipment: Matterport / LIDAR / Insta360",
  "Fast delivery from 24–72 hours",
  "Professional editing and hosting included",
];

// Navigation Links
export const navLinks = [
  { label: "Why 3D tours", href: "#why" },
  { label: "Examples", href: "#portfolio" },
  { label: "How it works", href: "#process" },
  { label: "Contact", href: "#contact" },
];
