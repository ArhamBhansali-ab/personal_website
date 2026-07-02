import { site } from "@/content/site";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 mt-24">
      <Container>
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-neutral-400">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <div className="flex gap-6">
            <a href={`mailto:${site.socials.email}`} className="hover:text-neutral-700 transition-colors">
              Email
            </a>
            <a href={site.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 transition-colors">
              GitHub
            </a>
            <a href={site.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 transition-colors">
              LinkedIn
            </a>
            <a href={site.socials.scholar} target="_blank" rel="noopener noreferrer" className="hover:text-neutral-700 transition-colors">
              Scholar
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
