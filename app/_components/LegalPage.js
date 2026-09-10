import Link from "next/link";

export default function LegalPage({ title, updated, children }) {
  return (
    <main className="min-h-screen bg-[#030303] px-5 py-10 text-white">
      <article className="mx-auto max-w-3xl">
        <Link href="/" className="text-sm font-bold text-[#d6a85c]">← Retour à l’accueil</Link>
        <h1 className="mt-8 text-4xl font-black md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-white/45">Dernière mise à jour : {updated}</p>
        <div className="mt-8 space-y-7 leading-7 text-white/70">{children}</div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
          BlackCab Shuttle · SCH Company SRL · Bruxelles · info@blackcab-shuttle.com · +32 490 37 39 03
        </div>
      </article>
    </main>
  );
}
