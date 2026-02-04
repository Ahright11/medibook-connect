import { Facebook, Instagram, Linkedin } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-semibold text-lg mb-3">{siteConfig.doctorName}</h3>
            <p className="text-background/70 text-sm mb-4">
              {siteConfig.specialty}
            </p>
            <div className="flex gap-4">
              {siteConfig.socialLinks.facebook && (
                <a 
                  href={siteConfig.socialLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              )}
              {siteConfig.socialLinks.instagram && (
                <a 
                  href={siteConfig.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              )}
              {siteConfig.socialLinks.linkedin && (
                <a 
                  href={siteConfig.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-medium mb-3">Σύνδεσμοι</h4>
            <nav className="space-y-2">
              <a href="#services" className="block text-sm text-background/70 hover:text-background transition-colors">
                Υπηρεσίες
              </a>
              <a href="#about" className="block text-sm text-background/70 hover:text-background transition-colors">
                Σχετικά
              </a>
              <a href="#testimonials" className="block text-sm text-background/70 hover:text-background transition-colors">
                Μαρτυρίες
              </a>
              <a href="#booking" className="block text-sm text-background/70 hover:text-background transition-colors">
                Ραντεβού
              </a>
            </nav>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-medium mb-3">Επικοινωνία</h4>
            <div className="space-y-2 text-sm text-background/70">
              <p>{siteConfig.address}</p>
              <p>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-background transition-colors">
                  {siteConfig.phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-background transition-colors">
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-background/50">
          <p>© {currentYear} {siteConfig.doctorName}. Με επιφύλαξη παντός δικαιώματος.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-background transition-colors">
              Πολιτική Απορρήτου
            </a>
            <a href="/terms" className="hover:text-background transition-colors">
              Όροι Χρήσης
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
