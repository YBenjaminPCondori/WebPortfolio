import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Building2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    id: 1,
    title: "PDC Careers Ambassador",
    company: "Brunel University London",
    logo: Building2,
    link: "https://www.brunel.ac.uk/pdc/Brunel-Careers-Ambassador-Scheme",
    period: "Nov 2023 – July 2025",
    points: [
      "Improved event engagement by assisting career fairs",
      "Distributed materials and guided students and staff",
    ],
    technologies: ["Event Support", "Communication", "Teamwork"],
    current: false,
  },
  {
    id: 2,
    title: "Systems Design Engineer Intern",
    company: "Brunel University London",
    logo: Building2,
    link: "https://www.brunel.ac.uk/research/Groups/Heat-Pipe-and-Thermal-Management/home",
    period: "Feb 2024 – July 2024",
    points: [
      "Automated CAD workflows with SolidWorks",
      "Produced technical reports for water management projects",
    ],
    technologies: ["CAD", "Technical Reporting", "Sustainability"],
    current: false,
  },
  {
    id: 3,
    title: "Junior Assistant Plumber",
    company: "JP Plumbing and Heating",
    logo: Building2,
    link: "#",
    period: "May 2023 – July 2023",
    points: [
      "Supported pipe installations and repairs",
      "Sourced parts and managed on-site logistics",
    ],
    technologies: ["Pipefitting", "Customer Service", "Problem Solving"],
    current: false,
  },
  {
    id: 4,
    title: "Sales Team Member / Stock Room Operative",
    company: "Clarks",
    logo: Building2,
    link: "https://www.clarks.com",
    period: "May 2022 – July 2022",
    points: [
      "Boosted sales by providing tailored customer service",
      "Organised stock room for fast order fulfilment",
    ],
    technologies: ["Retail", "Sales", "Stock Management"],
    current: false,
  },
  {
    id: 5,
    title: "Cleaning Operative",
    company: "Nviro Limited",
    logo: Building2,
    link: "https://www.nviro.co.uk",
    period: "Jan 2021 – Apr 2022",
    points: [
      "Ensured university facilities met strict hygiene standards",
      "Coordinated with team to cover large campus areas",
    ],
    technologies: ["Health & Safety", "Attention to Detail"],
    current: false,
  },
  {
    id: 6,
    title: "Junior WordPress Developer",
    company: "Complex Creative",
    logo: Building2,
    link: "https://www.wearecomplexcreative.com",
    period: "Jul 2021 – Aug 2021",
    points: [
      "Built custom themes and plugins for clients",
      "Collaborated with designers to launch new features",
    ],
    technologies: ["WordPress", "Web Design", "CMS"],
    current: false,
  },
  {
    id: 7,
    title: "Food Bank Volunteer",
    company: "Masjid Ul Ibrahim",
    logo: Building2,
    link: "https://www.brunel.ac.uk/research/Groups/Heat-Pipe-and-Thermal-Management/home",
    period: "Feb 2021 – Aug 2021",
    points: [
      "Distributed food parcels during pandemic lockdowns",
      "Provided direct client support and logistics",
    ],
    technologies: ["Community Support", "Teamwork"],
    current: false,
  },
  {
    id: 8,
    title: "IT Teaching Assistant",
    company: "Bonny Downs Community Association",
    logo: Building2,
    link: "https://www.bonnydowns.org",
    period: "Dec 2020 – Jan 2021",
    points: [
      "Taught basic computer skills to children and adults",
      "Provided one-on-one technical support",
    ],
    technologies: ["Teaching", "Technical Support"],
    current: false,
  },
];

export default function ExperienceSection() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const i = Number(entry.target.getAttribute('data-index'));
        if (entry.isIntersecting) {
          setVisibleItems((v) => (v.includes(i) ? v : [...v, i]));
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    itemRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-light"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-blue-500">WORK HISTORY</h2>
          <p className="text-xl text-black dark:text-blue-500 max-w-2xl mx-auto">
            List of my work experiences, showcasing my skills in engineering, design, and customer service.
            I have worked in various roles, from engineering internships to customer service positions, each contributing to my professional growth.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 timeline-line"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                data-index={index}
                ref={(el) => (itemRefs.current[index] = el)}
                className={`relative flex items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''} ${visibleItems.includes(index) ? 'reveal-show' : 'reveal-hidden'}`}
              >
                <div className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 shadow-lg bg-sky-200 dark:bg-slate-700 ${visibleItems.includes(index) ? 'grow' : 'scale-50'}`}></div>

                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <Card className="bg-sky-100 dark:bg-slate-800 hover:shadow-xl border border-sky-200 dark:border-slate-700 transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-black dark:text-blue-500">{exp.title}</h3>
                          <p className="font-medium text-black dark:text-blue-500 flex items-center">
                            {(() => { const Icon = exp.logo; return <Icon className="h-4 w-4 mr-1 text-slate-400" />; })()}
                            {exp.company}
                          </p>
                        </div>
                        <Badge variant={exp.current ? 'default' : 'primary'} className="text-sm">
                          {exp.period}
                        </Badge>
                      </div>

                      <ul className="list-disc list-inside text-black dark:text-blue-500 mb-4 space-y-1">
                        {exp.points.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="primary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="primary" size="sm" asChild>
                        <a href={exp.link} target="_blank" rel="noopener noreferrer">Learn More</a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
