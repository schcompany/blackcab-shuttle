import SeoLanding from "../_components/SeoLanding";

export const metadata = {
  title: "Chauffeur privé Bruxelles – Service business et VIP",
  description: "Chauffeur privé à Bruxelles pour entreprises, hôtels, événements et transferts aéroport. Véhicules confortables et service discret.",
  alternates: { canonical: "/chauffeur-prive-bruxelles" },
};

export default function Page() {
  return <SeoLanding title="Chauffeur privé à Bruxelles" intro="Un service discret et ponctuel pour vos rendez-vous professionnels, clients, hôtels, événements et transferts longue distance." url="/chauffeur-prive-bruxelles" serviceType="Chauffeur privé à Bruxelles" image="/images/10.jpg" sections={[
    { heading: "Déplacements professionnels", text: "Organisation de trajets pour dirigeants, collaborateurs et visiteurs, avec confirmation directe et facture professionnelle." },
    { heading: "Accueil de vos clients", text: "Prise en charge à l'aéroport, en gare, à l'hôtel ou au siège de votre entreprise. L'accueil avec panneau est disponible sur demande." },
    { heading: "Service adapté", text: "Choisissez une berline confortable ou un van pour les groupes et bagages.", items: ["Chauffeur professionnel et multilingue", "Véhicule propre et confortable", "Attente et mise à disposition sur devis"] },
    { heading: "Bruxelles et longue distance", text: "Trajets dans toute la Belgique et transferts internationaux sur réservation vers les principales villes voisines." },
  ]} />;
}
