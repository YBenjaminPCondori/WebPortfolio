import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

// You can replace the image URLs with real screenshots if you have them
const projects = [
  {
    id: 1,
    title: "IoT ThingSpeak Sensor Program",
    description:
      "IoT system using Python and Arduino IDE to collect motion sensor data, send it to ThingSpeak, and generate CSVs for visualization.",
    image:
      "/img/iot-thingspeak-system.png",
    technologies: ["Python", "Arduino", "ThingSpeak", "IoT"],
    category: "embedded",
    githubUrl: "https://github.com/YBenjaminPCondori/Electronic-Projects/tree/main/ThingSpeak-IoT-Arduino-Project",
    liveUrl: null,
  },
  {
    id: 2,
    title: "Java GUI Banking Management System",
    description:
      "Java Swing app for secure banking and supermarket operations. Used UML diagrams to model users, access, and workflows.",
    image:
      "/img/banking-management-system.png",
    technologies: ["Java", "Swing", "UML"],
    category: "software",
    githubUrl: "https://github.com/YBenjaminPCondori/Software-Projects/tree/main/Banking-Management-System",
    liveUrl: null,
  },
  {
    id: 3,
    title: "PIC Microcontroller LED/LCD Project",
    description:
      "Developed and programmed a PIC16F877A with C and Assembly to control LEDs, 7-segment, and LCD display. Used MPLAB XC8 and mLoader.",
    image:
      "/img/pic-microcontoller-system.png",
    technologies: ["PIC16F877A", "Embedded C", "Assembly", "MPLAB"],
    category: "embedded",
    githubUrl: "https://github.com/YBenjaminPCondori/Electronic-Projects/tree/main/PIC16F1877-Home-Monitoring-System-Project",
    liveUrl: null,
  },
  {
    id: 4,
    title: "Occupancy Monitoring with TinyML",
    description:
      "Python + TensorFlow system using edge AI to detect office occupancy, dynamically adjust conditions, and optimize energy use. Deployed on Raspberry Pi.",
    image:
      "/img/occupancy-monitoring-system.png",
    technologies: ["Python", "TensorFlow", "TinyML", "Raspberry Pi"],
    category: "ml",
    githubUrl: "https://github.com/YBenjaminPCondori/Machine-Learning-Gen-AI/tree/main/Occupancy-Monitoring-Conv1D-System-with-Gaussian-Data-Compression",
    liveUrl: null,
  },
  {
    id: 5,
    title: "VDHL FPGA Sequence Detector",
    description:
      "Designed, simulated, and debugged a sequence detector state machine on a NEXYS FPGA board using VHDL. Included power analysis and Vivado simulation.",
    image:
      "/img/vhdl-fpga-system.png",
    technologies: ["VHDL", "FPGA", "Vivado", "NEXYS"],
    category: "embedded",
    githubUrl: "https://github.com/YBenjaminPCondori/Electronic-Projects/tree/main/FPGA-Sequence-Detector-Projects",
    liveUrl: null,
  },
  {
    id: 6,
    title: "Raspberry Pi OpenCV Socket Project",
    description:
      "Built a real-time video pipeline using Python, OpenCV, and Raspberry Pi to detect red-dot objects and track motion. Networked with socket programming.",
    image:
      "/img/dot-following-rpi.png",
    technologies: ["Python", "OpenCV", "Raspberry Pi", "Sockets"],
    category: "software",
    githubUrl: "https://github.com/YBenjaminPCondori/Electronic-Projects/tree/main/Dot-Tracking-RaspberryPi-Project",
    liveUrl: null,
  },

  {
    id: 7,
    title: "MSP4320 Line Following Robot",
    description:
      "Built a Line-Following Robot using the MSP4320.",
    image:
      "/img/line-following-robot.png",
    technologies: ["Python", "OpenCV", "Raspberry Pi", "Sockets"],
    category: "software",
    githubUrl: "https://github.com/YBenjaminPCondori/Electronic-Projects/tree/main/Line-Following-Robot-Project",
    liveUrl: null,
  },

  
];


const categories = [
  { id: "all", label: "All Projects" },
  { id: "software", label: "Software/Web Development" },
  { id: "embedded", label: "Embedded/Electronic" },
  { id: "ml", label: "Machine Learning/Generative-AI" },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 bg-sky-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">
            Projects and Academic Work
          </h2>
          <p className="text-xl text-blue-500 max-w-2xl mx-auto">
            Projects in embedded systems, machine learning, edge AI, microcontrollers, and full-stack software.
          </p>
        </div>

        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="font-medium"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-sky-100 border border-sky-200 overflow-hidden hover:shadow-xl transition-all duration-300 project-card"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-blue-500">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      className="text-blue-500 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="text-blue-500 transition-colors"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-blue-500 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="primary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
