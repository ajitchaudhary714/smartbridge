import React from "react";
import { Plug, Gift, Star, DollarSign } from "lucide-react";

const MethodologySection: React.FC = () => {
  return (
    <section className="bg-gradient-primary">
      <div className="container pt-6 md:pt-8 pb-12 md:pb-16">
        <header className="text-center max-w-3xl mx-auto mb-4 md:mb-6">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary-foreground">
            Our Methodology
          </h2>
          <p className="text-primary-foreground/80 mt-2">
            A structured, multi-phase journey to transform students into
            future-ready professionals through industry-integrated learning
          </p>
        </header>

        <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <article className="rounded-xl border bg-background p-4 shadow-sm">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Plug className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold text-center pb-1">
              🧩 Foundation: Early Exposure to Emerging Tech
            </h3>
            <p className="mt-2 text-sm text-muted-foreground text-center">
              Introduce students to foundational concepts, career pathways, and
              digital tools from the very first year. Spark curiosity and build
              awareness of high-demand skills and industries.
            </p>
          </article>

          <article className="rounded-xl border bg-background p-4 shadow-sm">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Gift className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold text-center pb-1">
              🛠️ Skill Building: Hands-On, Project-Based Learning
            </h3>
            <p className="mt-2 text-sm text-muted-foreground text-center">
              Deliver modular, skill-aligned learning via credit courses and
              internships. Students work on real-world projects using industry
              tools, fostering applied knowledge and problem-solving abilities.
            </p>
          </article>

          <article className="rounded-xl border bg-background p-4 shadow-sm">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <Star className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold text-center pb-1">
              🚀 Career Readiness: Role-Aligned Certification & Mentoring
            </h3>
            <p className="mt-2 text-sm text-muted-foreground text-center">
              Prepare students for specific job roles with advanced skilling,
              interview prep, capstone projects, and mentorship from industry
              experts. Enable global certifications aligned with employer needs.
            </p>
          </article>

          <article className="rounded-xl border bg-background p-4 shadow-sm">
            <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <DollarSign className="h-5 w-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold text-center pb-1">
              🌐 Industry Integration: Direct Hiring Pathways
            </h3>
            <p className="mt-2 text-sm text-muted-foreground text-center">
              Connect students with hiring partners through job fairs,
              on-the-job training, and employer-driven programs like AspireX.
              Enable a smooth transition from campus to corporate.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;
