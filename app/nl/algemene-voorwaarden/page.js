import LegalPage from "../../_components/LegalPage";

export const metadata = { title: "Algemene voorwaarden", alternates: { canonical: "/nl/algemene-voorwaarden" } };

export default function Page() {
  return <LegalPage title="Algemene boekingsvoorwaarden" updated="10 september 2026" backLabel="Terug naar de homepagina" updatedLabel="Laatst bijgewerkt" updatedSeparator=": " homeHref="/nl">
    <section><h2 className="text-2xl font-black text-white">Reservatie</h2><p className="mt-2">Een aanvraag via de website is pas definitief nadat BlackCab Shuttle de beschikbaarheid en de prijs heeft bevestigd.</p></section>
    <section><h2 className="text-2xl font-black text-white">Prijs en betaling</h2><p className="mt-2">De meegedeelde prijs is gebaseerd op de verstrekte informatie. Een belangrijke wijziging van het traject, de wachttijd of het aantal passagiers kan leiden tot een aangepaste prijs, die vooraf aan de klant wordt meegedeeld.</p></section>
    <section><h2 className="text-2xl font-black text-white">Annulering</h2><p className="mt-2">Annuleren is gratis wanneer u dit minstens 24 uur vóór het geplande tijdstip meldt. Bij een laattijdige annulering of afwezigheid op de afgesproken plaats kunnen kosten worden aangerekend volgens de voorwaarden die bij de reservatie zijn bevestigd.</p></section>
    <section><h2 className="text-2xl font-black text-white">Ophaling</h2><p className="mt-2">De klant verstrekt correcte informatie en blijft bereikbaar. Bij een luchthavenrit helpt het vluchtnummer ons om de ophaling bij vertraging aan te passen.</p></section>
  </LegalPage>;
}
