import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { siteConfig } from "@/config/site.config";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="section-title">Τι Λένε οι Ασθενείς μας</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Εμπιστευτείτε την εμπειρία χιλιάδων ικανοποιημένων ασθενών
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {siteConfig.testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="card-medical relative overflow-hidden"
            >
              <CardContent className="pt-6 pb-6">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star 
                      key={i}
                      className={`w-4 h-4 ${
                        i < testimonial.rating 
                          ? 'text-warning fill-warning' 
                          : 'text-muted'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Testimonial text */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.anonymous ? testimonial.name : testimonial.name}
                    </p>
                    {testimonial.condition && (
                      <p className="text-xs text-muted-foreground">
                        Για: {testimonial.condition}
                      </p>
                    )}
                  </div>
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-semibold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
