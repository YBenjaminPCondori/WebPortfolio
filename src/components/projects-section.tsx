import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogTitle } from "@/components/ui/dialog";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    type: "backend",
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
    type: "frontend",
    title: "Java Swing Banking Management System",
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
    type: "frontend",
    title: "JAVA Swing Supermarket Management System",
    description:
      "Developed ano Implemented a Java Swing app for secure transactions, and a user management system to monitor, check out, and logs.",
    image:
      "/img/supermarket-system.png",
    technologies: ["Java", "Swing", "UML"],
    category: "software",
    githubUrl: "https://www.github.com/YBenjaminPCondori/Software-Projects/tree/main/Supermarket-Management-System",
    liveUrl: null,
  },


  {
    id: 4,
    type: "backend",
    title: "PIC16F LED/LCD Project",
    description:
      "Developed and programmed a PIC16F877A with C and Assembly to control LEDs, 7-segment, and LCD display. Used MPLAB XC8 and mLoader.",
    image:
      "/img/pic-microcontroller-system.png",
    technologies: ["PIC16F877A", "Embedded C", "Assembly", "MPLAB"],
    category: "embedded",
    githubUrl: "https://github.com/YBenjaminPCondori/Electronic-Projects/tree/main/PIC16F1877-Home-Monitoring-System-Project",
    liveUrl: null,
  },
  {
    id: 5,
    type: "backend",
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
    id: 6,
    type: "backend",
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
    id: 7,
    type: "backend",
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
    id: 8,
    type: "backend",
    title: "MSP4320 Line Following Robot",
    description:
      "Built a Line-Following Robot using the MSP4320.",
    image:
      "/img/line-following-robot.png",
    technologies: ["Code Composer IDE", "Embedded C", "RMSP4320"],
    category: "software",
    githubUrl: "https://github.com/YBenjaminPCondori/Electronic-Projects/tree/main/Line-Following-Robot-Project",
    liveUrl: null,
  },

  {
    id: 9,
    type: "frontend",
    title: "Photography Front End Static Web Portfolio",
    description:
      "Developed, Designed and Implemented a static Front End website for a photographer to showcase her portfolio, and history.",
    image:
      "/img/photography-portfolio.png",
    technologies: ["Static", "JavaScript", "HTML5", "CSS3"],
    category: "software",
    githubUrl: "https://github.com/YBenjaminPCondori/Software-Projects/tree/main/Static%20Front%20End%20Photorgraphy%20Web%20Portfolio",
    liveUrl: null,
  },

  {
    id: 10,
    type: "backend",
    title: "Automated Inventory Camera Recording System",
    description:
      "Designed and implemented a prototype inventory system using a camera and computer vision to automatically detect, classify, and record items. Utilized Python and OpenCV for image capture and processing, and trained a lightweight neural network for real-time object recognition. Reduced manual entry workload and improved accuracy of inventory logging.",
    image:
      "/img/hptm-project.png",
    technologies: ["Python", "OpenCV", "Webcam"],
    category: "software",
    githubUrl: "",
    liveUrl: null,
  },

  
  {
    id: 11,
    type: "backend",
    title: "Smart Tool Inventory Management System",
    description:
    "Developed an automated inventory management solution for tracking tools (e.g., screws, hand tools) in manufacturing labs. Integrated ESP8266 D1 Mini microcontrollers and LED indicators for real-time tool status and availability. Combined camera-based object recognition (Python, OpenCV) with IoT connectivity for automated recording and monitoring. System provided instant visual feedback and streamlined tool check-in/check-out, reducing losses and improving operational efficiency.",
    image:
      "/img/inventory-led.png",
    technologies: ["Python", "OpenCV", "ESP32", "LEDs"],
    category: "embedded",
    githubUrl: "",
    liveUrl: null,
  },

  {
    id: 12,
    type: "backend",
    title: "ECG Signal Processing and Classification",
    description:
    "Developed a Python-based system for processing and classifying ECG signals using machine learning. Implemented signal filtering, feature extraction, and edge detection to extract time series data from images.",
    image:
      "/img/ecg-processing-system.png",
    technologies: ["Python", "OpenCV"],
    category: "ml",
    githubUrl: "",
    liveUrl: null,
  }, 

  {
  id: 13,
  type: "backend",
  title: "Verilog FSM Pulse Generator",
  description:
    "Designed and implemented a finite state machine (FSM) in Verilog to generate configurable digital pulse streams for two outputs (Z1 and Z2) based on a 2-bit selector input. The FSM produces different output patterns depending on the selected input, matching formal specifications for waveform generation. The design was fully verified in simulation, adheres to functional-level Verilog constraints, and avoids behavioral synthesis or auto-generated code.",
  image: "/img/fsm-pulse-generator.png", 
  technologies: ["Verilog", "Quartus", "ModelSim", "Digital Logic", "FSM"],
  category: "embedded",
  githubUrl: "https://github.com/YBenjaminPCondori/Electronic-Projects/tree/main/FSM-Pulse-Generator",
  liveUrl: null,
}



];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "software", label: "Software/Web Development" },
  { id: "embedded", label: "Embedded/Electronic" },
  { id: "ml", label: "Machine Learning/Generative-AI" },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[number] | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-light dark:bg-gradient-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-blue-500 mb-4">
            PROJECTS and ACADEMIC WORK
          </h2>
          <p className="text-xl text-black dark:text-blue-500 max-w-2xl mx-auto">
            Projects in embedded systems, machine learning, edge AI, microcontrollers, and full-stack software.
          </p>
        </div>

        {/* Project Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant="outline"
              onClick={() => setActiveCategory(category.id)}
              className={
                activeCategory === category.id
                  ? "bg-teal-200 text-teal-800 border-teal-200 font-medium transition-transform duration-300"
                  : "text-teal-800 font-medium border-0 hover:bg-teal-200 hover:text-teal-800 hover:border hover:border-teal-200 hover:scale-105 transition-transform duration-300"
              }
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-4 text-lg font-bold text-black dark:text-blue-500 text-center">Backend Projects</h3>
            <div className="space-y-8">
              {filteredProjects.filter(p => p.type === "backend").map(project => {
                const slug = project.title.toLowerCase().replace(/\s+/g, "-");
                return (
                  <div key={project.id}>
                    <p className="font-mono text-xs bg-gray-800 text-green-400 p-2 rounded mb-2">
                      GET /api/{slug}/status → 200 OK
                    </p>
                    <Card
                      onClick={() => setSelectedProject(project)}
                      className="bg-sky-100 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 project-card cursor-pointer"
                    >
                      <div className="relative">
                        <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                      </div>
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-bold text-black dark:text-blue-500">{project.title}</h3>
                          <div className="flex space-x-2">
                            <a href={project.githubUrl} className="text-black dark:text-blue-500 transition-colors">
                              <Github className="h-5 w-5" />
                            </a>
                            {project.liveUrl && (
                              <a href={project.liveUrl} className="text-black dark:text-blue-500 transition-colors">
                                <ExternalLink className="h-5 w-5" />
                              </a>
                            )}
                          </div>
                        </div>
                        <p className="text-black dark:text-blue-500 mb-4 text-sm leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <Badge key={tech} variant="primary" className="text-xs bg-teal-200 text-teal-800 border-transparent">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-bold text-black dark:text-blue-500 text-center">Frontend Projects</h3>
            <div className="space-y-8">
              {filteredProjects.filter(p => p.type === "frontend").map(project => (
                <Card
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                  className="bg-sky-100 dark:bg-slate-800 border border-sky-200 dark:border-slate-700 overflow-hidden hover:shadow-xl transition-all duration-300 project-card cursor-pointer"
                >
                  <div className="relative">
                    <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-black dark:text-blue-500">{project.title}</h3>
                      <div className="flex space-x-2">
                        <a href={project.githubUrl} className="text-black dark:text-blue-500 transition-colors">
                          <Github className="h-5 w-5" />
                        </a>
                        {project.liveUrl && (
                          <a href={project.liveUrl} className="text-black dark:text-blue-500 transition-colors">
                            <ExternalLink className="h-5 w-5" />
                          </a>
                        )}
                      </div>
                    </div>
                    <p className="text-black dark:text-blue-500 mb-4 text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="primary" className="text-xs bg-teal-200 text-teal-800 border-transparent">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      <Dialog open={!!selectedProject} onOpenChange={(o) => !o && setSelectedProject(null)}>
  <DialogContent className="text-black dark:text-blue-500">
    {selectedProject && (
      <>
        <DialogTitle className="text-black dark:text-blue-500">{selectedProject.title}</DialogTitle>
        <p className="mb-4">{selectedProject.description}</p>
        <DialogFooter className="flex space-x-2">
          <Button asChild>
            <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">Source Code</a>
          </Button>
          {selectedProject.liveUrl && (
            <Button variant="secondary" asChild>
              <a href={selectedProject.liveUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
            </Button>
          )}
        </DialogFooter>
      </>
    )}
  </DialogContent>
</Dialog>
      </div>
    </section>
  );  
}
