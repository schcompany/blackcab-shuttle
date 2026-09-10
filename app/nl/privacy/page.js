import LegalPage from "../../_components/LegalPage";

export const metadata = { title: "Privacybeleid", alternates: { canonical: "/nl/privacy" } };

export default function Page() {
  return <LegalPage title="Privacybeleid" updated="10 september 2026" backLabel="Terug naar de homepagina" updatedLabel="Laatst bijgewerkt" updatedSeparator=": " homeHref="/nl">
    <section><h2 className="text-2xl font-black text-white">Verwerkte gegevens</h2><p className="mt-2">Wanneer u een offerte aanvraagt, gebruiken wij alleen de gegevens die nodig zijn voor de rit: uw contactgegevens, vertrek- en aankomstlocatie, datum, tijdstip, aantal passagiers, bagage en eventuele vluchtgegevens.</p></section>
    <section><h2 className="text-2xl font-black text-white">Doeleinden en bewaartermijn</h2><p className="mt-2">Wij gebruiken deze gegevens om uw aanvraag te beantwoorden, de rit te organiseren, de klantenservice te verzorgen en aan onze boekhoudkundige verplichtingen te voldoen. Wij bewaren ze niet langer dan nodig is voor deze doeleinden en onze wettelijke verplichtingen.</p></section>
    <section><h2 className="text-2xl font-black text-white">Uw rechten</h2><p className="mt-2">U kunt inzage, correctie of verwijdering van uw gegevens vragen en in bepaalde gevallen bezwaar maken tegen de verwerking. Stuur uw verzoek naar info@blackcab-shuttle.com.</p></section>
    <section><h2 className="text-2xl font-black text-white">Dienstverleners</h2><p className="mt-2">Het formulier verstuurt uw aanvraag per e-mail. Een beveiligde betalingsdienstverlener kan de betaling verwerken. Deze dienstverleners hanteren hun eigen privacybeleid.</p></section>
  </LegalPage>;
}
