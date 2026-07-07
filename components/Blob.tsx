export default function Blob({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M139.5 34.6c47.8-16.6 103.4-9.6 141.9 21.7 38.5 31.3 60 82 63.4 132.1 3.4 50.1-11.3 99.6-42.7 133.9-31.4 34.3-79.5 53.4-127.9 49.6-48.4-3.8-97.1-30.4-124.6-72.4-27.5-42-33.8-99.4-13.9-146.9 19.9-47.5 62-84.4 103.8-98z"
        fill="currentColor"
      />
    </svg>
  );
}
