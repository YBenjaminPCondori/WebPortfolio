import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import ArchitectureSection from "@/components/architecture-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import EducationSection from "@/components/education-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ArchitectureSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <footer className="bg-background text-black dark:text-blue-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center">
          <div className="flex flex-wrap justify-center gap-2">
          </div>
           <p className="text-black dark:text-blue-500">&copy; Website Developed by (Owner) <b>Y. Benjamin Perez C. © 2025</b></p>
        </div>
      </footer>
    </div>
  );
}
