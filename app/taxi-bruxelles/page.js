import SeoLanding from "../_components/SeoLanding";

export const metadata = {
  title: "Taxi Bruxelles 24h/24 – Prix fixe et réservation rapide",
  description: "Réservez un taxi à Bruxelles 24h/24 pour un trajet urbain, une gare ou un aéroport. Prix annoncé à l'avance et confirmation rapide.",
  alternates: { canonical: "/taxi-bruxelles" },
};

export default function Page() {
  return <SeoLanding title="Taxi à Bruxelles disponible 24h/24" intro="BlackCab Shuttle assure vos déplacements dans les 19 communes de Bruxelles, vers les gares et les aéroports. Vous recevez un prix clair avant de confirmer votre réservation." url="/taxi-bruxelles" serviceType="Taxi à Bruxelles" image="/images/2.jpg" sections={[
    { heading: "Tous vos trajets à Bruxelles", text: "Prise en charge à domicile, à l'hôtel, au bureau ou en gare. Nous desservons notamment Bruxelles-Ville, Ixelles, Uccle, Etterbeek, Anderlecht, Schaerbeek et les deux Woluwe." },
    { heading: "Une réservation simple", text: "Envoyez votre départ, votre destination, la date et l'heure. Nous confirmons rapidement la disponibilité et le prix.", items: ["Service 24h/24 et 7j/7", "Paiement par carte, espèces ou lien sécurisé", "Facture professionnelle disponible"] },
    { heading: "Gares et rendez-vous", text: "Réservez pour Bruxelles-Midi, Bruxelles-Central, Bruxelles-Nord, un rendez-vous médical, un événement ou une soirée, avec l'heure de prise en charge convenue." },
    { heading: "Véhicule adapté", text: "Voiture confortable pour 1 à 4 passagers ou van Mercedes pour les familles, groupes et bagages volumineux." },
  ]} />;
}
