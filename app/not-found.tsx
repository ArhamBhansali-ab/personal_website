import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <Container>
      <div className="py-32 max-w-sm">
        <p className="font-mono text-xs text-brand-text-muted mb-4">404</p>
        <h1 className="font-serif text-2xl font-medium text-brand-text mb-3">
          Page not found
        </h1>
        <p className="text-brand-text-secondary mb-8 text-sm">
          This page doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" variant="secondary">← Go home</Button>
      </div>
    </Container>
  );
}
