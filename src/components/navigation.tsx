import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#home", label: "HOME" },
  { href: "#experience", label: "WORK HISTORY" },
  { href: "#projects", label: "PROJECTS" },
  { href: "#education", label: "EDUCATION" },
  { href: "#contact", label: "CONTACT" },
];

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);

      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 border-slate-200 transition-colors duration-300 ${
        scrolled ? "bg-blue-200 shadow" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-16 px-4 sm:px-6 lg:px-8">
        <div className="font-bold text-xl text-slate-800 flex-shrink-0">
          Y. BENJAMIN 
          <br></br>
          PEREZ. C
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`border border-blue-200 rounded-lg px-3 py-1 transition-all duration-300 ease-in-out hover:scale-105 ${
                activeSection === link.href.substring(1)
                  ? "text-blue-500 font-bold border-blue-500"
                  : scrolled
                  ? "bg-blue-200 text-black hover:bg-black hover:text-white"
                  : "bg-black text-white hover:bg-blue-200 hover:text-black"
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`border border-blue-200 rounded-lg px-3 py-2 text-lg transition-all duration-300 ease-in-out text-left hover:scale-105 ${
                    activeSection === link.href.substring(1)
                      ? "text-blue-500 font-bold border-blue-500"
                      : scrolled
                      ? "bg-blue-200 text-black hover:bg-black hover:text-white"
                      : "bg-black text-white hover:bg-blue-200 hover:text-black"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
