import { Users, Building, Handshake, Calendar } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "1.5M+",
    label: "Learners Skilled",
    description: "Students empowered with future-ready skills"
  },
  {
    icon: Building,
    value: "2700+",
    label: "Partner Institutions",
    description: "Educational partnerships across multiple countries"
  },
  {
    icon: Handshake,
    value: "100+",
    label: "Corporate Partners",
    description: "Industry leaders collaborating for talent development"
  },
  {
    icon: Calendar,
    value: "10",
    label: "Years of Service",
    description: "Decade of excellence in education innovation"
  }
];

const ImpactStatsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-subtle">
      <div className="container">
        <header className="text-center space-y-4 mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
            <Users className="w-4 h-4" />
            Our Impact
          </div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Transforming Education
            <span className="text-primary"> At Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Building bridges between education and industry with measurable impact across institutions, learners, and corporate partners
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {stats.map((stat, index) => (
            <article 
              key={stat.label}
              className="text-center space-y-4 p-6 rounded-xl bg-background border shadow-sm hover:shadow-elevate transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <stat.icon className="w-8 h-8 text-primary" aria-hidden="true" />
              </div>
              <div className="space-y-2">
                <div className="text-3xl md:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStatsSection;