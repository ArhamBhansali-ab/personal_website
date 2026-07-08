import Container from "@/components/Container";

export const metadata = {
  title: "Blog",
};

export default function BlogPage() {
  return (
    <Container>
      <div className="py-20 max-w-2xl">
        <p className="font-script text-2xl text-brand-accent mb-2">
          notes and things i&apos;m figuring out
        </p>
        <h1 className="font-serif text-2xl font-medium text-brand-text mb-6">
          Blog
        </h1>
        <p className="text-brand-text-secondary">
          Coming soon!
        </p>
      </div>
    </Container>
  );
}
