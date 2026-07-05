type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <svg
      viewBox="0 0 44 44"
      className={className}
      role="img"
      aria-label="Ali Kemal Nezir logosu"
    >
      <rect x="1" y="1" width="42" height="42" rx="10" fill="var(--color-navy-900)" />
      <text
        x="22"
        y="27"
        textAnchor="middle"
        fontFamily="var(--font-sans), Arial, sans-serif"
        fontWeight="700"
        fontSize="15"
        letterSpacing="0.5"
        fill="white"
      >
        AKN
      </text>
      <rect x="10" y="31.5" width="24" height="2" rx="1" fill="var(--color-accent-400)" />
    </svg>
  );
}
