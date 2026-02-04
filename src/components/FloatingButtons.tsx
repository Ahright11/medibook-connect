import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site.config";

export function FloatingButtons() {
  const handlePhoneClick = () => {
    window.location.href = `tel:${siteConfig.phone}`;
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(`Γεια σας, θα ήθελα να κλείσω ραντεβού.`);
    window.open(`https://wa.me/${siteConfig.whatsapp.replace(/[^0-9]/g, '')}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <button
        onClick={handleWhatsAppClick}
        className="floating-button w-12 h-12 bg-[#25D366] text-white hover:bg-[#20BD5C]"
        aria-label="Επικοινωνία μέσω WhatsApp"
      >
        <MessageCircle className="w-5 h-5" />
      </button>
      
      {/* Phone Button */}
      <button
        onClick={handlePhoneClick}
        className="floating-button w-14 h-14 bg-primary text-primary-foreground animate-pulse-soft"
        aria-label="Κλήση τηλεφώνου"
      >
        <Phone className="w-6 h-6" />
      </button>
    </div>
  );
}
