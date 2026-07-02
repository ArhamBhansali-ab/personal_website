import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <Container>
      <div className="py-32 max-w-sm">
        <p className="font-mono text-xs text-neutral-400 mb-4">404</p>
        <h1 className="text-2xl font-semibold text-neutral-900 mb-3">Page not found</h1>
        <p className="text-neutral-500 mb-8 text-sm">
          This page doesn&apos;t exist or has been moved.
        </p>
        <Button href="/" variant="secondary">← Go home</Button>
      </div>
    </Container>
  );
}
