import { CreditCard, Shield, Car, Accessibility, Info, Euro } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/config/site.config";

export function PracticalInfoSection() {
  const { insurance, pricing, practicalInfo } = siteConfig;
  
  return (
    <section id="practical-info" className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Χρήσιμες Πληροφορίες</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Όλα όσα χρειάζεται να γνωρίζετε πριν την επίσκεψή σας
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Insurance */}
          <Card className="card-medical">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                Ασφαλιστικά Ταμεία
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {insurance.map((ins, index) => (
                  <span 
                    key={index}
                    className="text-sm bg-accent text-accent-foreground px-3 py-1 rounded-full"
                  >
                    {ins}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          {/* Pricing */}
          <Card className="card-medical">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Euro className="w-5 h-5 text-primary" />
                Τιμές
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">Πρώτη επίσκεψη</span>
                <span className="font-semibold text-foreground">{pricing.firstVisit}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">Επανεξέταση</span>
                <span className="font-semibold text-foreground">{pricing.followUp}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground text-sm">Κατ' οίκον</span>
                <span className="font-semibold text-foreground">{pricing.homeVisit}</span>
              </div>
              {pricing.note && (
                <p className="text-xs text-muted-foreground pt-2 border-t border-border">
                  <Info className="w-3 h-3 inline mr-1" />
                  {pricing.note}
                </p>
              )}
            </CardContent>
          </Card>
          
          {/* Practical Details */}
          <Card className="card-medical md:col-span-2 lg:col-span-1">
            <CardHeader className="pb-3">
              <CardTitle className="text-base flex items-center gap-2">
                <Info className="w-5 h-5 text-primary" />
                Πρακτικές Πληροφορίες
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {practicalInfo.parking && (
                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{practicalInfo.parking}</span>
                </div>
              )}
              {practicalInfo.accessibility && (
                <div className="flex items-start gap-3">
                  <Accessibility className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{practicalInfo.accessibility}</span>
                </div>
              )}
              {practicalInfo.cancellation && (
                <div className="flex items-start gap-3">
                  <CreditCard className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{practicalInfo.cancellation}</span>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
