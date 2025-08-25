import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Partner = {
  name: string;
  href: string;
  logo: string;
  alt: string;
  width: number;
  height: number;
};

const partners: Partner[] = [
  {
    name: "Google Developers",
    href: "https://developers.google.com/",
    logo: "/lovable-uploads/googleImage.png",
    alt: "Google Developers logo",
    width: 100,
    height: 35,
  },
  {
    name: "Tableau",
    href: "https://www.tableau.com/",
    logo: "/lovable-uploads/tableau.png",
    alt: "Tableau logo",
    width: 120,
    height: 45,
  },
  {
    name: "AWS",
    href: "https://aws.amazon.com/",
    logo: "/lovable-uploads/aws.png",
    alt: "Amazon Web Services logo",
    width: 110,
    height: 40,
  },
  {
    name: "MongoDB",
    href: "https://www.mongodb.com/",
    logo: "/lovable-uploads/mongo.png",
    alt: "MongoDB logo",
    width: 110,
    height: 45,
  },
  {
    name: "ServiceNow",
    href: "https://www.servicenow.com/",
    logo: "/lovable-uploads/servicenow.png",
    alt: "ServiceNow logo",
    width: 130,
    height: 40,
  },
  {
    name: "Pega",
    href: "https://www.pega.com/",
    logo: "/lovable-uploads/pega.png",
    alt: "Pega logo",
    width: 100,
    height: 40,
  },
];

function LogoStrip({ items }: { items: Partner[] }) {
  return (
    <div className="flex items-center gap-16">
      {items.map((p) => (
        <a
          key={p.name}
          href={p.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center opacity-80 hover:opacity-100 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded-md"
          aria-label={`${p.name} website`}
        >
          <img
            src={p.logo}
            alt={p.alt}
            width={p.width}
            height={p.height}
            className=" object-contain"
            loading="lazy"
            decoding="async"
          />
        </a>
      ))}
    </div>
  );
}

const PartnersSection: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const delta = dir === "left" ? -320 : 320;
    el.scrollBy({ left: delta, behavior: "smooth" });
  };

  // Duplicate items for seamless loop
  const trackItems = [...partners, ...partners];

  return (
    <section className="bg-transparent">
      <div className="py-4 md:py-6">
        <header className="mb-3 md:mb-4 text-left animate-fade-in">
          <h2 className="text-lg md:text-xl font-semibold">
            Supported by Global Technology Partners
          </h2>
        </header>

        <div className="relative group">
          {/* Marquee viewport */}
          <div
            ref={scrollerRef}
            className="relative overflow-hidden rounded-lg bg-background"
            aria-label="Partner logos marquee"
          >
            {/* Animated tracks; pause on hover/focus-within */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
              aria-hidden="true"
            />
            <div className="flex w-max animate-marquee-left gap-16 py-4 group-hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]">
              <LogoStrip items={trackItems} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
