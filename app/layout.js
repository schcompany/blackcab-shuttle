import "./globals.css";

export const metadata = {
  title: "BlackCab Shuttle Brussels | Taxi & Airport Transfer Brussels",
  description:
    "BlackCab Shuttle Brussels offers premium airport transfers, taxi Brussels, taxi Zaventem, Tesla rides, Mercedes van and VIP chauffeur service across Belgium.",
  keywords: [
    "taxi Bruxelles",
    "taxi Brussels",
    "taxi Zaventem",
    "airport transfer Brussels",
    "Brussels Airport transfer",
    "chauffeur privé Bruxelles",
    "chauffeur Brussels",
    "Mercedes Vito Brussels",
    "VIP chauffeur Brussels",
    "navette aéroport Bruxelles",
  ],
  openGraph: {
    title: "BlackCab Shuttle Brussels | Premium Airport Transfers",
    description:
      "Premium taxi, Tesla, Mercedes van and VIP chauffeur service in Brussels and across Belgium.",
    url: "https://www.blackcab-shuttle.com",
    siteName: "BlackCab Shuttle Brussels",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}