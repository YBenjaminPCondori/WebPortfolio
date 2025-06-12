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
            <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Java</span>
            <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Spring Boot</span>
            <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">PostgreSQL</span>
            <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">Docker</span>
            <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">GitHub Actions</span>
            <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">React</span>
            <span className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">TailwindCSS</span>
          </div>
          <img src="https://github.com/YBenjaminPCondori/WebPortfolio/actions/workflows/ci.yml/badge.svg" alt="CI/CD" className="mx-auto" />
          <p className="text-black dark:text-blue-500">&copy; Website Developed by (Owner) <b>Y. Benjamin Perez C. ©</b></p>
        </div>
      </footer>
    </div>
  );
}
