import React, { useState } from "react";
import { SEO } from "@/components/SEO";
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  GraduationCap,
  Laptop,
  Target,
  Megaphone,
  Building2,
  Users,
  TrendingUp,
  Award,
  ArrowRight,
  CheckCircle,
  Lightbulb,
  Search,
  Handshake,
  Briefcase,
  Network,
  UserCheck,
} from "lucide-react";
import Footer from "@/components/sections/Footer";

// Partnership Slider Component
const PartnershipSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const allPartnerships = [
    {
      id: "google",
      title: "Google India Edu. Programs",
      year: "2022",
      image: "/lovable-uploads/4ce21bf4-fae9-485f-a821-2f30a52eb62a.png",
      description:
        "Since 2022, trained 203,000+ students and 2,000+ faculty across India, with 75% from Tier 2 & 3 cities. Programs in Android, Kotlin, and Google Cloud—including internships, credit courses, and workshops—are AICTE-recognized and connect learners to Google's developer ecosystem.",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      id: "ibm",
      title: "IBM Skills Build Initiatives",
      year: "2017",
      image: "/lovable-uploads/4dda91db-3075-4068-8077-cf8f37f99e6b.png",
      description:
        "With 8 years of successful partnership, more than 400,000 students and 20,000+ educators have benefited. Presently, IBM SkillsBuild is helping 100,000 students in India develop Generative AI skills.",
      gradient: "from-blue-800 to-blue-900",
    },
    {
      id: "salesforce",
      title: "Salesforce Workforce Development",
      year: "2022",
      image: "/lovable-uploads/91eda880-1fba-4770-a3c5-1828b5553129.png",
      description:
        "Since 2022, over 100,000 students have been upskilled through the Salesforce Virtual Internship Program, with 15,000+ graduates starting careers in the Salesforce ecosystem. The programs are currently active in India, Philippines, Indonesia, and Saudi Arabia.",
      gradient: "from-blue-600 to-cyan-500",
    },
    {
      id: "aws",
      title: "AWS Talent Alliance",
      year: "2021",
      image: "/lovable-uploads/53bd1a1f-ae1a-4865-bde5-ce5785725d84.png",
      description:
        "Cloud engineering specialization program focusing on scalable solutions and modern DevOps practices.",
      gradient: "from-orange-500 to-orange-600",
    },
    {
      id: "servicenow",
      title: "ServiceNow Academic Partnership",
      year: "2024",
      image: "/lovable-uploads/dda1c586-04b8-4e18-aea4-27aaa9a952dc.png",
      description:
        "Since 2024, our programs have trained 25,000 students across 20 Indian states, with nearly half from Tier 2 & Tier 3 cities. Through internships, project-based learning, and faculty training, we've built a strong ServiceNow talent pipeline, achieving good student placements.",
      gradient: "from-purple-600 to-purple-700",
    },
    {
      id: "mongodb",
      title: "MongoDB University Partnership",
      year: "2024",
      image: "/lovable-uploads/145ccf09-b932-4acc-a4df-370abcd3c38e.png",
      description:
        "Launched in 2024, trained 39,000 students across 9 states, with 75% from Tier 2 & 3 cities. Over 500 students certified as MongoDB Associate Developers, building a strong pipeline of MERN, backend, and database professionals.",
      gradient: "from-green-600 to-green-700",
    },
    {
      id: "pega",
      title: "PEGA University Academia Program",
      year: "2025",
      image: "/lovable-uploads/e5c8187d-9d8a-4374-a596-10fca300c4e6.png",
      description:
        "Business process management and automation expertise through comprehensive PEGA training and certification programs.",
      gradient: "from-red-600 to-red-700",
    },
  ];

  // Group partnerships into slides of 4
  const slides = [];
  for (let i = 0; i < allPartnerships.length; i += 4) {
    slides.push(allPartnerships.slice(i, i + 4));
  }

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex);
  };

  return (
    <div className="relative">
      {/* Partnership Cards Display */}
      <div className="overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full flex-shrink-0">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {slide.map((partnership) => (
                  <Card
                    key={partnership.id}
                    className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <CardHeader>
                      <div
                        className={`aspect-video rounded-lg overflow-hidden bg-gradient-to-br ${partnership.gradient} mb-4`}
                      >
                        <img
                          src={partnership.image}
                          alt={partnership.title}
                          className={`w-full h-full object-contain p-6 ${
                            partnership.id === "salesforce"
                              ? "object-cover p-0"
                              : ""
                          }`}
                        />
                      </div>
                      <CardTitle className="text-lg">
                        {partnership.title}
                      </CardTitle>
                      <Badge variant="secondary" className="w-fit">
                        {partnership.year}
                      </Badge>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground text-sm">
                        {partnership.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dotted Pagination Indicators */}
      <div className="flex justify-center items-center gap-2 mt-8">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-3 h-3 bg-primary"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Auto-advance functionality (optional) */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
        <button
          onClick={prevSlide}
          className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
          aria-label="Previous slide"
        >
          <ArrowRight className="w-5 h-5 rotate-180 text-gray-600" />
        </button>
      </div>

      <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
        <button
          onClick={nextSlide}
          className="w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-all duration-300"
          aria-label="Next slide"
        >
          <ArrowRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

const IndustrySolutions = () => {
  // Success stories data
  const techSuccessStories = [
    {
      partner: "Google",
      logo: "🔍",
      story:
        "Increased hiring efficiency by 60% through our talent creation hubs",
      impact: "500+ developers placed",
      program: "Cloud Developer Program",
      testimonial:
        "SmartBridge transformed our talent acquisition process completely.",
    },
    {
      partner: "IBM",
      logo: "🔵",
      story:
        "Built specialized AI/ML talent pipeline reducing time-to-hire by 45%",
      impact: "300+ AI specialists",
      program: "AI Innovation Hub",
      testimonial:
        "The quality of candidates exceeded our expectations significantly.",
    },
    {
      partner: "Salesforce",
      logo: "☁️",
      story:
        "Co-created CRM specialization program with 95% job placement rate",
      impact: "800+ CRM developers",
      program: "Salesforce Academy",
      testimonial:
        "Our partnership with SmartBridge is driving innovation forward.",
    },
    {
      partner: "AWS",
      logo: "🚀",
      story:
        "Developed cloud-native curriculum delivering job-ready professionals",
      impact: "1000+ cloud engineers",
      program: "Cloud Solutions Track",
      testimonial:
        "SmartBridge understands our technical requirements perfectly.",
    },
  ];

  const siSuccessStories = [
    {
      partner: "TCS",
      logo: "🏢",
      story: "Streamlined campus-to-company pipeline with 90% retention rate",
      impact: "2000+ placements",
      program: "Digital Transformation Track",
      testimonial: "SmartBridge is our trusted partner for talent acquisition.",
    },
    {
      partner: "Wipro",
      logo: "🌐",
      story:
        "Implemented hire-train-deploy model reducing onboarding time by 50%",
      impact: "1500+ deployments",
      program: "Enterprise Solutions Program",
      testimonial:
        "The candidates come fully prepared for immediate deployment.",
    },
    {
      partner: "Accenture",
      logo: "🔷",
      story:
        "Built consulting-ready talent pool with specialized industry knowledge",
      impact: "1200+ consultants",
      program: "Business Consulting Track",
      testimonial: "Quality and speed of talent delivery is exceptional.",
    },
    {
      partner: "Deloitte",
      logo: "💎",
      story:
        "Created role-specific training programs with 98% client satisfaction",
      impact: "800+ specialists",
      program: "Advisory Excellence Program",
      testimonial:
        "SmartBridge delivers exactly what we need, when we need it.",
    },
  ];

  const techCompanyServices = [
    {
      title: "Talent Creation Hubs",
      description:
        "Collaborative centers that co-create curriculum and talent pipelines aligned with your technology stack and innovation goals.",
      highlights: [
        "Co-designed curriculum",
        "Technology-specific training",
        "Innovation labs",
      ],
      Icon: Lightbulb,
      companies: ["Google", "IBM", "Salesforce", "ServiceNow"],
    },
    {
      title: "Demand Driven Skilling",
      description:
        "Agile upskilling programs that respond to emerging technology trends and your evolving talent requirements.",
      highlights: [
        "Emerging tech focus",
        "Rapid skill deployment",
        "Future-ready competencies",
      ],
      Icon: TrendingUp,
      companies: ["AWS", "MongoDB", "Pega", "Katalon"],
    },
    {
      title: "Innovation & Research Collaboration",
      description:
        "Joint research initiatives and innovation projects that drive both talent development and technological advancement.",
      highlights: [
        "Research partnerships",
        "Innovation projects",
        "IP development",
      ],
      Icon: Search,
      companies: ["Microsoft", "Oracle", "Adobe"],
    },
    {
      title: "Branding & Employer Engagement",
      description:
        "Strategic brand positioning and engagement programs to attract top talent to your technology ecosystem.",
      highlights: [
        "Brand visibility",
        "Talent attraction",
        "Employer branding",
      ],
      Icon: Megaphone,
      companies: ["Meta", "Tesla", "NVIDIA"],
    },
  ];

  const systemIntegrationServices = [
    {
      title: "Role-Specific Talent Pool",
      description:
        "Curated talent pools trained for specific roles and project requirements in your delivery methodology.",
      highlights: [
        "Role-ready professionals",
        "Skill-matched candidates",
        "Quality assurance",
      ],
      Icon: UserCheck,
      companies: ["TCS", "Wipro", "Cognizant", "Accenture"],
    },
    {
      title: "Campus to Company Pipeline",
      description:
        "Seamless talent transition programs that bridge academic learning with industry-ready deployment capabilities.",
      highlights: [
        "Seamless transition",
        "Industry readiness",
        "Deployment ready",
      ],
      Icon: Network,
      companies: ["Deloitte", "Capgemini", "NTT Data"],
    },
    {
      title: "AspireX - Career Fairs",
      description:
        "Specialized career connection events designed to match talent with system integration opportunities and career paths.",
      highlights: ["Direct hiring", "Skill assessment", "Career matching"],
      Icon: Briefcase,
      companies: ["Infosys", "HCL", "Tech Mahindra"],
    },
    {
      title: "Hire-Train-Deploy Model",
      description:
        "End-to-end talent solutions covering recruitment, training, and deployment for immediate project readiness.",
      highlights: [
        "Complete lifecycle",
        "Project ready",
        "Immediate deployment",
      ],
      Icon: Target,
      companies: ["IBM Services", "EY", "KPMG"],
    },
  ];

  const benefits = [
    {
      title: "Reduced Hiring Time",
      description:
        "Cut down recruitment cycles by 60% with pre-skilled candidates",
      Icon: TrendingUp,
    },
    {
      title: "Industry-Ready Talent",
      description: "Students trained on real industry tools and workflows",
      Icon: Award,
    },
    {
      title: "Cost-Effective Training",
      description: "Lower training costs with ready-to-deploy professionals",
      Icon: Building2,
    },
    {
      title: "Scalable Programs",
      description: "Flexible solutions that grow with your hiring needs",
      Icon: Users,
    },
  ];

  return (
    <>
      <SEO
        title="Industry Solutions - Future-Ready Talent Development"
        description="Comprehensive industry-aligned programs that bridge the skills gap and deliver job-ready talent for modern enterprises."
      />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-primary py-16 md:py-24 text-primary-foreground">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div className="space-y-8">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                  Talent Solutions for Emerging Industries
                </h1>
                <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
                  Bridge the skills gap with our comprehensive industry-aligned
                  programs. Co-designed with leading companies to deliver
                  job-ready professionals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={() => {
                      const enquirySection =
                        document.getElementById("enquiry-form");
                      enquirySection?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Partner With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Right Column - Video */}
              <div className="relative">
                <div className="aspect-video rounded-xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-sm border border-white/20">
                  <video
                    className="w-full h-full object-cover"
                    poster="/placeholder.svg"
                    controls
                    preload="metadata"
                  >
                    <source src="#" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Placeholder Content */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/40 backdrop-blur-sm">
                    <div className="text-center text-white">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <svg
                          className="w-8 h-8"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                      <p className="text-lg font-medium">Watch Our Story</p>
                      <p className="text-sm opacity-90">
                        Discover how we transform careers
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Partner With Us Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <header className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Why Partner With SmartBridge?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experience the difference with our proven approach to talent
                development and industry collaboration
              </p>
            </header>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="text-center">
                    <div className="rounded-xl bg-gradient-primary p-4 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <benefit.Icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Industry Partnerships Showcase Section */}
        <section className="py-12 md:py-16 bg-gradient-to-br from-primary/5 to-primary/10">
          <div className="container">
            <header className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4">
                Our Industry Partnerships
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our strategic partnerships that drive innovation and
                create exceptional career opportunities
              </p>
            </header>

            {/* Partnership Cards - Functional Slider */}
            <PartnershipSlider />
          </div>
        </section>

        {/* Technology Companies Section */}
        <section className="py-12 md:py-16">
          <div className="container">
            <header className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-blue-900">
                Technology Companies
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Collaborative solutions for tech innovation and talent creation
              </p>
            </header>

            {/* Services Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {techCompanyServices.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-blue-200"
                >
                  <CardHeader className="text-center">
                    <div className="rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 p-4 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-blue-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700 text-center text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Impact & Top Partners */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Impact */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-900">
                  Impact
                </h3>
                <div className="space-y-6">
                  <p className="text-blue-700 text-lg leading-relaxed">
                    Our technology partnerships have revolutionized talent
                    development, creating specialized pathways that bridge the
                    gap between academic learning and industry requirements.
                    Through collaborative innovation, we've established a robust
                    ecosystem that delivers cutting-edge skills aligned with
                    evolving market demands.
                  </p>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        15+
                      </div>
                      <div className="text-blue-700 font-medium">
                        Tech Partners
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-cyan-600 mb-2">
                        1.5M+
                      </div>
                      <div className="text-cyan-700 font-medium">
                        Students Trained
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                        30+
                      </div>
                      <div className="text-blue-700 font-medium">
                        Role-Specific Learning Tracks
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-cyan-600 mb-2">
                        2700+
                      </div>
                      <div className="text-cyan-700 font-medium">
                        Colleges Benefitted
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Technology Companies */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-blue-900">
                  Top Technology Companies
                </h3>
                <div className="space-y-6">
                  <p className="text-blue-700 text-lg leading-relaxed">
                    We collaborate with industry-leading technology companies to
                    create specialized talent pipelines and innovation-driven
                    learning experiences.
                  </p>

                  <div className="grid grid-cols-3 gap-6 items-center max-w-md mx-auto">
                    <div className="bg-white rounded-lg border border-blue-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/4ce21bf4-fae9-485f-a821-2f30a52eb62a.png"
                        alt="Google Developers"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg border border-blue-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/4dda91db-3075-4068-8077-cf8f37f99e6b.png"
                        alt="IBM"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg border border-blue-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/c8b760fd-c552-467d-b2b1-431fb76ab068.png"
                        alt="Salesforce"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg border border-blue-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/dda1c586-04b8-4e18-aea4-27aaa9a952dc.png"
                        alt="ServiceNow"
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg border border-blue-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/53bd1a1f-ae1a-4865-bde5-ce5785725d84.png"
                        alt="AWS"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg border border-blue-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/145ccf09-b932-4acc-a4df-370abcd3c38e.png"
                        alt="MongoDB"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg border border-blue-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/e5c8187d-9d8a-4374-a596-10fca300c4e6.png"
                        alt="Pega"
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg border border-blue-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/76fecda3-6764-45df-8821-45a4333982c0.png"
                        alt="Tableau"
                        className="h-8 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories of Technology Companies */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center text-blue-900">
                Success Stories of Technology Companies
              </h3>
              <Carousel className="w-full">
                <CarouselContent>
                  {techSuccessStories.map((story, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="h-full p-8 bg-gradient-to-br from-blue-50 to-white border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg">
                        {/* Company Header */}
                        <div className="text-center mb-8">
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">
                            {story.partner}
                          </h4>
                          <span className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full">
                            {story.program}
                          </span>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 mb-8"></div>

                        {/* Story */}
                        <div className="mb-8">
                          <p className="text-gray-700 leading-relaxed text-center">
                            {story.story}
                          </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 mb-8"></div>

                        {/* Impact Stats */}
                        <div className="text-center mb-8">
                          <div className="text-4xl font-bold text-blue-600 mb-2">
                            {story.impact.split(" ")[0]}
                          </div>
                          <div className="text-gray-600 font-medium">
                            {story.impact.split(" ").slice(1).join(" ")}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            Successfully placed
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 mb-8"></div>

                        {/* Testimonial */}
                        <div className="text-center mb-8">
                          <blockquote className="text-gray-600 italic leading-relaxed">
                            "{story.testimonial}"
                          </blockquote>
                        </div>

                        {/* Action */}
                        <div className="text-center">
                          <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center mx-auto transition-colors">
                            Read Full Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        {/* System Integration Partners Section */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <header className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-purple-900">
                System Integration Partners
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                End-to-end talent solutions for enterprise deployment
              </p>
            </header>

            {/* Services Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {systemIntegrationServices.map((service, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-purple-200 bg-white"
                >
                  <CardHeader className="text-center">
                    <div className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 p-4 w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <service.Icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-lg text-purple-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-purple-700 text-center text-sm">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Impact & Top Partners */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              {/* Impact */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-900">
                  Impact
                </h3>
                <div className="space-y-6">
                  <p className="text-purple-700 text-lg leading-relaxed">
                    Our system integration partnerships have transformed
                    enterprise talent acquisition, creating seamless pathways
                    from campus to corporate deployment. We've built scalable
                    solutions that accelerate hiring processes, enhance
                    workforce diversity, and deliver immediate business value
                    with exceptional outcomes.
                  </p>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">
                        150+
                      </div>
                      <div className="text-purple-700 font-medium">
                        SI Partners
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-pink-600 mb-2">
                        18K+
                      </div>
                      <div className="text-pink-700 font-medium">
                        Graduates Deployed
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-purple-600 mb-2">
                        75%
                      </div>
                      <div className="text-purple-700 font-medium">
                        Reduction in Sourcing Time
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-pink-600 mb-2">
                        30%
                      </div>
                      <div className="text-pink-700 font-medium">
                        Increase in Diversity Hiring
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top System Integration Partners */}
              <div>
                <h3 className="text-2xl font-bold mb-6 text-purple-900">
                  Top System Integration Partners
                </h3>
                <div className="space-y-6">
                  <p className="text-purple-700 text-lg leading-relaxed">
                    Strategic partnerships with leading system integrators to
                    deliver end-to-end talent solutions and accelerate digital
                    transformation initiatives.
                  </p>

                  <div className="grid grid-cols-3 gap-6 items-center max-w-lg mx-auto">
                    <div className="bg-white rounded-lg border border-purple-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/6d0fd616-6877-4311-83f6-4e6c31e86f25.png"
                        alt="TCS"
                        className="h-12 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg border border-purple-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/341bfbb8-6789-4e86-a747-07223df70f9a.png"
                        alt="Wipro"
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg border border-purple-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/77080d98-fe3c-4aef-9e8b-9b9bff1867e3.png"
                        alt="Cognizant"
                        className="h-10 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg border border-purple-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/b8f011bd-a08f-4290-b8fb-4dda7aec7b29.png"
                        alt="Accenture"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg border border-purple-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/5a2c16b9-41bc-4f3b-94e1-efdcb54c53ca.png"
                        alt="Deloitte"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg border border-purple-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/280098f2-93f3-4d27-8e45-05fb3cc231f1.png"
                        alt="NTT Data"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg border border-purple-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/97c09f5d-e769-453f-b3b9-5188f093c0ad.png"
                        alt="Persistent"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                    <div className="bg-white rounded-lg border border-purple-200 p-4 flex justify-center items-center h-16 shadow-sm hover:shadow-md transition-shadow">
                      <img
                        src="/lovable-uploads/1b705834-b04a-4b6a-950f-3f8214016149.png"
                        alt="IBM Services"
                        className="h-6 w-auto object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Stories of System Integration Partners */}
            <div>
              <h3 className="text-2xl font-bold mb-8 text-center text-purple-900">
                Success Stories of System Integration Partners
              </h3>
              <Carousel className="w-full">
                <CarouselContent>
                  {siSuccessStories.map((story, index) => (
                    <CarouselItem
                      key={index}
                      className="md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="h-full p-8 bg-gradient-to-br from-purple-50 to-white border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg">
                        {/* Company Header */}
                        <div className="text-center mb-8">
                          <h4 className="text-2xl font-bold text-gray-900 mb-2">
                            {story.partner}
                          </h4>
                          <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                            {story.program}
                          </span>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 mb-8"></div>

                        {/* Story */}
                        <div className="mb-8">
                          <p className="text-gray-700 leading-relaxed text-center">
                            {story.story}
                          </p>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 mb-8"></div>

                        {/* Impact Stats */}
                        <div className="text-center mb-8">
                          <div className="text-4xl font-bold text-purple-600 mb-2">
                            {story.impact.split(" ")[0]}
                          </div>
                          <div className="text-gray-600 font-medium">
                            {story.impact.split(" ").slice(1).join(" ")}
                          </div>
                          <div className="text-sm text-gray-500 mt-1">
                            Successfully placed
                          </div>
                        </div>

                        {/* Divider */}
                        <div className="w-full h-px bg-gray-200 mb-8"></div>

                        {/* Testimonial */}
                        <div className="text-center mb-8">
                          <blockquote className="text-gray-600 italic leading-relaxed">
                            "{story.testimonial}"
                          </blockquote>
                        </div>

                        {/* Action */}
                        <div className="text-center">
                          <button className="text-purple-600 hover:text-purple-700 font-medium flex items-center mx-auto transition-colors">
                            Read Full Case Study
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>

        {/* Contact & Enquiry Section */}
        <section
          id="enquiry-form"
          className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden"
        >
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-tr from-cyan-400/10 to-blue-400/10 rounded-full blur-3xl"></div>
            <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-gradient-to-br from-indigo-400/5 to-purple-400/5 rounded-full blur-2xl"></div>
          </div>

          {/* Floating Geometric Shapes */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400/20 rotate-45 animate-pulse"></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400/20 rounded-full animate-bounce"></div>
            <div className="absolute bottom-40 left-20 w-3 h-3 bg-cyan-400/30 rotate-45"></div>
            <div className="absolute bottom-20 right-40 w-5 h-5 bg-indigo-400/20 rounded-full animate-pulse"></div>
          </div>

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Column - Enhanced Content */}
              <div className="space-y-8">
                <header className="relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent relative">
                    Ready to Partner with Us?
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                    Transform your talent acquisition strategy with our proven
                    partnership models. Let's discuss how we can help you build
                    the future-ready workforce your organization needs.
                  </p>
                </header>

                {/* Enhanced Benefits with Icons */}
                <div className="space-y-6">
                  <div className="group flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <GraduationCap className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Industry-Aligned Curriculum
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Co-designed programs that meet your specific technology
                        and skill requirements
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <TrendingUp className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Faster Time-to-Hire
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Reduce recruitment cycles with pre-skilled, job-ready
                        candidates
                      </p>
                    </div>
                  </div>

                  <div className="group flex items-start gap-4 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 mb-1">
                        Scalable Solutions
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        Flexible programs that grow with your hiring and
                        training needs
                      </p>
                    </div>
                  </div>
                </div>

                {/* Minimalistic Get in Touch Section */}
                <div className="bg-white rounded-lg border border-gray-200 p-8 shadow-sm">
                  <h4 className="font-semibold text-gray-900 text-lg mb-6">
                    Get in Touch
                  </h4>

                  <div className="space-y-6">
                    {/* Email */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 text-sm">📧</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Email</div>
                        <div className="text-gray-600 text-sm">
                          partnerships@smartbridge.edu.in
                        </div>
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                        <span className="text-green-600 text-sm">📞</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Phone</div>
                        <div className="text-gray-600 text-sm">
                          +91 40 6777 4466
                        </div>
                      </div>
                    </div>

                    {/* Response Time */}
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 text-sm">⏱️</span>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">
                          Response Time
                        </div>
                        <div className="text-gray-600 text-sm">
                          Within 24 hours
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Enhanced Enquiry Form */}
              <div className="relative">
                {/* Form Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl blur-2xl"></div>

                <Card className="relative shadow-2xl border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                  {/* Card Header Decoration */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"></div>

                  <CardHeader className="text-center pb-6 pt-8 relative">
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl"></div>
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Handshake className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-900 bg-clip-text text-transparent">
                      Partnership Enquiry
                    </CardTitle>
                    <CardDescription className="text-muted-foreground mt-2">
                      Fill out the form below and we'll get back to you within
                      24 hours
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="space-y-6 px-8 pb-8">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                          First Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="John"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          Last Name *
                        </label>
                        <input
                          type="text"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-cyan-500" />
                        Company Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Your Company"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-green-500" />
                        Job Title *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-green-500 focus:ring-4 focus:ring-green-500/10 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                        placeholder="Your Job Title"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <span className="text-orange-500">📧</span>
                          Email *
                        </label>
                        <input
                          type="email"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="john@company.com"
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                          <span className="text-pink-500">📱</span>
                          Phone *
                        </label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-pink-500 focus:ring-4 focus:ring-pink-500/10 transition-all duration-300 bg-white/50 backdrop-blur-sm"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <Handshake className="w-4 h-4 text-indigo-500" />
                        Partnership Interest *
                      </label>
                      <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 transition-all duration-300 bg-white/50 backdrop-blur-sm">
                        <option value="">Select Partnership Type</option>
                        <option value="technology">
                          🔬 Technology Partnership
                        </option>
                        <option value="enterprise">
                          🏢 Enterprise Solutions
                        </option>
                        <option value="strategic">🤝 Strategic Alliance</option>
                        <option value="campus">🎓 Campus Recruitment</option>
                        <option value="training">
                          📚 Training & Development
                        </option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                        <span className="text-teal-500">💬</span>
                        Message
                      </label>
                      <textarea
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all duration-300 h-28 resize-none bg-white/50 backdrop-blur-sm"
                        placeholder="Tell us about your talent needs and partnership goals..."
                      ></textarea>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 hover:from-blue-700 hover:via-purple-700 hover:to-cyan-700 text-white font-semibold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] hover:shadow-xl relative overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      <span className="relative flex items-center justify-center gap-2">
                        Submit Enquiry
                        <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                    </Button>

                    <div className="flex items-center justify-center gap-2 pt-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <p className="text-xs text-center text-muted-foreground">
                        By submitting this form, you agree to our privacy policy
                        and terms of service.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
};

export default IndustrySolutions;
