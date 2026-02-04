import { Activity, HeartPulse, Bone, Brain, Home, Sparkles, Package } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site.config";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  activity: Activity,
  "heart-pulse": HeartPulse,
  bone: Bone,
  brain: Brain,
  home: Home,
  spine: Sparkles, // Using Sparkles as spine alternative
};

export function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Υπηρεσίες & Θεραπείες</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Εξειδικευμένη αντιμετώπιση για κάθε πάθηση με σύγχρονες τεχνικές και εξατομικευμένη προσέγγιση
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {siteConfig.services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Activity;
            return (
              <Card 
                key={index} 
                className="card-medical hover:border-primary/30 group transition-all duration-300"
              >
                <CardHeader className="pb-3">
                  <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{service.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                {service.price && (
                  <CardContent className="pt-0">
                    <span className="text-primary font-semibold">
                      από {service.price}
                    </span>
                  </CardContent>
                )}
              </Card>
            );
          })}
        </div>
        
        {/* Packages */}
        {siteConfig.packages && siteConfig.packages.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-8">
              <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center justify-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                Πακέτα Συνεδριών
              </h3>
              <p className="text-muted-foreground">
                Εξοικονομήστε με τα πακέτα πολλαπλών συνεδριών
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {siteConfig.packages.map((pkg, index) => (
                <Card 
                  key={index} 
                  className="card-medical border-primary/20 bg-gradient-to-br from-accent/50 to-background"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{pkg.name}</CardTitle>
                    <CardDescription>{pkg.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                      {pkg.savings && (
                        <span className="text-sm text-success font-medium">
                          {pkg.savings}
                        </span>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
