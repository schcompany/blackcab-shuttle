import LegalPage from "../../_components/LegalPage";

export const metadata = { title: "Cookie Policy", alternates: { canonical: "/en/cookies" } };

export default function Page() {
  return <LegalPage title="Cookie Policy" updated="10 September 2026" backLabel="Back to the homepage" updatedLabel="Last updated" updatedSeparator=": " homeHref="/en">
    <section><h2 className="text-2xl font-black text-white">Necessary cookies</h2><p className="mt-2">The website may use technical elements that are essential for its operation and security and for remembering your choices.</p></section>
    <section><h2 className="text-2xl font-black text-white">Audience measurement</h2><p className="mt-2">Measurement tools may be used to understand how the website is used and to improve the booking process. Non-essential cookies are used only with your consent.</p></section>
    <section><h2 className="text-2xl font-black text-white">Managing your choices</h2><p className="mt-2">You can delete or block cookies in your browser settings. Some technical functions may then be limited.</p></section>
  </LegalPage>;
}
