import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: 1,
    title: "PDC Careers Ambassador",
    company: "Brunel University London",
    period: "Nov 2023 – July 2025",
    description: "Supported Brunel’s Professional Career Development Centre (PDC) by assisting at university careers events, distributing materials, and engaging with students and staff.",
    technologies: ["Event Support", "Communication", "Teamwork"],
    current: false,
  },
  {
    id: 2,
    title: "Systems Design Engineer Intern",
    company: "Brunel University London",
    period: "Feb 2024 – July 2024",
    description: "Contributing to systems and product design, technical reporting, and CAD/CAM tasks. Focused on sustainable engineering solutions and water management.",
    technologies: ["CAD", "Technical Reporting", "Sustainability"],
    current: false,
  },
  {
    id: 3,
    title: "Junior Assistant Plumber",
    company: "JP Plumbing and Heating",
    period: "May 2023 – July 2023",
    description: "Assisted in plumbing installations and repairs, sourced parts, and provided on-site support for commercial and residential clients.",
    technologies: ["Pipefitting", "Customer Service", "Problem Solving"],
    current: false,
  },
  {
    id: 4,
    title: "Sales Team Member / Stock Room Operative",
    company: "Clarks",
    period: "May 2022 – July 2022",
    description: "Provided retail support, assisted customers, managed stock, and maintained store organization.",
    technologies: ["Retail", "Sales", "Stock Management"],
    current: false,
  },
  {
    id: 5,
    title: "Cleaning Operative",
    company: "Nviro Limited",
    period: "Jan 2021 – Apr 2022",
    description: "Maintained cleanliness and hygiene standards in university buildings, ensuring a safe environment for staff and students.",
    technologies: ["Health & Safety", "Attention to Detail"],
    current: false,
  },
  {
    id: 6,
    title: "Junior WordPress Developer",
    company: "Complex Creative",
    period: "Jul 2021 – Aug 2021",
    description: "Developed and maintained WordPress websites, collaborated with designers, and implemented new web features.",
    technologies: ["WordPress", "Web Design", "CMS"],
    current: false,
  },
  {
    id: 7,
    title: "Food Bank Volunteer",
    company: "Masjid Ul Ibrahim",
    period: "Feb 2021 – Aug 2021",
    description: "Supported food distribution to local community members during the pandemic, offering direct client support.",
    technologies: ["Community Support", "Teamwork"],
    current: false,
  },
  {
    id: 8,
    title: "IT Teaching Assistant",
    company: "Bonny Downs Community Association",
    period: "Dec 2020 – Jan 2021",
    description: "Assisted teaching computer literacy to children and adults, providing technical support and guidance.",
    technologies: ["Teaching", "Technical Support"],
    current: false,
  },
];


export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black">PROFESSIONAL EXPERIENCE</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Building expertise through hands-on experience in software development, embedded systems, and machine learning.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 timeline-line"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg ${
                  exp.current ? 'bg-primary' : 'bg-slate-400'
                }`}></div>
                
                <div className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 1 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <Card className="bg-white/90 hover:shadow-xl border border-blue-500 transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-blue-400">{exp.title}</h3>
                          <p className={`font-medium ${exp.current ? 'text-primary' : 'text-slate-600'}`}>
                            {exp.company}
                          </p>
                        </div>
                        <Badge variant={exp.current ? "default" : "primary"} className="text-sm">
                          {exp.period}
                        </Badge>
              F        </div>
                      
                      <p className="text-slate-600 mb-4">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="primary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
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
