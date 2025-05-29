import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cloud Task Manager",
    description: "Full-stack web application with real-time collaboration, built using React, Node.js, and MongoDB. Features include team workspaces, task automation, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Node.js", "MongoDB"],
    category: "software",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 2,
    title: "Smart Home IoT System",
    description: "Comprehensive IoT ecosystem with ESP32 microcontrollers, sensor networks, and mobile app control. Includes automated lighting, climate control, and security monitoring.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["ESP32", "C++", "MQTT"],
    category: "embedded",
    githubUrl: "#",
    liveUrl: null,
  },
  {
    id: 3,
    title: "Real-time Object Detection",
    description: "Advanced computer vision system using YOLO v8 for real-time object detection and tracking. Optimized for edge deployment with 95% accuracy on custom dataset.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "PyTorch", "OpenCV"],
    category: "ml",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description: "Interactive data visualization platform for business intelligence. Features real-time data processing, custom chart builders, and automated report generation.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["Vue.js", "D3.js", "Python"],
    category: "software",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    id: 5,
    title: "Autonomous Robot",
    description: "Mobile robot with SLAM navigation, obstacle avoidance, and autonomous path planning. Built using ROS, LIDAR sensors, and custom motor control systems.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["ROS", "C++", "Raspberry Pi"],
    category: "embedded",
    githubUrl: "#",
    liveUrl: null,
  },
  {
    id: 6,
    title: "Predictive Maintenance AI",
    description: "Machine learning system for industrial equipment monitoring using time-series analysis and anomaly detection. Reduces maintenance costs by 30% through predictive insights.",
    image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
    technologies: ["TensorFlow", "Scikit-learn", "Docker"],
    category: "ml",
    githubUrl: "#",
    liveUrl: null,
  },
];

const categories = [
  { id: "all", label: "All Projects" },
  { id: "software", label: "Software" },
  { id: "embedded", label: "Embedded" },
  { id: "ml", label: "Machine Learning" },
];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of innovative solutions across software development, embedded systems, and machine learning.
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
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 project-card">
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                  <div className="flex space-x-2">
                    <a href={project.githubUrl} className="text-slate-400 hover:text-primary transition-colors">
                      <Github className="h-5 w-5" />
                    </a>
                    {project.liveUrl && (
                      <a href={project.liveUrl} className="text-slate-400 hover:text-primary transition-colors">
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
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
