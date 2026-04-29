"use client";

import Image from "next/image";
import { useMemo, useState, useCallback } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Briefcase,
  Building2,
  CarFront,
  Check,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Headphones,
  Hotel,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Shield,
  Star,
  Users,
  X,
  Zap,
  CalendarCheck,
} from "lucide-react";

// ─────────────────────────────────────────────────────────────────────────────
// CONSTANTS
// ─────────────────────────────────────────────────────────────────────────────
const PHONE = "+32490373903";
const WHATSAPP = "32490373903";
const EMAIL = "info@blackcab-shuttle.com";
const COMPANY_NAME = "SCH Company SRL";
const BRAND_NAME = "BlackCab Shuttle Brussels";
const BASE_URL = "https://www.blackcab-shuttle.com";
const INSTAGRAM_URL =
  "https://www.instagram.com/blackcab.brussels?igsh=MWluZTV5MGZvZmxqYQ==";

const images = {
  hero: "/images/1.jpg",
  interior: "/images/5.jpg",
  cta: "/images/10.jpg",
  services: ["/images/2.jpg", "/images/8.jpg", "/images/4.jpg", "/images/9.jpg"],
  fleet: ["/images/3.jpg", "/images/7.jpg", "/images/11.jpg"],
};

const createWhatsappUrl = (message = "Hello, I need a transfer with BlackCab Shuttle.") =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(message)}`;

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: BRAND_NAME,
  legalName: COMPANY_NAME,
  url: BASE_URL,
  telephone: PHONE,
  email: EMAIL,
  areaServed: ["Brussels", "Brussels Airport", "Zaventem", "Charleroi", "Belgium"],
  serviceType: [
    "Airport transfer",
    "Taxi service",
    "Private chauffeur",
    "VIP chauffeur service",
    "Mercedes van transport",
  ],
  availableLanguage: ["English", "French", "Dutch"],
  openingHours: "Mo-Su 00:00-23:59",
  priceRange: "€€",
};

// ─────────────────────────────────────────────────────────────────────────────
// TRANSLATIONS — all strings in all 3 languages, no hard-coded English
// ─────────────────────────────────────────────────────────────────────────────
const content = {
  en: {
    nav: ["Services", "Fleet", "Reviews", "FAQ", "Contact"],
    heroTitle: "Airport Shuttle in Brussels, Charleroi, Paris, Amsterdam",
    heroText:
      "Travel in comfort with our Tesla fleet, Mercedes Van and VIP service. Fixed prices, fast confirmation by WhatsApp.",
    bullets: [
      "Brussels Airport from €29",
      "Trusted by 800+ customers across Belgium",
      "Secure payment link sent after booking",
    ],
    trustedBy:
      "Trusted by hotels, VIP clients and frequent airport travelers in Brussels.",
    googleReview: "4.7/5 from 800+ positive reviews",
    quote: "Request Your Quote",
    fastReply: "Fast reply guaranteed",
    quickTitle: "Popular routes",
    quickLocations: ["Brussels Airport", "Charleroi Airport", "Brussels Midi", "City Center"],
    pickup: "Pickup location",
    dropoff: "Drop-off location",
    date: "Date",
    time: "Time",
    passengers: "Passengers",
    luggage: "Luggage",
    flightNumber: "Flight number",
    returnTrip: "Return trip",
    childSeat: "Child seat",
    vehicle: "Vehicle",
    specialRequest: "Special request",
    specialRequestPlaceholder: "Ex: name sign, reduced mobility…",
    no: "No",
    yes: "Yes",
    fieldRequired: "Required field",
    request: "Request my quote",
    whatsapp: "Send on WhatsApp",
    call: "Call us",
    stats: [
      ["800+", "Positive Reviews"],
      ["9,000+", "Trips Completed"],
      ["4.7/5", "Average Rating"],
      ["24/7", "Available"],
      ["< 2 min", "Reply Time"],
    ],
    whyTitle: "Why Choose BlackCab Shuttle?",
    whyText:
      "We combine luxury, reliability and premium service for private and corporate clients.",
    why: [
      ["Tesla Comfort", "Premium black Tesla vehicles for every transfer."],
      ["Fixed Prices", "Know your exact price before you book."],
      ["Professional Drivers", "Licensed, multilingual and discreet drivers."],
      ["Flight Monitoring", "We track your flight and adapt to any delay."],
      ["24/7 Service", "Available day and night, 365 days a year."],
      ["Door-to-Door", "Pickup and drop-off exactly where you need."],
    ],
    howTitle: "How It Works",
    how: [
      ["Enter Your Ride", "Add pickup, destination and trip details."],
      ["Receive Your Quote", "We reply quickly with a fixed, all-inclusive price."],
      ["Confirm & Relax", "Book by WhatsApp and receive instant confirmation."],
    ],
    perfect: "Perfect for",
    perfectItems: [
      "Airport Travelers",
      "Business Customers",
      "Hotels & VIP Clients",
      "Tourists Visiting Belgium",
    ],
    servicesTitle: "Our Services",
    servicesSub:
      "Tailored to airport travelers, business customers, hotels, VIP clients and tourists visiting Belgium.",
    learnMore: "Learn more",
    services: [
      ["Airport Transfers", "Brussels Airport, Charleroi and all major transfer routes."],
      ["City Rides", "Fast, comfortable rides anywhere in Brussels."],
      ["Long Distance", "Travel across Belgium with direct confirmation."],
      ["Business Travel", "Executive rides, monthly invoicing and priority service."],
    ],
    fleetTitle: "Our Fleet",
    fleetSub: "Choose the right vehicle for your journey.",
    fleet: [
      ["Tesla Premium", "1–4 passengers. Ideal for premium airport transfers."],
      ["Mercedes Vito Van", "Up to 8 passengers. Ideal for families, groups and extra luggage."],
      ["VIP Business Service", "Premium driver experience for corporates, hotels and events."],
    ],
    customerTrust: "Customer trust",
    customerTrustTitle: "Premium transfers with fast response and real local service.",
    customerTrustText:
      "Direct WhatsApp communication, fixed prices, clean vehicles and professional drivers.",
    reviewStats: ["800+ Reviews", "9,000+ Trips", "24/7 Support"],
    reviewsTitle: "Verified Customer Reviews",
    verifiedCustomer: "Verified Customer",
    reviews: [
      ["Patrick D.", "Bruxelles", "Perfect service. Driver on time and very professional.", "March 2026"],
      ["Sophie L.", "Waterloo", "Quick reply, easy booking and smooth airport transfer.", "March 2026"],
      ["Olivier M.", "Uccle", "Clean car, polite driver and excellent comfort.", "February 2026"],
      ["Bernard T.", "Woluwe-Saint-Pierre", "Serious service and clear communication.", "February 2026"],
    ],
    ctaTitle: "Ready to Ride?",
    ctaText:
      "Book now a premium Tesla transfers, Mercedes van transport and VIP chauffeur service in Belgium.",
    ctaCards: [
      ["Instant Booking", "Send your details and get confirmed in minutes."],
      ["Direct Confirmation", "Receive your booking confirmation on WhatsApp."],
      ["24/7 Support", "Our team is available around the clock for you."],
    ],
    paymentMethods: ["Visa", "Mastercard", "Apple Pay", "Google Pay", "Secure Online Payment"],
    seoTitle: "Taxi Brussels, Airport Transfer & VIP driver Service",
    seoTexts: [
      "BlackCab Shuttle Brussels provides premium taxi services, Brussels Airport transfers, Zaventem airport shuttle, private drivers, Mercedes Vito Van transport and VIP service across Belgium.",
      "Book your taxi in Brussels easily via WhatsApp with fixed prices, professional drivers and fast confirmation. Whether you need an airport transfer, a city ride or a long-distance ride, BlackCab Shuttle guarantees comfort and reliability.",
      "Our services include airport Zaventem shuttle in Brussels, VIP chauffeur service and Mercedes Van transport for groups and families.",
    ],
    businessTag: "Business Accounts",
    businessText:
      "Monthly invoicing • Priority bookings • Dedicated chauffeur service for companies, executives and hotels.",
    faqTitle: "FAQ",
    faq: [
      ["How do I book?", "Send your trip details via WhatsApp and we confirm availability and price instantly."],
      ["How fast do you respond?", "Most requests receive a reply in under 2 minutes."],
      ["Do you offer airport transfers?", "Yes, to and from Brussels Airport, Charleroi and other Belgian destinations."],
      ["Can I book for business travel?", "Yes, we offer business accounts, monthly invoicing and priority bookings."],
    ],
    priorityTag: "Priority booking",
    priorityTitle: "Need a driver today?",
    priorityText:
      "Send your itinerary on WhatsApp and receive a fast quote with the right vehicle: Tesla, Mercedes van or VIP chauffeur service.",
    legalTitle: "Legal information",
    legalCompany: "BlackCab Shuttle Brussels",
    legalDesc: "Premium taxi, shuttle and chauffeur service in Brussels, Belgium.",
    legalPlaceholder:
      "Operated by SCH Company SRL. VAT number and registered office address can be added here before final publication.",
    legalLinks: ["Privacy Policy", "Terms & Conditions", "Cookies Policy"],
    footerTagline: "Premium taxi and shuttle services in Brussels and across Belgium.",
    footerCols: [
      {
        title: "Services",
        items: ["Airport Transfers", "City Rides", "Long Distance", "Business Travel"],
      },
      {
        title: "Company",
        items: ["About Us", "Our Fleet", "Reviews", "Contact"],
      },
      {
        title: "Contact",
        items: [
          { label: "+32 490 37 39 03", href: `tel:${PHONE}` },
          { label: "WhatsApp", href: createWhatsappUrl() },
          { label: EMAIL, href: `mailto:${EMAIL}` },
          "Brussels, Belgium",
          "24/7 Available",
        ],
      },
    ],
    copyright: "© 2026 BlackCab Shuttle Brussels. All rights reserved.",
    heroPills: ["Fixed Prices", "24/7 Service", "VIP Chauffeur Service"],
  },

  fr: {
    nav: ["Services", "Flotte", "Avis", "FAQ", "Contact"],
    heroTitle: "Transferts Aéroport et Gares: Bruxelles, Charleroi, Amsterdam et Paris",
    heroText:
      "Voyagez en confort avec notre flotte Tesla 3, Y et Mercedes Van. Prix fixe, chauffeurs professionnels et confirmation rapide via WhatsApp ou téléphone.",
    bullets: [
      "Aéroport de Bruxelles dès 29€",
      "Déjà 800+ clients nous font confiance",
      "Lien de paiement sécurisé après réservation",
    ],
    trustedBy:
      "Choisi par les professionnels, hôtels, clients voyageurs fréquents à Bruxelles.",
    googleReview: "4,7/5 d'après 800+ avis positifs",
    quote: "Demandez votre devis",
    fastReply: "Réponse rapide",
    quickTitle: "Trajets populaires",
    quickLocations: ["Brussels Airport", "Charleroi Airport", "Bruxelles-Midi", "Centre-ville"],
    pickup: "Lieu de prise en charge",
    dropoff: "Lieu de destination",
    date: "Date",
    time: "Heure",
    passengers: "Passagers",
    luggage: "Bagages",
    flightNumber: "N° de vol",
    returnTrip: "Aller-retour",
    childSeat: "Siège enfant",
    vehicle: "Véhicule",
    specialRequest: "Message spécial",
    specialRequestPlaceholder: "Ex : accueil avec panneau, PMR…",
    no: "Non",
    yes: "Oui",
    fieldRequired: "Champ requis",
    request: "Demander un devis",
    whatsapp: "Envoyer sur WhatsApp",
    call: "Appeler",
    stats: [
      ["800+", "Avis positifs"],
      ["9 000+", "Courses effectuées"],
      ["4,7/5", "Note moyenne"],
      ["24/7", "Disponible"],
      ["< 2 min", "Réponse"],
    ],
    whyTitle: "Pourquoi choisir BlackCab Shuttle ?",
    whyText:
      "Nous combinons luxe, fiabilité et service premium pour clients privés et professionnels.",
    why: [
      ["Confort Tesla", "Véhicules Tesla pour chaque trajet."],
      ["Prix fixes", " Tarif connu à l'avance sans surprise"],
      ["Chauffeurs professionnels", "Licenciés, multilingues et à vôtre service."],
      ["Suivi des vols", "Nous suivons votre vol et nous nous adaptons à tout retard."],
      ["Service 24/7", "Disponible 24h/24, 7j/7."],
      ["Porte-à-porte", "Prise en charge et dépose où vous le souhaitez."],
    ],
    howTitle: "Comment ça marche",
    how: [
      ["Indiquez votre trajet", "Renseignez votre lieu de départ, destination et détails du trajet."],
      ["Recevez votre devis", "Nous répondons vite avec un prix fixe tout compris."],
      ["Confirmez et détendez-vous", "Réservez via WhatsApp et recevez une confirmation immédiate."],
    ],
    perfect: "Idéal pour",
    perfectItems: [
      "Voyageurs",
      "Professionels",
      "Hôtels & clients VIP",
      "Touristes en Belgique",
    ],
    servicesTitle: "Nos Services",
    servicesSub:
      "Pensés pour voyageurs, professionnels, hôtels, clients VIP et touristes en Belgique.",
    learnMore: "En savoir plus",
    services: [
      ["Transferts Aéroport", "Aéroport de Bruxelles, Charleroi, Paris, Amsterdam."],
      ["Trajets urbains", "Déplacements rapides et confortables à Bruxelles."],
      ["Longue distance", "Voyagez à travers la Belgique avec confirmation immédiate."],
      ["Business Travel", "Trajets exécutifs, facturation mensuelle et service dédié."],
    ],
    fleetTitle: "Notre Flotte",
    fleetSub: "Choisissez le véhicule adapté à votre trajet.",
    fleet: [
      ["Tesla", "1–4 passagers. Idéal pour transferts aéroport."],
      ["Mercedes Vito Van", "Jusqu'à 8 passagers. Idéal pour familles, groupes et bagages."],
      ["Service VIP Business", "Expérience chauffeur premium pour professionnels, hôtels et événements."],
    ],
    customerTrust: "Confiance client",
    customerTrustTitle: "Transferts premium avec réponse rapide et un service local fiable.",
    customerTrustText:
      "Info directe via WhatsApp, prix fixes, véhicules propres et chauffeurs professionnels.",
    reviewStats: ["800+ Avis", "9 000+ Courses", "Support 24/7"],
    reviewsTitle: "Avis clients vérifiés",
    verifiedCustomer: "Client vérifié",
    reviews: [
      ["Patrick D.", "Bruxelles", "Service parfait. Chauffeur ponctuel et très professionnel.", "Mars 2026"],
      ["Sophie L.", "Waterloo", "Réponse rapide et transfert aéroport fluide.", "Mars 2026"],
      ["Olivier M.", "Uccle", "Voiture propre, chauffeur poli et excellent confort.", "Février 2026"],
      ["Bernard T.", "Woluwe-Saint-Pierre", "Service sérieux et communication claire.", "Février 2026"],
    ],
    ctaTitle: "Prêt à partir ?",
    ctaText:
      "Réservez maintenant et profitez de transferts en Tesla premium, transport en Van Mercedes et un service professionnel.",
    ctaCards: [
      ["Réservation instantanée", "Envoyez vos détails et recevez une confirmation en quelques minutes."],
      ["Confirmation directe", "Recevez la confirmation de votre réservation sur WhatsApp ou par téléphone."],
      ["Support 24/7", "Notre équipe est disponible à toute heure pour vous."],
    ],
    paymentMethods: ["Visa", "Mastercard", "Apple Pay", "Google Pay", "Paiement sécurisé en ligne"],
    seoTitle: "Taxi Bruxelles, Transfert Aéroport & Service Chauffeur VIP",
    seoTexts: [
      "BlackCab Shuttle Bruxelles propose des services de taxi premium à Bruxelles, transferts Aéroport de Bruxelles, Charleroi, Paris, Amsterdam, transport en Tesla et Van Mercedes Vito et service chauffeur privé dans toute la Belgique.",
      "Réservez votre taxi à Bruxelles facilement via WhatsApp avec des prix fixes, des chauffeurs professionnels et une confirmation rapide. Que vous ayez besoin d'un transfert aéroport, d'un trajet urbain ou d'un voyage longue distance, BlackCab Shuttle garantit confort et fiabilité.",
      "Nos services incluent Taxi Bruxelles Zaventem, navette aéroport Charleroi, Paris, Amsterdam, service chauffeur VIP et transport en Tesla et Van Mercedes pour groupes et familles.",
    ],
    businessTag: "Comptes Business",
    businessText:
      "Facturation mensuelle • Réservations prioritaires • Service chauffeur dédié pour entreprises, dirigeants et hôtels.",
    faqTitle: "FAQ",
    faq: [
      ["Comment réserver ?", "Envoyez les détails de votre trajet via WhatsApp et nous confirmons disponibilité et prix instantanément."],
      ["En combien de temps répondez-vous ?", "La plupart des demandes reçoivent une réponse en moins de 2 minutes."],
      ["Proposez-vous les transferts aéroport ?", "Oui, vers et depuis Brussels Airport, Charleroi et d'autres destinations en Belgique."],
      ["Peut-on réserver pour business ?", "Oui, comptes business, facturation mensuelle et réservations prioritaires disponibles."],
    ],
    priorityTag: "Réservation prioritaire",
    priorityTitle: "Besoin d'un chauffeur ?",
    priorityText:
      "Envoyez votre itinéraire sur WhatsApp et recevez un devis rapide avec le bon véhicule : Tesla, Van Mercedes ou service chauffeur VIP.",
    legalTitle: "Mentions légales",
    legalCompany: "BlackCab Shuttle Bruxelles",
    legalDesc: "Service premium de taxi, navette Aéroport Bruxelles, Belgique.",
    legalPlaceholder:
      "Exploité par SCH Company SRL",
    legalLinks: ["Politique de confidentialité", "Conditions générales", "Politique cookies"],
    footerTagline: "Services de taxi et navette premium à Bruxelles et dans toute la Belgique.",
    footerCols: [
      {
        title: "Services",
        items: ["Transferts Aéroport", "Trajets urbains", "Longue distance", "Business Travel"],
      },
      {
        title: "Société",
        items: ["À propos", "Notre flotte", "Avis", "Contact"],
      },
      {
        title: "Contact",
        items: [
          { label: "+32 490 37 39 03", href: `tel:${PHONE}` },
          { label: "WhatsApp", href: createWhatsappUrl() },
          { label: EMAIL, href: `mailto:${EMAIL}` },
          "Bruxelles, Belgique",
          "Disponible 24/7",
        ],
      },
    ],
    copyright: "© 2026 BlackCab Shuttle Bruxelles. Tous droits réservés.",
    heroPills: ["Prix fixes", "Service 24/7", "Service chauffeur VIP"],
  },

  nl: {
    nav: ["Diensten", "Vloot", "Reviews", "FAQ", "Contact"],
    heroTitle: "Premium Luchthaventransfers in Brussel & Heel België",
    heroText:
      "Reis comfortabel met onze Tesla-vloot, Mercedes van-optie en VIP-chauffeursservice. Vaste prijzen, professionele chauffeurs en snelle bevestiging via WhatsApp.",
    bullets: [
      "Brussels Airport vanaf €29",
      "Vertrouwd door 800+ klanten in België",
      "Veilige betaallink na bevestiging van uw reservatie",
    ],
    trustedBy:
      "Vertrouwd door directeurs, hotels, VIP-klanten en frequente luchthavenbezoekers in Brussel.",
    googleReview: "4,7/5 op basis van 800+ positieve reviews",
    quote: "Vraag uw offerte aan",
    fastReply: "Snelle reactie gegarandeerd",
    quickTitle: "Populaire routes",
    quickLocations: ["Brussels Airport", "Charleroi Airport", "Brussel-Zuid", "Stadscentrum"],
    pickup: "Ophaallocatie",
    dropoff: "Bestemming",
    date: "Datum",
    time: "Tijd",
    passengers: "Passagiers",
    luggage: "Bagage",
    flightNumber: "Vluchtnummer",
    returnTrip: "Heen en terug",
    childSeat: "Kinderzitje",
    vehicle: "Voertuig",
    specialRequest: "Extra bericht",
    specialRequestPlaceholder: "Bijv: naamkaartje, PBM…",
    no: "Nee",
    yes: "Ja",
    fieldRequired: "Verplicht veld",
    request: "Vraag mijn offerte aan",
    whatsapp: "Versturen via WhatsApp",
    call: "Bel ons",
    stats: [
      ["800+", "Positieve reviews"],
      ["9.000+", "Ritten uitgevoerd"],
      ["4,7/5", "Gemiddelde score"],
      ["24/7", "Beschikbaar"],
      ["< 2 min", "Reactietijd"],
    ],
    whyTitle: "Waarom kiezen voor BlackCab Shuttle?",
    whyText:
      "Wij combineren luxe, betrouwbaarheid en premium service voor particuliere en professionele klanten.",
    why: [
      ["Tesla Comfort", "Premium zwarte Tesla-voertuigen voor elke rit."],
      ["Vaste prijzen", "Ken uw exacte prijs vóór u boekt."],
      ["Professionele chauffeurs", "Vergund, meertalig en discreet."],
      ["Vluchtopvolging", "Wij volgen uw vlucht en passen ons aan bij vertraging."],
      ["24/7 Service", "Dag en nacht beschikbaar, 365 dagen per jaar."],
      ["Deur-tot-deur", "Ophalen en afzetten precies waar u wilt."],
    ],
    howTitle: "Hoe werkt het?",
    how: [
      ["Geef uw rit door", "Voeg ophaallocatie, bestemming en ritgegevens toe."],
      ["Ontvang uw offerte", "Wij antwoorden snel met een vaste, all-in prijs."],
      ["Bevestig en ontspan", "Reserveer via WhatsApp en ontvang directe bevestiging."],
    ],
    perfect: "Ideaal voor",
    perfectItems: [
      "Luchthavenreizigers",
      "Zakelijke klanten",
      "Hotels & VIP-klanten",
      "Toeristen in België",
    ],
    servicesTitle: "Onze Diensten",
    servicesSub:
      "Aangepast aan luchthavenreizigers, zakelijke klanten, hotels, VIP-klanten en toeristen in België.",
    learnMore: "Meer info",
    services: [
      ["Luchthaventransfers", "Brussel, Bergen, Amsterdam, Parijs."],
      ["Stadsritten", "Snelle en comfortabele ritten overal in Brussel."],
      ["Lange afstand", "Reis door heel België met directe bevestiging."],
      ["Professionele vervoer", "Executive ritten, maandelijkse facturatie en prioritaire service."],
    ],
    fleetTitle: "Onze Vloot",
    fleetSub: "Kies het juiste voertuig voor uw rit.",
    fleet: [
      ["Tesla Premium", "1–4 passagiers. Ideaal voor premium luchthaventransfers."],
      ["Mercedes Vito Van", "Tot 8 passagiers. Ideaal voor families, groepen en extra bagages."],
      ["VIP Business Service", "Premium chauffeursbeleving voor professionele klanten, hotels en evenementen."],
    ],
    customerTrust: "Klantvertrouwen",
    customerTrustTitle: "Premium transfers met snelle anwoord en echte lokale service.",
    customerTrustText:
      "Directe WhatsApp-communicatie, vaste prijzen, schone voertuigen en professionele chauffeurs.",
    reviewStats: ["800+ Reviews", "9.000+ Ritten", "24/7 Support"],
    reviewsTitle: "Geverifieerde klantbeoordelingen",
    verifiedCustomer: "Geverifieerde klant",
    reviews: [
      ["Patrick D.", "Brussel", "Perfecte service. Chauffeur was stipt en zeer professioneel.", "Maart 2026"],
      ["Sophie L.", "Waterloo", "Snelle reactie, eenvoudige boeking en vlotte luchthaventransfer.", "Maart 2026"],
      ["Olivier M.", "Ukkel", "Propere wagen, beleefde chauffeur en uitstekend comfort.", "Februari 2026"],
      ["Bernard T.", "Sint-Pieters-Woluwe", "Ernstige service en duidelijke communicatie.", "Februari 2026"],
    ],
    ctaTitle: "Klaar om te vertrekken?",
    ctaText:
      "Reserveer nu een premium Tesla-transfers, Mercedes Van en VIP-chauffeursservice in België.",
    ctaCards: [
      ["Directe boeking", "Stuur uw gegevens en ontvang bevestiging binnen enkele minuten."],
      ["Directe bevestiging", "Ontvang uw boekingsbevestiging via WhatsApp."],
      ["24/7 Support", "Ons team staat dag en nacht voor u klaar."],
    ],
    paymentMethods: ["Visa", "Mastercard", "Apple Pay", "Google Pay", "Veilige online betaling"],
    seoTitle: "Taxi Brussel, Luchthaventransfer & VIP Chauffeursservice",
    seoTexts: [
      "BlackCab Shuttle Brussel biedt premium taxidiensten in Brussel, Bergen, Parijs, Amsterdam, Mercedes Vito van-vervoer en VIP-chauffeursservice door heel België ook.",
      "Boek uw taxi in België eenvoudig via WhatsApp met vaste prijzen, professionele chauffeurs en snelle bevestiging. Of u nu een luchthaventransfer, een stadsrit of een lange afstand nodig heeft, BlackCab Shuttle garandeert comfort en betrouwbaarheid.",
      "Onze diensten omvatten Taxi Zaventem, Luchthaven shuttle Brussel, privéchauffeur Brussel, VIP-chauffeursservice en Mercedes van-vervoer voor groepen en families.",
    ],
    businessTag: "Business Accounts",
    businessText:
      "Maandelijkse facturatie • Prioritaire boekingen • Dedicated chauffeursservice voor bedrijven, directieleden en hotels.",
    faqTitle: "Veelgestelde vragen",
    faq: [
      ["Hoe reserveer ik?", "Stuur uw ritgegevens via WhatsApp en wij bevestigen snel beschikbaarheid en prijs."],
      ["Hoe snel antwoorden jullie?", "De meeste aanvragen krijgen een antwoord binnen 2 minuten."],
      ["Bieden jullie luchthaventransfers aan?", "Ja, van en naar Brussels Airport, Charleroi en andere Belgische bestemmingen."],
      ["Kan ik professionele vervoer boeken?", "Ja, wij bieden business accounts, maandelijkse facturatie en prioritaire boekingen."],
    ],
    priorityTag: "Prioritaire boeking",
    priorityTitle: "Vandaag een chauffeur nodig?",
    priorityText:
      "Stuur uw reisplan via WhatsApp en ontvang snel een offerte met het juiste voertuig: Tesla, Mercedes van of VIP-chauffeursservice.",
    legalTitle: "Juridische informatie",
    legalCompany: "BlackCab Shuttle Brussel",
    legalDesc: "Premium taxi-, shuttle- en chauffeursservice in Brussel, België.",
    legalPlaceholder:
      "Uitgebaat door SCH Company SRL",
    legalLinks: ["Privacybeleid", "Algemene voorwaarden", "Cookiebeleid"],
    footerTagline: "Premium taxi- en shuttlediensten in Brussel en heel België.",
    footerCols: [
      {
        title: "Diensten",
        items: ["Luchthaventransfers", "Stadsritten", "Lange afstand", "Business vervoer"],
      },
      {
        title: "Bedrijf",
        items: ["Over ons", "Onze vloot", "Reviews", "Contact"],
      },
      {
        title: "Contact",
        items: [
          { label: "+32 490 37 39 03", href: `tel:${PHONE}` },
          { label: "WhatsApp", href: createWhatsappUrl() },
          { label: EMAIL, href: `mailto:${EMAIL}` },
          "Brussel, België",
          "24/7 Beschikbaar",
        ],
      },
    ],
    copyright: "© 2026 BlackCab Shuttle Brussel. Alle rechten voorbehouden.",
    heroPills: ["Vaste prijzen", "24/7 service", "VIP-chauffeursservice"],
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// REUSABLE COMPONENTS
// ─────────────────────────────────────────────────────────────────────────────

function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

function SectionTitle({ children, eyebrow }) {
  return (
    <div>
      {eyebrow && (
        <div className="mb-2 text-sm font-semibold uppercase tracking-[0.22em] text-[#d6a85c]">
          {eyebrow}
        </div>
      )}
      <h2 className="text-3xl font-black tracking-tight md:text-5xl">
        {children}
      </h2>
    </div>
  );
}

function MediaFrame({ src, alt, height = "h-56", priority = false }) {
  return (
    <div
      className={`group relative w-full overflow-hidden rounded-[26px] border border-[#3b3022] bg-[#0b0b0b] shadow-2xl ${height}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 50vw"
        quality={90}
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
}

