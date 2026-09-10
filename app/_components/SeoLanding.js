import Image from "next/image";
import Link from "next/link";

const PHONE = "+32490373903";
const WHATSAPP = "https://wa.me/32490373903?text=Bonjour%2C%20je%20souhaite%20r%C3%A9server%20un%20trajet%20avec%20BlackCab%20Shuttle.";

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
    <main className="min-h-screen bg-[#030303] pb-24 text-white md:pb-0">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <header className="sticky top-0 z-40 border-b border-white/10 bg-black/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <Link href="/" className="leading-none">
            <div className="text-xl font-black">BLACKCAB</div>
            <div className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#d6a85c]">Shuttle Brussels</div>
          </Link>
          <div className="flex gap-2">
            <a href={`tel:${PHONE}`} className="rounded-full bg-white px-4 py-2 text-sm font-black text-black">Appeler</a>
            <a href={WHATSAPP} className="hidden rounded-full bg-[#d6a85c] px-4 py-2 text-sm font-black text-black sm:inline-flex">Réserver</a>
          </div>
        </div>
      </header>

      <article className="mx-auto max-w-6xl px-5 py-8 md:py-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#d6a85c]">Service 24h/24 · Prix annoncé avant confirmation</p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">{title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/70">{intro}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href={WHATSAPP} className="rounded-full bg-[#d6a85c] px-6 py-3 font-black text-black">Demander un devis</a>
              <a href={`tel:${PHONE}`} className="rounded-full border border-white/20 px-6 py-3 font-black">Appeler maintenant</a>
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-[28px] border border-[#6b5431] md:h-[420px]">
            <Image src={image} alt={title} fill priority sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent" />
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <section key={section.heading} className="rounded-[24px] border border-white/10 bg-white/[0.035] p-6">
              <h2 className="text-2xl font-black">{section.heading}</h2>
              <p className="mt-3 leading-7 text-white/65">{section.text}</p>
              {section.items && <ul className="mt-4 space-y-2 text-white/80">{section.items.map((item) => <li key={item}>✓ {item}</li>)}</ul>}
            </section>
          ))}
        </div>

        <nav aria-label="Services associés" className="mt-10 flex flex-wrap gap-3 border-t border-white/10 pt-7 text-sm font-bold text-[#d6a85c]">
          <Link href="/taxi-bruxelles">Taxi Bruxelles</Link>
          <Link href="/taxi-zaventem">Taxi Zaventem</Link>
          <Link href="/chauffeur-prive-bruxelles">Chauffeur privé Bruxelles</Link>
          <Link href="/#reservation">Réserver un trajet</Link>
        </nav>
      </article>

      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-white/10 bg-black/95 p-2 md:hidden">
        <a href={WHATSAPP} className="rounded-xl bg-[#25D366] px-3 py-4 text-center text-sm font-black">WhatsApp</a>
        <a href={`tel:${PHONE}`} className="rounded-xl bg-white px-3 py-4 text-center text-sm font-black text-black">Appeler</a>
      </div>
    </main>
  );
}
