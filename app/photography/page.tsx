import Container from "@/components/Container";

export const metadata = {
  title: "Photography",
};

export default function Photography() {
  return (
    <Container>
      <div className="py-20 max-w-2xl">
        <p className="font-script text-2xl text-brand-accent mb-2">
          a few frames i&apos;ve kept
        </p>
        <h1 className="font-serif text-2xl font-medium text-brand-text mb-6">
          Photography
        </h1>
        <p className="text-brand-text-secondary">
          Photos are on their way — check back soon.
        </p>
      </div>
    </Container>
  );
}