function Button({ href, children, dark = false, onClick, hideArrow = false }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
        dark
          ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
          : "bg-[#d6a85c] text-black hover:brightness-110"
      }`}
    >
      {children}
      {!hideArrow && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
    </a>
  );
}

// Input with proper type support for date/time and validation state
function Input({ label, value, setValue, placeholder = "", icon, type = "text", required = false, error = false, min, max }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-white/75">
        {label}
        {required && <span className="ml-1 text-[#d6a85c]">*</span>}
      </span>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d6a85c]" aria-hidden="true">
            {icon}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          min={min}
          max={max}
          required={required}
          aria-invalid={Boolean(error)}
          className={`w-full rounded-2xl border py-4 text-white outline-none placeholder:text-white/35 focus:border-[#d6a85c] bg-white/[0.04] ${
            error ? "border-red-500" : "border-white/10"
          } ${icon ? "pl-10 pr-4" : "px-4"}`}
        />
      </div>
      {error && (
        <span className="mt-1 block text-xs text-red-400" role="alert">{error}</span>
      )}
    </label>
  );
}

function SelectInput({ label, value, setValue, options, ariaLabel }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-white/75">{label}</span>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label={ariaLabel || label}
        className="w-full rounded-2xl border border-white/10 bg-[#171717] px-4 py-4 text-white outline-none focus:border-[#d6a85c]"
      >
        {options.map(([val, display]) => (
          <option key={val} value={val}>
            {display}
          </option>
        ))}
      </select>
    </label>
  );
}

function Card({ children }) {
  return (
    <div className="rounded-[24px] border border-white/10 bg-[#0d0d0d] p-5 shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-[#d6a85c]/40 hover:bg-[#111111]">
      {children}
    </div>
  );
}

function ImageCard({ img, title, desc, height = "h-52", learnMoreLabel }) {
  return (
    <div className="overflow-hidden rounded-[26px] border border-white/10 bg-[#0d0d0d] shadow-2xl transition duration-300 hover:-translate-y-1 hover:border-[#d6a85c]/40">
      <div className="relative">
        <MediaFrame src={img} alt={title} height={height} />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/85 to-transparent p-5">
          <h3 className="text-2xl font-black">{title}</h3>
        </div>
      </div>
      <div className="p-5">
        <p className="min-h-[70px] leading-7 text-white/60">{desc}</p>
        <a
          href={createWhatsappUrl(`Hello, I would like more information about ${title}.`)}
          className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#d6a85c] hover:brightness-110 transition"
        >
          {learnMoreLabel}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}

function FooterCol({ title, items }) {
  return (
    <div>
      <div className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-white/45">
        {title}
      </div>
      <div className="space-y-3 text-sm text-white/65">
        {items.map((item) => {
          if (typeof item === "object" && item.href) {
            return (
              <div key={item.label}>
                <a href={item.href} className="hover:text-[#d6a85c] transition">
                  {item.label}
                </a>
              </div>
            );
          }
          return <div key={item}>{item}</div>;
        })}
      </div>
    </div>
  );
}

// Language button with proper aria-label
function LangButton({ code, current, onClick, label }) {
  return (
    <button
      onClick={() => onClick(code)}
      aria-label={`Switch language to ${label}`}
      className={`text-sm font-bold transition ${
        current === code ? "text-[#d6a85c]" : "text-white/60 hover:text-white"
      }`}
    >
      {code.toUpperCase()}
    </button>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ICON MAPS — defined outside component to avoid recreation on every render
// ─────────────────────────────────────────────────────────────────────────────
const WHY_ICONS = [Shield, CircleDollarSign, Users, CarFront, Clock3, MapPin];
const STAT_ICONS = [Star, CarFront, BadgeCheck, Clock3, MessageCircle];
const PERFECT_ICONS = [CarFront, Briefcase, Hotel, Building2];
const CTA_ICONS = [Zap, CalendarCheck, Headphones];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function Page() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);

  // Form state
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [luggage, setLuggage] = useState("1");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [returnTrip, setReturnTrip] = useState("no");
  const [childSeat, setChildSeat] = useState("no");
  const [vehicleChoice, setVehicleChoice] = useState("auto");
  const [specialRequest, setSpecialRequest] = useState("");

  // Form validation
  const [formErrors, setFormErrors] = useState({});

  const t = content[lang];
  const navIds = ["services", "fleet", "reviews", "faq", "contact"];

  // ── Localised select options ───────────────────────────────────────────────
  const yesNoOptions = useMemo(
    () => [
      ["no", t.no],
      ["yes", t.yes],
    ],
    [t]
  );

  const vehicleOptions = useMemo(
    () => [
      ["auto", lang === "fr" ? "Selon disponibilité" : lang === "nl" ? "Automatisch" : "Best available"],
      ["tesla", "Tesla Premium"],
      ["mercedes", "Mercedes Vito Van"],
      ["vip", "VIP"],
    ],
    [lang]
  );

  // ── WhatsApp message builder ───────────────────────────────────────────────
  const waMessage = useMemo(() => {
    const suggestedVehicle =
      Number(passengers) > 4 ? "Mercedes Vito Van" : "Tesla Premium";
    const returnLabel = returnTrip === "yes" ? t.yes : t.no;
    const childSeatLabel = childSeat === "yes" ? t.yes : t.no;

    return encodeURIComponent(
      `Booking request - BlackCab Shuttle
