import LegalPage from "../../_components/LegalPage";

export const metadata = { title: "Terms and Conditions", alternates: { canonical: "/en/terms" } };

export default function Page() {
  return <LegalPage title="Booking Terms and Conditions" updated="10 September 2026" backLabel="Back to the homepage" updatedLabel="Last updated" updatedSeparator=": " homeHref="/en">
    <section><h2 className="text-2xl font-black text-white">Booking</h2><p className="mt-2">A request submitted through the website becomes final only after BlackCab Shuttle has confirmed availability and the fare.</p></section>
    <section><h2 className="text-2xl font-black text-white">Fares and payment</h2><p className="mt-2">The quoted fare is based on the information provided. A significant change to the journey, waiting time or passenger count may result in an adjusted fare, which will be communicated to the customer in advance.</p></section>
    <section><h2 className="text-2xl font-black text-white">Cancellation</h2><p className="mt-2">Cancellation is free when notice is given at least 24 hours before the scheduled pickup time. A late cancellation or failure to appear may incur a charge under the terms confirmed with the booking.</p></section>
    <section><h2 className="text-2xl font-black text-white">Pickup</h2><p className="mt-2">The customer must provide accurate information and remain contactable. For airport journeys, the flight number allows us to adjust the pickup if the flight is delayed.</p></section>
  </LegalPage>;
}
