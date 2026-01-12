import { MessageCircle, Send } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";
import ContactForm from "./ContactForm";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title font-display">
            Want to see your property in 3D?
          </h2>
          <p className="section-subtitle mx-auto">
            Send us a property link or location and get a custom proposal. Response within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Messenger Buttons */}
          <div className="flex flex-col justify-center">
            <div className="space-y-4 mb-8">
              <h3 className="font-display text-xl font-semibold text-foreground">
                Quick contact
              </h3>
              <p className="text-muted-foreground">
                For fastest response, reach out directly on WhatsApp or Telegram. We typically reply within a few hours.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="flex-1 bg-[#25D366] hover:bg-[#20BD5A] text-white px-8 py-6 text-lg"
                asChild
              >
                <a
                  href={siteConfig.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={22} className="mr-2" />
                  WhatsApp
                </a>
              </Button>
              <Button
                size="lg"
                className="flex-1 bg-[#0088CC] hover:bg-[#0077B5] text-white px-8 py-6 text-lg"
                asChild
              >
                <a
                  href={siteConfig.telegramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Send size={22} className="mr-2" />
                  Telegram
                </a>
              </Button>
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Prefer email?{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-ocean hover:underline font-medium"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