Pickup: ${pickup || "-"}
Drop-off: ${dropoff || "-"}
Passengers: ${passengers}
Luggage: ${luggage}
Date: ${date || "-"}
Time: ${time || "-"}
Flight number: ${flightNumber || "-"}
Return trip: ${returnLabel}
Child seat: ${childSeatLabel}
Vehicle requested: ${vehicleChoice}
Suggested vehicle: ${suggestedVehicle}
Special request: ${specialRequest || "-"}`
    );
  }, [
    pickup, dropoff, passengers, luggage, date, time,
    flightNumber, returnTrip, childSeat, vehicleChoice, specialRequest, t,
  ]);

  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${waMessage}`;

  // ── Conversion tracking ────────────────────────────────────────────────────
  const trackConversion = useCallback((type) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "blackcab_conversion", type });
      if (window.gtag) {
        window.gtag("event", type, { event_category: "conversion" });
      }
    }
  }, []);

  // ── Form validation before WhatsApp send ──────────────────────────────────
  const handleQuoteSubmit = (e) => {
    const errors = {};
    if (!pickup.trim()) errors.pickup = t.fieldRequired;
    if (!dropoff.trim()) errors.dropoff = t.fieldRequired;
    if (!date) errors.date = t.fieldRequired;
    if (!time) errors.time = t.fieldRequired;
    if (Object.keys(errors).length > 0) {
      e.preventDefault();
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    trackConversion("whatsapp_quote_click");
  };

  const handleQuickLocation = (location) => {
    if (!pickup.trim()) {
      setPickup(location);
      return;
    }
    if (!dropoff.trim()) {
      setDropoff(location);
      return;
    }
    setDropoff(location);
  };

  // ─────────────────────────────────────────────────────────────────────────
  // RENDER
  // ─────────────────────────────────────────────────────────────────────────
  return (
    <main className="min-h-screen bg-[#030303] pb-24 text-white md:pb-0">
      <JsonLd data={businessSchema} />
      <div className="mx-auto max-w-[1500px] px-4 py-4 md:px-8">

        {/* ── HEADER ──────────────────────────────────────────────────────── */}
        <header className="sticky top-3 z-50 mb-4 rounded-[24px] border border-white/10 bg-black/70 px-5 py-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <a href="#hero" className="leading-none">
              <div className="text-2xl font-black tracking-tight md:text-3xl">BLACKCAB</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d6a85c]">
                Shuttle Brussels
              </div>
            </a>

            <nav className="hidden items-center gap-7 text-sm text-white/75 lg:flex">
              {t.nav.map((item, index) => (
                <a
                  key={item}
                  href={`#${navIds[index]}`}
                  className="hover:text-[#d6a85c] transition"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <div className="flex items-center gap-2" role="group" aria-label="Language selector">
                <LangButton code="en" current={lang} onClick={setLang} label="English" />
                <LangButton code="fr" current={lang} onClick={setLang} label="French" />
                <LangButton code="nl" current={lang} onClick={setLang} label="Dutch" />
                <ChevronDown className="h-4 w-4 text-white/40" aria-hidden="true" />
              </div>
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 text-sm text-white/80 hover:text-white transition"
                aria-label={`Call us at ${PHONE}`}
              >
                <Phone className="h-4 w-4 text-[#d6a85c]" aria-hidden="true" />
                +32 490 37 39 03
              </a>
              <Button href={whatsappUrl} onClick={() => trackConversion("header_whatsapp_click")}>
                {t.whatsapp}
              </Button>
            </div>

            <button
              className="rounded-full border border-white/10 p-3 lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {menuOpen && (
            <div className="mt-4 grid gap-2 rounded-2xl border border-white/10 bg-[#0b0b0b] p-3 lg:hidden">
              {t.nav.map((item, index) => (
                <a
                  key={item}
                  href={`#${navIds[index]}`}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-white/80 hover:bg-white/5 transition"
                >
                  {item}
                </a>
              ))}
              <div
                className="flex gap-4 px-4 py-2"
                role="group"
                aria-label="Language selector"
              >
                <LangButton code="en" current={lang} onClick={(c) => { setLang(c); setMenuOpen(false); }} label="English" />
                <LangButton code="fr" current={lang} onClick={(c) => { setLang(c); setMenuOpen(false); }} label="French" />
                <LangButton code="nl" current={lang} onClick={(c) => { setLang(c); setMenuOpen(false); }} label="Dutch" />
              </div>
            </div>
          )}
        </header>

        {/* ── HERO ────────────────────────────────────────────────────────── */}
        <section
          id="hero"
          className="relative overflow-hidden rounded-[34px] border border-[#3b3022] bg-black shadow-2xl"
        >
          <Image
            src={images.hero}
            alt="BlackCab Shuttle premium airport transfer Brussels"
            fill
            priority
            sizes="100vw"
            quality={90}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.76)_42%,rgba(0,0,0,0.30)_100%)] backdrop-blur-[1px]" />

          <div className="relative z-10 grid min-h-[760px] gap-8 p-5 md:p-10 xl:grid-cols-[1.1fr_0.75fr]">
            {/* Left column */}
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex flex-wrap gap-3">
                {t.heroPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-[#6b5431] bg-black/55 px-4 py-2 text-sm font-bold text-[#d6a85c]"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-[1.03] tracking-tight md:text-7xl">
                {t.heroTitle}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-white/78 md:mt-5 md:text-lg md:leading-8">
                {t.heroText}
              </p>

              <div className="mt-7 space-y-3">
                {t.bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-3 text-lg font-semibold text-white/90"
                  >
                    <Check className="h-5 w-5 shrink-0 rounded-full bg-[#d6a85c] p-0.5 text-black" aria-hidden="true" />
                    {b}
                  </div>
                ))}
              </div>

              <div className="mt-5 max-w-xl rounded-2xl border border-[#6b5431]/70 bg-black/55 px-5 py-4 text-sm font-semibold leading-6 text-white/75 shadow-2xl">
                {t.trustedBy}
              </div>

              <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-[#6b5431] bg-black/70 px-5 py-3">
                <span
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white font-black text-black"
                  aria-hidden="true"
                >
                  G
                </span>
                <strong>{t.googleReview}</strong>
                <span className="flex text-[#d6a85c]" aria-label="5 stars">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </span>
              </div>
            </div>

            {/* Right column — Quote form */}
            <div className="my-auto rounded-[28px] border border-[#6b5431] bg-[#111]/90 p-4 shadow-2xl backdrop-blur-md md:p-6">
              <div className="mb-5 flex items-center justify-between gap-4">
                <h2 className="text-2xl font-black md:text-3xl">{t.quote}</h2>
                <span className="text-xs font-bold text-[#d6a85c]">{t.fastReply}</span>
              </div>

              <div className="mb-4 md:hidden">
                <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                  {t.quickTitle}
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {t.quickLocations.map((location) => (
                    <button
                      key={location}
                      type="button"
                      onClick={() => handleQuickLocation(location)}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-left text-xs font-bold text-white/80 transition hover:border-[#d6a85c]/60 hover:text-[#d6a85c]"
                    >
                      {location}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-3 md:gap-4">
                <Input
                  label={t.pickup}
                  value={pickup}
                  setValue={setPickup}
                  icon={<MapPin />}
                  placeholder={t.pickup}
                  required
                  error={formErrors.pickup}
                />
                <Input
                  label={t.dropoff}
                  value={dropoff}
                  setValue={setDropoff}
                  icon={<MapPin />}
                  placeholder={t.dropoff}
                  required
                  error={formErrors.dropoff}
                />

                <div className="grid grid-cols-2 gap-3">
                  <Input
                    label={t.date}
                    value={date}
                    setValue={setDate}
                    type="date"
                  />
                  <Input
                    label={t.time}
                    value={time}
                    setValue={setTime}
                    type="time"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Input
                    label={t.passengers}
                    value={passengers}
                    setValue={setPassengers}
                    icon={<Users />}
                    type="number"
                    min="1"
                    max="8"
                  />
                  <Input
                    label={t.luggage}
                    value={luggage}
                    setValue={setLuggage}
                    icon={<Briefcase />}
                    type="number"
                    min="0"
                    max="20"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Input
                    label={t.flightNumber}
                    value={flightNumber}
                    setValue={setFlightNumber}
                    placeholder="SN1234"
                  />
                  <SelectInput
                    label={t.returnTrip}
                    value={returnTrip}
                    setValue={setReturnTrip}
                    options={yesNoOptions}
                    ariaLabel={t.returnTrip}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <SelectInput
                    label={t.childSeat}
                    value={childSeat}
                    setValue={setChildSeat}
                    options={yesNoOptions}
                    ariaLabel={t.childSeat}
                  />
                  <SelectInput
                    label={t.vehicle}
                    value={vehicleChoice}
                    setValue={setVehicleChoice}
                    options={vehicleOptions}
                    ariaLabel={t.vehicle}
                  />
                </div>

                <Input
                  label={t.specialRequest}
                  value={specialRequest}
                  setValue={setSpecialRequest}
                  placeholder={t.specialRequestPlaceholder}
                />

                <Button href={whatsappUrl} onClick={handleQuoteSubmit}>
                  {t.request}
                </Button>

                <Button href={whatsappUrl} dark onClick={() => trackConversion("whatsapp_click")} hideArrow>
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  {t.whatsapp}
                </Button>

                <Button href={`tel:${PHONE}`} dark onClick={() => trackConversion("call_click")} hideArrow>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  {t.call}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* ── STATS ───────────────────────────────────────────────────────── */}
        <section className="mt-5 rounded-[24px] border border-white/10 bg-[#090909] p-5" aria-label="Key statistics">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {t.stats.map(([value, label], i) => {
              const Icon = STAT_ICONS[i];
              return (
                <div key={label} className="rounded-2xl bg-white/[0.03] p-4">
                  <Icon className="mb-3 h-5 w-5 text-[#d6a85c]" aria-hidden="true" />
                  <div className="text-2xl font-black">{value}</div>
                  <div className="text-sm text-white/50">{label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── WHY + HOW ───────────────────────────────────────────────────── */}
        <section className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionTitle>{t.whyTitle}</SectionTitle>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-white/65">{t.whyText}</p>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {t.why.map(([title, desc], i) => {
                const Icon = WHY_ICONS[i];
                return (
                  <Card key={title}>
                    <Icon className="mb-4 h-6 w-6 text-[#d6a85c]" aria-hidden="true" />
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/58">{desc}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <MediaFrame src={images.interior} alt="Premium Tesla interior" height="h-[330px]" />
            <div className="mt-7">
              <SectionTitle>{t.howTitle}</SectionTitle>
              <div className="mt-5 grid gap-4">
                {t.how.map(([title, desc], i) => (
                  <Card key={title}>
                    <div
                      className="mb-2 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#d6a85c] text-[#d6a85c] font-bold"
                      aria-hidden="true"
                    >
                      {i + 1}
                    </div>
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-2 text-white/58">{desc}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── PERFECT FOR ─────────────────────────────────────────────────── */}
        <section className="mt-12">
          <SectionTitle>{t.perfect}</SectionTitle>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {t.perfectItems.map((item, i) => {
              const Icon = PERFECT_ICONS[i];
              return (
                <Card key={item}>
                  <Icon className="mb-3 h-5 w-5 text-[#d6a85c]" aria-hidden="true" />
                  <div className="font-bold">{item}</div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* ── SERVICES ────────────────────────────────────────────────────── */}
        <section id="services" className="mt-12">
          <SectionTitle>{t.servicesTitle}</SectionTitle>
          <p className="mt-3 text-lg font-semibold text-[#d6a85c]">{t.servicesSub}</p>
          <div className="mt-7 grid gap-5 lg:grid-cols-4">
            {t.services.map(([title, desc], i) => (
              <ImageCard
                key={title}
                img={images.services[i]}
                title={title}
                desc={desc}
                learnMoreLabel={t.learnMore}
              />
            ))}
          </div>
        </section>

        {/* ── FLEET ───────────────────────────────────────────────────────── */}
        <section id="fleet" className="mt-12">
          <SectionTitle>{t.fleetTitle}</SectionTitle>
          <p className="mt-3 text-lg font-semibold text-[#d6a85c]">{t.fleetSub}</p>
          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {t.fleet.map(([title, desc], i) => (
              <ImageCard
                key={title}
                img={images.fleet[i]}
                title={title}
                desc={desc}
                height="h-64"
                learnMoreLabel={t.learnMore}
              />
            ))}
          </div>
        </section>

        {/* ── REVIEWS ─────────────────────────────────────────────────────── */}
        <section id="reviews" className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6a85c]">
              {t.customerTrust}
            </div>
            <h2 className="mt-3 text-3xl font-black">{t.customerTrustTitle}</h2>
            <p className="mt-4 leading-7 text-white/60">{t.customerTrustText}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {t.reviewStats.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 p-4 font-bold text-[#d6a85c]"
                >
                  {item}
                </div>
              ))}
            </div>
          </Card>

          <div>
            <SectionTitle>{t.reviewsTitle}</SectionTitle>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {t.reviews.map(([name, city, text, date]) => (
                <Card key={name}>
                  <div className="mb-2 text-xs font-bold text-[#d6a85c]">
                    ✓ {t.verifiedCustomer} • {date}
                  </div>
                  <div className="mb-3 flex text-[#d6a85c]" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" aria-hidden="true" />
                    ))}
                  </div>
                  <h3 className="text-xl font-black">{name}</h3>
                  <div className="text-sm text-white/45">{city}</div>
                  <p className="mt-3 leading-6 text-white/62">{text}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────────────── */}
        <section className="mt-12 overflow-hidden rounded-[30px] border border-[#6b5431] bg-[#120f0b] p-6 md:p-8">
          <div className="grid items-center gap-7 lg:grid-cols-[0.8fr_1.2fr]">
            <MediaFrame src={images.cta} alt="VIP chauffeur service" height="h-[320px]" />

            <div>
              <SectionTitle>{t.ctaTitle}</SectionTitle>
              <p className="mt-4 max-w-2xl leading-8 text-white/70">{t.ctaText}</p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={whatsappUrl} onClick={() => trackConversion("cta_whatsapp_click")}>
                  {t.whatsapp}
                </Button>
                <Button href={`tel:${PHONE}`} dark onClick={() => trackConversion("cta_call_click")}>
                  {t.call}
                </Button>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-white/65">
                {t.paymentMethods.map((p) => (
                  <span key={p} className="rounded-full border border-white/15 px-3 py-1">
                    {p}
                  </span>
                ))}
              </div>

              {/* Fixed: each card has its own unique description */}
              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {t.ctaCards.map(([title, desc], i) => {
                  const Icon = CTA_ICONS[i];
                  return (
                    <Card key={title}>
                      <Icon className="mb-3 h-5 w-5 text-[#d6a85c]" aria-hidden="true" />
                      <h3 className="font-black">{title}</h3>
                      <p className="mt-2 text-sm text-white/55">{desc}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── SEO TEXT ────────────────────────────────────────────────────── */}
        <section className="mt-12 rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6 md:p-8">
          <h2 className="text-3xl font-black md:text-4xl">{t.seoTitle}</h2>
          {t.seoTexts.map((para, i) => (
            <p key={i} className="mt-4 leading-8 text-white/65">
              {para}
            </p>
          ))}
        </section>

        {/* ── BUSINESS ────────────────────────────────────────────────────── */}
        <section className="mt-8 rounded-[24px] border border-white/10 bg-[#0b0b0b] p-5">
          <div className="text-sm font-bold text-[#d6a85c]">{t.businessTag}</div>
          <p className="mt-2 text-white/65">{t.businessText}</p>
        </section>

        {/* ── FAQ ─────────────────────────────────────────────────────────── */}
        <section id="faq" className="mt-12">
          <SectionTitle>{t.faqTitle}</SectionTitle>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {t.faq.map(([q, a]) => (
              <Card key={q}>
                <h3 className="font-black">{q}</h3>
                <p className="mt-2 leading-6 text-white/60">{a}</p>
              </Card>
            ))}
          </div>
        </section>

        {/* ── PRIORITY CTA ────────────────────────────────────────────────── */}
        <section className="mt-12 rounded-[30px] border border-[#6b5431]/70 bg-[radial-gradient(circle_at_top_left,rgba(214,168,92,0.18),transparent_35%),#070707] p-7 shadow-2xl md:p-10">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <div className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#d6a85c]">
                {t.priorityTag}
              </div>
              <h2 className="text-3xl font-black md:text-5xl">{t.priorityTitle}</h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/65">{t.priorityText}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Button href={whatsappUrl} onClick={() => trackConversion("priority_whatsapp_click")}>
                {t.request}
              </Button>
              <Button href={`tel:${PHONE}`} dark onClick={() => trackConversion("priority_call_click")}>
                {t.call}
              </Button>
            </div>
          </div>
        </section>

        {/* ── LEGAL ───────────────────────────────────────────────────────── */}
        <section className="mt-12 rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6 md:p-8">
          <SectionTitle>{t.legalTitle}</SectionTitle>
          <div className="mt-5 grid gap-6 text-sm leading-7 text-white/65 md:grid-cols-2">
            <div className="space-y-2">
              <p><strong className="text-white">{t.legalCompany}</strong></p>
              <p>{t.legalDesc}</p>
              {t.legalPlaceholder && (
                <p className="text-amber-400/80">{t.legalPlaceholder}</p>
              )}
            </div>
            <div className="space-y-2">
              <p>
                Email:{" "}
                <a href={`mailto:${EMAIL}`} className="text-[#d6a85c] hover:underline">
                  {EMAIL}
                </a>
              </p>
              <p>
                {lang === "fr" ? "Téléphone" : lang === "nl" ? "Telefoon" : "Phone"}:{" "}
                <a href={`tel:${PHONE}`} className="text-[#d6a85c] hover:underline">
                  +32 490 37 39 03
                </a>
              </p>
              <div className="flex flex-wrap gap-3 pt-1">
                {t.legalLinks.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="text-white/50 hover:text-[#d6a85c] underline transition"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ──────────────────────────────────────────────────────── */}
        <footer id="contact" className="mt-12 rounded-[28px] border border-white/10 bg-[#080808] p-8">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="text-3xl font-black">BLACKCAB</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6a85c]">
                Shuttle Brussels
              </div>
              <p className="mt-4 leading-7 text-white/55">{t.footerTagline}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="BlackCab Shuttle on Instagram"
                  className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-white/75 hover:text-[#d6a85c] transition"
                >
                  Instagram
                </a>
              </div>
            </div>

            {t.footerCols.map((col) => (
              <FooterCol key={col.title} title={col.title} items={col.items} />
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-center text-sm text-white/35">
            {t.copyright}
          </div>
        </footer>
      </div>

      {/* ── FLOATING WHATSAPP BUTTON ─────────────────────────────────────── */}
      <a
        href={whatsappUrl}
        aria-label={t.whatsapp}
        onClick={() => trackConversion("floating_whatsapp_click")}
        className="fixed bottom-5 right-5 z-[80] hidden h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_60px_rgba(37,211,102,0.45)] transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 md:flex"
      >
        <MessageCircle className="h-7 w-7" aria-hidden="true" />
      </a>

      <div className="fixed inset-x-0 bottom-0 z-[90] grid grid-cols-2 border-t border-white/10 bg-black/95 p-2 shadow-[0_-20px_50px_rgba(0,0,0,0.55)] backdrop-blur-xl md:hidden">
        <a
          href={whatsappUrl}
          onClick={() => trackConversion("mobile_sticky_whatsapp_click")}
          className="inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-4 py-3 text-sm font-black text-white"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          WhatsApp
        </a>
        <a
          href={`tel:${PHONE}`}
          onClick={() => trackConversion("mobile_sticky_call_click")}
          className="ml-2 inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-black text-black"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          {t.call}
        </a>
      </div>
    </main>
  );
}
