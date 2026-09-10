import SeoLanding from "../_components/SeoLanding";

export const metadata = {
  title: "Taxi Zaventem – Transfert Brussels Airport 24h/24",
  description: "Taxi entre Bruxelles et l'aéroport de Zaventem avec suivi du vol, accueil sur demande et prix annoncé avant réservation.",
  alternates: { canonical: "/taxi-zaventem" },
};

export default function Page() {
  return <SeoLanding title="Taxi Bruxelles – Aéroport de Zaventem" intro="Réservez votre transfert vers ou depuis Brussels Airport. Nous adaptons l'heure d'accueil en fonction du vol et vous conduisons directement à votre adresse." url="/taxi-zaventem" serviceType="Transfert aéroport Zaventem" image="/images/1.jpg" sections={[
    { heading: "Départ depuis Bruxelles", text: "Votre chauffeur vient à l'adresse indiquée et prévoit une marge adaptée à l'heure du vol, au terminal et aux conditions de circulation." },
    { heading: "Arrivée à Brussels Airport", text: "Le numéro de vol permet de suivre l'arrivée. Un accueil avec panneau peut être organisé sur demande au point de rendez-vous communiqué." },
    { heading: "Prix clair avant le trajet", text: "Le montant est annoncé avant confirmation pour éviter les mauvaises surprises.", items: ["Suivi du vol", "Aide avec les bagages", "Siège enfant sur demande", "Paiement par carte ou espèces"] },
    { heading: "Pour particuliers et entreprises", text: "Transferts individuels, familles, hôtels, collaborateurs et clients d'entreprise, avec facture professionnelle si nécessaire." },
  ]} />;
}
