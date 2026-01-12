import { Check, MapPin } from "lucide-react";
import { trustPoints, siteConfig } from "@/config/siteConfig";

const TrustSection = () => {
  const halfIndex = Math.ceil(trustPoints.length / 2);
  const leftPoints = trustPoints.slice(0, halfIndex);
  const rightPoints = trustPoints.slice(halfIndex);

  return (
    <section className="section-padding bg-sand-light">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title font-display">Why work with me in Phuket</h2>
          <p className="section-subtitle mx-auto">
            Local expertise, professional equipment, and a commitment to quality.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="card-premium">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {/* Left Column */}
              <div className="space-y-4">
                {leftPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-ocean/10 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-ocean" />
                    </div>
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>

              {/* Right Column */}
              <div className="space-y-4">
                {rightPoints.map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-ocean/10 rounded-full flex items-center justify-center mt-0.5">
                      <Check className="w-4 h-4 text-ocean" />
                    </div>
                    <p className="text-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Local Mention */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="flex items-center gap-2 text-muted-foreground text-center justify-center">
                <MapPin className="w-4 h-4 text-ocean" />
                Ideal for Phuket villas, sea-view apartments, and new developments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
