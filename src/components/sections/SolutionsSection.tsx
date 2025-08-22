import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import {
  type LucideIcon,
  GraduationCap,
  Laptop,
  Target,
  Code2,
  BookOpen,
  Atom,
  Megaphone,
  Shuffle,
} from "lucide-react";
import { useRef } from "react";

interface Solution {
  title: string;
  description: string;
  learners: string;
  sponsorType: string;
  href?: string;
  Icon: LucideIcon;
}

const solutions: Solution[] = [
  {
    title: "Industry-Aligned Credit Courses",
    description:
      "Credit-bearing courses co-designed with industry to map directly to in-demand roles and competencies.",
    learners: "10,000+",
    sponsorType: "Industry Sponsored",
    href: "#credit-courses",
    Icon: GraduationCap,
  },
  {
    title: "Virtual Internship Programs",
    description:
      "Mentored, project-based internships that simulate real workflows and deliver a portfolio of outcomes.",
    learners: "25,000+",
    sponsorType: "Industry Sponsored",
    href: "#virtual-internships",
    Icon: Laptop,
  },
  {
    title: "LastMile Program",
    description:
      "Job-readiness bootcamps focused on role-specific skills, behavioral readiness, and interview preparation.",
    learners: "15,000+",
    sponsorType: "Industry Sponsored",
    href: "#lastmile",
    Icon: Target,
  },
  {
    title: "Hackathons",
    description:
      "Innovation challenges that build problem-solving, collaboration, and rapid prototyping skills.",
    learners: "50,000+",
    sponsorType: "University Funded",
    href: "#hackathons",
    Icon: Code2,
  },
  {
    title: "Faculty Development Programs",
    description:
      "Upskilling faculty on modern pedagogy, tools, and emerging tech to amplify classroom impact.",
    learners: "5,000+",
    sponsorType: "University Funded",
    href: "#fdp",
    Icon: BookOpen,
  },
  {
    title: "Center for Future Skills & Innovation (CFSI)",
    description:
      "On-campus hub to incubate projects, certifications, and research aligned to future technologies.",
    learners: "8,000+",
    sponsorType: "Government/Institution Funded",
    href: "#cfsi",
    Icon: Atom,
  },
  {
    title: "AspireX (Career Fair)",
    description:
      "Career connect platform linking students with hiring partners through assessments and showcases.",
    learners: "30,000+",
    sponsorType: "Industry Sponsored",
    href: "#aspirex",
    Icon: Megaphone,
  },
  {
    title: "Switch-up",
    description:
      "Career transition pathway enabling learners to pivot into high-growth roles with guided support.",
    learners: "3,000+",
    sponsorType: "Government/CSR Funded",
    href: "#switch-up",
    Icon: Shuffle,
  },
];

const SolutionsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const handleScroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = Math.min(el.clientWidth * 0.8, 600);
    el.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };
  return (
    <section
      id="talent-solutions"
      aria-label="Our Solutions for Building Future-Ready Talent"
      className="bg-gradient-primary py-16 md:py-24 text-primary-foreground"
    >
      <div className="container">
        <header className="mb-4">
          <h2 className="text-2xl md:text-4xl font-bold leading-tight">
            Our Solutions for Building Future-Ready Talent
          </h2>
          <p className="mt-3 text-primary-foreground/90 max-w-2xl">
            Scalable, outcome-focused programs co-created with industry and
            academia to equip learners with job-ready skills and measurable
            impact.
          </p>
        </header>
        <div className="md:flex items-center hidden justify-end gap-3 pb-4">
          <Button
            variant="secondary"
            size="icon"
            className="p-2 rounded-full border border-white bg-background/60 hover:bg-primary/40"
            onClick={() => handleScroll("left")}
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="p-2 rounded-full border border-white bg-background/60 hover:bg-primary/40"
            onClick={() => handleScroll("right")}
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 pb-4 overflow-x-auto scroll-smooth [scrollbar-width:none] [-ms-overflow-style:'none'] [&::-webkit-scrollbar]:hidden"
          >
            {solutions.map((item) => (
              <article
                key={item.title}
                className="min-w-[280px] sm:min-w-[320px] md:min-w-[320px] max-w-sm"
              >
                <Card className="h-full transition hover-scale hover:shadow-elevate hover:border-primary/30">
                  <CardHeader>
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-md bg-primary/10 p-2 text-primary">
                        <item.Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <CardTitle className="text-lg md:text-xl h-10">
                          {item.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardDescription className="px-6 pb-2">
                    {item.description}
                  </CardDescription>

                  <CardContent className="grid grid-cols-1 gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-800">Learners</span>
                      <span className="text-sm font-medium">
                        {item.learners}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Sponsor
                      </span>
                      <Badge variant="secondary" className="whitespace-nowrap">
                        {item.sponsorType}
                      </Badge>
                    </div>
                  </CardContent>

                  <CardFooter className="flex justify-center">
                    <Button
                      asChild
                      size="sm"
                      className="w-44"
                      variant="outline"
                      aria-label={`Know more about ${item.title}`}
                    >
                      <a href={item.href || "#"}>Know more</a>
                    </Button>
                  </CardFooter>
                </Card>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
