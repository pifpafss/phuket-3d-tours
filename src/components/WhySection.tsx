import { TrendingUp, Globe, Clock, Star } from "lucide-react";
import { whyFeatures } from "@/config/siteConfig";

const iconMap = {
  TrendingUp,
  Globe,
  Clock,
  Star,
};

const WhySection = () => {
  return (
    <section id="why" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title font-display">Why 3D tours work</h2>
          <p className="section-subtitle mx-auto">
            Interactive virtual tours increase engagement, attract serious buyers, and give your listings a competitive edge.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {whyFeatures.map((feature, index) => {
            const Icon = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="card-premium group hover:shadow-premium-hover transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-ocean-light rounded-lg flex items-center justify-center mb-5 group-hover:bg-ocean/20 transition-colors">
                  <Icon className="w-6 h-6 text-ocean" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
