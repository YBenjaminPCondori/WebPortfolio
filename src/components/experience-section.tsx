import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Tesla Inc.",
    period: "Jan 2024 - Present",
    description: "Developing autonomous vehicle software systems, working on real-time embedded systems for vehicle control and implementing machine learning algorithms for perception tasks.",
    technologies: ["C++", "Python", "ROS"],
    current: true,
  },
  {
    id: 2,
    title: "Embedded Systems Intern",
    company: "Intel Corporation",
    period: "Jun 2023 - Dec 2023",
    description: "Designed and implemented firmware for IoT devices, optimized power consumption algorithms, and developed hardware validation test suites for next-generation processors.",
    technologies: ["C", "VHDL", "ARM"],
    current: false,
  },
  {
    id: 3,
    title: "Research Assistant",
    company: "University AI Lab",
    period: "May 2022 - Aug 2022",
    description: "Conducted research on computer vision algorithms for autonomous systems, published findings on neural network optimization, and mentored undergraduate students.",
    technologies: ["Python", "TensorFlow", "OpenCV"],
    current: false,
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-[#0f172a]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Professional Experience</h2>
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
                  <Card className="hover:shadow-xl transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-slate-800">{exp.title}</h3>
                          <p className={`font-medium ${exp.current ? 'text-primary' : 'text-slate-600'}`}>
                            {exp.company}
                          </p>
                        </div>
                        <Badge variant={exp.current ? "default" : "secondary"} className="text-sm">
                          {exp.period}
                        </Badge>
                      </div>
                      
                      <p className="text-slate-600 mb-4">{exp.description}</p>
                      
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
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
