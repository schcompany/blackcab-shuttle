"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
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
} from "lucide-react";

const PHONE = "+32490373903";
const WHATSAPP = "32490373903";
const EMAIL = "info@blackcab-shuttle.com";
const INSTAGRAM_URL =
  "https://www.instagram.com/blackcab.brussels?igsh=MWluZTV5MGZvZmxqYQ==";

const images = {
  hero: "/images/1.jpg",
  interior: "/images/5.jpg",
  cta: "/images/10.jpg",
  services: ["/images/2.jpg", "/images/8.jpg", "/images/4.jpg", "/images/9.jpg"],
  fleet: ["/images/3.jpg", "/images/7.jpg", "/images/11.jpg"],
};

const content = {
  en: {
    nav: ["Services", "Fleet", "Reviews", "FAQ", "Contact"],
    heroTitle: "Premium Airport Transfers in Brussels & Across Belgium",
    heroText:
      "Travel in comfort with our Tesla fleet, Mercedes van option and VIP chauffeur service. Fixed prices, professional chauffeurs and fast confirmation by WhatsApp.",
    bullets: [
      "Brussels Airport from €29",
      "Trusted by 800+ customers across Belgium",
      "Secure payment link sent after booking",
    ],
    quote: "Request Your Quote",
    pickup: "Pickup location",
    dropoff: "Drop-off location",
    date: "Date",
    time: "Time",
    passengers: "Passengers",
    luggage: "Luggage",
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
      ["Tesla Comfort", "Premium black Tesla vehicles."],
      ["Fixed Prices", "Know your price upfront."],
      ["Professional Drivers", "Licensed and multilingual chauffeurs."],
      ["Flight Monitoring", "We adapt to flight delays."],
      ["24/7 Service", "Available day and night."],
      ["Door-to-Door", "Pickup and drop-off where needed."],
    ],
    howTitle: "How It Works",
    how: [
      ["Enter Your Ride", "Add pickup, destination and trip details."],
      ["Receive Your Quote", "We reply quickly with a fixed price."],
      ["Confirm & Relax", "Book by WhatsApp and receive confirmation."],
    ],
    perfect: "Perfect for",
    perfectItems: [
      "Airport Travelers",
      "Business Executives",
      "Hotels & VIP Clients",
      "Tourists Visiting Belgium",
    ],
    servicesTitle: "Our Services",
    servicesSub:
      "Tailored to airport travelers, business executives, hotels, VIP clients and tourists visiting Belgium.",
    services: [
      ["Airport Transfers", "Brussels Airport, Charleroi and main transfer routes."],
      ["City Rides", "Fast, comfortable rides anywhere in Brussels."],
      ["Long Distance", "Travel across Belgium with direct confirmation."],
      ["Business Travel", "Executive rides, monthly invoicing and priority service."],
    ],
    fleetTitle: "Our Fleet",
    fleetSub: "Choose the right vehicle for your journey.",
    fleet: [
      ["Tesla Premium", "1–4 passengers. Ideal for premium airport transfers."],
      ["Mercedes Vito Van", "Up to 8 passengers. Ideal for families, groups and extra luggage."],
      ["VIP Business Service", "Premium chauffeur experience for executives, hotels and events."],
    ],
    reviewsTitle: "Verified Customer Reviews",
    reviews: [
      ["Patrick D.", "Brussels", "Perfect service. Driver on time and very professional."],
      ["Sophie L.", "Waterloo", "Quick reply, easy booking and smooth airport transfer."],
      ["Olivier M.", "Uccle", "Clean car, polite driver and excellent comfort."],
      ["Bernard T.", "Woluwe-Saint-Pierre", "Serious service and clear communication."],
    ],
    ctaTitle: "Ready to Ride?",
    ctaText:
      "Book now and experience premium Tesla transfers, Mercedes van transport and VIP chauffeur service in Belgium.",
    faqTitle: "FAQ",
    faq: [
      ["How do I book?", "Send your trip details via WhatsApp and we confirm availability and price."],
      ["How fast do you respond?", "Most requests receive a reply in under 2 minutes."],
      ["Do you offer airport transfers?", "Yes, to and from Brussels Airport and other destinations in Belgium."],
      ["Can I book for business travel?", "Yes, we offer business accounts, monthly invoicing and priority bookings."],
    ],
  },

  fr: {
    nav: ["Services", "Flotte", "Avis", "FAQ", "Contact"],
    heroTitle: "Transferts Aéroport Premium à Bruxelles & Partout en Belgique",
    heroText:
      "Voyagez en confort avec notre flotte Tesla, option van Mercedes et service chauffeur VIP. Prix fixes, chauffeurs professionnels et confirmation rapide via WhatsApp.",
    bullets: [
      "Aéroport de Bruxelles dès 29€",
      "Déjà 800+ clients nous font confiance",
      "Lien de paiement sécurisé après réservation",
    ],
    quote: "Demandez votre devis",
    pickup: "Lieu de prise en charge",
    dropoff: "Lieu de destination",
    date: "Date",
    time: "Heure",
    passengers: "Passagers",
    luggage: "Bagages",
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
      ["Confort Tesla", "Véhicules Tesla noirs premium."],
      ["Prix fixes", "Prix communiqué à l'avance."],
      ["Chauffeurs professionnels", "Licenciés et multilingues."],
      ["Suivi des vols", "Nous adaptons en cas de retard."],
      ["Service 24/7", "Disponible jour et nuit."],
      ["Porte-à-porte", "Prise en charge et dépôt où il faut."],
    ],
    howTitle: "Comment ça marche",
    how: [
      ["Indiquez votre trajet", "Ajoutez départ, destination et détails."],
      ["Recevez votre devis", "Nous répondons vite avec un prix fixe."],
      ["Confirmez", "Réservez via WhatsApp et recevez confirmation."],
    ],
    perfect: "Idéal pour",
    perfectItems: [
      "Voyageurs aéroport",
      "Clients business",
      "Hôtels & clients VIP",
      "Touristes en Belgique",
    ],
    servicesTitle: "Nos Services",
    servicesSub:
      "Pensés pour voyageurs aéroport, cadres, hôtels, clients VIP et touristes en Belgique.",
    services: [
      ["Transferts Aéroport", "Brussels Airport, Charleroi et trajets principaux."],
      ["Trajets urbains", "Déplacements rapides et confortables dans Bruxelles."],
      ["Longue distance", "Voyagez à travers la Belgique avec confirmation directe."],
      ["Business Travel", "Trajets exécutifs, facturation mensuelle et priorité pro."],
    ],
    fleetTitle: "Notre Flotte",
    fleetSub: "Choisissez le véhicule adapté à votre trajet.",
    fleet: [
      ["Tesla Premium", "1–4 passagers. Idéal pour transferts aéroport premium."],
      ["Mercedes Vito Van", "Jusqu'à 8 passagers. Idéal pour familles, groupes et bagages."],
      ["Service VIP Business", "Expérience chauffeur premium pour dirigeants, hôtels et événements."],
    ],
    reviewsTitle: "Avis clients vérifiés",
    reviews: [
      ["Patrick D.", "Bruxelles", "Service parfait. Chauffeur ponctuel et très pro."],
      ["Sophie L.", "Waterloo", "Réponse rapide et transfert aéroport fluide."],
      ["Olivier M.", "Uccle", "Voiture propre, service sérieux et confortable."],
      ["Bernard T.", "Woluwe-Saint-Pierre", "Bonne communication et trajet impeccable."],
    ],
    ctaTitle: "Prêt à partir ?",
    ctaText:
      "Réservez maintenant et profitez de transferts Tesla premium, transport van Mercedes et service chauffeur VIP en Belgique.",
    faqTitle: "FAQ",
    faq: [
      ["Comment réserver ?", "Envoyez les détails via WhatsApp et nous confirmons disponibilité et prix."],
      ["En combien de temps répondez-vous ?", "La plupart des demandes reçoivent une réponse en moins de 2 minutes."],
      ["Proposez-vous les transferts aéroport ?", "Oui, vers et depuis Brussels Airport et d'autres destinations en Belgique."],
      ["Peut-on réserver pour business ?", "Oui, comptes business, facturation mensuelle et réservations prioritaires."],
    ],
  },

  nl: {
    nav: ["Diensten", "Vloot", "Reviews", "FAQ", "Contact"],
    heroTitle: "Luchthaventransfers in Brussel & Heel België",
    heroText:
      "Reis comfortabel met onze Tesla-vloot, Mercedes van-optie en VIP-chauffeursservice. Vaste prijzen, professionele chauffeurs en snelle bevestiging via WhatsApp.",
    bullets: [
      "Brussels Airport vanaf €29",
      "Vertrouwd door 800+ klanten in België",
      "Veilige betaallink na bevestiging van uw reservatie",
    ],
    quote: "Vraag uw offerte aan",
    pickup: "Ophaallocatie",
    dropoff: "Bestemming",
    date: "Datum",
    time: "Tijd",
    passengers: "Passagiers",
    luggage: "Bagage",
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
      ["Tesla Comfort", "Premium zwarte Tesla-voertuigen."],
      ["Vaste prijzen", "U kent uw prijs vooraf."],
      ["Professionele chauffeurs", "Vergunde en meertalige chauffeurs."],
      ["Vluchtopvolging", "Wij passen ons aan bij vluchtvertragingen."],
      ["24/7 Service", "Dag en nacht beschikbaar."],
      ["Deur-tot-deur", "Ophalen en afzetten waar u wilt."],
    ],
    howTitle: "Hoe werkt het?",
    how: [
      ["Geef uw rit door", "Voeg ophaallocatie, bestemming en ritgegevens toe."],
      ["Ontvang uw offerte", "Wij antwoorden snel met een vaste prijs."],
      ["Bevestig en ontspan", "Reserveer via WhatsApp en ontvang uw bevestiging."],
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
      "Aangepast aan reizigers, zakelijke klanten, hotels, VIP-klanten en toeristen in België.",
    services: [
      ["Luchthaventransfers", "Brussels Airport, Charleroi en de belangrijkste transfers."],
      ["Stadsritten", "Snelle en comfortabele ritten overal in Brussel."],
      ["Lange afstand", "Reis door heel België met directe bevestiging."],
      ["Zakelijk vervoer", "Executive ritten, maandelijkse facturatie en prioritaire service."],
    ],
    fleetTitle: "Onze Vloot",
    fleetSub: "Kies het juiste voertuig voor uw rit.",
    fleet: [
      ["Tesla Premium", "1–4 passagiers. Ideaal voor premium luchthaventransfers."],
      ["Mercedes Vito Van", "Tot 8 passagiers. Ideaal voor families, groepen en extra bagage."],
      ["VIP Business Service", "Premium chauffeursbeleving voor directieleden, hotels en evenementen."],
    ],
    reviewsTitle: "Geverifieerde Klantbeoordelingen",
    reviews: [
      ["Patrick D.", "Brussel", "Perfecte service. Chauffeur was stipt en zeer professioneel."],
      ["Sophie L.", "Waterloo", "Snelle reactie, eenvoudige boeking en vlotte luchthaventransfer."],
      ["Olivier M.", "Ukkel", "Propere wagen, beleefde chauffeur en uitstekend comfort."],
      ["Bernard T.", "Sint-Pieters-Woluwe", "Ernstige service en duidelijke communicatie."],
    ],
    ctaTitle: "Klaar om te vertrekken?",
    ctaText:
      "Reserveer nu en ervaar premium Tesla-transfers, Mercedes van-vervoer en VIP-chauffeursservice in België.",
    faqTitle: "Veelgestelde vragen",
    faq: [
      ["Hoe reserveer ik?", "Stuur uw ritgegevens via WhatsApp en wij bevestigen snel beschikbaarheid en prijs."],
      ["Hoe snel antwoorden jullie?", "De meeste aanvragen krijgen een antwoord binnen 2 minuten."],
      ["Bieden jullie luchthaventransfers aan?", "Ja, van en naar Brussels Airport en andere bestemmingen in België."],
      ["Kan ik zakelijk vervoer boeken?", "Ja, wij bieden business accounts, maandelijkse facturatie en prioritaire boekingen."],
    ],
  },
};

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
        className="object-cover transition duration-700 group-hover:scale-110"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
    </div>
  );
}

