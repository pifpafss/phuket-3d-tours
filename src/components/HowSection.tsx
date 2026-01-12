import { MessageSquare, Camera, Share2 } from "lucide-react";
import { processSteps } from "@/config/siteConfig";

const stepIcons = [MessageSquare, Camera, Share2];

const HowSection = () => {
  return (
    <section id="process" className="section-padding bg-primary">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title font-display text-primary-foreground">
            How the process works
          </h2>
          <p className="section-subtitle text-primary-foreground/80 mx-auto">
            From inquiry to delivery in just a few days — simple, professional, and hassle-free.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-primary-foreground/20" />

          {processSteps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <div key={index} className="text-center relative">
                {/* Step Number */}
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 bg-primary-foreground rounded-2xl flex items-center justify-center shadow-lg">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 bg-ocean rounded-full flex items-center justify-center text-sm font-semibold text-primary-foreground">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold text-primary-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/75 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Delivery Note */}
        <div className="text-center mt-12 md:mt-16">
          <p className="inline-flex items-center gap-2 text-primary-foreground/70 text-sm bg-primary-foreground/5 px-4 py-2 rounded-full">
            <span className="w-2 h-2 bg-accent rounded-full" />
            Typical delivery: 24–72 hours depending on property size
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowSection;
