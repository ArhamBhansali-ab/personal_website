import { site } from "@/content/site";

export default function Connections() {
  const { socials, resume } = site;
  const links = [
    { label: "Email", href: `mailto:${socials.email}` },
    { label: "LinkedIn", href: socials.linkedin },
    { label: "Instagram", href: socials.instagram },
    { label: "X", href: socials.x },
    { label: "GitHub", href: socials.github },
    { label: "Scholar", href: socials.scholar },
    { label: "Resume", href: resume },
  ];

  return (
    <div className="flex flex-wrap gap-5 text-sm text-brand-text-secondary">
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith("mailto") ? undefined : "_blank"}
          rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
          className="link-squiggle hover:text-brand-accent transition-colors"
        >
          {label}
        </a>
      ))}
    </div>
  );
}
