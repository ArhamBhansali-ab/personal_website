import Link from "next/link";

export default function NotFound() {
  return (
    <div className="shell py-32 md:py-48">
      <p className="label mb-6">404</p>
      <h1 className="font-serif text-display-lg text-fg">
        nothing <em className="text-accent">here.</em>
      </h1>
      <p className="mt-6 max-w-md text-muted">This page doesn&apos;t exist or has been moved.</p>
      <Link href="/" className="link mt-8 inline-block py-2 text-sm">
        back home
      </Link>
    </div>
  );
}
