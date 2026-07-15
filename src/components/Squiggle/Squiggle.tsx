/** Hand-drawn underline accent. Inherits color via currentColor. */
export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 300 12"
      fill="none"
      aria-hidden
      preserveAspectRatio="none"
    >
      <path
        d="M2 8C40 2 60 10 100 6c40-4 80-4 120 1s58-1 76 1"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
