import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
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
      className="py-20 bg-black"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-500 mb-4">LET'S CONNECT</h2>
          <p className="text-xl text-blue-500">
            Let's connect! Whether you have a question, want to collaborate, or just say hi, feel free to reach out through any of the methods below.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="bg-sky-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-[lightblue]" />
                  </div>
              <h3 className="font-bold text-blue-500 mb-2">{method.title}</h3>
                  <p className="text-blue-500 mb-4">{method.value}</p>
                  <Badge variant="primary" className="cursor-pointer inline-block">
                    <a
                      href={method.link}
                      className="text-white hover:text-white"
                    >
                      {method.action}
                    </a>
                  </Badge>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Download Resume CTA */}
        <div className="text-center mt-12">
          <Button
            onClick={handleDownloadResume}
            className="bg-sky-200 text-blue-500 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full Resume
          </Button>
        </div>
      </div>
    </section>
  );
}
