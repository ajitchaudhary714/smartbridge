import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom"; // ✅ React Router
import { Button } from "../ui/button"; // ✅ adjust relative path (no "@/...")
import { SolutionsMegaMenu } from "./SolutionsMegaMenu";
import { ProductsMegaMenu } from "./ProductsMegaMenu";
import {
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  ExternalLink,
  ChevronUp,
} from "lucide-react";
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
      { label: "LastMile Program", href: "https://myskillwallet.ai/lastmile" },
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

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [active, setActive] = useState<CategoryKey>("universities");
  const cat = categories[active];

  // const products = [
  //   {
  //     key: "skill-wallet",
  //     label: "Skill Wallet",
  //     href: "https://myskillwallet.ai/",
  //     img: "/lovable-uploads/e9d1567c-84fe-4292-8ce7-8c7d4aca0e90.png",
  //     desc: "Verified skill passport to showcase competencies.",
  //   },
  //   {
  //     key: "troven",
  //     label: "Troven",
  //     href: "https://troven.ai/",
  //     img: "/lovable-uploads/719a975d-9642-45a6-ad25-460c2326fbf5.png",
  //     desc: "AI-assisted assessments and hiring with real project evidence.",
  //   },
  //   {
  //     key: "smartinternz",
  //     label: "SmartInternz",
  //     href: "https://smartinternz.com/",
  //     img: "/lovable-uploads/da55e47b-065d-4c01-b125-33f39b2efe7b.png",
  //     desc: "Experiential learning and virtual internships platform.",
  //   },
  //   {
  //     key: "impact369",
  //     label: "Impact369",
  //     href: "https://impact369.com/",
  //     img: "/placeholder.svg",
  //     desc: "Program impact tracking and outcome analytics.",
  //   },
  // ] as const;

  const navCls = ({ isActive }: { isActive: boolean }) =>
    `${
      isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
    } transition-colors`;

  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3"
          aria-label="SmartBridge home"
        >
          <img
            src="/lovable-uploads/sm3.png"
            alt="SmartBridge logo — Let's Bridge the Gap"
            width={240}
            height={60}
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/" end className={navCls}>
            Home
          </NavLink>
          <NavLink to="/" className="story-link">
            About Us
          </NavLink>
          <SolutionsMegaMenu />
          <ProductsMegaMenu />
          <a href="#events" className="story-link">
            Events
          </a>
          <a
            href="https://careers.smartinternz.com/jobs/Careers"
            target="_blank"
            className="story-link"
          >
            Careers
          </a>
          <a href="#contact" className="story-link">
            Contact
          </a>
        </nav>

        {/* Actions + Mobile Button */}
        <div className="flex items-center gap-3">
          <Button
            variant="hero"
            className="hidden md:inline-flex"
            onClick={() =>
              window.open("https://myskillwallet.ai/login", "_blank")
            }
          >
            Get Started
          </Button>

          {/* Hamburger */}
          <button
            className="md:hidden "
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-background shadow-lg border-t min-h-screen">
          <div className="flex flex-col justify-between p-4">
            <div className="flex  flex-col  gap-3 text-base">
              <NavLink
                to="/"
                end
                className={navCls}
                onClick={() => setMobileOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/about"
                className="story-link"
                onClick={() => setMobileOpen(false)}
              >
                About Us
              </NavLink>

              {/* Solutions Dropdown */}
              <button
                className="flex justify-between items-center"
                onClick={() =>
                  setOpenMenu(openMenu === "solutions" ? null : "solutions")
                }
              >
                <span>Solutions</span>
                {openMenu === "solutions" ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {openMenu === "solutions" && (
                <div
                  className="w-full grid grid-cols-12 bg-popover text-popover-foreground  border rounded-md overflow-hidden"
                  role="group"
                  aria-label="Solutions mega menu"
                >
                  {/* Left: Categories */}
                  <aside className="col-span-4 border-r bg-muted/40">
                    <ul className="" role="tablist" aria-orientation="vertical">
                      {Object.entries(categories).map(([key, cat]) => {
                        const k = key as CategoryKey;
                        const isActive = active === k;
                        return (
                          <li key={k} role="presentation">
                            <button
                              type="button"
                              role="tab"
                              aria-selected={isActive}
                              className={`w-full text-left px-2 py-2 text-sm transition-colors ${
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
                    className="col-span-8 p-2 md:p-4"
                    role="tabpanel"
                    aria-label={cat.label}
                  >
                    <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                      {cat.label}
                    </h3>
                    {cat.kind === "list" ? (
                      <div className="space-y-3">
                        <div className="rounded-lg bg-primary text-primary-foreground p-3 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
                          <div className="space-y-2">
                            <h4 className="text-base md:text-lg font-semibold">
                              {cat.label} Solutions
                            </h4>
                            {cat.description && (
                              <p className="text-xs md:text-sm opacity-90">
                                {cat.description}
                              </p>
                            )}
                            <Button
                              variant="secondary"
                              className="text-sm md:text-base"
                              size="sm"
                              asChild
                            >
                              <a
                                href="https://myskillwallet.ai/university"
                                target="_blank"
                              >
                                Explore
                              </a>
                            </Button>
                          </div>
                          <div className="hidden md:block">
                            <img
                              src={heroImage}
                              alt={`${cat.label} talent solutions`}
                              className="w-full h-24 object-cover rounded-md"
                              loading="lazy"
                              decoding="async"
                            />
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
                                  className="block rounded-md   text-sm hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
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
                      <div className="rounded-lg bg-primary text-primary-foreground p-3 md:p-4 grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
                        <div className="space-y-2">
                          <h4 className="text-base md:text-lg font-semibold">
                            {cat.label} Solutions
                          </h4>
                          <p className="text-xs md:text-sm opacity-90">
                            {cat.description}
                          </p>
                          <Button variant="secondary" size="sm" asChild>
                            <a
                              href={cat.cta.href}
                              aria-label={`${cat.label} — Explore`}
                            >
                              Explore
                            </a>
                          </Button>
                        </div>
                        <div className="hidden md:block">
                          <img
                            src={heroImage}
                            alt={`${cat.label} talent solutions`}
                            className="w-full h-24 object-cover rounded-md"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                      </div>
                    )}
                  </section>
                </div>
              )}

              {/* Products Dropdown */}
              <button
                className="flex justify-between items-center"
                onClick={() =>
                  setOpenMenu(openMenu === "products" ? null : "products")
                }
              >
                <span>Products</span>
                {openMenu === "products" ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {openMenu === "products" && (
                <div className="">
                  <div
                    className="w-full bg-popover text-popover-foreground  border rounded-md overflow-hidden"
                    role="group"
                    aria-label="Products mega menu"
                  >
                    <section
                      className="p-3 md:p-4"
                      role="tabpanel"
                      aria-label="Products"
                    >
                      <h3 className="sr-only">SmartBridge Products</h3>
                      <ul className="grid grid-cols-1 gap-3">
                        {/* Skill Wallet */}
                        <li>
                          <a
                            href="https://myskillwallet.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 rounded-md border bg-background p-3 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
                            aria-label="Skill Wallet — View product"
                          >
                            <img
                              src="/lovable-uploads/e9d1567c-84fe-4292-8ce7-8c7d4aca0e90.png"
                              alt="Skill Wallet logo"
                              className="h-9 w-auto object-contain"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="min-w-0">
                              <span className="block text-sm font-medium truncate">
                                Skill Wallet
                              </span>
                              <span className="block text-xs text-muted-foreground truncate">
                                Verified skill passport to showcase
                                competencies.
                              </span>
                            </div>
                            <ExternalLink
                              className="ml-auto h-4 w-4 opacity-60 group-hover:opacity-100 transition"
                              aria-hidden="true"
                            />
                          </a>
                        </li>

                        {/* Troven */}
                        <li>
                          <a
                            href="https://troven.ai/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 rounded-md border bg-background p-3 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
                            aria-label="Troven — View product"
                          >
                            <img
                              src="/lovable-uploads/719a975d-9642-45a6-ad25-460c2326fbf5.png"
                              alt="Troven logo"
                              className="h-8 w-auto object-contain"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="min-w-0">
                              <span className="block text-sm font-medium truncate">
                                Troven
                              </span>
                              <span className="block text-xs text-muted-foreground truncate">
                                AI-assisted assessments and hiring with real
                                project evidence.
                              </span>
                            </div>
                            <ExternalLink
                              className="ml-auto h-4 w-4 opacity-60 group-hover:opacity-100 transition"
                              aria-hidden="true"
                            />
                          </a>
                        </li>

                        {/* SmartInternz */}
                        <li>
                          <a
                            href="https://smartinternz.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 rounded-md border bg-background p-3 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
                            aria-label="SmartInternz — View product"
                          >
                            <img
                              src="/lovable-uploads/da55e47b-065d-4c01-b125-33f39b2efe7b.png"
                              alt="SmartInternz logo"
                              className="h-6 w-auto object-contain"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="min-w-0">
                              <span className="block text-sm font-medium truncate">
                                SmartInternz
                              </span>
                              <span className="block text-xs text-muted-foreground truncate">
                                Experiential learning and virtual internships
                                platform.
                              </span>
                            </div>
                            <ExternalLink
                              className="ml-auto h-4 w-4 opacity-60 group-hover:opacity-100 transition"
                              aria-hidden="true"
                            />
                          </a>
                        </li>

                        {/* Impact369 */}
                        <li>
                          <a
                            href="https://impact369.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3 rounded-md border bg-background p-3 hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/40"
                            aria-label="Impact369 — View product"
                          >
                            <img
                              src="/lovable-uploads/impact.png"
                              alt="Impact369 logo"
                              className="h-10 w-auto object-contain"
                              loading="lazy"
                              decoding="async"
                            />
                            <div className="min-w-0">
                              <span className="block text-sm font-medium truncate">
                                Impact369
                              </span>
                              <span className="block text-xs text-muted-foreground truncate">
                                Program impact tracking and outcome analytics.
                              </span>
                            </div>
                            <ExternalLink
                              className="ml-auto h-4 w-4 opacity-60 group-hover:opacity-100 transition"
                              aria-hidden="true"
                            />
                          </a>
                        </li>
                      </ul>
                    </section>
                  </div>
                </div>
              )}

              <a
                href="#events"
                className="story-link"
                onClick={() => setMobileOpen(false)}
              >
                Events
              </a>
              <a
                href="https://careers.smartinternz.com/jobs/Careers"
                target="_blank"
                className="story-link"
                onClick={() => setMobileOpen(false)}
              >
                Careers
              </a>
              <a
                href="#contact"
                className="story-link"
                onClick={() => setMobileOpen(false)}
              >
                Contact
              </a>
            </div>
            <div className="mt-auto">
              <Button
                variant="hero"
                className="mt-4 w-full"
                onClick={() =>
                  window.open("https://myskillwallet.ai/login", "_blank")
                }
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
