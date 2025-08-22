import { Button } from "@/components/ui/button";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Play } from "lucide-react";
import { SEO } from "@/components/SEO";
import PartnersSection from "@/components/sections/PartnersSection";
import MethodologySection from "@/components/sections/MethodologySection";
import PartnershipsSection from "@/components/sections/PartnershipsSection";
import SolutionsSection from "@/components/sections/SolutionsSection";
import InnovativeProductsSection from "@/components/sections/InnovativeProductsSection";
import AwardsSection from "@/components/sections/AwardsSection";
import ImpactStatsSection from "@/components/sections/ImpactStatsSection";
import StakeholderCollaborationSection from "@/components/sections/StakeholderCollaborationSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <>
      <SEO
        title="SmartBridge | Building Future-Ready Talent"
        description="Building future-ready talent by bridging education and industry with collaborations, real-world learning, and skill-aligned programs."
        image="/lovable-uploads/metadata.png"
        structuredData={[
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "SmartBridge",
            url:
              typeof window !== "undefined"
                ? window.location.origin + "/"
                : "/",
            sameAs: ["https://twitter.com/"],
            description:
              "Building future-ready talent by bridging education and industry.",
          },
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "SmartBridge",
            url:
              typeof window !== "undefined"
                ? window.location.origin + "/"
                : "/",
          },
        ]}
      />
      <main>
        <section className="container py-16 md:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2 md:gap-12">
            <article className="space-y-6 animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gradient-primary">
                <span>Building</span>
                <br />
                <span>Future-Ready Talent</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Through Strategic Industry–Academia Collaborations That Equip
                Learners with In-Demand Skills for Tomorrow’s Careers
              </p>
              <ul
                aria-label="Key metrics"
                className="flex flex-wrap items-center gap-4 md:gap-10"
              >
                <li className="flex items-baseline gap-2">
                  <span className="text-xl md:text-3xl font-bold">
                    1.5 Million
                  </span>
                  <span className="text-muted-foreground">Learners</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-xl md:text-3xl font-bold">2700</span>
                  <span className="text-muted-foreground">Institutions</span>
                </li>
                <li className="flex items-baseline gap-2">
                  <span className="text-xl md:text-3xl font-bold">6</span>
                  <span className="text-muted-foreground">Countries</span>
                </li>
              </ul>

              <div className="flex flex-wrap gap-3">
                <Button
                  variant="hero"
                  size="lg"
                  asChild
                  className="w-full sm:w-56"
                >
                  <a href="/#contact" aria-label="Partner with us">
                    Partner with Us
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="w-full sm:w-56"
                >
                  <a
                    href="https://skillwalletapp.s3.ap-south-1.amazonaws.com/brochure/SmartBridge_Brochure.pdf"
                    aria-label="Download brochure"
                  >
                    Download brochure
                  </a>
                </Button>
              </div>
            </article>

            <aside
              aria-label="Company profile video"
              className="animate-scale-in"
            >
              <AspectRatio ratio={16 / 9}>
                <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border bg-accent/40 shadow-elevate">
                  <button
                    type="button"
                    aria-label="Play company profile video (placeholder)"
                    className="inline-flex items-center justify-center gap-2 rounded-full border bg-background/80 px-4 py-2 backdrop-blur transition hover:opacity-90"
                  >
                    <Play className="text-primary" />
                    <span className="font-medium">Play Video</span>
                  </button>
                </div>
              </AspectRatio>
            </aside>
          </div>
          <div className="mt-4 md:mt-6">
            <PartnersSection />
          </div>
        </section>

        <MethodologySection />
        <PartnershipsSection />
        <ImpactStatsSection />
        <SolutionsSection />
        <InnovativeProductsSection />
        <AwardsSection />
        <StakeholderCollaborationSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
