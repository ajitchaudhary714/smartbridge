import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp,
  Users,
  Award,
  Building2,
  Lightbulb,
  Target,
  GraduationCap,
  Globe,
  Handshake,
  Rocket,
  Heart,
  CheckCircle,
} from "lucide-react";
import amarenderTeamImage from "@/assets/amarender-team.jpg";
import sumanTeamImage from "@/assets/suman-team.jpg";
import nitinTeamImage from "@/assets/nitin-team.jpg";
import srideviTeamImage from "@/assets/sridevi-team.jpg";
import Footer from "@/components/sections/Footer";

const Index = () => {
  const stats = [
    { label: "Learners Skilled", value: "1.5M+", icon: Users },
    { label: "Partner Institutions", value: "2700+", icon: Building2 },
    { label: "Corporate Partners", value: "100+", icon: Award },
    { label: "Years of Service", value: "10", icon: TrendingUp },
  ];

  const coreValues = [
    {
      title: "Student-Centric Approach",
      icon: GraduationCap,
      description:
        "Our students are at the core of everything we do. We prioritize their learning needs, aspirations, and career growth, providing personalized support and guidance.",
    },
    {
      title: "Equal Opportunities",
      icon: Globe,
      description:
        "We are committed to ensuring equal opportunities for all students, regardless of their geographical location. We strive to bridge the gap between students studying in cities and remote areas.",
    },
    {
      title: "Outcome-Driven Partnerships",
      icon: Handshake,
      description:
        "We believe in forging partnerships that are focused on tangible outcomes and mutual success. Our collaborations are geared towards achieving concrete results and positive impact.",
    },
    {
      title: "Innovation",
      icon: Rocket,
      description:
        "Embracing innovation is fundamental to our ethos. We constantly seek new and effective ways to enhance learning experiences, staying at the forefront of emerging technologies.",
    },
    {
      title: "Social Impact",
      icon: Heart,
      description:
        "We are driven by a sense of responsibility to make a positive impact on society. Our efforts go beyond individual success stories, seeking to uplift communities.",
    },
  ];

  const objectives = [
    "Empower Every Student with Internships",
    "Promote Industry Approved Professional Electives",
    "Become a Talent Factory of India by 2026",
  ];

  const teamMembers = [
    {
      name: "Amarender Katkam",
      role: "Founder & CEO",
      image: amarenderTeamImage,
      description:
        "Amarender Katkam, Founder & CEO of SmartBridge and the person behind the vision. He had 15 years of experience in Industrial Controls & Networks, Internet of Things. Previously he had worked as a Scientific Officer with Nuclear Power Corporation of India Limited.",
    },
    {
      name: "Suman Akula",
      role: "Co-founder",
      image: sumanTeamImage,
      description:
        "Suman Akula, is the co-founder of SmartBridge and the key person in leading SmartBridge's operations from US. He possesses over 20 years of hands-on experience in Software Development. He is the CEO of [S]cube Enterprises, Albany, NY.",
    },
    {
      name: "Nitin Jain",
      role: "Director",
      image: nitinTeamImage,
      description:
        "Nitin (CA,CPA) has 20 years of experience with General Electric in growing and transforming businesses, managing global teams and executing growth strategy in the Asian region. With a track record of setting up businesses from scratch.",
    },
    {
      name: "Sridevi Sira",
      role: "Vice President Partnerships",
      image: srideviTeamImage,
      description:
        "Sridevi Sira, Vice President Partnerships of SmartBridge, with over 20 plus years of demonstrated history of working in Education Management, Skill building arenas. A transformational leader with a proven track record.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient bg-gradient-primary text-white pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-6 animate-fade-in">
            Transforming Education <span className="text-accent">At Scale</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8 animate-slide-up">
            Building bridges between education and industry with measurable
            impact across institutions, learners, and corporate partners
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="card-shadow transition-smooth hover-lift">
              <CardContent className="p-8 text-center">
                <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Our Vision
                </h3>
                <blockquote className="text-lg text-muted-foreground italic">
                  "Empowering the workforce of tomorrow"
                </blockquote>
              </CardContent>
            </Card>

            <Card className="card-shadow transition-smooth hover-lift">
              <CardContent className="p-8 text-center">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-4 text-primary">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Our mission is to establish a sustainable talent pipeline for
                  the emerging industry by fostering strong industry-academia
                  connections. Through our project-based learning and virtual
                  internship programs, we equip students with in-demand skills
                  in cutting-edge technologies, empowering them to succeed in
                  their careers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Our Core Values
            </h2>
            <p className="text-muted-foreground text-lg">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {coreValues.map((value, index) => (
              <Card
                key={index}
                className="card-shadow transition-smooth hover-lift animate-scale-in"
              >
                <CardContent className="p-6 text-center">
                  <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                  <h4 className="text-lg font-semibold mb-3 text-primary">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary">
              Our Objective
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our main objective is to bridge the existing gaps between
              prevailing industry standards and what the academics offer to the
              graduates while passing out of university. SmartBridge offers
              suitable skill deployment and training to the young talent before
              on boarding their first job.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Our skill development programs are designed considering the
              present in demand skills in the industry. We thereby work along
              the lines to offer best programs that helps the students to gain
              practical knowledge and hands on training to learn the skills of
              the future.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {objectives.map((objective, index) => (
                <Card
                  key={index}
                  className="card-shadow transition-smooth hover-lift"
                >
                  <CardContent className="p-6 flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0" />
                    <span className="font-medium text-left text-foreground">
                      {objective}
                    </span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {/* Stats Section */}
        </div>
      </section>

      {/* Corporate Profile */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-6xl  mx-auto px-4">
          <div className=" text-center">
            <h2 className="text-4xl font-bold mb-8 text-primary">
              Corporate Profile
            </h2>
            <Card className="card-shadow">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  At SmartBridge, our cutting-edge edtech platform,
                  "Skillwallet," serves as a catalyst for fostering
                  collaboration between academia and industry. By providing
                  project-based, collaborative learning solutions intricately
                  woven into the curriculum, it empowers students to cultivate
                  the essential technical and professional skills required to
                  become job-ready candidates.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  SmartBridge is dedicated to a momentous talent mission:{" "}
                  <span className="text-primary font-semibold">
                    to provide "1 Million Virtual Internships"
                  </span>{" "}
                  across a wide range of in-demand technologies. Our goal is
                  twofold: to assist companies in finding job-ready talent and
                  to play a pivotal role in building a thriving gig economy in
                  India.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className=" pt-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="card-shadow transition-smooth hover-lift text-center animate-scale-in"
                >
                  <CardContent className="p-6">
                    <stat.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-primary">
              Our Management Team
            </h2>
            <p className="text-muted-foreground text-lg">
              Meet the visionaries driving our mission forward
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="card-shadow transition-smooth hover-lift animate-scale-in"
              >
                <CardContent className="p-6 flex items-start space-x-6">
                  <div className="w-24 h-24 flex-shrink-0 rounded-full overflow-hidden bg-secondary">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold mb-2 text-primary">
                      {member.name}
                    </h4>
                    <p className="text-sm  text-gray-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
