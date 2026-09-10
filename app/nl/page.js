import { HomePage } from "../page";

export const metadata = {
  title: "Taxi Brussel & Luchthaventransfer 24/7",
  description:
    "Reserveer uw taxi in Brussel of transfer naar Zaventem en Charleroi. Vaste prijs, 24/7 service en snelle bevestiging.",
  alternates: {
    canonical: "/nl",
    languages: { "fr-BE": "/", "nl-BE": "/nl", "en-GB": "/en", "x-default": "/" },
  },
  openGraph: { locale: "nl_BE", url: "/nl" },
};

export default function DutchPage() {
  return <HomePage initialLang="nl" />;
}