function Button({ href, children, dark = false }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${
        dark
          ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
          : "bg-[#d6a85c] text-black hover:brightness-110"
      }`}
    >
      {children}
      <ArrowRight className="h-4 w-4" />
    </a>
  );
}

function Input({ label, value, setValue, placeholder = "", icon }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-white/75">
        {label}
      </span>
      <div className="relative">
        {icon && (
          <span className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d6a85c]">
            {icon}
          </span>
        )}
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className={`w-full rounded-2xl border border-white/10 bg-white/[0.04] py-4 text-white outline-none placeholder:text-white/35 focus:border-[#d6a85c] ${
            icon ? "pl-10 pr-4" : "px-4"
          }`}
        />
      </div>
    </label>
  );
}

function SelectInput({ label, value, setValue, options }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-white/75">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="w-full rounded-2xl border border-white/10 bg-[#171717] px-4 py-4 text-white outline-none focus:border-[#d6a85c]"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
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
          href={`https://wa.me/${WHATSAPP}`}
          className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-[#d6a85c]"
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
        {items.map((item) => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default function Page() {
  const [lang, setLang] = useState("en");
  const [menuOpen, setMenuOpen] = useState(false);
  const [pickup, setPickup] = useState("");
  const [dropoff, setDropoff] = useState("");
  const [passengers, setPassengers] = useState("1");
  const [luggage, setLuggage] = useState("1");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [flightNumber, setFlightNumber] = useState("");
  const [returnTrip, setReturnTrip] = useState("No");
  const [childSeat, setChildSeat] = useState("No");
  const [vehicleChoice, setVehicleChoice] = useState("Auto");
  const [specialRequest, setSpecialRequest] = useState("");

  const t = content[lang];

  const navIds = ["services", "fleet", "reviews", "faq", "contact"];

  const learnMoreLabel =
    lang === "fr" ? "En savoir plus" : lang === "nl" ? "Meer info" : "Learn more";

  const fastReplyLabel =
    lang === "fr"
      ? "Réponse rapide garantie"
      : lang === "nl"
      ? "Snelle reactie gegarandeerd"
      : "Fast reply guaranteed";

  const heroPills =
    lang === "fr"
      ? ["Prix fixes", "Service 24/7", "Service chauffeur VIP"]
      : lang === "nl"
      ? ["Vaste prijzen", "24/7 service", "VIP-chauffeursservice"]
      : ["Fixed Prices", "24/7 Service", "VIP Chauffeur Service"];

  const waMessage = useMemo(() => {
    const vehicle =
      Number(passengers) > 4 ? "Mercedes Vito Van" : "Tesla Premium";

    return encodeURIComponent(
      `Booking request - BlackCab Shuttle
Pickup: ${pickup || "-"}
Drop-off: ${dropoff || "-"}
Passengers: ${passengers}
Luggage: ${luggage}
Date: ${date || "-"}
Time: ${time || "-"}
Flight number: ${flightNumber || "-"}
Return trip: ${returnTrip}
Child seat: ${childSeat}
Vehicle requested: ${vehicleChoice}
Suggested vehicle: ${vehicle}
Special request: ${specialRequest || "-"}`
    );
  }, [
    pickup,
    dropoff,
    passengers,
    luggage,
    date,
    time,
    flightNumber,
    returnTrip,
    childSeat,
    vehicleChoice,
    specialRequest,
  ]);

  const whatsappUrl = `https://wa.me/${WHATSAPP}?text=${waMessage}`;

  const trackConversion = (type) => {
    if (typeof window !== "undefined") {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: "blackcab_conversion", type });
      if (window.gtag) {
        window.gtag("event", type, { event_category: "conversion" });
      }
    }
  };

  const whyIcons = [Shield, CircleDollarSign, Users, CarFront, Clock3, MapPin];
  const statIcons = [Star, CarFront, BadgeCheck, Clock3, MessageCircle];
  const perfectIcons = [CarFront, Briefcase, Hotel, Building2];
  const ctaIcons = [BadgeCheck, Check, Headphones];

  return (
    <main className="min-h-screen bg-[#030303] text-white">
      <div className="mx-auto max-w-[1500px] px-4 py-4 md:px-8">
        <header className="sticky top-3 z-50 mb-4 rounded-[24px] border border-white/10 bg-black/70 px-5 py-4 shadow-2xl backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <a href="#hero" className="leading-none">
              <div className="text-2xl font-black tracking-tight md:text-3xl">
                BLACKCAB
              </div>
              <div className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#d6a85c]">
                Shuttle Brussels
              </div>
            </a>

            <nav className="hidden items-center gap-7 text-sm text-white/75 lg:flex">
              {t.nav.map((item, index) => (
                <a
                  key={item}
                  href={`#${navIds[index]}`}
                  className="hover:text-[#d6a85c]"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="hidden items-center gap-3 md:flex">
              <button
                onClick={() => setLang("en")}
                className={lang === "en" ? "text-[#d6a85c]" : "text-white/60"}
              >
                EN
              </button>
              <button
                onClick={() => setLang("fr")}
                className={lang === "fr" ? "text-[#d6a85c]" : "text-white/60"}
              >
                FR
              </button>
              <button
                onClick={() => setLang("nl")}
                className={lang === "nl" ? "text-[#d6a85c]" : "text-white/60"}
              >
                NL
              </button>
              <ChevronDown className="h-4 w-4 text-white/40" />
              <a
                href={`tel:${PHONE}`}
                className="flex items-center gap-2 text-sm text-white/80"
              >
                <Phone className="h-4 w-4 text-[#d6a85c]" />
                +32 490 37 39 03
              </a>
              <Button href={whatsappUrl}>{t.whatsapp}</Button>
            </div>

            <button
              className="rounded-full border border-white/10 p-3 lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
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
                  className="rounded-xl px-4 py-3 text-white/80 hover:bg-white/5"
                >
                  {item}
                </a>
              ))}

              <div className="flex gap-3 px-4 py-2">
                <button onClick={() => setLang("en")}>EN</button>
                <button onClick={() => setLang("fr")}>FR</button>
                <button onClick={() => setLang("nl")}>NL</button>
              </div>
            </div>
          )}
        </header>

        {/* HERO */}
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
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.76)_42%,rgba(0,0,0,0.30)_100%)] backdrop-blur-[1px]" />

          <div className="relative z-10 grid min-h-[760px] gap-8 p-5 md:p-10 xl:grid-cols-[1.1fr_0.75fr]">
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex flex-wrap gap-3">
                {heroPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-full border border-[#6b5431] bg-black/55 px-4 py-2 text-sm font-bold text-[#d6a85c]"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
                {t.heroTitle}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
                {t.heroText}
              </p>

              <div className="mt-7 space-y-3">
                {t.bullets.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-3 text-lg font-semibold text-white/90"
                  >
                    <Check className="h-5 w-5 rounded-full bg-[#d6a85c] p-0.5 text-black" />
                    {b}
                  </div>
                ))}
              </div>

              <div className="mt-5 max-w-xl rounded-2xl border border-[#6b5431]/70 bg-black/55 px-5 py-4 text-sm font-semibold leading-6 text-white/75 shadow-2xl">
                Trusted by executives, hotels, VIP clients and frequent airport
                travelers in Brussels.
              </div>

              <div className="mt-8 inline-flex w-fit items-center gap-3 rounded-full border border-[#6b5431] bg-black/70 px-5 py-3">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-white font-black text-black">
                  G
                </span>
                <strong>4.7/5 from 800+ positive reviews</strong>
                <span className="flex text-[#d6a85c]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </span>
              </div>
            </div>

            <div className="my-auto rounded-[28px] border border-[#6b5431] bg-[#111]/90 p-6 shadow-2xl backdrop-blur-md">
              <div className="mb-6 flex items-center justify-between gap-4">
                <h2 className="text-3xl font-black">{t.quote}</h2>
                <span className="text-xs font-bold text-[#d6a85c]">
                  {fastReplyLabel}
                </span>
              </div>

              <div className="grid gap-4">
                <Input label={t.pickup} value={pickup} setValue={setPickup} icon={<MapPin />} placeholder={t.pickup} />
                <Input label={t.dropoff} value={dropoff} setValue={setDropoff} icon={<MapPin />} placeholder={t.dropoff} />

                <div className="grid grid-cols-2 gap-3">
                  <Input label={t.date} value={date} setValue={setDate} placeholder="Today" />
                  <Input label={t.time} value={time} setValue={setTime} placeholder="Now" />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Input label={t.passengers} value={passengers} setValue={setPassengers} icon={<Users />} />
                  <Input label={t.luggage} value={luggage} setValue={setLuggage} icon={<Briefcase />} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Input label={lang === "fr" ? "N° de vol" : lang === "nl" ? "Vluchtnummer" : "Flight number"} value={flightNumber} setValue={setFlightNumber} placeholder="SN1234" />
                  <SelectInput label={lang === "fr" ? "Aller-retour" : lang === "nl" ? "Heen en terug" : "Return trip"} value={returnTrip} setValue={setReturnTrip} options={["No", "Yes"]} />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <SelectInput label={lang === "fr" ? "Siège enfant" : lang === "nl" ? "Kinderzitje" : "Child seat"} value={childSeat} setValue={setChildSeat} options={["No", "Yes"]} />
                  <SelectInput label={lang === "fr" ? "Véhicule" : lang === "nl" ? "Voertuig" : "Vehicle"} value={vehicleChoice} setValue={setVehicleChoice} options={["Auto", "Tesla", "Mercedes Van", "VIP"]} />
                </div>

                <Input
                  label={lang === "fr" ? "Message spécial" : lang === "nl" ? "Extra bericht" : "Special request"}
                  value={specialRequest}
                  setValue={setSpecialRequest}
                  placeholder={lang === "fr" ? "Ex: accueil avec panneau, PMR..." : lang === "nl" ? "Bijv: naamkaartje, PBM..." : "Ex: name sign, reduced mobility..."}
                />

                <span onClick={() => trackConversion("whatsapp_quote_click")}>
                  <Button href={whatsappUrl}>{t.request}</Button>
                </span>

                <span onClick={() => trackConversion("whatsapp_click")}>
                  <Button href={whatsappUrl} dark>
                    <MessageCircle className="h-4 w-4" />
                    {t.whatsapp}
                  </Button>
                </span>

                <span onClick={() => trackConversion("call_click")}>
                  <Button href={`tel:${PHONE}`} dark>
                    <Phone className="h-4 w-4" />
                    {t.call}
                  </Button>
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="mt-5 rounded-[24px] border border-white/10 bg-[#090909] p-5">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {t.stats.map(([value, label], i) => {
              const Icon = statIcons[i];
              return (
                <div key={label} className="rounded-2xl bg-white/[0.03] p-4">
                  <Icon className="mb-3 h-5 w-5 text-[#d6a85c]" />
                  <div className="text-2xl font-black">{value}</div>
                  <div className="text-sm text-white/50">{label}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHY + HOW */}
        <section className="mt-12 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <SectionTitle>{t.whyTitle}</SectionTitle>
            <p className="mt-3 max-w-2xl text-lg leading-8 text-white/65">
              {t.whyText}
            </p>
            <div className="mt-7 grid gap-4 md:grid-cols-3">
              {t.why.map(([title, desc], i) => {
                const Icon = whyIcons[i];
                return (
                  <Card key={title}>
                    <Icon className="mb-4 h-6 w-6 text-[#d6a85c]" />
                    <h3 className="text-xl font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/58">
                      {desc}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>

          <div>
            <MediaFrame
              src={images.interior}
              alt="Premium Tesla interior"
              height="h-[330px]"
            />

            <div className="mt-7">
              <SectionTitle>{t.howTitle}</SectionTitle>
              <div className="mt-5 grid gap-4">
                {t.how.map(([title, desc], i) => (
                  <Card key={title}>
                    <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-full border border-[#d6a85c] text-[#d6a85c]">
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

        {/* PERFECT */}
        <section className="mt-12">
          <SectionTitle>{t.perfect}</SectionTitle>
          <div className="mt-6 grid gap-4 md:grid-cols-4">
            {t.perfectItems.map((item, i) => {
              const Icon = perfectIcons[i];
              return (
                <Card key={item}>
                  <Icon className="mb-3 h-5 w-5 text-[#d6a85c]" />
                  <div className="font-bold">{item}</div>
                </Card>
              );
            })}
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="mt-12">
          <SectionTitle>{t.servicesTitle}</SectionTitle>
          <p className="mt-3 text-lg font-semibold text-[#d6a85c]">
            {t.servicesSub}
          </p>
          <div className="mt-7 grid gap-5 lg:grid-cols-4">
            {t.services.map(([title, desc], i) => (
              <ImageCard
                key={title}
                img={images.services[i]}
                title={title}
                desc={desc}
                learnMoreLabel={learnMoreLabel}
              />
            ))}
          </div>
        </section>

        {/* FLEET */}
        <section id="fleet" className="mt-12">
          <SectionTitle>{t.fleetTitle}</SectionTitle>
          <p className="mt-3 text-lg font-semibold text-[#d6a85c]">
            {t.fleetSub}
          </p>
          <div className="mt-7 grid gap-5 lg:grid-cols-3">
            {t.fleet.map(([title, desc], i) => (
              <ImageCard
                key={title}
                img={images.fleet[i]}
                title={title}
                desc={desc}
                height="h-64"
                learnMoreLabel={learnMoreLabel}
              />
            ))}
          </div>
        </section>

        {/* REVIEWS */}
        <section id="reviews" className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <Card>
            <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6a85c]">
              Customer trust
            </div>
            <h2 className="mt-3 text-3xl font-black">
              Premium transfers with fast response and real local service.
            </h2>
            <p className="mt-4 leading-7 text-white/60">
              Direct WhatsApp communication, fixed prices, clean vehicles and
              professional chauffeurs.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["800+ Reviews", "9,000+ Trips", "24/7 Support"].map((item) => (
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
              {t.reviews.map(([name, city, text]) => (
                <Card key={name}>
                  <div className="mb-2 text-xs font-bold text-[#d6a85c]">
                    ✓ Verified Customer • March 2026
                  </div>
                  <div className="mb-3 flex text-[#d6a85c]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
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

        {/* CTA */}
        <section className="mt-12 overflow-hidden rounded-[30px] border border-[#6b5431] bg-[#120f0b] p-6 md:p-8">
          <div className="grid items-center gap-7 lg:grid-cols-[0.8fr_1.2fr]">
            <MediaFrame
              src={images.cta}
              alt="VIP chauffeur service"
              height="h-[320px]"
            />

            <div>
              <SectionTitle>{t.ctaTitle}</SectionTitle>
              <p className="mt-4 max-w-2xl leading-8 text-white/70">
                {t.ctaText}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                <Button href={whatsappUrl}>{t.whatsapp}</Button>
                <Button href={`tel:${PHONE}`} dark>
                  {t.call}
                </Button>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 text-xs font-bold text-white/65">
                {["Visa", "Mastercard", "Apple Pay", "Google Pay", "Secure Online Payment"].map((p) => (
                  <span key={p} className="rounded-full border border-white/15 px-3 py-1">
                    {p}
                  </span>
                ))}
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-3">
                {["Instant Booking", "Direct Confirmation", "24/7 Support"].map((title, i) => {
                  const Icon = ctaIcons[i];
                  return (
                    <Card key={title}>
                      <Icon className="mb-3 h-5 w-5 text-[#d6a85c]" />
                      <h3 className="font-black">{title}</h3>
                      <p className="mt-2 text-sm text-white/55">
                        Book quickly and receive clear confirmation.
                      </p>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* SEO */}
        <section className="mt-12 rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6 md:p-8">
          <h2 className="text-3xl font-black md:text-4xl">
            Taxi Brussels, Airport Transfer & VIP Chauffeur Service
          </h2>

          <p className="mt-4 leading-8 text-white/65">
            BlackCab Shuttle Brussels provides premium taxi Brussels services,
            Brussels Airport transfers, Zaventem airport transfers, private
            chauffeur Brussels, Mercedes Vito van transport and VIP chauffeur
            service across Belgium.
          </p>

          <p className="mt-4 leading-8 text-white/65">
            Book your taxi in Brussels easily via WhatsApp with fixed prices,
            professional drivers and fast confirmation. Whether you need an
            airport transfer, a city ride or a long-distance journey, BlackCab
            Shuttle guarantees comfort and reliability.
          </p>

          <p className="mt-4 leading-8 text-white/65">
            Our services include taxi Zaventem, airport shuttle Brussels,
            chauffeur privé Bruxelles, VIP chauffeur service and Mercedes van
            transport for groups and families.
          </p>
        </section>

        {/* BUSINESS */}
        <section className="mt-8 rounded-[24px] border border-white/10 bg-[#0b0b0b] p-5">
          <div className="text-sm font-bold text-[#d6a85c]">
            Business Accounts
          </div>
          <p className="mt-2 text-white/65">
            Monthly invoicing • Priority bookings • Dedicated chauffeur service
            for companies, executives and hotels.
          </p>
        </section>

        {/* FAQ */}
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

        {/* PRIORITY */}
        <section className="mt-12 rounded-[30px] border border-[#6b5431]/70 bg-[radial-gradient(circle_at_top_left,rgba(214,168,92,0.18),transparent_35%),#070707] p-7 shadow-2xl md:p-10">
          <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <div className="mb-2 text-sm font-bold uppercase tracking-[0.25em] text-[#d6a85c]">
                Priority booking
              </div>
              <h2 className="text-3xl font-black md:text-5xl">
                Need a driver today?
              </h2>
              <p className="mt-4 max-w-2xl leading-8 text-white/65">
                Send your itinerary on WhatsApp and receive a fast quote with
                the right vehicle: Tesla, Mercedes van or VIP chauffeur service.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
              <Button href={whatsappUrl}>{t.request}</Button>
              <Button href={`tel:${PHONE}`} dark>
                {t.call}
              </Button>
            </div>
          </div>
        </section>

        {/* LEGAL */}
        <section className="mt-12 rounded-[28px] border border-white/10 bg-[#0b0b0b] p-6 md:p-8">
          <SectionTitle>Legal information</SectionTitle>
          <div className="mt-5 grid gap-4 text-sm leading-7 text-white/65 md:grid-cols-2">
            <div>
              <strong className="text-white">BlackCab Shuttle Brussels</strong>
              <br />
              Premium taxi, shuttle and chauffeur service in Brussels, Belgium.
              <br />
              Company details, VAT number and registered office address to be
              added before final publication.
            </div>
            <div>
              Email: {EMAIL}
              <br />
              Phone: +32 490 37 39 03
              <br />
              Privacy Policy • Terms & Conditions • Cookies Policy
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer
          id="contact"
          className="mt-12 rounded-[28px] border border-white/10 bg-[#080808] p-8"
        >
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="text-3xl font-black">BLACKCAB</div>
              <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#d6a85c]">
                Shuttle Brussels
              </div>
              <p className="mt-4 leading-7 text-white/55">
                Premium taxi and shuttle services in Brussels and across Belgium.
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex rounded-full border border-white/10 px-4 py-2 text-sm text-white/75 hover:text-[#d6a85c]"
                >
                  Instagram
                </a>
              </div>
            </div>

            <FooterCol
              title="Services"
              items={["Airport Transfers", "City Rides", "Long Distance", "Business Travel"]}
            />
            <FooterCol
              title="Company"
              items={["About Us", "Our Fleet", "Reviews", "Contact"]}
            />
            <FooterCol
              title="Contact"
              items={["+32 490 37 39 03", "WhatsApp", EMAIL, "Brussels, Belgium", "24/7 Available"]}
            />
          </div>

          <div className="mt-8 border-t border-white/10 pt-5 text-center text-sm text-white/35">
            © 2026 BlackCab Shuttle Brussels. All rights reserved.
          </div>
        </footer>
      </div>

      <a
        href={whatsappUrl}
        aria-label="Book on WhatsApp"
        className="fixed bottom-5 right-5 z-[80] flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_20px_60px_rgba(37,211,102,0.45)] transition hover:scale-105"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}