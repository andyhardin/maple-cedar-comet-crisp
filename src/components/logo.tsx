export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="16"
        cy="16"
        r="13"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M16 7.5c.2 3.4 2.6 4.4 2.6 8.4a2.6 2.6 0 1 1-5.2 0c0-4 2.4-5 2.6-8.4Z"
        fill="currentColor"
      />
    </svg>
  );
}
