"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PartnershipSlider = () => {
  const scrollRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  //   const partnerships = [
  //     {
  //       id: "google",
  //       title: "Google India Edu. Programs",
  //       year: "2022",
  //       image: "/lovable-uploads/4ce21bf4-fae9-485f-a821-2f30a52eb62a.png",
  //       description: "Since 2022, trained 203,000+ students...",
  //       gradient: "from-blue-500 to-blue-600",
  //     },
  //     {
  //       id: "ibm",
  //       title: "IBM Skills Build Initiatives",
  //       year: "2017",
  //       image: "/lovable-uploads/4dda91db-3075-4068-8077-cf8f37f99e6b.png",
  //       description: "With 8 years of successful partnership...",
  //       gradient: "from-blue-800 to-blue-900",
  //     },
  //     {
  //       id: "salesforce",
  //       title: "Salesforce Workforce Development",
  //       year: "2022",
  //       image: "/lovable-uploads/91eda880-1fba-4770-a3c5-1828b5553129.png",
  //       description: "Since 2022, over 100,000 students have been upskilled...",
  //       gradient: "from-blue-600 to-cyan-500",
  //     },
  //     {
  //       id: "aws",
  //       title: "AWS Talent Alliance",
  //       year: "2021",
  //       image: "/lovable-uploads/53bd1a1f-ae1a-4865-bde5-ce5785725d84.png",
  //       description: "Cloud engineering specialization program...",
  //       gradient: "from-orange-500 to-orange-600",
  //     },
  //     {
  //       id: "servicenow",
  //       title: "ServiceNow Academic Partnership",
  //       year: "2024",
  //       image: "/lovable-uploads/dda1c586-04b8-4e18-aea4-27aaa9a952dc.png",
  //       description: "Since 2024, our programs have trained 25,000 students...",
  //       gradient: "from-purple-600 to-purple-700",
  //     },
  //     {
  //       id: "mongodb",
  //       title: "MongoDB University Partnership",
  //       year: "2024",
  //       image: "/lovable-uploads/145ccf09-b932-4acc-a4df-370abcd3c38e.png",
  //       description: "Launched in 2024, trained 39,000 students...",
  //       gradient: "from-green-600 to-green-700",
  //     },
  //     {
  //       id: "pega",
  //       title: "PEGA University Academia Program",
  //       year: "2025",
  //       image: "/lovable-uploads/e5c8187d-9d8a-4374-a596-10fca300c4e6.png",
  //       description: "Business process management and automation expertise...",
  //       gradient: "from-red-600 to-red-700",
  //     },
  //   ];
  const partnerships = [
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

  const scrollAmount = 300; // pixels per arrow click

  const handleScroll = (direction) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const newScroll =
      direction === "right"
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount;

    container.scrollTo({ left: newScroll, behavior: "smooth" });
  };

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
    setCurrentIndex(Math.round(scrollLeft / scrollAmount));
  };

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    updateScrollState();
    container.addEventListener("scroll", updateScrollState);
    return () => container.removeEventListener("scroll", updateScrollState);
  }, []);

  return (
    <div className="relative w-full">
      {/* Slider Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar space-x-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {partnerships.map((partnership) => (
          <div key={partnership.id} className="flex-shrink-0 w-80  py-2">
            <Card className="h-full hover:shadow transition-all duration-300 hover:-translate-y-1">
              <CardHeader>
                <div
                  className={`aspect-video rounded-lg overflow-hidden bg-gradient-to-br ${partnership.gradient} mb-4`}
                >
                  <img
                    src={partnership.image}
                    alt={partnership.title}
                    className="w-full h-full object-contain p-6"
                  />
                </div>
                <CardTitle className="text-lg h-16">
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
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex md:hidden  justify-center gap-2 mt-6">
        {partnerships.map((_, index) => (
          <button
            key={index}
            onClick={() =>
              scrollRef.current.scrollTo({
                left: index * scrollAmount,
                behavior: "smooth",
              })
            }
            className={`rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-3 h-3 bg-primary"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Buttons (always visible, but disabled when needed) */}
      <div className="absolute top-1/2 left-0 hidden md:block transform -translate-y-1/2">
        <button
          onClick={() => handleScroll("left")}
          disabled={!canScrollLeft}
          className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300
            ${
              canScrollLeft
                ? "bg-white/80 hover:bg-white"
                : "bg-gray-200 cursor-not-allowed"
            }`}
          aria-label="Previous"
        >
          <ArrowRight className="w-5 h-5 rotate-180 text-gray-600" />
        </button>
      </div>

      <div className="absolute top-1/2 right-0 transform hidden md:block -translate-y-1/2">
        <button
          onClick={() => handleScroll("right")}
          disabled={!canScrollRight}
          className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300
            ${
              canScrollRight
                ? "bg-white/80 hover:bg-white"
                : "bg-gray-200 cursor-not-allowed"
            }`}
          aria-label="Next"
        >
          <ArrowRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default PartnershipSlider;
