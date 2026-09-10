import LegalPage from "../_components/LegalPage";

export const metadata = { title: "Politique relative aux cookies", alternates: { canonical: "/cookies" } };

export default function Page() {
  return <LegalPage title="Politique relative aux cookies" updated="10 septembre 2026">
    <section><h2 className="text-2xl font-black text-white">Cookies nécessaires</h2><p className="mt-2">Le site peut utiliser des éléments techniques indispensables à son fonctionnement, à sa sécurité et à la mémorisation de vos choix.</p></section>
    <section><h2 className="text-2xl font-black text-white">Mesure d’audience</h2><p className="mt-2">Des outils de mesure peuvent être activés afin de comprendre l’utilisation du site et d’améliorer le parcours de réservation. Les traceurs non nécessaires doivent être soumis à votre choix lorsqu’ils sont utilisés.</p></section>
    <section><h2 className="text-2xl font-black text-white">Gestion de vos choix</h2><p className="mt-2">Vous pouvez supprimer ou bloquer les cookies depuis les réglages de votre navigateur. Certaines fonctions techniques peuvent alors être limitées.</p></section>
  </LegalPage>;
}
