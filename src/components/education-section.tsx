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
  languages: ["Python", "C/C++", "JavaScript", "Java", "VHDL"],
  frameworks: ["React", "TensorFlow", "ROS", "Docker", "Git"]
};

const certifications = [
  { name: "LearntoCode - Front End Fundamentals", year: "2023" },
  { name: "Data Camp - ML Fundamentals", year: "2025" },
  { name: "Google AI - Skills certification", year: "2025" }
];

const achievements = [
  { icon: Trophy, title: "Data Science Society", subtitle: "Co-Founder" },
  { icon: Users, title: "Brunel Engineering Society", subtitle: "Member since 2023" },
  { icon: Award, title: "Brunel+ Silver Award", subtitle: "Certificate of Extracurricular Events" }
];

export default function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Education</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Building a strong foundation in computer systems engineering and emerging technologies.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Current Education */}
          <div className="bg-gradient-to-tr from-blue-400 to-blue-600 p-8 rounded-2xl text-white">
            <div className="flex items-start space-x-4">
              <div className="bg-white/20 p-3 rounded-lg">
                <GraduationCap className="h-6 w-6" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-2">Bachelor of Engineering</h3>
                <p className="text-blue-100 font-semibold text-lg mb-1">Computer Systems Engineering</p>
                <p className="text-blue-200 mb-3">Brunel University of London</p>
                <p className="text-sm text-blue-200 mb-4">Expected Graduation: July 2025</p>
                
                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {coursework.map((course) => (
                        <span key={course} className="text-sm text-blue-100">• {course}</span>
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
            <Card className="bg-blue-50 border border-blue-100">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                  <div className="bg-primary/10 p-2 rounded-lg mr-3">
                    <svg className="h-5 w-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
                    </svg>
                  </div>
                  Technical Skills
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Programming Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.languages.map((lang) => (
                        <Badge key={lang} variant="secondary" className="text-sm">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2">Frameworks & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((framework) => (
                        <Badge key={framework} variant="secondary" className="text-sm">
                          {framework}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card className="bg-blue-50 border border-blue-100">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center">
                  <div className="bg-primary/10 p-2 rounded-lg mr-3">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  Certifications
                </h3>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert.name} className="flex items-center justify-between">
                      <span className="text-slate-700">{cert.name}</span>
                      <span className="text-sm text-slate-500">{cert.year}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Achievements */}
        <div className="mt-12">
          <Card className="bg-blue-50 border border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">Achievements & Activities</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {achievements.map((achievement, index) => {
                  const IconComponent = achievement.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="h-8 w-8 text-primary" />
                      </div>
                      <h4 className="font-semibold text-slate-800 mb-1">{achievement.title}</h4>
                      <p className="text-sm text-slate-600">{achievement.subtitle}</p>
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
