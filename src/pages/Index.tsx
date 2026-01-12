import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhySection from "@/components/WhySection";
import PortfolioSection from "@/components/PortfolioSection";
import WhoSection from "@/components/WhoSection";
import HowSection from "@/components/HowSection";
import TrustSection from "@/components/TrustSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import { siteConfig } from "@/config/siteConfig";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = siteConfig.seo.title;
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", siteConfig.seo.description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = siteConfig.seo.description;
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <WhySection />
        <PortfolioSection />
        <WhoSection />
        <HowSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
