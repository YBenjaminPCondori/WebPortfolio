import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '/WebPortfolioInternship.pdf';
    link.download = 'WebPortfolioInternship.pdf';
    link.click(); 
    
    // Show feedback
    console.log('Resume download initiated');
  };

  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
   <section
  id="home"
  className="pt-16 min-h-screen flex items-center bg-black">
  <div className="absolute inset-0 pointer-events-none overflow-hidden">
    <span className="shape w-24 h-24 rounded-full bg-teal-300 top-10 left-10 animate-shape1"></span>
    <span className="shape w-16 h-16 bg-teal-300 top-1/2 right-20 rotate-45 animate-shape2"></span>
    <span className="shape triangle w-20 h-20 bg-teal-300 bottom-10 left-1/3 animate-shape3"></span>
  </div>

  <div className="w-full px-0 py-20">
    <div className="grid lg:grid-cols-1 gap-12 items-start">
      <div className="space-y-8 animate-slide-up w-full text-left ml-10 sm:ml-14 md:ml-20">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-500 leading-tight text-left">
            Computer
            <span className="text-blue-500 block">Engineering</span>
          </h1>
          <p className="text-xl text-blue-500 leading-relaxed max-w-lg">
            Passionate about building innovative solutions at the intersection of software, hardware, and artificial intelligence.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Badge variant="primary" className="px-4 py-2 text-sm font-medium">
            Software Development/Engineering
          </Badge>
          <Badge variant="primary" className="px-4 py-2 text-sm font-medium">
            Embedded/Electronics Systems
          </Badge>
          <Badge variant="primary" className="px-4 py-2 text-sm font-medium">
            Machine Learning/Generative-AI
          </Badge>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            variant="default"
            onClick={handleDownloadResume}
            className="bg-[lightblue] text-black hover:bg-sky-300 font-semibold">
            <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
            Download Resume
          </Button>
          <Button
            variant="default"
            onClick={handleViewProjects}
            className="bg-[lightblue] text-black hover:bg-sky-300 font-semibold">
            View Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="flex space-x-6">
          <a href="https://www.linkedin.com/in/ybenpc/" className="text-[lightblue] transition-colors">
            <SiLinkedin className="h-6 w-6" />
          </a>
          <a href="https://www.github.com/YBenjaminPCondori" className="text-[lightblue] transition-colors">
            <SiGithub className="h-6 w-6" />
          </a>
          <a href="mailto:y.benjamin@ybenpc.com" className="text-[lightblue] transition-colors">
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
);
}
