import { MapPin, Clock, Phone, Mail, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";

export function LocationSection() {
  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.phone}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${siteConfig.email}`;
  };

  return (
    <section id="location" className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Τοποθεσία & Ώρες Λειτουργίας</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Βρείτε μας εύκολα και επικοινωνήστε μαζί μας
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Map */}
          <Card className="card-medical overflow-hidden h-80 lg:h-auto">
            <div className="w-full h-full min-h-[320px] bg-muted relative">
              {/* Google Maps Embed Placeholder */}
              <iframe
                src={siteConfig.googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="Τοποθεσία ιατρείου"
              />
            </div>
          </Card>
          
          {/* Info */}
          <div className="space-y-6">
            {/* Address */}
            <Card className="card-medical">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Διεύθυνση</h3>
                    <p className="text-muted-foreground">{siteConfig.address}</p>
                    <Button 
                      variant="link" 
                      className="p-0 h-auto mt-1 text-primary"
                      onClick={() => window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.address)}`, '_blank')}
                    >
                      Οδηγίες <ExternalLink className="w-3 h-3 ml-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Contact */}
            <Card className="card-medical">
              <CardContent className="p-6 space-y-4">
                <div 
                  className="flex items-center gap-4 cursor-pointer hover:bg-accent/50 -mx-2 px-2 py-2 rounded-lg transition-colors"
                  onClick={handleCallClick}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-0.5">Τηλέφωνο</h3>
                    <p className="text-primary font-medium">{siteConfig.phone}</p>
                  </div>
                </div>
                
                <div 
                  className="flex items-center gap-4 cursor-pointer hover:bg-accent/50 -mx-2 px-2 py-2 rounded-lg transition-colors"
                  onClick={handleEmailClick}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-0.5">Email</h3>
                    <p className="text-muted-foreground">{siteConfig.email}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Working Hours */}
            <Card className="card-medical">
              <CardContent className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground pt-3">Ωράριο Λειτουργίας</h3>
                </div>
                <div className="space-y-2 ml-16">
                  {Object.entries(siteConfig.workingHours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{day}</span>
                      <span className={`font-medium ${hours === 'Κλειστά' ? 'text-destructive' : 'text-foreground'}`}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
