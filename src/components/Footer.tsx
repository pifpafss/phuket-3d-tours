import { MapPin, Mail } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container-narrow mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand & Tagline */}
          <div>
            <p className="font-display text-lg font-semibold text-primary-foreground mb-1">
              {siteConfig.name}
            </p>
            <p className="text-primary-foreground/70 text-sm">
              {siteConfig.tagline}
            </p>
          </div>

          {/* Location & Contact */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
              <MapPin size={16} />
              <span>{siteConfig.location}</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/70 text-sm">
              <Mail size={16} />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-primary-foreground transition-colors"
              >
                {siteConfig.email}
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/50 text-xs">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
