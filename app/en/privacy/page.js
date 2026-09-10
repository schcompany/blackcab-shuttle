import LegalPage from "../../_components/LegalPage";

export const metadata = { title: "Privacy Policy", alternates: { canonical: "/en/privacy" } };

export default function Page() {
  return <LegalPage title="Privacy Policy" updated="10 September 2026" backLabel="Back to the homepage" updatedLabel="Last updated" updatedSeparator=": " homeHref="/en">
    <section><h2 className="text-2xl font-black text-white">Data we process</h2><p className="mt-2">When you request a quote, we use only the information needed for your journey: contact details, pickup and drop-off locations, date, time, passenger count, luggage and any relevant flight details.</p></section>
    <section><h2 className="text-2xl font-black text-white">Purpose and retention</h2><p className="mt-2">We use this data to respond to your request, organise your journey, provide customer support and meet our accounting obligations. We retain it only for as long as necessary for these purposes and our legal obligations.</p></section>
    <section><h2 className="text-2xl font-black text-white">Your rights</h2><p className="mt-2">You may request access to, correction or erasure of your data and may object to certain processing activities. Send your request to info@blackcab-shuttle.com.</p></section>
    <section><h2 className="text-2xl font-black text-white">Service providers</h2><p className="mt-2">The form sends your request by email. A secure payment provider may process your payment. These providers apply their own privacy policies.</p></section>
  </LegalPage>;
}
