export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-mono text-brand-text-secondary bg-brand-accent-tint rounded">
      {children}
    </span>
  );
}
