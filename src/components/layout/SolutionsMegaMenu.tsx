import React from "react";
import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-collab.jpg";

type CategoryKey = "universities" | "industry" | "government";

type Category =
  | {
      label: string;
      kind: "list";
      description?: string;
      items: { label: string; href: string }[];
    }
  | {
      label: string;
      kind: "cta";
      description: string;
      cta: { label: string; href: string };
    };

const categories: Record<CategoryKey, Category> = {
  universities: {
    label: "Universities",
    kind: "list",
    description:
      "Partner with SmartBridge to embed industry-ready experiential learning through credit-bearing courses, virtual internships, and LastMile programs.",
    items: [
      {
        label: "Industry-Aligned Credit Courses",
        href: "https://myskillwallet.ai/credit-course",
      },
      {
        label: "Virtual Internship Program",
        href: "https://myskillwallet.ai/virtual-internship-program",
      },
      {
        label: "LastMile Program",
        href: "https://myskillwallet.ai/lastmile",
      },
    ],
  },
  industry: {
    label: "Industry",
    kind: "cta",
    description:
      "End-to-end talent solutions by SmartBridge: source, skill, and onboard emerging talent with real project experience.",
    cta: { label: "Explore", href: "/industry" },
  },
  government: {
    label: "Government",
    kind: "cta",
    description:
      "Scalable workforce development programs powered by experiential learning and AI-led initiatives for public sector impact.",
    cta: { label: "Explore", href: "/government" },
  },
};

export function SolutionsMegaMenu() {
  const [active, setActive] = useState<CategoryKey>("universities");
  const cat = categories[active];

  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="story-link">
            Solutions
          </NavigationMenuTrigger>
          <NavigationMenuContent className="z-50">
            <div
              className="w-[min(70vw,720px)] grid grid-cols-12 bg-popover text-popover-foreground shadow-xl border rounded-md overflow-hidden"
              role="group"
              aria-label="Solutions mega menu"
            >
              {/* Left: Categories */}
              <aside className="col-span-5 border-r bg-muted/40">
                <ul className="py-2" role="tablist" aria-orientation="vertical">
                  {Object.entries(categories).map(([key, cat]) => {
                    const k = key as CategoryKey;
                    const isActive = active === k;
                    return (
                      <li key={k} role="presentation">
                        <button
                          type="button"
                          role="tab"
                          aria-selected={isActive}
                          className={`w-full text-left px-4 py-3 text-sm transition-colors ${
                            isActive
                              ? "bg-background text-primary"
                              : "hover:bg-muted/60"
                          }`}
                          onClick={() => setActive(k)}
                        >
                          {cat.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </aside>

              {/* Right: Content */}
              <section
                className="col-span-7 p-3 md:p-4"
                role="tabpanel"
                aria-label={cat.label}
              >
                <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                  {cat.label}
                </h3>
                {cat.kind === "list" ? (
                  <div className="space-y-3">
                    <div className="rounded-lg bg-primary text-primary-foreground p-3 md:p-4 ">
                      <div className="space-y-3">
                        <h4 className="text-base md:text-lg font-semibold">
                          {cat.label} Solutions
                        </h4>
                        {cat.description && (
                          <p className="text-xs md:text-sm opacity-90">
                            {cat.description}
                          </p>
                        )}
                        <div className="hidden md:block">
                          <img
                            src={heroImage}
                            alt={`${cat.label} talent solutions`}
                            className="w-full h-44 object-cover  rounded-md"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        <Button variant="secondary" size="sm" asChild>
                          <a
                            href="https://myskillwallet.ai/university"
                            target="_blank"
                          >
                            Explore
                          </a>
                        </Button>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h5 className="text-sm font-medium text-muted-foreground">
                        Talent Solutions
                      </h5>
                      <ul className="grid gap-2">
                        {cat.items.map((item) => (
                          <li key={item.href}>
                            <a
                              href={item.href}
                              target="_blank"
                              className="block rounded-md px-3 py-2 text-sm hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
                              aria-label={`${item.label} — Solutions for ${cat.label}`}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-lg bg-primary text-primary-foreground p-3 md:p-4 ">
                    <div className="space-y-2 md:space-y-3">
                      <h4 className="text-base md:text-lg font-semibold">
                        {cat.label} Solutions
                      </h4>
                      <p className="text-xs md:text-sm opacity-90">
                        {cat.description}
                      </p>
                      <div className="hidden md:block">
                        <img
                          src={heroImage}
                          alt={`${cat.label} talent solutions`}
                          className="w-full h-44 object-cover rounded-md"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <Button variant="secondary" size="sm" asChild>
                        <a
                          href={cat.cta.href}
                          target="_blank"
                          aria-label={`${cat.label} — Explore`}
                        >
                          Explore
                        </a>
                      </Button>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
