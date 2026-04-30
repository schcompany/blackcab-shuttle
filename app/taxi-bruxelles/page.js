export const metadata = {
  title: "Taxi Brussels | Premium Taxi Service 24/7 | BlackCab Shuttle",
  description:
    "Book a taxi in Brussels with fixed prices. Airport transfers, city rides and VIP chauffeur service available 24/7.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    name: "BlackCab Shuttle Brussels",
    url: "https://www.blackcab-shuttle.com/taxi-bruxelles",
    telephone: "+32490373903",
    areaServed: "Brussels",
    priceRange: "€€",
    image: "https://www.blackcab-shuttle.com/images/1.jpg",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.7",
      reviewCount: "800",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      
      {/* ✅ SCHEMA FIXÉ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="text-5xl font-black">
        Taxi Brussels – Premium Service 24/7
      </h1>

      <p className="mt-6 max-w-3xl text-white/70 leading-8">
        Looking for a reliable taxi in Brussels? BlackCab Shuttle offers premium taxi
        services with fixed prices, fast airport transfers and VIP chauffeur service.
      </p>

      <h2 className="mt-10 text-2xl font-bold">
        Premium taxi service in Brussels
      </h2>

      <p className="mt-4 text-white/70">
        We provide high-end transportation across Brussels including airport transfers,
        city rides and VIP chauffeur services.
      </p>

      <h2 className="mt-10 text-2xl font-bold">
        Taxi service in all Brussels areas
      </h2>

      <p className="mt-4 text-white/70">
        We operate in Ixelles, Uccle, Etterbeek, Schaerbeek, Anderlecht,
        Woluwe-Saint-Pierre, Woluwe-Saint-Lambert and all Brussels districts.
      </p>

      <h3 className="mt-10 text-xl font-bold">
        Why choose BlackCab Shuttle?
      </h3>

      <ul className="mt-4 space-y-2 text-white/80">
        <li>✔ Fixed prices</li>
        <li>✔ Tesla premium vehicles</li>
        <li>✔ Fast WhatsApp booking</li>
        <li>✔ 24/7 availability</li>
        <li>✔ 800+ satisfied clients</li>
      </ul>

      <div className="mt-10">
        <a
          href="https://wa.me/32490373903"
          className="bg-[#d6a85c] px-6 py-3 rounded-full text-black font-bold"
        >
          Book your taxi now
        </a>
      </div>

    </main>
  );
}
