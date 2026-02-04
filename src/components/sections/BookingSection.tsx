import { useState } from "react";
import { format } from "date-fns";
import { el } from "date-fns/locale";
import { Calendar as CalendarIcon, User, Phone, Mail, FileText, Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site.config";

interface FormData {
  name: string;
  phone: string;
  email: string;
  service: string;
  visitType: 'first' | 'followup';
  selectedDate: Date | undefined;
  selectedTime: string;
  notes: string;
  gdprConsent: boolean;
}

export function BookingSection() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    visitType: 'first',
    selectedDate: undefined,
    selectedTime: '',
    notes: '',
    gdprConsent: false,
  });

  // Check if a date is available
  const isDateDisabled = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Past dates
    if (date < today) return true;
    
    // More than 60 days in future
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 60);
    if (date > maxDate) return true;
    
    // Unavailable days (e.g., Sunday)
    if (siteConfig.unavailableDays?.includes(date.getDay())) return true;
    
    // Blocked specific dates
    const dateStr = format(date, 'yyyy-MM-dd');
    if (siteConfig.blockedDates?.includes(dateStr)) return true;
    
    return false;
  };

  // Get available time slots for selected date
  const getAvailableSlots = () => {
    if (!formData.selectedDate) return [];
    
    // Get day of week to check working hours
    const dayNames = ['Κυριακή', 'Δευτέρα', 'Τρίτη', 'Τετάρτη', 'Πέμπτη', 'Παρασκευή', 'Σάββατο'];
    const dayName = dayNames[formData.selectedDate.getDay()];
    const workingHours = siteConfig.workingHours[dayName as keyof typeof siteConfig.workingHours];
    
    if (workingHours === 'Κλειστά') return [];
    
    // Parse working hours
    const [openTime, closeTime] = workingHours.split(' - ');
    const openHour = parseInt(openTime.split(':')[0]);
    const closeHour = parseInt(closeTime.split(':')[0]);
    
    // Filter time slots within working hours
    return siteConfig.timeSlots?.filter(slot => {
      const slotHour = parseInt(slot.split(':')[0]);
      return slotHour >= openHour && slotHour < closeHour;
    }) || [];
  };

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
    if (!formData.name.trim() || !formData.phone.trim() || !formData.service || !formData.selectedDate || !formData.selectedTime) {
      toast({
        title: "Συμπληρώστε τα υποχρεωτικά πεδία",
        description: "Ονοματεπώνυμο, τηλέφωνο, υπηρεσία, ημερομηνία και ώρα είναι υποχρεωτικά",
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
        title: "Επιτυχής κράτηση!",
        description: `Το ραντεβού σας για ${format(formData.selectedDate, 'dd/MM/yyyy', { locale: el })} στις ${formData.selectedTime} επιβεβαιώθηκε.`,
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        visitType: 'first',
        selectedDate: undefined,
        selectedTime: '',
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

  const availableSlots = getAvailableSlots();

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

  // Custom form with calendar
  return (
    <section id="booking" className="section-padding bg-background">
      <div className="container max-w-2xl">
        <div className="text-center mb-12">
          <h2 className="section-title">Κλείστε Ραντεβού</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Επιλέξτε διαθέσιμη ημερομηνία και ώρα
          </p>
        </div>
        
        <Card className="card-medical">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-primary" />
              Κράτηση Ραντεβού
            </CardTitle>
            <CardDescription>
              Επιλέξτε από τις διαθέσιμες ημερομηνίες και ώρες
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
              
              {/* Date Picker */}
              <div className="space-y-2">
                <Label className="flex items-center gap-2">
                  <CalendarIcon className="w-4 h-4 text-muted-foreground" />
                  Επιλέξτε ημερομηνία *
                </Label>
                <Popover open={dateOpen} onOpenChange={setDateOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !formData.selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {formData.selectedDate ? (
                        format(formData.selectedDate, "EEEE, d MMMM yyyy", { locale: el })
                      ) : (
                        <span>Επιλέξτε ημερομηνία</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0 bg-popover z-50" align="start">
                    <Calendar
                      mode="single"
                      selected={formData.selectedDate}
                      onSelect={(date) => {
                        setFormData({ ...formData, selectedDate: date, selectedTime: '' });
                        setDateOpen(false);
                      }}
                      disabled={isDateDisabled}
                      locale={el}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>
              
              {/* Time Slots */}
              {formData.selectedDate && (
                <div className="space-y-3">
                  <Label className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    Επιλέξτε ώρα *
                  </Label>
                  {availableSlots.length > 0 ? (
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                      {availableSlots.map((slot) => (
                        <Button
                          key={slot}
                          type="button"
                          variant={formData.selectedTime === slot ? "default" : "outline"}
                          size="sm"
                          className={cn(
                            "text-sm",
                            formData.selectedTime === slot && "ring-2 ring-primary ring-offset-2"
                          )}
                          onClick={() => setFormData({ ...formData, selectedTime: slot })}
                        >
                          {slot}
                        </Button>
                      ))}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground py-2">
                      Δεν υπάρχουν διαθέσιμες ώρες για αυτή την ημέρα
                    </p>
                  )}
                </div>
              )}
              
              {/* Selected appointment summary */}
              {formData.selectedDate && formData.selectedTime && (
                <div className="bg-accent/50 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm font-medium text-foreground">
                    Επιλεγμένο ραντεβού:
                  </p>
                  <p className="text-primary font-semibold">
                    {format(formData.selectedDate, "EEEE, d MMMM yyyy", { locale: el })} στις {formData.selectedTime}
                  </p>
                </div>
              )}
              
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
                disabled={isSubmitting || !formData.selectedDate || !formData.selectedTime}
              >
                {isSubmitting ? (
                  "Υποβολή..."
                ) : (
                  <>
                    <Check className="w-5 h-5 mr-2" />
                    Επιβεβαίωση Ραντεβού
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
