import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  Users,
  Target,
  TrendingUp,
  Award,
  Building,
  Globe,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import Footer from "@/components/sections/Footer";

const GovernmentSolutions = () => {
  const [activeInitiative, setActiveInitiative] = useState(0);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const initiatives = [
    {
      title: "Digital Skills Development",
      description:
        "Comprehensive digital literacy programs for public sector workforce transformation",
      impact: "50,000+ citizens trained",
      duration: "12-18 months",
      image: "/lovable-uploads/1b705834-b04a-4b6a-950f-3f8214016149.png",
    },
    {
      title: "Smart City Workforce Readiness",
      description:
        "Preparing talent for smart city technologies and sustainable development initiatives",
      impact: "25+ cities engaged",
      duration: "6-12 months",
      image: "/lovable-uploads/280098f2-93f3-4d27-8e45-05fb3cc231f1.png",
    },
    {
      title: "AI-Powered Governance Training",
      description:
        "Enabling government officials with AI tools and data-driven decision making capabilities",
      impact: "10,000+ officials trained",
      duration: "3-6 months",
      image: "/lovable-uploads/97c09f5d-e769-453f-b3b9-5188f093c0ad.png",
    },
  ];

  const impactMetrics = [
    { label: "Government Agencies Partnered", value: "150+", icon: Building },
    {
      label: "Public Sector Professionals Trained",
      value: "75K+",
      icon: Users,
    },
    { label: "Digital Transformation Projects", value: "200+", icon: Globe },
    { label: "Policy Implementation Success Rate", value: "92%", icon: Target },
  ];

  const solutions = [
    {
      title: "Workforce Transformation Programs",
      description:
        "Comprehensive digital skills training for government employees to enhance service delivery and operational efficiency.",
      features: [
        "Digital Literacy Training",
        "Data Analytics Skills",
        "Citizen Service Excellence",
        "Technology Adoption",
      ],
      icon: Users,
    },
    {
      title: "Public-Private Partnership Solutions",
      description:
        "Strategic collaboration frameworks that leverage industry expertise for sustainable government initiatives.",
      features: [
        "Industry Partnership Models",
        "Knowledge Transfer Programs",
        "Innovation Labs",
        "Capacity Building",
      ],
      icon: Building,
    },
    {
      title: "Smart Governance Initiatives",
      description:
        "AI-powered solutions and data-driven approaches to improve policy implementation and citizen engagement.",
      features: [
        "AI Implementation",
        "Data-Driven Policy Making",
        "Citizen Engagement Platforms",
        "Performance Analytics",
      ],
      icon: Globe,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Government Solutions | SmartBridge Workforce Development"
        description="Scalable workforce development programs powered by experiential learning and AI-led initiatives for public sector transformation and citizen service excellence."
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-background via-muted/50 to-primary/10 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <Badge variant="outline" className="mx-auto mb-6 px-4 py-2 text-sm">
              Government Workforce Solutions
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent leading-tight">
              Empowering Public Sector Excellence Through
              <span className="text-primary"> Digital Transformation</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Scalable workforce development programs powered by experiential
              learning and AI-led initiatives for enhanced citizen services and
              sustainable governance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Button
                size="lg"
                className="text-lg px-8 py-4"
                onClick={() => scrollToSection("enquiry-form")}
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Government Impact
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Transforming public sector capabilities across multiple government
              agencies and initiatives
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <Card
                key={index}
                className="text-center p-6 hover:shadow-lg transition-shadow"
              >
                <CardContent className="space-y-4 p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                    <metric.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">
                      {metric.value}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Government Solutions Portfolio
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive workforce development solutions designed for public
              sector transformation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card
                key={index}
                className="h-full hover:shadow-lg transition-shadow group"
              >
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <solution.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{solution.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-center"
                        >
                          <ChevronRight className="h-3 w-3 mr-2 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Slider */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Government Success Initiatives
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Real-world impact through strategic government partnerships and
              workforce development programs
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">
                  {initiatives[activeInitiative].title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {initiatives[activeInitiative].description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground">
                      IMPACT
                    </h4>
                    <p className="text-lg font-semibold text-primary">
                      {initiatives[activeInitiative].impact}
                    </p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-sm text-muted-foreground">
                      DURATION
                    </h4>
                    <p className="text-lg font-semibold">
                      {initiatives[activeInitiative].duration}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <img
                  src={initiatives[activeInitiative].image}
                  alt={initiatives[activeInitiative].title}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Navigation dots */}
            <div className="flex justify-center space-x-2 mt-8">
              {initiatives.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveInitiative(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeInitiative ? "bg-primary" : "bg-muted"
                  }`}
                  aria-label={`View initiative ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Transform Your Government Workforce?
            </h2>
            <p className="text-lg text-muted-foreground">
              Partner with SmartBridge to implement scalable workforce
              development programs that drive digital transformation and enhance
              citizen services.
            </p>
            <Button
              size="lg"
              className="text-lg px-8 py-4"
              onClick={() => scrollToSection("enquiry-form")}
            >
              Start Your Partnership
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enquiry Form */}
      <section id="enquiry-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <CardHeader className="text-center space-y-4">
                <CardTitle className="text-2xl">
                  Get Started with Government Solutions
                </CardTitle>
                <CardDescription>
                  Tell us about your workforce development needs and we'll
                  create a customized solution for your agency.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="firstName"
                        className="text-sm font-medium"
                      >
                        First Name *
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">
                        Last Name *
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="agency" className="text-sm font-medium">
                      Government Agency/Department *
                    </label>
                    <input
                      id="agency"
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="position" className="text-sm font-medium">
                      Your Position/Title
                    </label>
                    <input
                      id="position"
                      type="text"
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="requirements"
                      className="text-sm font-medium"
                    >
                      Workforce Development Requirements *
                    </label>
                    <textarea
                      id="requirements"
                      rows={4}
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                      placeholder="Please describe your current workforce challenges, training needs, and digital transformation goals..."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="timeline" className="text-sm font-medium">
                      Expected Timeline
                    </label>
                    <select
                      id="timeline"
                      className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediate">Immediate (1-3 months)</option>
                      <option value="short">Short-term (3-6 months)</option>
                      <option value="medium">Medium-term (6-12 months)</option>
                      <option value="long">Long-term (12+ months)</option>
                    </select>
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Enquiry
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GovernmentSolutions;
