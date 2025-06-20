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
      className="pt-16 min-h-screen flex items-center justify-center bg-gray-900 text-white font-mono"
    >
      <div className="w-full px-4 sm:px-6 lg:px-8 py-20 transition-opacity">
        <div className="space-y-6 max-w-3xl mx-auto text-left">

          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl dark:text-blue-500 mb-4 font-bold">
              Computer
              <span className="block">Engineering</span>
            </h1>
            <p className="text-xl">
              Hi, I'm Y. Benjamin Perez C., a Computer Systems Engineering Graduate at Brunel University of London.
              <br />
              <h2 className="text-sm text-gray-400 italic mt-1">Site is still currently (WORK IN PROGRESS).</h2>
            </p>
          </div>
            <div className="bg-black rounded-md p-4 text-green-400 text-sm">
            <pre>
      curl -X GET https://api.ybenpc.com/status
      → 200 OK (15ms)
            </pre>
            </div>
            <br></br>
            <div className="flex flex-wrap justify-center gap-3 mt-4">
            <img src="/img/java.png" alt="Java logo" className="w-10 h-10 object-contain" />
            <img src="/img/python.png" alt="Python logo" className="w-10 h-10 object-contain" />
            <img src="/img/c.png" alt="C logo" className="w-10 h-10 object-contain" />
            <img src="/img/c++.png" alt="C++ logo" className="w-10 h-10 object-contain" />
            <img src="/img/assembly.png" alt="Assembly logo" className="w-10 h-10 object-contain" />
            <img src="/img/vhdl.png" alt="VHDL logo" className="w-10 h-10 object-contain" />
            <img src="/img/verilog.png" alt="Verilog logo" className="w-10 h-10 object-contain" />
            <img src="/img/html.png" alt="HTML5 logo" className="w-10 h-10 object-contain" />
            <img src="/img/css.png" alt="CSS3 logo" className="w-10 h-10 object-contain" />
            <img src="/img/javascript.png" alt="JavaScript logo" className="w-10 h-10 object-contain" />  
            <img src="/img/React.png" alt="React logo" className="w-10 h-10 object-contain" />
            </div>

            <br></br>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="default"
            onClick={handleDownloadResume}
            className="bg-[lightblue] text-black hover:bg-sky-300 font-semibold">
            <Download className="mr-2 h-4 w-4" />
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

          <div className="flex justify-center space-x-6">
            <a href="https://www.linkedin.com/in/ybenpc/" className="text-[lightblue] transition-colors">
              <SiLinkedin className="h-6 w-6" />
            </a>
            <a href="https://www.github.com/YBenjaminPCondori" className="text-[lightblue] transition-colors">
              <SiGithub className="h-6 w-6" />
            </a>
            <a href="mailto:y.benjamin@ybenpc.com" className="text-[lightblue] transition-colors">
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
