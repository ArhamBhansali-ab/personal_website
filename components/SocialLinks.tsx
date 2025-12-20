import { Mail, Github, Linkedin, GraduationCap } from "lucide-react";
import { site } from "@/content/site";

export default function SocialLinks() {
  const { socials } = site;
  const links = [
    { icon: Mail, href: `mailto:${socials.email}`, label: "Email" },
    { icon: Github, href: socials.github, label: "GitHub" },
    { icon: Linkedin, href: socials.linkedin, label: "LinkedIn" },
    { icon: GraduationCap, href: socials.scholar, label: "Google Scholar" },
  ];

  return (
    <div className="flex gap-4">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label={label}
        >
          <Icon className="w-5 h-5" />
        </a>
      ))}
    </div>
  );
}

