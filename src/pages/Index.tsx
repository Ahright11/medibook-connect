import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PracticalInfoSection } from "@/components/sections/PracticalInfoSection";
import { LocationSection } from "@/components/sections/LocationSection";
import { BookingSection } from "@/components/sections/BookingSection";
import { FloatingButtons } from "@/components/FloatingButtons";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site.config";

const Index = () => {
  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "name": siteConfig.doctorName,
    "description": siteConfig.seo.description,
    "medicalSpecialty": siteConfig.title,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.address,
      "addressLocality": "Αθήνα",
      "addressCountry": "GR"
    },
    "telephone": siteConfig.phone,
    "email": siteConfig.email,
    "openingHoursSpecification": Object.entries(siteConfig.workingHours)
      .filter(([, hours]) => hours !== 'Κλειστά')
      .map(([day, hours]) => ({
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": day,
        "opens": hours.split(' - ')[0],
        "closes": hours.split(' - ')[1]
      })),
    "priceRange": "€€",
    "acceptsReservations": true
  };

  return (
    <>
      <Helmet>
        <title>{siteConfig.seo.title}</title>
        <meta name="description" content={siteConfig.seo.description} />
        <meta name="keywords" content={siteConfig.seo.keywords} />
        <meta property="og:title" content={siteConfig.seo.title} />
        <meta property="og:description" content={siteConfig.seo.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteConfig.seo.title} />
        <meta name="twitter:description" content={siteConfig.seo.description} />
        <link rel="canonical" href={window.location.origin} />
        <meta name="robots" content="index, follow" />
        <meta name="geo.region" content="GR" />
        <meta name="geo.placename" content="Αθήνα" />
        <html lang="el" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <TestimonialsSection />
          <PracticalInfoSection />
          <LocationSection />
          <BookingSection />
        </main>
        
        <Footer />
        <FloatingButtons />
      </div>
    </>
  );
};

export default Index;
