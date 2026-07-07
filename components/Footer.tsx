import { site } from "@/content/site";
import Container from "./Container";
import Connections from "./Connections";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-bg-alt mt-24">
      <Container>
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-brand-text-muted">
          <p>© {new Date().getFullYear()} {site.name}</p>
          <Connections />
        </div>
      </Container>
    </footer>
  );
}
