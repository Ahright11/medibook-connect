import { GraduationCap, Award, Clock, Users } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function AboutSection() {
  const { about } = siteConfig;
  
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div>
            <h2 className="section-title">Σχετικά με Εμένα</h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8">
              {about.bio}
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-accent/50 rounded-xl p-4 text-center">
                <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">{about.experience}</p>
                <p className="text-sm text-muted-foreground">Εμπειρία</p>
              </div>
              <div className="bg-accent/50 rounded-xl p-4 text-center">
                <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                <p className="text-2xl font-bold text-foreground">5000+</p>
                <p className="text-sm text-muted-foreground">Ικανοποιημένοι Ασθενείς</p>
              </div>
            </div>
          </div>
          
          {/* Credentials Section */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Εκπαίδευση & Πιστοποιήσεις
                </h3>
              </div>
              <ul className="space-y-3 ml-13">
                {about.education.map((edu, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm md:text-base">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Associations */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  Επαγγελματικοί Σύλλογοι
                </h3>
              </div>
              <ul className="space-y-3 ml-13">
                {about.associations.map((assoc, index) => (
                  <li 
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <span className="text-sm md:text-base">{assoc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
