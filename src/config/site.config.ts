// Site Configuration - Edit this file to customize your medical practice website

export const siteConfig = {
  // Doctor Information
  doctorName: "Δρ. Γιώργος Παπαδόπουλος",
  title: "Φυσικοθεραπευτής",
  specialty: "Φυσικοθεραπευτής MSc",
  credentials: "MSc Αθλητική Φυσικοθεραπεία, Πανεπιστήμιο Αθηνών",
  
  // Contact Information
  phone: "+30 210 1234567",
  whatsapp: "+306912345678",
  email: "info@physio-papadopoulos.gr",
  address: "Λεωφόρος Κηφισίας 120, Αθήνα 11526",
  googleMapsUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.5!2d23.78!3d37.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM3XCsDU4JzQ4LjAiTiAyM8KwNDYnNDguMCJF!5e0!3m2!1sen!2sgr!4v1234567890",
  
  // Services
  services: [
    {
      name: "Αθλητικές Κακώσεις",
      description: "Θεραπεία και αποκατάσταση τραυματισμών από άθληση",
      icon: "activity",
      price: "50€"
    },
    {
      name: "Χρόνιος Πόνος",
      description: "Αντιμετώπιση χρόνιου πόνου σε αυχένα, μέση και πλάτη",
      icon: "heart-pulse",
      price: "50€"
    },
    {
      name: "Μετεγχειρητική Αποκατάσταση",
      description: "Πρόγραμμα αποκατάστασης μετά από ορθοπεδικές επεμβάσεις",
      icon: "bone",
      price: "55€"
    },
    {
      name: "Νευρολογική Φυσικοθεραπεία",
      description: "Θεραπεία για εγκεφαλικά επεισόδια και νευρολογικά προβλήματα",
      icon: "brain",
      price: "60€"
    },
    {
      name: "Θεραπεία Σκολίωσης",
      description: "Εξειδικευμένη αντιμετώπιση σκολίωσης με μέθοδο Schroth",
      icon: "spine",
      price: "55€"
    },
    {
      name: "Κατ' Οίκον Επίσκεψη",
      description: "Φυσικοθεραπεία στο χώρο σας για ασθενείς με δυσκολία μετακίνησης",
      icon: "home",
      price: "70€"
    }
  ],
  
  // Treatment Packages
  packages: [
    {
      name: "Πρόγραμμα 5 Συνεδριών",
      description: "Ιδανικό για οξείες παθήσεις",
      price: "220€",
      savings: "Εξοικονομείτε 30€"
    },
    {
      name: "Πρόγραμμα 10 Συνεδριών",
      description: "Για χρόνιες παθήσεις και πλήρη αποκατάσταση",
      price: "400€",
      savings: "Εξοικονομείτε 100€"
    }
  ],
  
  // About Section
  about: {
    bio: "Με πάνω από 15 χρόνια εμπειρίας στη φυσικοθεραπεία, αφοσιώνομαι στην αποκατάσταση της κινητικότητας και της ποιότητας ζωής των ασθενών μου. Πιστεύω στην εξατομικευμένη προσέγγιση και τη συνεχή ενημέρωση με τις τελευταίες επιστημονικές εξελίξεις.",
    education: [
      "MSc Αθλητική Φυσικοθεραπεία - Πανεπιστήμιο Αθηνών (2012)",
      "Πτυχίο Φυσικοθεραπείας - ΤΕΙ Αθηνών (2008)",
      "Πιστοποίηση Manual Therapy - IOMT (2014)",
      "Πιστοποίηση Dry Needling - Myopain Seminars (2016)"
    ],
    experience: "15+ χρόνια",
    associations: [
      "Πανελλήνιος Σύλλογος Φυσικοθεραπευτών",
      "World Physiotherapy (WCPT)",
      "Ελληνική Εταιρεία Αθλητικής Φυσικοθεραπείας"
    ]
  },
  
  // Testimonials
  testimonials: [
    {
      name: "Μαρία Κ.",
      text: "Μετά από χρόνια ταλαιπωρίας με πόνους στη μέση, επιτέλους βρήκα λύση. Ο Δρ. Παπαδόπουλος εξήγησε αναλυτικά το πρόβλημα και το πρόγραμμα θεραπείας ήταν αποτελεσματικό.",
      rating: 5,
      condition: "Οσφυαλγία",
      anonymous: true
    },
    {
      name: "Κώστας Α.",
      text: "Εξαιρετικός επαγγελματίας. Με βοήθησε να επιστρέψω στον αθλητισμό μετά από σοβαρό τραυματισμό στο γόνατο. Τον συστήνω ανεπιφύλακτα.",
      rating: 5,
      condition: "Ρήξη χιαστού",
      anonymous: true
    },
    {
      name: "Ελένη Π.",
      text: "Πολύ καλή επικοινωνία, επαγγελματισμός και αποτελεσματικότητα. Το ιατρείο είναι σύγχρονο και καθαρό.",
      rating: 5,
      condition: "Αυχενικό σύνδρομο",
      anonymous: true
    }
  ],
  
  // Insurance & Practical Info
  insurance: [
    "ΕΟΠΥΥ (με παραπεμπτικό)",
    "Ιδιωτική Ασφάλιση",
    "Interamerican",
    "Εθνική Ασφαλιστική",
    "Generali",
    "Eurolife"
  ],
  
  pricing: {
    firstVisit: "60€",
    followUp: "50€",
    homeVisit: "70€",
    note: "Η πρώτη επίσκεψη περιλαμβάνει πλήρη αξιολόγηση"
  },
  
  practicalInfo: {
    parking: "Διαθέσιμο δωρεάν parking στο κτίριο",
    accessibility: "Πλήρης πρόσβαση για ΑμεΑ με ράμπα και ασανσέρ",
    cancellation: "Παρακαλούμε ενημερώστε μας 24 ώρες πριν για ακυρώσεις"
  },
  
  // Working Hours
  workingHours: {
    "Δευτέρα": "09:00 - 21:00",
    "Τρίτη": "09:00 - 21:00",
    "Τετάρτη": "09:00 - 21:00",
    "Πέμπτη": "09:00 - 21:00",
    "Παρασκευή": "09:00 - 17:00",
    "Σάββατο": "09:00 - 14:00",
    "Κυριακή": "Κλειστά"
  },
  
  // Social Links
  socialLinks: {
    facebook: "https://facebook.com/physiopapadopoulos",
    instagram: "https://instagram.com/physiopapadopoulos",
    linkedin: "https://linkedin.com/in/physiopapadopoulos"
  },
  
  // Trust Badges / Certifications
  certifications: [
    "Πανελλήνιος Σύλλογος Φυσικοθεραπευτών",
    "ISO 9001:2015",
    "Manual Therapy Certified"
  ],
  
  // Booking Configuration
  bookingType: 'form' as 'cal' | 'form', // 'cal' for Cal.com, 'form' for custom form
  calEmbedUrl: "https://cal.com/your-username/consultation",
  formWebhookUrl: "https://your-webhook-url.com/booking",
  
  // SEO
  seo: {
    title: "Δρ. Γιώργος Παπαδόπουλος | Φυσικοθεραπευτής Αθήνα",
    description: "Εξειδικευμένες υπηρεσίες φυσικοθεραπείας στην Αθήνα. Αθλητικές κακώσεις, χρόνιος πόνος, μετεγχειρητική αποκατάσταση. Κλείστε ραντεβού online.",
    keywords: "φυσικοθεραπευτής, αθήνα, φυσικοθεραπεία, αθλητικές κακώσεις, χρόνιος πόνος"
  }
};

export type SiteConfig = typeof siteConfig;
