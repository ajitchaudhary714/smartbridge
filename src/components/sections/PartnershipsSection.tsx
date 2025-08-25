import React from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import PartnerSectionMobile from "./PartnerSectionMobile";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Brain,
  Globe2,
  BookOpen,
  Rocket,
  Handshake,
  BadgeCheck,
} from "lucide-react";

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

const PartnershipsSection: React.FC = () => {
  const governmentGroups = Array.from(
    { length: Math.ceil(governments.length / 4) },
    (_, i) => governments.slice(i * 4, i * 4 + 4)
  );
  const publicGroups = Array.from(
    { length: Math.ceil(publicUniversities.length / 4) },
    (_, i) => publicUniversities.slice(i * 4, i * 4 + 4)
  );
  const privateGroups = Array.from(
    { length: Math.ceil(privateUniversities.length / 4) },
    (_, i) => privateUniversities.slice(i * 4, i * 4 + 4)
  );
  return (
    <section className="container py-12 md:py-16">
      <div className="grid items-start gap-8 md:gap-12 grid-cols-1 lg:grid-cols-2">
        {/* Left column */}
        <article className="space-y-6">
          <header className="space-y-2">
            <h2 className="text-2xl md:text-3xl font-semibold">
              Skills to Campus Model
            </h2>
            <p className="text-base md:text-lg text-muted-foreground">
              Empowering universities with scalable, industry-integrated
              solutions to build future-ready graduates
            </p>
          </header>

          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            aria-label="Key partnership capabilities"
          >
            {[
              {
                Icon: Brain,
                title: "Curriculum Innovation",
                desc: "Industry-aligned design & delivery",
              },
              {
                Icon: Globe2,
                title: "Global Certifications",
                desc: "Role-based, industry-endorsed",
              },
              {
                Icon: BookOpen,
                title: "Skill Electives",
                desc: "In-demand technologies integrated",
              },
              {
                Icon: Rocket,
                title: "Scalable Skilling",
                desc: "Execute large-scale initiatives",
              },
              {
                Icon: Handshake,
                title: "Internship Programs",
                desc: "Powered by industry leaders",
              },
              {
                Icon: BadgeCheck,
                title: "Outcome-Focused",
                desc: "Measurable, job-ready results",
              },
            ].map(({ Icon, title, desc }) => (
              <div
                key={title}
                className="rounded-xl border bg-background p-4 shadow-sm hover:shadow-elevate transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-md bg-primary/10 text-primary flex items-center justify-center">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm text-muted-foreground">{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-sm md:text-base text-muted-foreground">
            We collaborate with governments and universities to co-create
            curricula, global certifications, and internship pathways that drive
            job-ready outcomes.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button size="lg" variant="hero" asChild>
              <a href="#contact" aria-label="Partner with SmartBridge">
                Partner with Us
              </a>
            </Button>
            <Button size="lg" variant="white" asChild>
              <a href="#talent-solutions" aria-label="Explore Talent Solutions">
                Talent Solutions
              </a>
            </Button>
          </div>
        </article>

        {/* Right column: MoU photos by category */}
        <aside aria-label="Partnership MoU gallery" className="w-full">
          <Tabs defaultValue="governments" className="w-full hidden lg:block">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-3 gap-1">
              <TabsTrigger value="governments">Governments</TabsTrigger>
              <TabsTrigger value="public">Public Universities</TabsTrigger>
              <TabsTrigger value="private">Private Universities</TabsTrigger>
            </TabsList>

            {/* Governments carousel - shows 4 cards with navigation */}
            <TabsContent value="governments" className="mt-4">
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <CarouselContent>
                  {governmentGroups.map((group, idx) => (
                    <CarouselItem key={idx} className="basis-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {group.map((img) => (
                          <div
                            key={img.src}
                            className="rounded-xl border bg-background shadow-elevate overflow-hidden"
                          >
                            <AspectRatio ratio={4 / 3}>
                              <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover"
                              />
                            </AspectRatio>
                          </div>
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious aria-label="Previous MoU images" />
                <CarouselNext aria-label="Next MoU images" />
              </Carousel>
            </TabsContent>

            <TabsContent value="public" className="mt-4">
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <CarouselContent>
                  {publicGroups.map((group, idx) => (
                    <CarouselItem key={idx} className="basis-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {group.map((img) => (
                          <div
                            key={img.src}
                            className="rounded-xl border bg-background shadow-elevate overflow-hidden"
                          >
                            <AspectRatio ratio={4 / 3}>
                              <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover"
                              />
                            </AspectRatio>
                          </div>
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious aria-label="Previous public university MoU images" />
                <CarouselNext aria-label="Next public university MoU images" />
              </Carousel>
            </TabsContent>
            <TabsContent value="private" className="mt-4">
              <Carousel
                opts={{ align: "start", loop: true }}
                className="w-full"
              >
                <CarouselContent>
                  {privateGroups.map((group, idx) => (
                    <CarouselItem key={idx} className="basis-full">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {group.map((img) => (
                          <div
                            key={img.src}
                            className="rounded-xl border bg-background shadow-elevate overflow-hidden"
                          >
                            <AspectRatio ratio={4 / 3}>
                              <img
                                src={img.src}
                                alt={img.alt}
                                loading="lazy"
                                decoding="async"
                                className="h-full w-full object-cover"
                              />
                            </AspectRatio>
                          </div>
                        ))}
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious aria-label="Previous private university MoU images" />
                <CarouselNext aria-label="Next private university MoU images" />
              </Carousel>
            </TabsContent>
          </Tabs>
          <PartnerSectionMobile />
        </aside>
      </div>
    </section>
  );
};

export default PartnershipsSection;
