"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  CarFront,
  Check,
  Clock3,
  CreditCard,
  Droplets,
  Earth,
  Mail,
  Menu,
  Phone,
  Plane,
  ShieldCheck,
  Star,
  Users,
  Wifi,
  X,
} from "lucide-react";

const PHONE_LINK = "+3228862140";
const PHONE_DISPLAY = "02 886 21 40";
const CONTACT_EMAIL = "info@blackcab-shuttle.com";

const copy = {
  fr: {
    top: "Taxi 24h/24 · 7j/7 · Bruxelles et aéroports",
    nav: ["Tarifs", "Véhicules", "Avantages", "FAQ"],
    book: "Réserver",
    call: "Appeler",
    eyebrow: "Taxi premium à Bruxelles",
    title: "Votre transfert avec chauffeur, au prix annoncé.",
    lead: "Réservez en quelques instants. Chauffeur ponctuel, prix fixe sans commission et prise en charge partout à Bruxelles.",
    trust: ["Zaventem dès 29 €", "Sans commission", "Chauffeur FR · NL · EN"],
    formTitle: "Réserver votre trajet",
    formSub: "Votre demande est envoyée directement par e-mail.",
    fields: {
      from: "Départ / prise en charge", fromPh: "Adresse, hôtel ou gare",
      to: "Destination", toPh: "Aéroport ou adresse", date: "Date", time: "Heure",
      passengers: "Passagers", vehicle: "Véhicule", name: "Nom", namePh: "Votre nom",
      phone: "Téléphone", phonePh: "Votre numéro", email: "E-mail", emailPh: "Pour recevoir la confirmation",
      details: "Vol, bagages ou demande particulière", detailsPh: "N° de vol, nombre de bagages, siège enfant…",
    },
    vehicles: ["Confort électrique", "Van Mercedes", "Service VIP"],
    consent: "J’accepte que mes données soient utilisées pour traiter cette réservation.",
    send: "Envoyer ma demande",
    sending: "Envoi en cours…",
    success: "Demande envoyée. Nous vous répondons rapidement par téléphone ou par e-mail.",
    error: "L’envoi a échoué. Appelez-nous directement au 02 886 21 40.",
    secure: "Aucun paiement immédiat. Le prix est confirmé avant le trajet.",
    faresEyebrow: "Prix annoncés",
    faresTitle: "Les trajets les plus demandés",
    faresSub: "Le tarif exact est confirmé avant votre trajet, sans commission ajoutée.",
    fares: [
      ["Bruxelles ↔ Zaventem", "Dès 29 €", "Suivi du vol et prise en charge à l’adresse indiquée."],
      ["Bruxelles ↔ Charleroi", "Dès 79 €", "Transfert direct vers Brussels South Charleroi Airport."],
    ],
    fleetEyebrow: "Notre flotte",
    fleetTitle: "Le bon véhicule pour chaque trajet",
    fleet: [
      ["Confort électrique", "Dès 29 €", "1 à 4 passagers", "Tesla confortable pour vos trajets privés et professionnels."],
      ["Van Mercedes", "Dès 39 €", "1 à 7 passagers", "Pour les familles, groupes et voyageurs avec plusieurs bagages."],
      ["Service VIP", "Sur devis", "Entreprises et événements", "Chauffeur discret, tenue professionnelle et service personnalisé."],
    ],
    choose: "Choisir ce véhicule",
    benefits: [
      ["Eau offerte", "Une bouteille à bord"], ["Wi-Fi gratuit", "Restez connecté"],
      ["Chauffeur trilingue", "Français, néerlandais, anglais"], ["Paiement flexible", "Carte, espèces ou facture"],
    ],
    stepsTitle: "Votre réservation en 3 étapes",
    steps: [["Indiquez le trajet", "Départ, destination, date et véhicule."], ["Recevez le prix", "Nous confirmons rapidement le tarif fixe."], ["Voyagez sereinement", "Votre chauffeur arrive au lieu convenu."]],
    ratingTitle: "4,7/5 de satisfaction client",
    ratingText: "Plus de 800 avis pour un service ponctuel, professionnel et disponible jour et nuit.",
    faqTitle: "Tout savoir avant de réserver",
    faq: [
      ["Le prix peut-il changer après la réservation ?", "Le prix confirmé reste fixe, sauf modification du trajet ou des conditions demandées par le client."],
      ["Puis-je réserver très tôt ou la nuit ?", "Oui. Le service fonctionne 24h/24 et 7j/7 sur réservation."],
      ["Attendez-vous en cas de retard de vol ?", "Oui. Communiquez votre numéro de vol afin que nous puissions suivre l’heure d’arrivée."],
      ["Comment recevrai-je la confirmation ?", "Votre demande arrive par e-mail. Nous vous confirmons ensuite le véhicule, l’heure et le prix par téléphone ou par e-mail."],
    ],
    coverageTitle: "Prise en charge dans les 19 communes de Bruxelles",
    coverageText: "À domicile, à l’hôtel, en gare, au bureau ou à l’aéroport.",
    finalTitle: "Besoin d’un chauffeur ?",
    finalText: "Appelez-nous ou envoyez votre demande de réservation en ligne.",
    simple: "Simple et rapide",
    privacy: "Confidentialité",
    coverageEyebrow: "Bruxelles",
    heroAlt: "Chauffeur BlackCab Shuttle à Bruxelles",
    ratingValue: "4,7",
    footerTagline: "Taxi, navette aéroport et chauffeur privé à Bruxelles.",
    footerLinks: ["Taxi Bruxelles", "Taxi Zaventem", "Chauffeur privé"],
    legalLinks: ["Confidentialité", "Conditions", "Cookies"],
    legalHrefs: ["/confidentialite", "/conditions-generales", "/cookies"],
  },
  nl: {
    top: "Taxi 24/7 · Brussel en luchthavens", nav: ["Tarieven", "Voertuigen", "Voordelen", "FAQ"], book: "Boeken", call: "Bellen",
    eyebrow: "Premium taxi in Brussel", title: "Uw transfer met chauffeur, tegen de afgesproken prijs.",
    lead: "Boek in enkele ogenblikken. U krijgt een stipte chauffeur, een vaste prijs zonder commissie en een ophaling in heel Brussel.",
    trust: ["Zaventem vanaf €29", "Geen commissie", "Chauffeur FR · NL · EN"],
    formTitle: "Boek uw rit", formSub: "Uw aanvraag wordt rechtstreeks per e-mail verzonden.",
    fields: { from: "Vertrek / ophaalplaats", fromPh: "Adres, hotel of station", to: "Bestemming", toPh: "Luchthaven of adres", date: "Datum", time: "Tijd", passengers: "Passagiers", vehicle: "Voertuig", name: "Naam", namePh: "Uw naam", phone: "Telefoon", phonePh: "Uw nummer", email: "E-mail", emailPh: "Voor uw bevestiging", details: "Vluchtgegevens, bagage of bijzonder verzoek", detailsPh: "Vluchtnummer, bagage, kinderzitje…" },
    vehicles: ["Elektrische wagen", "Mercedes-van", "VIP-service"], consent: "Ik ga ermee akkoord dat mijn gegevens worden gebruikt om deze reservatie te verwerken.",
    send: "Mijn aanvraag verzenden", sending: "Verzenden…", success: "Aanvraag verzonden. Wij antwoorden snel per telefoon of e-mail.", error: "Verzenden mislukt. Bel ons op 02 886 21 40.", secure: "U hoeft niet meteen te betalen. De prijs wordt vóór de rit bevestigd.",
    faresEyebrow: "Vooraf meegedeelde prijzen", faresTitle: "Populairste ritten", faresSub: "De exacte prijs wordt vóór uw rit bevestigd, zonder extra commissie.",
    fares: [["Brussel ↔ Zaventem", "Vanaf €29", "We volgen uw vlucht en halen u op het opgegeven adres op."], ["Brussel ↔ Charleroi", "Vanaf €79", "Rechtstreekse transfer naar Brussels South Charleroi Airport."]],
    fleetEyebrow: "Onze vloot", fleetTitle: "Het juiste voertuig voor elke rit",
    fleet: [["Elektrische wagen", "Vanaf €29", "1 tot 4 passagiers", "Comfortabele elektrische wagen voor privé- en zakenritten."], ["Mercedes-van", "Vanaf €39", "1 tot 7 passagiers", "Voor gezinnen, groepen en reizigers met meerdere koffers."], ["VIP-service", "Op aanvraag", "Zakelijke ritten en evenementen", "Discrete chauffeur en persoonlijke service."]], choose: "Kies dit voertuig",
    benefits: [["Gratis water", "Een fles water aan boord"], ["Gratis wifi", "Blijf verbonden"], ["Drietalige chauffeur", "Frans, Nederlands en Engels"], ["Flexibel betalen", "Kaart, contant of factuur"]],
    stepsTitle: "Uw reservatie in 3 stappen", steps: [["Vul uw ritgegevens in", "Vertrek, bestemming, datum en voertuig."], ["Ontvang de prijs", "Wij bevestigen snel het vaste tarief."], ["Reis met een gerust hart", "Uw chauffeur komt naar de afgesproken plaats."]],
    ratingTitle: "4,7/5 klanttevredenheid", ratingText: "Meer dan 800 beoordelingen voor een stipte en professionele service, dag en nacht.", faqTitle: "Alles wat u moet weten vóór u boekt",
    faq: [["Kan de prijs veranderen?", "De bevestigde prijs blijft vast, behalve wanneer de klant de rit wijzigt."], ["Kan ik ’s nachts boeken?", "Ja. De service is 24/7 beschikbaar op reservatie."], ["Wacht u als mijn vlucht vertraagd is?", "Ja. Geef uw vluchtnummer door, zodat we de aankomsttijd kunnen volgen."], ["Hoe ontvang ik de bevestiging?", "Uw aanvraag komt per e-mail binnen. Wij bevestigen daarna per telefoon of e-mail."]],
    coverageTitle: "Ophaling in de 19 gemeenten van Brussel", coverageText: "Thuis, bij uw hotel, station, kantoor of luchthaven.", finalTitle: "Een chauffeur nodig?", finalText: "Bel ons of dien uw reservatieaanvraag online in.",
    simple: "Eenvoudig en snel",
    privacy: "Privacy",
    coverageEyebrow: "Brussel",
    heroAlt: "BlackCab Shuttle-chauffeur in Brussel",
    ratingValue: "4,7",
    footerTagline: "Taxi, luchthaventransfer en privéchauffeur in Brussel.",
    footerLinks: ["Taxi Brussel", "Taxi Zaventem", "Privéchauffeur"],
    legalLinks: ["Privacy", "Voorwaarden", "Cookies"],
    legalHrefs: ["/nl/privacy", "/nl/algemene-voorwaarden", "/nl/cookies"],
  },
  en: {
    top: "Taxi 24/7 · Brussels and airports", nav: ["Fares", "Vehicles", "Benefits", "FAQ"], book: "Book", call: "Call",
    eyebrow: "Premium taxi in Brussels", title: "Your chauffeur-driven transfer at the agreed fare.",
    lead: "Book in moments. A punctual driver, a fixed fare with no commission and pickup anywhere in Brussels.",
    trust: ["Zaventem from €29", "No commission", "Driver FR · NL · EN"], formTitle: "Book your journey", formSub: "Your request is sent directly by email.",
    fields: { from: "Pickup", fromPh: "Address, hotel or station", to: "Destination", toPh: "Airport or address", date: "Date", time: "Time", passengers: "Passengers", vehicle: "Vehicle", name: "Name", namePh: "Your name", phone: "Phone", phonePh: "Your number", email: "Email", emailPh: "For your confirmation", details: "Flight details, luggage or special request", detailsPh: "Flight number, luggage, child seat…" },
    vehicles: ["Electric vehicle", "Mercedes van", "VIP service"], consent: "I agree that my data may be used to process this booking.", send: "Send my request", sending: "Sending…", success: "Request sent. We will reply quickly by phone or email.", error: "Sending failed. Call us on 02 886 21 40.", secure: "No payment is required now. The fare is confirmed before the ride.",
    faresEyebrow: "Agreed fares", faresTitle: "Most popular journeys", faresSub: "The exact fare is confirmed before your ride, with no commission.", fares: [["Brussels ↔ Zaventem", "From €29", "Flight monitoring and pickup at your chosen address."], ["Brussels ↔ Charleroi", "From €79", "Direct transfer to Brussels South Charleroi Airport."]],
    fleetEyebrow: "Our fleet", fleetTitle: "The right vehicle for every journey", fleet: [["Electric vehicle", "From €29", "1 to 4 passengers", "A comfortable electric vehicle for private and business travel."], ["Mercedes van", "From €39", "1 to 7 passengers", "For families, groups and travellers with several bags."], ["VIP service", "On request", "Business travel and events", "Discreet chauffeur and personalised service."]], choose: "Choose this vehicle",
    benefits: [["Complimentary water", "A bottle of water on board"], ["Free Wi-Fi", "Stay connected"], ["Trilingual driver", "French, Dutch and English"], ["Flexible payment", "Card, cash or invoice"]],
    stepsTitle: "Book in 3 simple steps", steps: [["Enter your trip details", "Pickup, destination, date and vehicle."], ["Receive the fare", "We quickly confirm the fixed fare."], ["Travel with confidence", "Your driver arrives at the agreed pickup point."]],
    ratingTitle: "4.7/5 customer satisfaction", ratingText: "More than 800 reviews for punctual, professional service available day and night.", faqTitle: "Everything you need to know before booking", faq: [["Can the fare change?", "The confirmed fare remains fixed unless the customer changes the journey."], ["Can I book at night?", "Yes. The service operates 24/7 by reservation."], ["Do you wait if my flight is delayed?", "Yes. Send us your flight number so we can monitor the arrival time."], ["How will I receive confirmation?", "Your request arrives by email. We then confirm by phone or email."]],
    coverageTitle: "Pickup across all 19 Brussels municipalities", coverageText: "From your home, hotel, station, office or airport.", finalTitle: "Need a driver?", finalText: "Call us or send your booking request online.",
    simple: "Simple and quick",
    privacy: "Privacy",
    coverageEyebrow: "Brussels",
    heroAlt: "BlackCab Shuttle chauffeur in Brussels",
    ratingValue: "4.7",
    footerTagline: "Taxi, airport transfer and private chauffeur service in Brussels.",
    footerLinks: ["Brussels taxi", "Zaventem taxi", "Private chauffeur"],
    legalLinks: ["Privacy", "Terms", "Cookies"],
    legalHrefs: ["/en/privacy", "/en/terms", "/en/cookies"],
  },
};

