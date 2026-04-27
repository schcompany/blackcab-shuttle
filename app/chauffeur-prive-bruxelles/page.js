export const metadata = {
  title: "Private Chauffeur Brussels | VIP Driver Service",
  description:
    "Hire a private chauffeur in Brussels. Luxury vehicles, VIP service and professional drivers for business and airport transfers.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ChauffeurService",
    areaServed: "Brussels",
  };

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="text-5xl font-black">
        Private Chauffeur Brussels
      </h1>

      <p className="mt-6 text-white/70 max-w-3xl leading-8">
        Premium chauffeur service in Brussels for executives, VIP clients and luxury transport.
      </p>

      <h2 className="mt-10 text-2xl font-bold">
        VIP chauffeur service
      </h2>

      <p className="mt-4 text-white/70">
        Enjoy a luxury travel experience with professional drivers and high-end vehicles.
      </p>

      <h2 className="mt-10 text-2xl font-bold">
        Services we provide
      </h2>

      <ul className="mt-4 space-y-2 text-white/80">
        <li>✔ Business travel</li>
        <li>✔ Airport VIP transfers</li>
        <li>✔ Events & hotels</li>
        <li>✔ Hourly chauffeur</li>
      </ul>

      <h2 className="mt-10 text-2xl font-bold">
        Luxury transport in Brussels
      </h2>

      <p className="mt-4 text-white/70">
        Travel with Tesla premium vehicles and Mercedes vans for maximum comfort.
      </p>

      <div className="mt-10">
        <a href="https://wa.me/32490373903" className="bg-[#d6a85c] px-6 py-3 rounded-full text-black font-bold">
          Book your chauffeur
        </a>
      </div>

      <div className="mt-16 text-[#d6a85c]">
        <a href="/taxi-bruxelles">Taxi Brussels</a><br />
        <a href="/taxi-zaventem">Airport Transfer</a>
      </div>

    </main>
  );
}