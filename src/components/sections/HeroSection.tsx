import { Phone, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";

export function HeroSection() {
  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.phone}`;
  };

  const scrollToBooking = () => {
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-br from-accent via-background to-muted overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      
      <div className="container relative py-12 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in">
            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              <span>Πιστοποιημένος Επαγγελματίας</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
              {siteConfig.doctorName}
            </h1>
            
            <p className="text-xl md:text-2xl text-primary font-medium mb-2">
              {siteConfig.specialty}
            </p>
            
            <p className="text-muted-foreground text-base md:text-lg mb-8 max-w-xl mx-auto lg:mx-0">
              {siteConfig.credentials}
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg" 
                onClick={scrollToBooking}
                className="text-base px-8 py-6 shadow-medium hover:shadow-large transition-all"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Κλείσε Ραντεβού
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={handleCallClick}
                className="text-base px-8 py-6 border-2"
              >
                <Phone className="w-5 h-5 mr-2" />
                {siteConfig.phone}
              </Button>
            </div>
            
            {/* Certifications */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {siteConfig.certifications.map((cert, index) => (
                <span 
                  key={index}
                  className="text-xs bg-muted text-muted-foreground px-3 py-1.5 rounded-full"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
          
          {/* Doctor Image Placeholder */}
          <div className="order-1 lg:order-2 flex justify-center animate-slide-in-right">
            <div className="relative">
              {/* Image container with professional styling */}
              <div className="relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[480px] rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 shadow-xl">
                {/* Placeholder for doctor photo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-6">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-4xl text-primary/40">👨‍⚕️</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Φωτογραφία Ιατρού
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent rounded-xl -z-10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
