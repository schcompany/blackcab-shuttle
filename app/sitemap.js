const BASE_URL = "https://blackcab-shuttle.com";

const routes = [
  "",
  "/nl",
  "/en",
  "/taxi-bruxelles",
  "/taxi-zaventem",
  "/chauffeur-prive-bruxelles",
  "/confidentialite",
  "/conditions-generales",
  "/cookies",
];

export default function sitemap() {
  return routes.map((route, index) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: index < 3 ? "weekly" : "monthly",
    priority: index === 0 ? 1 : index < 3 ? 0.8 : 0.7,
  }));
}
