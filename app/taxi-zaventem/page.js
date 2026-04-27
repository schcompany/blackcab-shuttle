export const metadata = {
  title: "Taxi Zaventem Airport | Brussels Airport Transfer 24/7",
  description:
    "Taxi Brussels Airport Zaventem with fixed prices, flight tracking and premium vehicles. Book your airport transfer instantly.",
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    areaServed: "Brussels Airport Zaventem",
  };

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">

      <script type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="text-5xl font-black">
        Taxi Brussels Airport Zaventem
      </h1>

      <p className="mt-6 text-white/70 max-w-3xl leading-8">
        Book a reliable taxi to or from Brussels Airport Zaventem with fixed pricing and premium service.
      </p>

      <h2 className="mt-10 text-2xl font-bold">
        Airport transfers with flight tracking
      </h2>

      <p className="mt-4 text-white/70">
        We monitor your flight in real-time and adjust pickup automatically in case of delays.
      </p>

      <h2 className="mt-10 text-2xl font-bold">
        Taxi from Zaventem to Brussels
      </h2>

      <p className="mt-4 text-white/70">
        Travel quickly to your hotel, office or home in Brussels with a premium vehicle.
      </p>

      <h3 className="mt-10 text-xl font-bold">
        Why choose our airport taxi?
      </h3>

      <ul className="mt-4 space-y-2 text-white/80">
        <li>✔ Fixed airport price</li>
        <li>✔ Flight tracking included</li>
        <li>✔ Meet & greet option</li>
        <li>✔ VIP chauffeur available</li>
      </ul>

      <div className="mt-10">
        <a href="https://wa.me/32490373903" className="bg-[#d6a85c] px-6 py-3 rounded-full text-black font-bold">
          Book airport transfer
        </a>
      </div>

      <div className="mt-16 text-[#d6a85c]">
        <a href="/taxi-bruxelles">Taxi Brussels</a><br />
        <a href="/chauffeur-prive-bruxelles">Private Chauffeur</a>
      </div>

    </main>
  );
}