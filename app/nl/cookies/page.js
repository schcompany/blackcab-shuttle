import LegalPage from "../../_components/LegalPage";

export const metadata = { title: "Cookiebeleid", alternates: { canonical: "/nl/cookies" } };

export default function Page() {
  return <LegalPage title="Cookiebeleid" updated="10 september 2026" backLabel="Terug naar de homepagina" updatedLabel="Laatst bijgewerkt" updatedSeparator=": " homeHref="/nl">
    <section><h2 className="text-2xl font-black text-white">Noodzakelijke cookies</h2><p className="mt-2">De website kan technische elementen gebruiken die noodzakelijk zijn voor de werking en beveiliging van de website en voor het onthouden van uw keuzes.</p></section>
    <section><h2 className="text-2xl font-black text-white">Publieksmeting</h2><p className="mt-2">Er kunnen meetinstrumenten worden gebruikt om inzicht te krijgen in het gebruik van de website en het boekingsproces te verbeteren. Niet-noodzakelijke cookies worden alleen met uw toestemming gebruikt.</p></section>
    <section><h2 className="text-2xl font-black text-white">Uw keuzes beheren</h2><p className="mt-2">U kunt cookies verwijderen of blokkeren via de instellingen van uw browser. Sommige technische functies werken daarna mogelijk niet volledig.</p></section>
  </LegalPage>;
}
