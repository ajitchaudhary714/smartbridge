import React, { useState } from "react";
import { SEO } from "@/components/SEO";
import Footer from "@/components/sections/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Target,
  Handshake,
  Award,
  Cpu,
  Lightbulb,
  Layers,
  Globe,
  MonitorPlay,
  Building2,
  Briefcase,
  Mic,
  GraduationCap,
  Users,
  CheckCircle,
  ArrowRight,
  Star,
  Mail,
  Phone,
  Download,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function CenterForFutureSkills() {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    institution: "",
    designation: "",
    students: "",
    interest: "",
    notes: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Thank you!",
      description: "Our team will reach out within 1 business day.",
    });
    setFormData({
      full_name: "",
      email: "",
      phone: "",
      institution: "",
      designation: "",
      students: "",
      interest: "",
      notes: "",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <SEO
        title="CFSI by SmartBridge — The University Bridge to Future Skills & Industry"
        description="Establish a Center for Future Skills & Innovation (CFSI) on your campus. Bootcamps, certifications, internships, and placement support—co-created with industry."
      />

      {/* Sticky Navigation */}
      <nav className="sticky top-16 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-8">
              <span className="font-semibold text-primary">CFSI</span>
              <div className="hidden md:flex space-x-6">
                <a
                  href="#why-cfsi"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Why CFSI
                </a>
                <a
                  href="#offerings"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Offerings
                </a>
                <a
                  href="#for-universities"
                  className="text-sm hover:text-primary transition-colors"
                >
                  For Universities
                </a>
                <a
                  href="#pricing"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#impact"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Impact
                </a>
                <a
                  href="#faq"
                  className="text-sm hover:text-primary transition-colors"
                >
                  FAQ
                </a>
                <a
                  href="#contact"
                  className="text-sm hover:text-primary transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <Button asChild>
              <a href="#contact">Book a Campus Strategy Call</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-16 pb-20 bg-gradient-to-br from-background via-background to-muted/30">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gradient-primary">
              Center for Future Skills and Innovation
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              A campus-embedded model by SmartBridge to deliver future-ready
              skills, certifications, internships, and placements.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mb-8 text-left">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">
                  10 Core Services: Bootcamps, Certifications, Internships,
                  Placements & more
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">
                  Curriculum co-creation and sustained industry partnerships
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-sm">
                  Proven pathways from learning → certification → internship →
                  placement
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" asChild>
                <a href="#contact">Request a Proposal</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  Download Concept Note (PDF)
                </a>
              </Button>
            </div>

            {/* Trust Bar */}
            <div className="grid md:grid-cols-3 gap-6 pt-8 border-t">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">1M+</div>
                <div className="text-sm text-muted-foreground">
                  learners impacted via SmartBridge initiatives
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">2,000+</div>
                <div className="text-sm text-muted-foreground">
                  institutions supported
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">Global</div>
                <div className="text-sm text-muted-foreground">
                  certification pathways (AWS, Microsoft, Salesforce, Cisco)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why CFSI Section */}
      <section id="why-cfsi" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Why CFSI</h2>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Universities deliver academic excellence. CFSI adds the
                  missing layer: industry alignment, employability, and
                  innovation.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We integrate structured pathways so students move from
                  learning → skill building → global certification → internship
                  → placement.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Future-Ready Talent</h3>
                    <p className="text-muted-foreground">
                      Hands-on programs aligned to high-growth roles in AI,
                      Cloud, Data, Cybersecurity, IoT, and more.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Handshake className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">
                      Industry Partnerships
                    </h3>
                    <p className="text-muted-foreground">
                      Live projects, mentorship, internships, hiring drives, and
                      advisory connects.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Award className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Brand & Admissions</h3>
                    <p className="text-muted-foreground">
                      Position your campus as a SmartBridge–CFSI Member
                      Institution and a hub for emerging industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offerings Section */}
      <section id="offerings" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              CFSI Core Offerings
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Cpu,
                  title: "Technical Bootcamps",
                  text: "Intensive 1–2 week, project-first programs in AI/ML, Cloud, Cybersecurity, Blockchain, IoT, AR/VR, Full-stack.",
                  outcome: "Portfolio projects and applied skills.",
                },
                {
                  icon: Lightbulb,
                  title: "Hackathons & Innovation Challenges",
                  text: "24–72 hour sprints or multi-week challenges with industry problem statements and mentorship.",
                  outcome: "Prototypes, teamwork, entrepreneurial mindset.",
                },
                {
                  icon: Layers,
                  title: "Skill Enhancement Courses",
                  text: "Blended learning (self-paced + mentor-led) delivered via SmartBridge's AI-powered LMS.",
                  outcome: "Micro-credentials and badges.",
                },
                {
                  icon: Globe,
                  title: "Global Certification Programs",
                  text: "Prep, practice, and pathways for AWS, Microsoft, Salesforce, Cisco, Google Cloud, Red Hat.",
                  outcome: "Internationally recognized credentials.",
                },
                {
                  icon: MonitorPlay,
                  title: "Virtual Internship Programs",
                  text: "6–8 week remote projects with weekly mentor check-ins and deliverables.",
                  outcome: "Practical exposure and portfolios.",
                },
                {
                  icon: Building2,
                  title: "Industry Internships",
                  text: "Onsite/hybrid internships backed by pre-internship training and ongoing mentorship.",
                  outcome: "Work culture exposure; PPO potential.",
                },
                {
                  icon: Briefcase,
                  title: "Placement Support",
                  text: "Career counseling, resume/LinkedIn, aptitude & coding prep, mock interviews, job fairs, hiring drives.",
                  outcome: "Higher placement percentages.",
                },
                {
                  icon: Mic,
                  title: "Expert Sessions / Webinars",
                  text: "Talks, panels, and fireside chats with CXOs, product leaders, and entrepreneurs.",
                  outcome: "Career clarity and networks.",
                },
                {
                  icon: GraduationCap,
                  title: "Educator Development Programs",
                  text: "Train-the-trainer, pedagogy upgrades, certification enablement, and industry collaboration.",
                  outcome: "Future-ready faculty.",
                },
                {
                  icon: Users,
                  title: "Professional Skills Training",
                  text: "Communication, teamwork, leadership, problem-solving, EI—delivered via workshops and simulations.",
                  outcome: "Well-rounded professionals.",
                },
              ].map((offering, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <offering.icon className="h-8 w-8 text-primary" />
                      <CardTitle className="text-lg">
                        {offering.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-3">
                      {offering.text}
                    </p>
                    <Badge variant="secondary" className="text-xs">
                      {offering.outcome}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Universities Section */}
      <section id="for-universities" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Designed for Universities
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Three stakeholder wins—Students, Faculty, and Institution
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Students</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Explore emerging technologies and build career paths
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Earn global certifications and gain internship
                        experience
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Get job-ready with placement support and mentorship
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Faculty</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Train-the-Trainer and certification enablement
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Industry connects and research collaborations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Modern, outcome-oriented pedagogy</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-primary">Institution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Co-created curriculum and sustained industry
                        partnerships
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>
                        Brand as a SmartBridge–CFSI Member Institution
                      </span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span>Improved admissions and placement outcomes</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              How CFSI Works on Your Campus
            </h2>
            <div className="space-y-8">
              {[
                {
                  title: "Onboard & Plan",
                  text: "Define enrollment targets, timelines, and priorities with the SmartBridge team.",
                },
                {
                  title: "Set Up",
                  text: "Launch CFSI center; finalize bootcamps, courses, certifications; confirm industry partners.",
                },
                {
                  title: "Deliver Programs",
                  text: "Run bootcamps, courses, hackathons, internships; schedule expert sessions.",
                },
                {
                  title: "Measure Outcomes",
                  text: "Dashboards and reports on participation, certifications, internships, and placements.",
                },
                {
                  title: "Scale & Sustain",
                  text: "Expand to Pro subscriptions, deepen partnerships, iterate with data.",
                },
              ].map((step, index) => (
                <div key={index} className="flex items-center space-x-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Subscription Model
            </h2>
            <p className="text-center text-muted-foreground mb-12">
              Colleges must enroll 500 students in Career Basic to become a
              SmartBridge–CFSI Member Institution.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="relative">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">Career Basic</CardTitle>
                      <CardDescription>All Semesters</CardDescription>
                    </div>
                    <Badge variant="outline">Required</Badge>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    $50{" "}
                    <span className="text-base font-normal text-muted-foreground">
                      / student / semester
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Technical Bootcamps</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Skill Enhancement Courses</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Hackathons & Innovation Challenges</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Expert Sessions / Webinars</span>
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mb-4">
                    Minimum 500 students per institution.
                  </p>
                  <Button className="w-full" asChild>
                    <a href="#contact">Start with Career Basic</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="relative border-primary">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl">Career Pro</CardTitle>
                      <CardDescription>Best for 5th–7th Sem</CardDescription>
                    </div>
                    <Badge className="bg-primary">Popular</Badge>
                  </div>
                  <div className="text-3xl font-bold text-primary">
                    $500{" "}
                    <span className="text-base font-normal text-muted-foreground">
                      / student / semester
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Everything in Career Basic</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Global Certification Programs</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Virtual + Industry Internships</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Professional Skills Training</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span>Placement Support</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <a href="#contact">Upgrade to Career Pro</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-sm text-muted-foreground mt-8">
              Subscriptions can be integrated into tuition or collected as
              add-ons. Institutions may subsidize Pro to boost outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Impact & Outcomes
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  Skill Pathways
                </div>
                <div className="text-muted-foreground">
                  Learning → Cert → Internship → Placement
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  Faculty Enablement
                </div>
                <div className="text-muted-foreground">
                  Train-the-Trainer + Certification
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">
                  Institutional Brand
                </div>
                <div className="text-muted-foreground">
                  Recognized CFSI Member Institution
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "CFSI made our students truly industry-ready. The
                    certification pipeline plus internships directly improved
                    placements."
                  </p>
                  <p className="font-semibold">Dean, School of Engineering</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Faculty upskilling transformed our delivery. Industry
                    sessions and hackathons boosted student motivation."
                  </p>
                  <p className="font-semibold">HoD, Computer Science</p>
                </CardContent>
              </Card>
            </div>

            {/* Partner Strip */}
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-6">
                Certification & Industry Pathways
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {[
                  "AWS",
                  "Microsoft",
                  "Salesforce",
                  "Cisco",
                  "Google Cloud",
                  "Red Hat",
                ].map((partner) => (
                  <div
                    key={partner}
                    className="px-4 py-2 border rounded-lg text-muted-foreground"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>

            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  q: "How does a university become a CFSI Member Institution?",
                  a: "Enroll at least 500 students in the Career Basic subscription.",
                },
                {
                  q: "Can we integrate the subscription with tuition?",
                  a: "Yes. Many universities bundle Basic; Pro can be optional or subsidized.",
                },
                {
                  q: "What outcomes do you measure?",
                  a: "Enrollments, skill progress, certifications earned, internship participation, placements.",
                },
                {
                  q: "Do you support multiple departments?",
                  a: "Yes—engineering, management, and domain-specific tracks with cross-disciplinary events.",
                },
                {
                  q: "Can faculty get certified?",
                  a: "Yes—Educator Development includes certification enablement and industry collaboration.",
                },
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent>{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Start Your CFSI Journey
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-12">
              Book a strategy call or request a customized proposal.
            </p>

            <div className="grid lg:grid-cols-2 gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Request Proposal</CardTitle>
                  <CardDescription>
                    Our team will reach out within 1 business day.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="full_name">Full Name *</Label>
                        <Input
                          id="full_name"
                          value={formData.full_name}
                          onChange={(e) =>
                            handleInputChange("full_name", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Work Email *</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                        />
                      </div>
                      <div>
                        <Label htmlFor="institution">
                          University/College *
                        </Label>
                        <Input
                          id="institution"
                          value={formData.institution}
                          onChange={(e) =>
                            handleInputChange("institution", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="designation">Role/Designation *</Label>
                        <Input
                          id="designation"
                          value={formData.designation}
                          onChange={(e) =>
                            handleInputChange("designation", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="students">
                          Estimated Students for Basic *
                        </Label>
                        <Input
                          id="students"
                          type="number"
                          min="100"
                          value={formData.students}
                          onChange={(e) =>
                            handleInputChange("students", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="interest">Primary Interest *</Label>
                      <Select
                        value={formData.interest}
                        onValueChange={(value) =>
                          handleInputChange("interest", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select your primary interest" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Career Basic">
                            Career Basic
                          </SelectItem>
                          <SelectItem value="Career Pro">Career Pro</SelectItem>
                          <SelectItem value="Both">Both</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="notes">Notes (optional)</Label>
                      <Textarea
                        id="notes"
                        value={formData.notes}
                        onChange={(e) =>
                          handleInputChange("notes", e.target.value)
                        }
                        rows={3}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Request Proposal
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4">Direct Contact</h3>
                    <div className="space-y-3">
                      <a
                        href="mailto:amar@thesmartbridge.com"
                        className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Mail className="h-5 w-5" />
                        <span>amar@thesmartbridge.com</span>
                      </a>
                      <a
                        href="#"
                        className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors"
                      >
                        <Download className="h-5 w-5" />
                        <span>Download Concept Note</span>
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <h3 className="font-semibold mb-4">What Happens Next?</h3>
                    <ol className="space-y-2 text-sm text-muted-foreground">
                      <li>1. We'll review your submission within 24 hours</li>
                      <li>2. Schedule a campus strategy call</li>
                      <li>3. Provide customized proposal and timeline</li>
                      <li>4. Begin CFSI implementation planning</li>
                    </ol>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
