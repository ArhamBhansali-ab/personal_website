import Container from "@/components/Container";
import Connections from "@/components/Connections";
import Blob from "@/components/Blob";

export const metadata = {
  title: "About",
};

export default function About() {
  return (
    <Container>
      <div className="relative py-20 max-w-2xl">
        <Blob className="absolute -top-10 -left-16 w-64 h-64 text-brand-accent-tint opacity-50 blur-2xl pointer-events-none" />
        <div className="relative">
          <h1 className="font-script text-5xl text-brand-accent mb-8">About</h1>

          <p className="text-base text-brand-text-secondary leading-relaxed">
            More about me coming soon — for now, here&apos;s where to find me.
          </p>

          <div className="mt-12 pt-8 border-t border-brand-border">
            <p className="text-xs uppercase tracking-widest text-brand-text-muted mb-4">
              Links
            </p>
            <Connections />
          </div>
        </div>
      </div>
    </Container>
  );
}
