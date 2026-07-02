export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-2 py-0.5 text-xs font-mono text-neutral-500 bg-neutral-100 rounded">
      {children}
    </span>
  );
}
