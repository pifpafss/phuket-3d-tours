import { ExternalLink, Building, Home, Warehouse, HardHat } from "lucide-react";
import { portfolioItems, type PortfolioItem } from "@/config/siteConfig";
import { Button } from "@/components/ui/button";

const typeIcons = {
  villa: Home,
  condo: Building,
  apartment: Warehouse,
  construction: HardHat,
};

const typeLabels = {
  villa: "Villa",
  condo: "Condo",
  apartment: "Apartment",
  construction: "Project",
};

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  const Icon = typeIcons[item.type];

  return (
    <div className="card-premium group hover:shadow-premium-hover transition-all duration-300 flex flex-col">
      {/* Optional Embed Preview */}
      {item.embedUrl ? (
        <div className="aspect-video rounded-lg overflow-hidden mb-4 bg-muted">
          <iframe
            src={item.embedUrl}
            title={`3D tour of ${item.name}`}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="aspect-video rounded-lg mb-4 bg-gradient-to-br from-sand-light to-secondary flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
          <div className="text-center relative z-10">
            <div className="w-16 h-16 mx-auto bg-ocean/10 rounded-full flex items-center justify-center mb-3">
              <Icon className="w-8 h-8 text-ocean" />
            </div>
            <span className="text-sm text-muted-foreground font-medium">
              {typeLabels[item.type]} Preview
            </span>
          </div>
        </div>
      )}

      {/* Card Content */}
      <div className="flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-display text-lg font-semibold text-foreground">
            {item.name}
          </h3>
          <span className="text-xs font-medium text-ocean bg-ocean-light px-2 py-1 rounded-md whitespace-nowrap">
            {typeLabels[item.type]}
          </span>
        </div>
        <p className="text-muted-foreground text-sm mb-4">
          {typeLabels[item.type]} in {item.location}
        </p>
        <div className="mt-auto">
          <Button
            variant="outline"
            size="sm"
            className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors"
            asChild
          >
            <a href={item.tourUrl} target="_blank" rel="noopener noreferrer">
              Open 3D tour
              <ExternalLink size={14} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="section-padding bg-sand-light">
      <div className="container-narrow mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="section-title font-display">3D tour examples</h2>
          <p className="section-subtitle mx-auto">
            Here are sample villas, condos, and apartments scanned in Phuket. Click to explore in 3D.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
