import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://blackcab-shuttle.com"),
  title: {
    default: "Taxi Bruxelles & Navette Aéroport 24/7 | BlackCab Shuttle",
    template: "%s | BlackCab Shuttle",
  },
  description:
    "Réservez votre taxi à Bruxelles vers Zaventem ou Charleroi. Prix annoncé dès 29 €, sans commission, service 24h/24 et chauffeur trilingue.",
  applicationName: "BlackCab Shuttle",
  creator: "SCH Company SRL",
  publisher: "SCH Company SRL",
  category: "transportation",
  formatDetection: { address: false, email: false, telephone: false },
  keywords: [
    "taxi Bruxelles",
    "taxi Brussels",
    "taxi Zaventem",
    "airport transfer Brussels",
    "Brussels Airport transfer",
    "chauffeur privé Bruxelles",
    "chauffeur Brussels",
    "Mercedes Vito Brussels",
    "VIP chauffeur Brussels",
    "navette aéroport Bruxelles",
  ],
  openGraph: {
    title: "Taxi Bruxelles & Navette Aéroport 24/7 | BlackCab Shuttle",
    description:
      "Taxi, navette aéroport et chauffeur privé à Bruxelles. Prix fixe et réservation rapide 24h/24.",
    url: "https://blackcab-shuttle.com",
    siteName: "BlackCab Shuttle Brussels",
    locale: "fr_BE",
    alternateLocale: ["nl_BE", "en_GB"],
    type: "website",
    images: [{ url: "/images/1.jpg", width: 1200, height: 630, alt: "BlackCab Shuttle Bruxelles" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taxi Bruxelles & Navette Aéroport 24/7",
    description: "Prix fixe, service 24h/24 et réservation rapide.",
    images: ["/images/1.jpg"],
  },
  alternates: {
    canonical: "/",
    languages: { "fr-BE": "/", "nl-BE": "/nl", "en-GB": "/en", "x-default": "/" },
  },
  robots: { index: true, follow: true },
};

export const viewport = { themeColor: "#151513", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }) {
  return (
    <html lang="fr-BE">
      <body>{children}</body>
    </html>
  );
}
