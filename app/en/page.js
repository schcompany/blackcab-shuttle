import { HomePage } from "../page";

export const metadata = {
  title: "Brussels Taxi & Airport Transfer 24/7",
  description:
    "Book a taxi in Brussels or an airport transfer to Zaventem and Charleroi. Fixed price, 24/7 service and fast confirmation.",
  alternates: {
    canonical: "/en",
    languages: { "fr-BE": "/", "nl-BE": "/nl", "en-GB": "/en", "x-default": "/" },
  },
  openGraph: { locale: "en_GB", url: "/en" },
};

export default function EnglishPage() {
  return <HomePage initialLang="en" />;
}
