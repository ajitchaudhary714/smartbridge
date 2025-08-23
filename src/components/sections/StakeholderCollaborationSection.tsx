import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  GraduationCap,
  Landmark,
  Users,
  BookOpen,
  Building,
  TrendingUp,
} from "lucide-react";

interface PartnerLogo {
  name: string;
  logo: string;
}

interface StakeholderCard {
  id: string;
  title: string;
  subtitle: string;
  benefits: string[];
  partners: PartnerLogo[];
  icon: typeof Building2;
  accentColor: string;
  bgAccent: string;
}

const stakeholders: StakeholderCard[] = [
  {
    id: "industry",
    title: "Industry Partners",
    subtitle: "Transform your talent pipeline with skilled professionals",
    benefits: [
      "Access pre-trained talent pools with verified skills",
      "Reduce hiring costs through targeted assessments",
      "Partner on curriculum design for industry relevance",
    ],
    partners: [
      {
        name: "IBM",
        logo: "/lovable-uploads/9fa440cc-eebf-4f08-8bfc-93bf090df023.png",
      },
      {
        name: "Accenture",
        logo: "/lovable-uploads/c647bf7a-8bf3-4567-b1a8-a643b689ea60.png",
      },
      {
        name: "Virtusa",
        logo: "/lovable-uploads/757e086d-a4e4-41fa-9f77-b5df88d4075a.png",
      },
      {
        name: "NTT Data",
        logo: "/lovable-uploads/9a7048bb-3920-4ce4-a421-dacb29ea4f9b.png",
      },
      {
        name: "Wipro",
        logo: "/lovable-uploads/4483ecdc-7eee-4df0-b556-d9195ce0580d.png",
      },
      {
        name: "Persistent",
        logo: "/lovable-uploads/b2826c49-2320-4961-8f9f-296a036ae468.png",
      },
      {
        name: "Deloitte",
        logo: "/lovable-uploads/36264911-a39b-42cc-b177-70c2a60f822d.png",
      },
      {
        name: "Cognizant",
        logo: "/lovable-uploads/110f8310-0e6f-40f4-a682-cf38f4a7785e.png",
      },
      {
        name: "TCS",
        logo: "/lovable-uploads/7e3a3a89-c84b-42b8-a98e-7b478ca4ad00.png",
      },
      { name: "Microsoft", logo: "🟦" },
    ],
    icon: Building2,
    accentColor: "border-l-primary",
    bgAccent: "group-hover:bg-primary/5",
  },
  {
    id: "universities",
    title: "Universities",
    subtitle: "Enhance student outcomes with industry-aligned skills",
    benefits: [
      "Bridge academics and industry needs effectively",
      "Track student progress with comprehensive analytics",
      "Provide real-world project experience",
    ],
    partners: [
      {
        name: "CVR College of Engineering",
        logo: "/lovable-uploads/14da3500-c243-494f-8fee-12ab6c40abf2.png",
      },
      {
        name: "SRIT",
        logo: "/lovable-uploads/57db73bf-bb0d-428a-9c6a-57663ab114ab.png",
      },
      {
        name: "KITS Autonomous",
        logo: "/lovable-uploads/bf5dc07d-58d1-4442-9423-d4277b6d317c.png",
      },
      {
        name: "ACE Engineering College",
        logo: "/lovable-uploads/0af96f15-e7a3-4d42-bead-bd82f9f4cc81.png",
      },
      {
        name: "MLRIT",
        logo: "/lovable-uploads/f906cf6f-94c4-4c80-9058-bdd7b3b087ce.png",
      },
      {
        name: "Vignan Institute",
        logo: "/lovable-uploads/af8a4c81-47fe-4531-815a-8eb45b204843.png",
      },
      {
        name: "Sri Krishna Institutions",
        logo: "/lovable-uploads/c5cb8194-01f1-4fb4-ac7a-06f121d55f1e.png",
      },
      {
        name: "Bannari Amman Institute",
        logo: "/lovable-uploads/b1f81b61-ab92-4db7-a517-d3de178ab823.png",
      },
      {
        name: "Geethanjali College",
        logo: "/lovable-uploads/5b817728-a7fd-4a37-9fbe-09b2a7ea086a.png",
      },
      {
        name: "VxGART",
        logo: "/lovable-uploads/0c57f430-b556-4ec6-8637-6bcfb4efe7b6.png",
      },
    ],
    icon: GraduationCap,
    accentColor: "border-l-secondary",
    bgAccent: "group-hover:bg-secondary/5",
  },
  //   const partners = [
  //   {
  //     src: "/salesforce/mns.png",
  //     alt: "Logo 6",
  //     imageClass: "w-28 h-24 ",
  //   },
  //   {
  //     src: "/salesforce/images.png",
  //     alt: "Logo 9",
  //     imageClass: "w-24 h-24 ",
  //   },
  //   {
  //     src: "/salesforce/AICTE.png",
  //     alt: "Logo 11",
  //     imageClass: "w-24 h-24 ",
  //   },
  //   {
  //     src: "/salesforce/pngwings.jpeg",
  //     alt: "Logo 12",
  //     imageClass: "w-28 h-16 md:w-32 md:h-32",
  //   },
  //   {
  //     src: "/salesforce/tnsdc-logo2.png",
  //     alt: "Logo 13",
  //     imageClass: "w-24 h-24 ",
  //   },
  //   {
  //     src: "/salesforce/task.png",

  //     alt: "Logo 14",
  //     imageClass: "w-32 h-32 md:w-36 md:h-36",
  //   },
  //   {
  //     src: "/salesforce/apsche_logos.png",

  //     alt: "Logo 15",
  //     imageClass: "w-28 h-16 md:w-24 md:h-20",
  //   },
  //   {
  //     src: "/salesforce/up.svg",

  //     alt: "Logo 15",
  //     imageClass: "w-20 h-20 md:w-28 md:h-24",
  //   },
  //   {
  //     src: "/salesforce/Iste.png",

  //     alt: "Logo 15",
  //     imageClass: "w-20 h-20 md:w-28 md:h-20",
  //   },
  //    {
  //     src: "/salesforce/swayam_logo.png",

  //     alt: "Logo 15",
  //     imageClass: "w-20 h-20 md:w-28 md:h-20",
  //   },
  // ];
  {
    id: "government",
    title: "Government",
    subtitle: "Drive national skill development at scale",
    benefits: [
      "Scale skilling initiatives across regions",
      "Monitor workforce development through insights",
      "Support economic growth with future-ready talent",
    ],
    partners: [
      { name: "Ministry of Education", logo: "/salesforce/mns.png" },
      { name: "AICTE", logo: "/salesforce/images.png" },
      { name: "AICTE", logo: "/salesforce/AICTE.png" },
      { name: "NSDC", logo: "/salesforce/pngwings.jpeg" },
      { name: "TASK", logo: "/salesforce/task.png" },
      { name: "TNSDC", logo: "/salesforce/tnsdc-logo2.png" },
      { name: "APSCHE", logo: "/salesforce/apsche_logos.png" },
      { name: "UP Government", logo: "/salesforce/up.svg" },
      { name: "ISTE", logo: "/salesforce/Iste.png" },
      { name: "SWAYAM", logo: "/salesforce/swayam_logo.png" },
    ],
    icon: Landmark,
    accentColor: "border-l-accent",
    bgAccent: "group-hover:bg-accent/5",
  },
];

