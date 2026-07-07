import { site } from "@/content/site";

export default function PersonJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    url: `https://${site.domain}`,
    description: site.bioShort,
    jobTitle: "Electrical & Computer Engineering / Physics Student",
    email: `mailto:${site.socials.email}`,
    sameAs: [
      site.socials.linkedin,
      site.socials.github,
      site.socials.x,
      site.socials.instagram,
      site.socials.scholar,
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
