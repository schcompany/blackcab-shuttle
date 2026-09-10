import LegalPage from "../_components/LegalPage";

export const metadata = { title: "Conditions générales", alternates: { canonical: "/conditions-generales" } };

export default function Page() {
  return <LegalPage title="Conditions générales de réservation" updated="10 septembre 2026">
    <section><h2 className="text-2xl font-black text-white">Réservation</h2><p className="mt-2">Une demande envoyée depuis le site ne devient définitive qu’après confirmation de disponibilité et de prix par BlackCab Shuttle.</p></section>
    <section><h2 className="text-2xl font-black text-white">Prix et paiement</h2><p className="mt-2">Le prix communiqué avant confirmation correspond aux informations fournies. Un changement important de trajet, d’attente ou de nombre de passagers peut entraîner une adaptation annoncée au client.</p></section>
    <section><h2 className="text-2xl font-black text-white">Annulation</h2><p className="mt-2">L’annulation est gratuite lorsqu’elle est communiquée au moins 24 heures avant l’heure prévue. Une annulation tardive ou une absence au rendez-vous peut être facturée selon les conditions confirmées avec la réservation.</p></section>
    <section><h2 className="text-2xl font-black text-white">Prise en charge</h2><p className="mt-2">Le client doit communiquer des informations exactes et rester joignable. Pour un aéroport, le numéro de vol permet d’adapter l’accueil en cas de retard.</p></section>
  </LegalPage>;
}
