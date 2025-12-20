import Container from "@/components/Container";
import Button from "@/components/Button";

export default function NotFound() {
  return (
    <Container>
      <div className="py-20 text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Page not found
        </p>
        <Button href="/">Go Home</Button>
      </div>
    </Container>
  );
}

