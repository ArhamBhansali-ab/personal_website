export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 rounded-full">
      {children}
    </span>
  );
}

