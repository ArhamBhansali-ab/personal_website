import { site } from "@/content/site";

export default function SocialLinks() {
  const { socials } = site;
  const links = [
    { label: "Email", href: `mailto:${socials.email}` },
    { label: "GitHub", href: socials.github },
    { label: "LinkedIn", href: socials.linkedin },
    { label: "Scholar", href: socials.scholar },
  ];

  return (
    <div className="flex flex-wrap gap-5 text-sm text-neutral-500">
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          className="hover:text-neutral-900 transition-colors"
        >
          {label}
        </a>
      ))}
    </div>
  );
}
