import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  type LucideIcon,
  Brain,
  Server,
  Database,
  BarChart3,
  Users,
  Briefcase,
  TrendingUp,
  Award,
  Wallet,
  Search,
  GraduationCap,
  Target,
} from "lucide-react";
import React, { useState } from "react";

interface Feature {
  title: string;
  description: string;
  Icon: LucideIcon;
}

interface Product {
  id: string;
  name: string;
  description: string;
  features: Feature[];
  imageUrl?: string;
  secondImageUrl?: string;
  altText: string;
  learnMoreUrl?: string;
  secondAltText?: string;
}

const products: Product[] = [
  {
    id: "skill-wallet",
    name: "Skill Wallet",
    learnMoreUrl: "https://myskillwallet.ai/",

    description:
      "Skill Wallet is an AI-powered skill portfolio and competency management system that unifies courses, projects, assessments, and credits—giving learners a verifiable skill identity and institutions the controls to execute skilling at scale.",
    features: [
      {
        title: "AI-Powered Guidance",
        description:
          "Personalized skill paths, recommendations, and insights for every learner.",
        Icon: Brain,
      },
      {
        title: "Scalable at Institution/Nation Scale",
        description:
          "Deploy across thousands of campuses with secure multi-tenant controls.",
        Icon: Server,
      },
      {
        title: "Large Skill Bank",
        description:
          "Mapped skills, roles, courses, projects, and assessments in one place.",
        Icon: Database,
      },
      {
        title: "Outcome Analytics",
        description:
          "Real-time dashboards to track progress, credits, and job-readiness.",
        Icon: BarChart3,
      },
    ],
    imageUrl: "/lovable-uploads/e7a7ea6a-2d7f-4829-a429-a9f690ebbf60.png",
    secondImageUrl: "/lovable-uploads/0f60b82f-365c-4bd1-9843-67a284e1b7a6.png",
    altText:
      "Skill Wallet dashboard screenshot showing programs and skill modules",
    secondAltText:
      "Skill Wallet – Salesforce Last Mile course details screenshot",
  },
  {
    id: "troven",
    name: "Troven",
    learnMoreUrl: "https://troven.ai/",
    description:
      "Troven is an advanced assessment platform designed to revolutionize talent evaluation for both companies and academic institutions. It combines customizable challenges, secure proctoring, and AI-powered question generation to deliver faster, more accurate hiring and skill benchmarking.",
    features: [
      {
        title: "Effortless Talent Discovery",
        description:
          "Evaluate candidates with precision through real-time skill ratings and performance metrics for swift, informed shortlisting.",
        Icon: Search,
      },
      {
        title: "Custom Coding Challenges",
        description:
          "Create real-world programming tasks across 3 programming languages with code recording for in-depth skill checks.",
        Icon: Brain,
      },
      {
        title: "Secure Remote Assessment",
        description:
          "Ensure exam integrity with AI face detection, video recording, and tab-switch monitoring.",
        Icon: Award,
      },
      {
        title: "AI Question Generator",
        description:
          "Instantly generate questions from your content, adjusting difficulty for faster test creation.",
        Icon: BarChart3,
      },
    ],
    imageUrl: "/lovable-uploads/041c3c19-5da8-46e9-8c23-0efd3d06c44b.png",
    secondImageUrl: "/lovable-uploads/b83890b6-7b98-45af-8f23-5aa0fa843870.png",
    altText:
      "Troven assessment details page showing score card, proctoring information, and skill ratings",
    secondAltText:
      "Troven dashboard showing assessment statistics and recent assessments overview",
  },
  {
    id: "smartinternz",
    name: "SmartInternz",
    learnMoreUrl: "https://smartinternz.com/",

    description:
      "SmartInternz is a comprehensive internship management platform that connects students with industry opportunities while providing structured learning experiences and mentorship programs.",
    features: [
      {
        title: "Industry Connections",
        description:
          "Direct partnerships with leading companies for quality internship opportunities.",
        Icon: Briefcase,
      },
      {
        title: "Mentorship Programs",
        description:
          "Structured mentoring with industry experts and professionals.",
        Icon: Users,
      },
      {
        title: "Project-Based Learning",
        description:
          "Real-world projects that build practical skills and portfolio.",
        Icon: TrendingUp,
      },
      {
        title: "Career Development",
        description: "Comprehensive career guidance and placement support.",
        Icon: Award,
      },
    ],
    imageUrl: "/lovable-uploads/781325ac-c825-45db-8e84-40b840a3e2f9.png",
    secondImageUrl: "/lovable-uploads/999b1545-286c-4a76-8052-3e664e932004.png",
    altText:
      "SmartInternz Virtual Internship Program landing page showing learn, practice, intern workflow with technology company partnerships",
    secondAltText:
      "SmartInternz platform showing project-based learning approach with industry partner network including IBM, AWS, and Accenture",
  },
  {
    id: "impact369",
    name: "Impact369",
    learnMoreUrl: "https://impact369.com/",

    description:
      "Impact369 is an AI-driven platform that transforms raw datasets into powerful, actionable insights in real-time. By enriching profiles with contextual data from public sources like LinkedIn, it fills information gaps instantly and empowers businesses to make smarter, faster decisions.",
    features: [
      {
        title: "AI-Powered Enrichment",
        description:
          "Enhance datasets with precise, relevant details from trusted public sources for deeper analytics.",
        Icon: Brain,
      },
      {
        title: "Template-Based Analytics",
        description:
          "Access ready-to-use analytical templates to generate insights instantly—no coding required.",
        Icon: BarChart3,
      },
      {
        title: "Query Builder",
        description:
          "Combine insights from multiple datasets using a no-code builder for unified analytics in one dashboard.",
        Icon: Database,
      },
      {
        title: "Individual Data Enrichment",
        description:
          "Enrich single records for quick validations or focused analysis.",
        Icon: Search,
      },
    ],
    imageUrl: "/lovable-uploads/impacts.png",
    altText:
      "Impact369 AI-powered data enrichment platform showing profile database management and LinkedIn enrichment analytics dashboard",
  },
];

