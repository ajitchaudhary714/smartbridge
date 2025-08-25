"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const TechSuccessCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const cardWidth = 320; // same fixed width
  const gap = 16; // gap-x-4
  const scrollAmount = cardWidth + gap;

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const newScroll =
      direction === "right"
        ? container.scrollLeft + scrollAmount
        : container.scrollLeft - scrollAmount;
    container.scrollTo({ left: newScroll, behavior: "smooth" });
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: index * scrollAmount,
      behavior: "smooth",
    });
  };

  const updateScrollState = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 5);
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
      {/* Carousel container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto no-scrollbar space-x-4 px-4 pb-2 "
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {siSuccessStories.map((story, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 p-8 bg-gradient-to-br from-purple-50 to-white border border-purple-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg"
          >
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
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {siSuccessStories.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-3 h-3 bg-blue-600"
                : "w-3 h-3 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </div>

      {/* Arrows */}
      <div className="absolute top-1/2 left-0 hidden md:flex transform -translate-y-1/2">
        <button
          onClick={() => handleScroll("left")}
          disabled={!canScrollLeft}
          className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            canScrollLeft
              ? "bg-white/80 hover:bg-white"
              : "bg-gray-200 cursor-not-allowed"
          }`}
        >
          <ArrowRight className="w-5 h-5 rotate-180 text-gray-600" />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 hidden md:flex transform -translate-y-1/2">
        <button
          onClick={() => handleScroll("right")}
          disabled={!canScrollRight}
          className={`w-10 h-10 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
            canScrollRight
              ? "bg-white/80 hover:bg-white"
              : "bg-gray-200 cursor-not-allowed"
          }`}
        >
          <ArrowRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TechSuccessCarousel;
