import { Building2, Users, Home, Briefcase } from "lucide-react";
import { beneficiaries } from "@/config/siteConfig";

const iconMap = {
  Building2,
  Users,
  Home,
  Briefcase,
};

const WhoSection = () => {
  return (
    <section id="who" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title font-display">Who benefits from 3D tours</h2>
          <p className="section-subtitle mx-auto">
            Whether you sell, rent, or develop properties — 3D tours help you close deals faster.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {beneficiaries.map((item, index) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div
                key={index}
                className="card-premium flex gap-5 group hover:shadow-premium-hover transition-all duration-300"
              >
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoSection;
