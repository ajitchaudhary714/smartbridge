"use client";

import { useRef, useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const TechSuccessCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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
        className="flex overflow-x-auto no-scrollbar space-x-4 px-4 scroll-smooth"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {techSuccessStories.map((story, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-80 p-6 bg-gradient-to-br from-blue-50 to-white border border-blue-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-lg"
          >
            <div className="text-center mb-4">
              <h4 className="text-xl font-bold text-gray-900">
                {story.partner}
              </h4>
              <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                {story.program}
              </span>
            </div>

            <p className="text-gray-700 text-center mb-4">{story.story}</p>

            <div className="text-center mb-4">
              <div className="text-2xl font-bold text-blue-600 mb-1">
                {story.impact.split(" ")[0]}
              </div>
              <div className="text-gray-600 text-sm">
                {story.impact.split(" ").slice(1).join(" ")}
              </div>
            </div>

            <blockquote className="text-gray-600 italic text-center mb-4">
              "{story.testimonial}"
            </blockquote>

            <div className="text-center">
              <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center mx-auto transition-colors">
                Read Full Case Study
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {techSuccessStories.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "w-3 h-3 bg-blue-600"
                : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
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
