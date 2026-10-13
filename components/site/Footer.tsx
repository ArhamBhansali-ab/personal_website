import { site, socialLinks } from "@/content/site";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="shell flex flex-col gap-6 py-8 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {socialLinks.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                {...(social.href.startsWith("mailto") ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                className="inline-block py-1 transition-colors hover:text-accent"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>
        <p>
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