const stats = [
  { label: "Learners Skilled", value: "1.5M+", icon: Users },
  { label: "Partner Institutions", value: "2500+", icon: BookOpen },
  { label: "Corporate Partners", value: "100+", icon: Building },
  { label: "Years of Service", value: "10", icon: TrendingUp },
];

const StakeholderCollaborationSection = () => {
  return (
    <section
      id="stakeholder-collaboration"
      aria-label="How Industry, Universities & Government Can Work With Us"
      className="container py-16 md:py-20"
    >
      {/* Section Header */}
      <header className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          How Industry, Universities & Government Can Work With Us
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Partner with SmartBridge to create a comprehensive ecosystem for
          large-scale skilling, talent development, and workforce
          transformation.
        </p>
      </header>

      {/* Stakeholder Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
        {stakeholders.map(
          ({
            id,
            title,
            subtitle,
            benefits,
            partners,
            icon: Icon,
            accentColor,
            bgAccent,
          }) => (
            <Card
              key={id}
              className={`group relative overflow-hidden border-l-4 ${accentColor} hover:shadow-elevate transition-all duration-500 hover:scale-[1.02] cursor-pointer ${bgAccent}`}
            >
              <CardHeader className="space-y-4 pb-4">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <Badge variant="secondary" className="mt-1">
                      Partnership
                    </Badge>
                  </div>
                </div>
                <p className="text-muted-foreground h-8  text-sm">{subtitle}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Benefits */}
                <ul
                  className="space-y-2"
                  aria-label={`${title} collaboration benefits`}
                >
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div
                        className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0"
                        aria-hidden="true"
                      />
                      <span className="text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Partner Logos Grid */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-muted-foreground">
                    Top Partners
                  </h4>
                  <div className="grid grid-cols-5 gap-3">
                    {partners.map((partner, index) => (
                      <div
                        key={index}
                        className="aspect-square rounded-lg border bg-background/50 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110 cursor-pointer group/logo p-2"
                        title={partner.name}
                      >
                        {partner.logo.startsWith("/") ? (
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-2xl group-hover/logo:animate-pulse">
                            {partner.logo}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full group-hover:border-primary group-hover:text-primary transition-all duration-300 hover:shadow-md"
                  asChild
                >
                  <a
                    href="#contact"
                    aria-label={`Learn more about ${title} partnership`}
                  >
                    Partner With Us
                  </a>
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>

      {/* Stats Bar */}
      <div className="bg-gradient-to-r from-muted/50 to-muted/30 rounded-xl p-6 mb-12 border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="text-center group">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Icon
                  className="h-5 w-5 text-primary group-hover:scale-110 transition-transform"
                  aria-hidden="true"
                />
                <span className="text-2xl md:text-3xl font-bold text-primary">
                  {value}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Full-width CTA Strip */}
      <div className="bg-gradient-primary rounded-xl p-8 text-center text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
        <div className="relative z-10">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Talent Strategy?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join our ecosystem of forward-thinking organizations creating the
            workforce of tomorrow. Let's discuss how we can collaborate to
            achieve your skilling goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="hover:scale-105 transition-transform duration-200"
              asChild
            >
              <a href="#contact" aria-label="Schedule a consultation">
                Schedule a Consultation
              </a>
            </Button>
            <Button
              size="lg"
              className="bg-white/20 backdrop-blur-sm text-white border border-white/30 hover:bg-white hover:text-primary hover:scale-105 transition-all duration-200"
              asChild
            >
              <a href="#contact" aria-label="Download our partnership guide">
                Download Partnership Guide
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StakeholderCollaborationSection;
