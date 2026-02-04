import { useState } from "react";
import { Calendar, User, Phone, Mail, FileText, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { siteConfig } from "@/config/site.config";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  visitType: 'first' | 'followup';
  preferredDate: string;
  notes: string;
  gdprConsent: boolean;
}

export function BookingSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    visitType: 'first',
    preferredDate: '',
    notes: '',
    gdprConsent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.gdprConsent) {
      toast({
        title: "Απαιτείται συγκατάθεση",
        description: "Παρακαλώ αποδεχτείτε την πολιτική απορρήτου",
        variant: "destructive",
      });
      return;
    }

    // Validate required fields
    if (!formData.name.trim() || !formData.phone.trim() || !formData.service) {
      toast({
        title: "Συμπληρώστε τα υποχρεωτικά πεδία",
        description: "Ονοματεπώνυμο, τηλέφωνο και υπηρεσία είναι υποχρεωτικά",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    try {
      // In production, this would send to siteConfig.formWebhookUrl
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Επιτυχής υποβολή!",
        description: "Θα επικοινωνήσουμε μαζί σας σύντομα για επιβεβαίωση.",
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        visitType: 'first',
        preferredDate: '',
        notes: '',
        gdprConsent: false,
      });
    } catch {
      toast({
        title: "Σφάλμα",
        description: "Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Cal.com embed
  if (siteConfig.bookingType === 'cal') {
    return (
      <section id="booking" className="section-padding bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">Κλείστε Ραντεβού</h2>
            <p className="section-subtitle max-w-2xl mx-auto">
              Επιλέξτε την ημερομηνία και ώρα που σας βολεύει
            </p>
          </div>
          
          <Card className="card-medical overflow-hidden">
            <CardContent className="p-0">
              <iframe
                src={siteConfig.calEmbedUrl}
                width="100%"
                height="700"
                frameBorder="0"
                title="Κλείσιμο ραντεβού"
                className="min-h-[600px]"
              />
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  // Custom form
  return (
    <section id="booking" className="section-padding bg-background">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Κλείστε Ραντεβού</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας
          </p>
        </div>
        
        <Card className="card-medical">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              Αίτημα Ραντεβού
            </CardTitle>
            <CardDescription>
              Θα επιβεβαιώσουμε το ραντεβού σας τηλεφωνικά
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center gap-2">
                  <User className="w-4 h-4 text-muted-foreground" />
                  Ονοματεπώνυμο *
                </Label>
                <Input
                  id="name"
                  placeholder="π.χ. Γιώργος Παπαδόπουλος"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  maxLength={100}
                />
              </div>
              
              {/* Phone & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-muted-foreground" />
                    Τηλέφωνο *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="69xxxxxxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    maxLength={15}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-muted-foreground" />
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    maxLength={255}
                  />
                </div>
              </div>
              
              {/* Service */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  Υπηρεσία *
                </Label>
                <Select 
                  value={formData.service}
                  onValueChange={(value) => setFormData({ ...formData, service: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Επιλέξτε υπηρεσία" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-50">
                    {siteConfig.services.map((service, index) => (
                      <SelectItem key={index} value={service.name}>
                        {service.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              {/* Visit Type */}
              <div className="space-y-3">
                <Label>Τύπος επίσκεψης</Label>
                <RadioGroup
                  value={formData.visitType}
                  onValueChange={(value: 'first' | 'followup') => 
                    setFormData({ ...formData, visitType: value })
                  }
                  className="flex gap-6"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="first" id="first" />
                    <Label htmlFor="first" className="font-normal cursor-pointer">
                      Πρώτη επίσκεψη
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="followup" id="followup" />
                    <Label htmlFor="followup" className="font-normal cursor-pointer">
                      Επανεξέταση
                    </Label>
                  </div>
                </RadioGroup>
              </div>
              
              {/* Preferred Date */}
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  Προτιμώμενη ημερομηνία
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              {/* Notes */}
              <div className="space-y-2">
                <Label htmlFor="notes">Σημειώσεις (προαιρετικά)</Label>
                <Textarea
                  id="notes"
                  placeholder="Περιγράψτε σύντομα το πρόβλημά σας..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  rows={3}
                  maxLength={1000}
                />
              </div>
              
              {/* GDPR Consent */}
              <div className="flex items-start space-x-3 py-4 px-4 bg-muted/50 rounded-lg">
                <Checkbox
                  id="gdpr"
                  checked={formData.gdprConsent}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, gdprConsent: checked as boolean })
                  }
                  className="mt-0.5"
                />
                <Label htmlFor="gdpr" className="text-sm font-normal cursor-pointer leading-relaxed">
                  Συμφωνώ με την επεξεργασία των προσωπικών μου δεδομένων σύμφωνα με την{" "}
                  <a href="/privacy" className="text-primary underline">
                    πολιτική απορρήτου
                  </a>
                  . *
                </Label>
              </div>
              
              {/* Submit Button */}
              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Υποβολή..."
                ) : (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Υποβολή Αιτήματος
                  </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
