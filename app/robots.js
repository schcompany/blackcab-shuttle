export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/"] },
    sitemap: "https://blackcab-shuttle.com/sitemap.xml",
    host: "https://blackcab-shuttle.com",
  };
}
