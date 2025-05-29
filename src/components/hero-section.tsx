import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

export default function HeroSection() {
  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'WebPortfolioInternship.pdf';
    // link.click(); // Commented out to avoid actual download in demo
    
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
    <section id="home" className="pt-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-slide-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-blue-400 leading-tight">
                Computer Systems
                <span className="text-primary block">Engineer</span>
              </h1>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Passionate about building innovative solutions at the intersection of software, hardware, and artificial intelligence.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                Software Development
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                Embedded Systems
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
                Machine Learning
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={handleDownloadResume}
                className="bg-primary hover:bg-primary/90 text-white font-semibold group"
              >
                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
                Download Resume
              </Button>
              <Button 
                variant="outline" 
                onClick={handleViewProjects}
                className="border-primary text-primary hover:bg-primary hover:text-white font-semibold"
              >
                View Projects
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="flex space-x-6">
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                <SiLinkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                <SiGithub className="h-6 w-6" />
              </a>
              <a href="#" className="text-slate-600 hover:text-primary transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-blue-100 rounded-2xl p-8">
              <img 
                src="/output.jpg" 
                alt="Professional engineer working on computer systems" 
                className="rounded-xl shadow-2xl w-full h-auto animate-float"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl border border-slate-200">
              <div className="text-2xl font-bold text-primary">4+</div>
              <div className="text-sm text-slate-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
