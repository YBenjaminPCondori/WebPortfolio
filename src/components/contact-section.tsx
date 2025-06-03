import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Mail } from "lucide-react";
import { SiLinkedin, SiGithub } from "react-icons/si";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "Send me an email",
    link: "mailto:y.benjamin@ybenpc.com",
    action: "Send Message"
  },
  {
    icon: SiLinkedin,
    title: "LinkedIn",
    value: "Connect professionally",
    link: "https://www.linkedin.com/in/ybenpc/",
    action: "View Profile"
  },
  {
    icon: SiGithub,
    title: "GitHub",
    value: "View my code",
    link: "https://www.github.com/YBenjaminPCondori",
    action: "Check Repos"
  }
];

export default function ContactSection() {
  const handleDownloadResume = () => {
    // In a real implementation, this would download the actual resume file
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'Internship-Resume-YBenjaminPCondori.pdf'; // Replace with actual resume URL
    // link.click(); // Commented out to avoid actual download in demo
    
    // Show feedback
    console.log('Resume download initiated');
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Wanna Reach Out?</h2>
          <p className="text-xl text-slate-200">
            Let's connect! Whether you have a question, want to collaborate, or just say hi, feel free to reach out through any of the methods below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{method.title}</h3>
                  <p className="text-slate-600 mb-4">{method.value}</p>
                  <a 
                    href={method.link} 
                    className="text-primary hover:text-primary/80 font-medium transition-colors"
                  >
                    {method.action}
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Download Resume CTA */}
        <div className="text-center mt-12">
          <Button 
            onClick={handleDownloadResume}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