const communes = ["Bruxelles-Ville", "Anderlecht", "Auderghem", "Berchem-Sainte-Agathe", "Etterbeek", "Evere", "Forest", "Ganshoren", "Ixelles", "Jette", "Koekelberg", "Molenbeek", "Saint-Gilles", "Saint-Josse", "Schaerbeek", "Uccle", "Watermael-Boitsfort", "Woluwe-Saint-Lambert", "Woluwe-Saint-Pierre"];
const fleetImages = ["/images/3.jpg", "/images/7.jpg", "/images/11.jpg"];
const benefitIcons = [Droplets, Wifi, Earth, CreditCard];

function LanguageLinks({ lang }) {
  return <div className="language-switcher" aria-label="Langue">
    {[['fr', '/'], ['nl', '/nl'], ['en', '/en']].map(([code, href]) => <a key={code} href={href} hrefLang={code === 'en' ? 'en-BE' : `${code}-BE`} className={lang === code ? 'active' : ''}>{code.toUpperCase()}</a>)}
  </div>;
}

function BookingForm({ lang, t }) {
  const [state, setState] = useState("idle");
  const [vehicle, setVehicle] = useState(t.vehicles[0]);

  const submit = async (event) => {
    event.preventDefault();
    setState("sending");
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    try {
      const response = await fetch("/api/reservation", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      if (!response.ok) throw new Error("send_failed");
      form.reset();
      setVehicle(t.vehicles[0]);
      setState("success");
    } catch {
      setState("error");
    }
  };

  const f = t.fields;
  return <form id="reservation" className="booking-card" onSubmit={submit}>
    <input type="hidden" name="locale" value={lang} />
    <label className="honeypot" aria-hidden="true">Company<input name="company" tabIndex="-1" autoComplete="off" /></label>
    <div className="booking-heading"><span><CalendarDays /></span><div><h2>{t.formTitle}</h2><p>{t.formSub}</p></div></div>
    <div className="form-grid">
      <label className="wide"><b>{f.from}</b><input required name="from" autoComplete="street-address" placeholder={f.fromPh} /></label>
      <label className="wide"><b>{f.to}</b><input required name="to" placeholder={f.toPh} /></label>
      <label><b>{f.date}</b><input required name="date" type="date" /></label>
      <label><b>{f.time}</b><input required name="time" type="time" /></label>
      <label><b>{f.passengers}</b><select name="passengers" defaultValue="1">{[1,2,3,4,5,6,7].map(n => <option key={n}>{n}</option>)}</select></label>
      <label><b>{f.vehicle}</b><select name="vehicle" value={vehicle} onChange={e => setVehicle(e.target.value)}>{t.vehicles.map(v => <option key={v}>{v}</option>)}</select></label>
      <label><b>{f.name}</b><input required name="name" autoComplete="name" placeholder={f.namePh} /></label>
      <label><b>{f.phone}</b><input required name="phone" type="tel" autoComplete="tel" placeholder={f.phonePh} /></label>
      <label className="wide"><b>{f.email}</b><input name="email" type="email" autoComplete="email" placeholder={f.emailPh} /></label>
      <label className="wide"><b>{f.details}</b><textarea name="details" rows="2" placeholder={f.detailsPh} /></label>
    </div>
    <label className="consent"><input required type="checkbox" name="consent" value="yes" /><span>{t.consent} <a href={t.legalHrefs[0]}>{t.privacy}</a></span></label>
    <button className="submit-button" disabled={state === "sending"}>{state === "sending" ? t.sending : t.send}<ArrowRight /></button>
    <p className="secure"><ShieldCheck />{t.secure}</p>
    {state === "success" && <p className="form-message success" role="status">{t.success}</p>}
    {state === "error" && <p className="form-message error" role="alert">{t.error}</p>}
  </form>;
}

export function HomePage({ initialLang = "fr" }) {
  const lang = initialLang;
  const t = copy[lang];
  const [menu, setMenu] = useState(false);
  useEffect(() => { document.documentElement.lang = lang === "en" ? "en-BE" : `${lang}-BE`; }, [lang]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    name: "BlackCab Shuttle Brussels",
    legalName: "SCH Company SRL",
    url: "https://blackcab-shuttle.com",
    telephone: PHONE_LINK,
    email: CONTACT_EMAIL,
    image: "https://blackcab-shuttle.com/images/1.jpg",
    priceRange: "€€",
    areaServed: [
      { "@type": "City", name: "Bruxelles" },
      { "@type": "Airport", name: "Brussels Airport", iataCode: "BRU" },
      { "@type": "Airport", name: "Brussels South Charleroi Airport", iataCode: "CRL" },
    ],
    availableLanguage: ["fr", "nl", "en"],
    openingHours: "Mo-Su 00:00-23:59",
    offers: [
      { "@type": "Offer", name: "Transfert Bruxelles Zaventem", priceCurrency: "EUR", price: "29" },
      { "@type": "Offer", name: "Transfert Bruxelles Charleroi", priceCurrency: "EUR", price: "79" },
    ],
  };
  const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: t.faq.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) };

  const navIds = ["tarifs", "vehicules", "avantages", "faq"];
  return <main className="site-shell">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    <div className="top-line"><span><Clock3 />{t.top}</span><a href={`tel:${PHONE_LINK}`}><Phone />{PHONE_DISPLAY}</a></div>
    <header className="site-header">
      <a className="brand" href={lang === "fr" ? "/" : `/${lang}`} aria-label="BlackCab Shuttle"><span className="brand-mark"><CarFront /></span><span><strong>BLACKCAB</strong><small>Shuttle Brussels</small></span></a>
      <nav className="desktop-nav">{t.nav.map((item, i) => <a key={item} href={`#${navIds[i]}`}>{item}</a>)}</nav>
      <div className="header-actions"><LanguageLinks lang={lang} /><a className="header-book" href="#reservation">{t.book}</a><button className="menu-button" onClick={() => setMenu(!menu)} aria-expanded={menu} aria-label="Menu">{menu ? <X /> : <Menu />}</button></div>
      {menu && <nav className="mobile-nav"><a className="mobile-book" href="#reservation" onClick={() => setMenu(false)}>{t.book}</a>{t.nav.map((item, i) => <a key={item} href={`#${navIds[i]}`} onClick={() => setMenu(false)}>{item}</a>)}</nav>}
    </header>

    <section className="hero-section">
      <Image src="/images/1.jpg" alt={t.heroAlt} fill priority sizes="100vw" className="hero-image" />
      <div className="hero-overlay" />
      <div className="hero-grid page-width">
        <div className="hero-copy"><p className="eyebrow light"><BadgeCheck />{t.eyebrow}</p><h1>{t.title}</h1><p className="hero-lead">{t.lead}</p><div className="trust-row">{t.trust.map(x => <span key={x}><Check />{x}</span>)}</div><a className="phone-pill" href={`tel:${PHONE_LINK}`}><Phone /><span><small>{t.call}</small>{PHONE_DISPLAY}</span></a></div>
        <BookingForm lang={lang} t={t} />
      </div>
    </section>

    <section id="tarifs" className="section page-width"><div className="section-heading"><p className="eyebrow"><Plane />{t.faresEyebrow}</p><h2>{t.faresTitle}</h2><p>{t.faresSub}</p></div><div className="fare-grid">{t.fares.map(([name, price, desc], i) => <article key={name}><span className="route-icon"><Plane /></span><div><h3>{name}</h3><p>{desc}</p></div><strong>{price}</strong></article>)}</div></section>

    <section id="vehicules" className="section soft-section"><div className="page-width"><div className="section-heading centered"><p className="eyebrow"><CarFront />{t.fleetEyebrow}</p><h2>{t.fleetTitle}</h2></div><div className="fleet-grid">{t.fleet.map(([name, price, people, desc], i) => <article key={name} className="fleet-card"><div className="fleet-image"><Image src={fleetImages[i]} alt={`${name} BlackCab Shuttle`} fill sizes="(max-width: 850px) 100vw, 33vw" className="object-cover" /></div><div className="fleet-content"><div><h3>{name}</h3><strong>{price}</strong></div><p className="people"><Users />{people}</p><p>{desc}</p><a href="#reservation" onClick={() => setTimeout(() => window.dispatchEvent(new Event('focus')), 0)}>{t.choose}<ArrowRight /></a></div></article>)}</div></div></section>

    <section id="avantages" className="benefits"><div className="page-width benefits-grid">{t.benefits.map(([title, desc], i) => { const Icon = benefitIcons[i]; return <article key={title}><span><Icon /></span><div><h3>{title}</h3><p>{desc}</p></div></article>; })}</div></section>

    <section className="section page-width"><div className="section-heading centered"><p className="eyebrow"><CalendarDays />{t.simple}</p><h2>{t.stepsTitle}</h2></div><div className="steps-grid">{t.steps.map(([title, desc], i) => <article key={title}><span>{i + 1}</span><h3>{title}</h3><p>{desc}</p></article>)}</div></section>

    <section className="rating page-width"><div className="stars">{[1,2,3,4,5].map(x => <Star key={x} />)}</div><div><h2>{t.ratingTitle}</h2><p>{t.ratingText}</p></div><strong>{t.ratingValue}<small>/5</small></strong></section>

    <section id="faq" className="section page-width"><div className="section-heading centered"><p className="eyebrow"><BadgeCheck />FAQ</p><h2>{t.faqTitle}</h2></div><div className="faq-list">{t.faq.map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></section>

    <section className="coverage"><div className="page-width coverage-grid"><div><p className="eyebrow light"><BriefcaseBusiness />{t.coverageEyebrow}</p><h2>{t.coverageTitle}</h2><p>{t.coverageText}</p></div><div className="communes">{communes.map(c => <span key={c}>{c}</span>)}</div></div></section>

    <section className="final-cta page-width"><div><h2>{t.finalTitle}</h2><p>{t.finalText}</p></div><div><a className="secondary-button" href={`tel:${PHONE_LINK}`}><Phone />{PHONE_DISPLAY}</a><a className="primary-button" href="#reservation"><CalendarDays />{t.book}</a></div></section>

    <footer><div className="page-width footer-grid"><div><div className="brand footer-brand"><span className="brand-mark"><CarFront /></span><span><strong>BLACKCAB</strong><small>Shuttle Brussels</small></span></div><p>{t.footerTagline}</p></div><div className="footer-links"><a href="/taxi-bruxelles">{t.footerLinks[0]}</a><a href="/taxi-zaventem">{t.footerLinks[1]}</a><a href="/chauffeur-prive-bruxelles">{t.footerLinks[2]}</a></div><div className="footer-contact"><a href={`tel:${PHONE_LINK}`}><Phone />{PHONE_DISPLAY}</a><a href={`mailto:${CONTACT_EMAIL}`}><Mail />{CONTACT_EMAIL}</a><div><a href={t.legalHrefs[0]}>{t.legalLinks[0]}</a> · <a href={t.legalHrefs[1]}>{t.legalLinks[1]}</a> · <a href={t.legalHrefs[2]}>{t.legalLinks[2]}</a></div></div></div></footer>

    <div className="mobile-actions"><a href={`tel:${PHONE_LINK}`}><Phone />{t.call}</a><a href="#reservation"><CalendarDays />{t.book}</a></div>
  </main>;
}

export default function Page() { return <HomePage initialLang="fr" />; }
