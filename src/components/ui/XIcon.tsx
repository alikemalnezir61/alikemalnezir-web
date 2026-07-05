export function XIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.9 2.6h3.2l-7 8 8.2 10.8h-6.4l-5-6.5-5.7 6.5H2l7.5-8.6L1.6 2.6H8.2l4.5 6 6.2-6Zm-1.1 17h1.8L7.3 4.5H5.4L17.8 19.6Z" />
    </svg>
  );
}
