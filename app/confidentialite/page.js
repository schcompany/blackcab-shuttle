import LegalPage from "../_components/LegalPage";

export const metadata = { title: "Politique de confidentialité", alternates: { canonical: "/confidentialite" } };

export default function Page() {
  return <LegalPage title="Politique de confidentialité" updated="10 septembre 2026">
    <section><h2 className="text-2xl font-black text-white">Données traitées</h2><p className="mt-2">Lorsque vous demandez un devis, nous utilisons uniquement les informations nécessaires au trajet: coordonnées, lieux, date, heure, nombre de passagers, bagages et informations de vol éventuelles.</p></section>
    <section><h2 className="text-2xl font-black text-white">Finalités et conservation</h2><p className="mt-2">Ces données servent à répondre à votre demande, organiser la course, assurer le suivi client et respecter nos obligations comptables. Elles sont conservées uniquement pendant la durée nécessaire à ces finalités et aux obligations légales.</p></section>
    <section><h2 className="text-2xl font-black text-white">Vos droits</h2><p className="mt-2">Vous pouvez demander l’accès, la rectification ou l’effacement de vos données, ainsi que vous opposer à certains traitements, en écrivant à info@blackcab-shuttle.com.</p></section>
    <section><h2 className="text-2xl font-black text-white">Prestataires</h2><p className="mt-2">Le formulaire transmet la demande par e-mail et le paiement peut être traité par un prestataire sécurisé. Ces services appliquent leurs propres politiques de confidentialité.</p></section>
  </LegalPage>;
}
