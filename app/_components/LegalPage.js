import Link from "next/link";

export default function LegalPage({
  title,
  updated,
  children,
  backLabel = "Retour à l’accueil",
  updatedLabel = "Dernière mise à jour",
  updatedSeparator = " : ",
  homeHref = "/",
}) {
  return (
    <main className="min-h-screen bg-[#030303] px-5 py-10 text-white">
      <article className="mx-auto max-w-3xl">
        <Link href={homeHref} className="text-sm font-bold text-[#d6a85c]">← {backLabel}</Link>
        <h1 className="mt-8 text-4xl font-black md:text-5xl">{title}</h1>
        <p className="mt-3 text-sm text-white/45">{updatedLabel}{updatedSeparator}{updated}</p>
        <div className="mt-8 space-y-7 leading-7 text-white/70">{children}</div>
        <div className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">
          BlackCab Shuttle · SCH Company SRL · Bruxelles · info@blackcab-shuttle.com · 02 886 21 40
        </div>
      </article>
    </main>
  );
}
