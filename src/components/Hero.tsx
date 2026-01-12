import { ArrowRight, Play } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Luxury villa with ocean view in Phuket"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-primary/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-narrow mx-auto px-5 md:px-8 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Main Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary-foreground mb-6 animate-fade-in leading-tight">
            {siteConfig.hero.heading}
          </h1>

          {/* Subheadings */}
          <div className="space-y-3 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed">
              {siteConfig.hero.subheading1}
            </p>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed">
              {siteConfig.hero.subheading2}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              onClick={scrollToPortfolio}
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg font-medium group"
            >
              <Play size={20} className="mr-2" />
              {siteConfig.hero.ctaPrimary}
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              size="lg"
              className="border-2 border-primary-foreground/40 text-primary-foreground bg-transparent hover:bg-primary-foreground/10 px-8 py-6 text-lg font-medium group"
            >
              {siteConfig.hero.ctaSecondary}
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Line */}
          <p
            className="text-primary-foreground/70 text-sm md:text-base flex items-center gap-2 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <span className="w-2 h-2 bg-accent rounded-full" />
            {siteConfig.hero.trustLine}
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
