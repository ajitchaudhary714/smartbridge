"use client";

import { useEffect, useRef } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const AwardsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const isPaused = useRef(false); // keep track if paused

  const awards = [
    {
      title: "MongoDB Academic Summit 2024 Strategic Partner Recognition",
      organization: "MongoDB",
      year: "2024",
      image: "/lovable-uploads/0fbc0c0c-7619-4c71-b6a4-e1c9b972e12b.png",
    },
    {
      title: "MOU signed with Telangana Academy for Skill and Knowledge",
      organization: "TASK",
      year: "2022",
      image: "/lovable-uploads/6d28ed1e-4135-4d2b-88b0-3868ac693173.png",
    },
    {
      title: "Partner Appreciation Certificate",
      organization: "Industry Partner",
      year: "2024",
      image: "/lovable-uploads/9112b837-44a3-41ac-94ce-874855382d2c.png",
    },
    {
      title: "Recognition by Government Officials",
      organization: "Government Recognition",
      year: "2024",
      image: "/lovable-uploads/2b6b5f4b-3f7f-4f72-8cfb-07f6deea2c8a.png",
    },
    {
      title: "Excellence in Education Technology",
      organization: "NASSCOM",
      year: "2024",
      image: "/lovable-uploads/1a5409d7-8f13-4f14-a2e5-249fc2192458.png",
    },
    {
      title: "ISTE State Level Recognition",
      organization: "ISTE",
      year: "2023",
      image: "/lovable-uploads/323fddeb-eb5f-4431-a83f-20c32f21d974.png",
    },
    {
      title: "Outstanding Community Partner",
      organization: "Katalon",
      year: "2024",
      image: "/lovable-uploads/80e83ad7-6419-4e12-a753-6fa608f52400.png",
    },
    {
      title: "Implementation Partner by AICTE Virtual Internships",
      organization: "AICTE",
      year: "2021",
      image: "/lovable-uploads/035761be-3196-4d04-bbe8-a1c50740d13b.png",
    },
    // {
    //   title: "Successful Implementation of ePBL",
    //   organization: "Nasscom",
    //   year: "2024",
    //   image: "/lovable-uploads/041c3c19-5da8-46e9-8c23-0efd3d06c44b.png",
    // },
    // {
    //   title: "Training Partner",
    //   organization: "NSDC",
    //   year: "2025",
    //   image: "/lovable-uploads/0900d44a-d2e5-4248-8927-e1880d638b00.png",
    // },
    // {
    //   title: "Largest Training Partner",
    //   organization: "Government of Tamil Nadu",
    //   year: "2025",
    //   image: "/lovable-uploads/0c47f84d-6905-4f2c-9f3e-82d95078a9e9.png",
    // },
    // {
    //   title: "Leading EdTech Startup",
    //   organization: "Elets - World Education Summit",
    //   year: "2024",
    //   image: "/lovable-uploads/72720c97-9368-4c4f-9c5c-30c2a4ea7727.png",
    // },
  ];

  // Smooth auto scroll loop
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const scroll = () => {
      if (!isPaused.current) {
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0; // reset for infinite loop
        } else {
          container.scrollLeft += 1; // adjust speed
        }
      }
      animationRef.current = requestAnimationFrame(scroll);
    };

    animationRef.current = requestAnimationFrame(scroll);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  // Pause on touch
  const handleTouchStart = () => {
    isPaused.current = true;
  };

  const handleTouchEnd = () => {
    isPaused.current = false;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-700 overflow-hidden">
      <div className="container ">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white font-medium">
            <Award className="w-4 h-4" />
            Awards & Recognitions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Celebrating Excellence &
            <span className="text-yellow-300"> Innovation</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Celebrating our achievements and industry recognition for excellence
            in innovation and service
          </p>
        </div>
      </div>
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex   overflow-x-auto no-scrollbar space-x-4"
          style={{ scrollBehavior: "auto" }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {[...awards, ...awards].map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 md:w-96 border rounded-lg bg-white"
            >
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden rounded-t-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <div className="text-black font-semibold mb-1 h-12">
                    {item.title}
                  </div>
                  <p className="text-sm text-gray-600 font-medium">
                    {item.organization}
                  </p>
                  <p className="text-sm text-gray-600 font-medium">
                    {item.year}
                  </p>
                  {/* <CardTitle className="text-base h-10 mb-1.5 text-foreground">
                  {item.title}
                </CardTitle> */}
                  {/* <CardDescription className="text-sm  line-clamp-3 font-inter text-gray-600 leading-relaxed">
                  {item.description}
                </CardDescription> */}
                </div>
              </CardContent>
            </div>
          ))}
        </div>
        {/* Gradient overlays for fade effect */}
        <div className="absolute top-0 left-0 w-16 md:w-32 h-full bg-gradient-to-r from-purple-600 to-transparent pointer-events-none z-10" />
        <div className="absolute top-0 right-0 w-16 md:w-32 h-full bg-gradient-to-l from-purple-700 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default AwardsSection;