const InnovativeProductsSection: React.FC = () => {
  const [activeProduct, setActiveProduct] = useState<string>("skill-wallet");
  const currentProduct =
    products.find((p) => p.id === activeProduct) || products[0];

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: currentProduct.name,
    brand: { "@type": "Brand", name: "SmartBridge" },
    description: currentProduct.description,
    image: [
      ...(currentProduct.imageUrl
        ? typeof window !== "undefined"
          ? [window.location.origin + currentProduct.imageUrl]
          : [currentProduct.imageUrl]
        : []),
      ...(currentProduct.secondImageUrl
        ? typeof window !== "undefined"
          ? [window.location.origin + currentProduct.secondImageUrl]
          : [currentProduct.secondImageUrl]
        : []),
    ],
    offers: { "@type": "AggregateOffer", priceCurrency: "USD" },
  };

  return (
    <section
      id="innovative-products"
      aria-label="Our Innovative Products for Large Scale Skilling & Talent Development"
      className="container py-12 md:py-16"
    >
      <header className="mb-6 md:mb-8">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight">
          Our Innovative Products for Large Scale Skilling & Talent Development
        </h2>
        <p className="mt-3 text-muted-foreground max-w-3xl">
          Purpose-built platforms that help institutions and enterprises skill
          at scale with measurable, job-ready outcomes.
        </p>
      </header>

      {/* Product Selection Buttons */}
      <div className="mb-6 md:mb-8 overflow-x-auto no-scrollbar flex gap-2 snap-x snap-mandatory md:gap-3">
        {products.map((product) => {
          const getProductIcon = (productId: string) => {
            switch (productId) {
              case "skill-wallet":
                return Wallet;
              case "troven":
                return Search;
              case "smartinternz":
                return GraduationCap;
              case "impact369":
                return Target;
              default:
                return Brain;
            }
          };

          const ProductIcon = getProductIcon(product.id);

          return (
            <Button
              key={product.id}
              variant={activeProduct === product.id ? "default" : "outline"}
              size="lg"
              onClick={() => setActiveProduct(product.id)}
              className="transition-all duration-200 flex items-center gap-2 px-4 py-2 h-auto min-h-[44px]"
            >
              <ProductIcon className="h-4 w-4" aria-hidden="true" />
              <span className="font-medium">{product.name}</span>
            </Button>
          );
        })}
      </div>

      <div className="grid gap-8 md:gap-12 grid-cols-1 lg:grid-cols-2 items-start">
        {/* Left column: Product intro + Features */}
        <article
          itemScope
          itemType="https://schema.org/Product"
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2">
            <Badge variant="secondary" aria-hidden="true">
              Featured
            </Badge>
            <span className="text-sm text-muted-foreground">
              SmartBridge Product
            </span>
          </div>
          <h3 itemProp="name" className="text-xl md:text-2xl font-semibold">
            {currentProduct.name}
          </h3>
          <p
            itemProp="description"
            className="text-base md:text-lg text-muted-foreground"
          >
            {currentProduct.description}
          </p>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            aria-label={`${currentProduct.name} key features`}
          >
            {currentProduct.features.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="rounded-xl border bg-background p-4 shadow-sm hover:shadow-elevate transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-medium">{title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-1">
            <Button size="lg" variant="hero" asChild>
              <a
                href={currentProduct.learnMoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Learn more about ${currentProduct.name}`}
              >
                Learn more
              </a>
            </Button>
          </div>
        </article>

        {/* Right column: Screenshots */}
        <aside
          className="space-y-5"
          aria-label={`${currentProduct.name} screenshots`}
        >
          {currentProduct.imageUrl && (
            <div className="rounded-xl h-72  border bg-background shadow-elevate overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={currentProduct.imageUrl}
                  alt={currentProduct.altText}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-fill"
                />
              </AspectRatio>
            </div>
          )}

          {currentProduct.secondImageUrl && (
            <div className="rounded-xl border h-72   bg-background shadow-elevate overflow-hidden">
              <AspectRatio ratio={16 / 9}>
                <img
                  src={currentProduct.secondImageUrl}
                  alt={
                    currentProduct.secondAltText ||
                    `${currentProduct.name} additional screenshot`
                  }
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </AspectRatio>
            </div>
          )}

          {!currentProduct.imageUrl && !currentProduct.secondImageUrl && (
            <div className="rounded-xl border bg-background shadow-elevate overflow-hidden h-48 flex items-center justify-center text-muted-foreground">
              <p>Product screenshots coming soon</p>
            </div>
          )}
        </aside>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productLd) }}
        aria-hidden
      />
    </section>
  );
};

export default InnovativeProductsSection;
