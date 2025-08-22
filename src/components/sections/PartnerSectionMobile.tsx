"use client";

import React, { useRef, useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils"; // Optional: If you don't use shadcn's utils, replace with your own class merge

const governments = [
  {
    src: "/lovable-uploads/eb2b73d1-7d08-4635-a6e0-eeb51eeb169d.png",
    alt: "MoU with All India Council for Technical Education (AICTE) in Delhi",
  },
  {
    src: "/lovable-uploads/4149bc27-626b-4f11-84d2-3f2b23cad352.png",
    alt: "MoU signed with Government of Uttar Pradesh, India",
  },
  {
    src: "/lovable-uploads/df3332a4-f0a5-46c3-8e89-aeffc2b49057.png",
    alt: "MoU signed with SWAYAM Plus in Delhi",
  },
  {
    src: "/lovable-uploads/abfbfb1b-e296-4448-b3ed-e6da91c0b3c6.png",
    alt: "MoU signed with Telangana Academy for Skill and Knowledge (TASK)",
  },
  {
    src: "/lovable-uploads/b0e7c809-aec4-407f-9d14-2f6006ab6cc9.png",
    alt: "MoU signed with Andhra Pradesh State Council of Higher Education (APSCHE)",
  },
  {
    src: "/lovable-uploads/50f71056-67b4-43e5-9050-dfca72963951.png",
    alt: "MoU signed with Indian Society for Technical Education (ISTE) in New Delhi",
  },
];

const publicUniversities = [
  {
    src: "/lovable-uploads/da07c07c-d3bf-4244-9a6b-8fe5fa02bca4.png",
    alt: "MoU signed with Jawaharlal Nehru Technological University Anantapur (JNTUA)",
  },
  {
    src: "/lovable-uploads/035761be-3196-4d04-bbe8-a1c50740d13b.png",
    alt: "MoU signed with Jawaharlal Nehru Technological University Kakinada (JNTUK)",
  },
  {
    src: "/lovable-uploads/c40c7f27-a6f0-498f-a439-461915b4b77e.png",
    alt: "MoU signed with Rajasthan Technical University, Kota (RTU)",
  },
  {
    src: "/lovable-uploads/260530e7-31f6-4337-9610-973e722b7155.png",
    alt: "MoU signed with Dr. Babasaheb Ambedkar Technological University, Raigad (DBATU)",
  },
];

const privateUniversities = [
  {
    src: "/lovable-uploads/ea1fb0c3-6144-4694-9277-b14a003ba090.png",
    alt: "MoU signed with M. Kumarasamy College of Engineering, Karur (Tamil Nadu)",
  },
  {
    src: "/lovable-uploads/5c28381c-ab76-4baf-8329-aa070e1c7651.png",
    alt: "Partnership announcement with CIET",
  },
  {
    src: "/lovable-uploads/2f0d9e37-ad40-464b-8d41-54a93ffe5257.png",
    alt: "Partnership announcement with BITM",
  },
  {
    src: "/lovable-uploads/5b8b93b6-30c6-43c6-975e-036d0c19df83.png",
    alt: "MoU signed with Geethanjali College of Engineering and Technology, Hyderabad",
  },
  {
    src: "/lovable-uploads/ea811dae-3851-4415-b6a6-610bb456f335.png",
    alt: "MoU signed with Lakireddy Bali Reddy College of Engineering, Vijayawada",
  },
  {
    src: "/lovable-uploads/1b61cca4-a821-44b9-ad44-e063e2966466.png",
    alt: "MoU signed with Malineni Lakmaiah Women's Engineering College, Guntur",
  },
  {
    src: "/lovable-uploads/834a0698-aadd-4f0b-a457-f623c0008c57.png",
    alt: "MoU signed with MLR Institute of Technology, Telangana",
  },
  {
    src: "/lovable-uploads/19e62267-c48e-4713-85c3-e7dcebb81f93.png",
    alt: "MoU signed with CVR College of Engineering, Telangana",
  },
  {
    src: "/lovable-uploads/616a3c16-f5f5-40e8-b3e5-a5db282dba98.png",
    alt: "MoU signed with Gayatri Vidya Parishad College of Engineering",
  },
  {
    src: "/lovable-uploads/dfed5e21-fab3-43ae-ae0e-c33e470262e6.png",
    alt: "MoU signed with Sagar Group of Institutions (SISTec), Bhopal",
  },
];

// Reusable Carousel Component
const ImageCarousel = ({
  images,
}: {
  images: { src: string; alt: string }[];
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll to the selected image when dot is clicked
  const scrollToImage = (index: number) => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    containerRef.current.scrollTo({ left: width * index, behavior: "smooth" });
    setCurrentIndex(index);
  };

  // Update active dot on scroll
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const index = Math.round(el.scrollLeft / el.clientWidth);
      setCurrentIndex(index);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="w-full">
      {/* Horizontal Scrollable Container */}
      <div
        ref={containerRef}
        className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {images.map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-full snap-center"
            style={{ scrollSnapAlign: "center" }}
          >
            <AspectRatio ratio={1 / 1}>
              <img
                src={img.src}
                alt={img.alt}
                className="h-full w-full aspect-square object-cover rounded-xl border shadow-md"
                loading="lazy"
              />
            </AspectRatio>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-3">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={cn(
              "w-3 h-3 rounded-full transition-all",
              idx === currentIndex ? "bg-primary" : "bg-muted"
            )}
            onClick={() => scrollToImage(idx)}
            aria-label={`Go to image ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

// Main Section
const PartnershipsSection: React.FC = () => {
  return (
    <section className="block lg:hidden">
      {/* Right Column - Tabs with Carousel */}
      <aside className="w-full">
        <Tabs defaultValue="governments" className="w-full">
          <TabsList className="overflow-x-auto no-scrollbar flex gap-2 snap-x snap-mandatory sm:justify-between whitespace-nowrap">
            <TabsTrigger value="governments">Governments</TabsTrigger>
            <TabsTrigger value="public">Public</TabsTrigger>
            <TabsTrigger value="private">Private</TabsTrigger>
          </TabsList>

          <TabsContent value="governments" className="mt-4">
            <ImageCarousel images={governments} />
          </TabsContent>
          <TabsContent value="public" className="mt-4">
            <ImageCarousel images={publicUniversities} />
          </TabsContent>
          <TabsContent value="private" className="mt-4">
            <ImageCarousel images={privateUniversities} />
          </TabsContent>
        </Tabs>
      </aside>
    </section>
  );
};

export default PartnershipsSection;
