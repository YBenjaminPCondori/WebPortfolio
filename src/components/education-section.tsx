
// Imporing lbraries, 
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Users, Trophy } from "lucide-react";

const coursework = [
  "Digital Systems Design",
  "Embedded Systems",
  "Artificial Intelligence Systems",
  "Computer Architecture",
  "Quality Engineering and Management",
  "Autonomous Systems",
  "Advanced Computing"
];

const skills = {
};

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
            <img src="/img/react.png" alt="React logo" className="w-10 h-10 object-contain" />
            </div>

const certifications = [
  { name: "LearntoCode - Front End Development", year: "2021" },
  { name: "Data Camp - ML Fundamentals", year: "2025" },
  { name: "Celonis Academy - Process Mining", year: "2025" }
];

const achievements = [
  { icon: Trophy, title: "Brunel Proffesional Mentoring Programme Graduate (Goldman Sachs)", subtitle: "2025" },
  { icon: Users, title: "Brunel READY Programme Graduate", subtitle: "Certificate of Volunteering and working with Teams" },
  { icon: Award, title: "Brunel Plus Award", subtitle: "Certificate of Extracurricular Events" }
];

export default function EducationSection() {
  return (
    <section
      id="education"
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-blue-500 mb-4">EDUCATION and CERTIFICATIONS</h2>
          <p className="text-xl text-black dark:text-blue-500 max-w-2xl">
            My educational background includes studying Bachelor's at University, and Higher Education respectively.

            <br />
            
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Current Education */}
          <div className="bg-sky-100 dark:bg-slate-800 p-8 rounded-2xl text-black dark:text-blue-500">
            <div className="flex items-start space-x-4">
              <div className="bg-sky-200 p-3 rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Engineering</h3>
                <p className="text-black dark:text-blue-500 font-semibold text-lg mb-1 -ml-2 md:-ml-3 text-left">Computer Systems Engineering</p>
                <p className="text-white mb-3">Brunel University of London</p>
                <p className="text-sm text-black dark:text-blue-500 mb-4">Expected Graduation: July 2025</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {coursework.map((course) => (
                        <span key={course} className="text-sm text-white">• {course}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Certifications */}
          <div className="space-y-8">
            {/* Technical Skills */}
            <Card className="bg-sky-100 dark:bg-slate-800 border border-sky-200 dark:border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                  <div className="bg-sky-200 p-2 rounded-lg mr-3">
                    <svg className="h-5 w-5 text-black dark:text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                  </div>
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-black dark:text-blue-500 mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((lang) => (
                        <Badge key={lang} variant="primary" className="text-sm">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-black dark:text-blue-500 mb-2">Frameworks & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((framework) => (
                        <Badge key={framework} variant="primary" className="text-sm">
                          {framework}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-sky-100 dark:bg-slate-800 border border-sky-200 dark:border-slate-700">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-black dark:text-blue-500 mb-6 flex items-center">
                  <div className="bg-sky-200 p-2 rounded-lg mr-3">
                    <Award className="h-5 w-5 text-black dark:text-blue-500" />
                  </div>
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="flex items-center justify-between">
                      <span className="text-white">{cert.name}</span>
                      <span className="text-sm text-black dark:text-blue-500">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-12">
          <Card className="bg-sky-100 dark:bg-slate-800 border border-sky-200 dark:border-slate-700">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-black dark:text-blue-500 mb-6 text-left">Achievements & Activities</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-blue-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-blue-800 dark:text-blue-200" />
                      </div>
                      <h4 className="font-semibold text-black dark:text-blue-500 mb-1">{achievement.title}</h4>
                      <p className="text-sm text-black dark:text-blue-500">{achievement.subtitle}</p>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
