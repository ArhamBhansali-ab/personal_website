import { site, socialLinks } from "@/content/site";
import { Reveal } from "@/components/motion/Reveal";

export default function Footer() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="shell pb-10 pt-20 md:pt-28">
        <Reveal>
          <p className="label mb-6">Contact</p>
          <p className="font-serif text-display-lg text-fg">
            let&rsquo;s build <em className="text-accent">something.</em>
          </p>
          <a
            href={`mailto:${site.socials.email}`}
            className="link mt-8 inline-block break-all text-lg md:text-xl"
          >
            {site.socials.email}
          </a>
        </Reveal>

        <div className="mt-20 flex flex-col gap-6 border-t border-line pt-6 text-sm text-muted md:flex-row md:items-center md:justify-between">
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
      </div>
    </footer>
  );
}
