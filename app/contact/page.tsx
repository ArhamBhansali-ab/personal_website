import Container from "@/components/Container";
import { site } from "@/content/site";

export const metadata = {
  title: "Contact",
};

const links = [
  { label: "Email", value: site.socials.email, href: `mailto:${site.socials.email}` },
  { label: "GitHub", value: "arhambhansali", href: site.socials.github },
  { label: "LinkedIn", value: "arhambhansali", href: site.socials.linkedin },
  { label: "Google Scholar", value: "Scholar profile", href: site.socials.scholar },
];

export default function Contact() {
  return (
    <Container>
      <div className="py-20 max-w-2xl">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-2">Contact</h1>
        <p className="text-neutral-500 mb-12 leading-relaxed">
          Open to research collaborations, interesting engineering problems, and
          internship opportunities. Best reached by email.
        </p>

        <div className="divide-y divide-neutral-100">
          {links.map(({ label, value, href }) => (
            <div key={label} className="flex items-baseline justify-between py-4">
              <span className="text-xs uppercase tracking-widest text-neutral-400 w-32 shrink-0">
                {label}
              </span>
              <a
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="text-neutral-700 hover:text-neutral-900 hover:underline underline-offset-2 transition-colors"
              >
                {value}
              </a>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-200 text-sm text-neutral-500 leading-relaxed">
          Based in Durham, NC · Duke University
        </div>
      </div>
    </Container>
  );
}
