import { useState } from "react";
import { Menu, X, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site.config";

const navLinks = [
  { label: "Υπηρεσίες", href: "#services" },
  { label: "Σχετικά", href: "#about" },
  { label: "Μαρτυρίες", href: "#testimonials" },
  { label: "Πληροφορίες", href: "#practical-info" },
  { label: "Τοποθεσία", href: "#location" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleCallClick = () => {
    window.location.href = `tel:${siteConfig.phone}`;
  };

  const scrollToBooking = () => {
    setIsMenuOpen(false);
    document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo / Name */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">
              {siteConfig.doctorName.split(' ').slice(-1)[0].charAt(0)}
            </span>
          </div>
          <div className="hidden sm:block">
            <p className="font-semibold text-foreground text-sm leading-tight">
              {siteConfig.doctorName}
            </p>
            <p className="text-xs text-muted-foreground">
              {siteConfig.title}
            </p>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm" onClick={handleCallClick}>
            <Phone className="w-4 h-4 mr-2" />
            {siteConfig.phone}
          </Button>
          <Button size="sm" onClick={scrollToBooking}>
            <Calendar className="w-4 h-4 mr-2" />
            Ραντεβού
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </Button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container py-4 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-border mt-2">
              <Button variant="outline" onClick={handleCallClick}>
                <Phone className="w-4 h-4 mr-2" />
                {siteConfig.phone}
              </Button>
              <Button onClick={scrollToBooking}>
                <Calendar className="w-4 h-4 mr-2" />
                Κλείστε Ραντεβού
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
