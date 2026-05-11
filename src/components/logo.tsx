import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number;
  withWordmark?: boolean;
}

/**
 * ZenLab brand mark.
 * A single-stroke "Z" inscribed in an ensō-like circle —
 * suggesting Zen calm + a closed, autonomous loop.
 */
export function Logo({ className, size = 28, withWordmark = false }: LogoProps) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <defs>
          <linearGradient id="zl-stroke" x1="6" y1="6" x2="26" y2="26" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#cbd5ff" />
            <stop offset="1" stopColor="#9b87ff" />
          </linearGradient>
        </defs>
        {/* ensō ring — slightly broken to evoke a single brushstroke */}
        <path
          d="M16 4.5 A11.5 11.5 0 1 1 6.5 21.6"
          stroke="url(#zl-stroke)"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.85"
        />
        {/* Z stroke */}
        <path
          d="M11 11.5 H21 L11 20.5 H21"
          stroke="url(#zl-stroke)"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* presence dot — autonomous agent */}
        <circle cx="22.5" cy="20.5" r="1.4" fill="url(#zl-stroke)" />
      </svg>
      {withWordmark && (
        <span className="font-semibold tracking-tight text-foreground text-[15px]">
          ZenLab
        </span>
      )}
    </span>
  );
}
