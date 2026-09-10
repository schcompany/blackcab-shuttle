import Image from "next/image";
import Link from "next/link";

const PHONE = "+3228862140";

export default function SeoLanding({ title, intro, sections, url, serviceType, image = "/images/1.jpg" }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: title,
    serviceType,
    url: `https://blackcab-shuttle.com${url}`,
    provider: {
      "@type": "TaxiService",
      name: "BlackCab Shuttle Brussels",
      telephone: PHONE,
      url: "https://blackcab-shuttle.com",
      areaServed: ["Bruxelles", "Zaventem", "Charleroi", "Belgique"],
    },
  };

  return (
    <main className="min-h-screen bg-white pb-24 text-[#171715] md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="sticky top-0 z-40 border-b border-[#292929] bg-[#090909]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link href="/" className="leading-none">
            <div className="text-xl font-black">BLACKCAB</div>
            <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#c8a96b]">Shuttle Brussels</div>
          </Link>
          <div className="flex gap-2">
            <a href={`tel:${PHONE}`} className="rounded-lg border border-white/20 bg-[#171717] px-4 py-2 text-sm font-black text-white">Appeler</a>
            <Link href="/#reservation" className="hidden rounded-lg bg-[#c8a96b] px-4 py-2 text-sm font-black text-[#111] sm:inline-flex">Réserver</Link>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-6xl px-5 py-8 md:py-14">
        <div className="grid items-center gap-8 overflow-hidden rounded-2xl bg-[#090909] p-6 text-white lg:grid-cols-[1.05fr_0.95fr] lg:p-10">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c8a96b]">Service 24h/24 · Prix annoncé avant confirmation</p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">{intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/#reservation" className="rounded-lg bg-[#c8a96b] px-6 py-3 font-black text-[#111]">Demander un devis</Link>
              <a href={`tel:${PHONE}`} className="rounded-lg border border-white/20 px-6 py-3 font-black">Appeler maintenant</a>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-xl border border-white/15 md:h-[420px]">
            <Image src={image} alt={title} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            <div className="absolute inset-0 bg-black/25" />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <section key={section.heading} className="rounded-2xl border border-[#dedbd3] bg-[#f4f2ed] p-6">
              <h2 className="text-2xl font-black">{section.heading}</h2>
              <p className="mt-3 leading-7 text-[#66645e]">{section.text}</p>
              {section.items && <ul className="mt-4 space-y-2 text-[#5d574b]">{section.items.map((item) => <li key={item}>✓ {item}</li>)}</ul>}
            </section>
          ))}
        </div>

        <nav aria-label="Services associés" className="mt-10 flex flex-wrap gap-3 border-t border-[#dedbd3] pt-7 text-sm font-bold text-[#8b6d34]">
          <Link href="/taxi-bruxelles">Taxi Bruxelles</Link>
          <Link href="/taxi-zaventem">Taxi Zaventem</Link>
          <Link href="/chauffeur-prive-bruxelles">Chauffeur privé Bruxelles</Link>
          <Link href="/#reservation">Réserver un trajet</Link>
        </nav>
      </article>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-[#292929] bg-[#090909]/95 p-2 md:hidden">
        <Link href="/#reservation" className="rounded-lg bg-[#c8a96b] px-3 py-4 text-center text-sm font-black text-[#111]">Réserver</Link>
        <a href={`tel:${PHONE}`} className="rounded-lg border border-white/20 bg-[#171717] px-3 py-4 text-center text-sm font-black text-white">Appeler</a>
      </div>
    </main>
  );
}
