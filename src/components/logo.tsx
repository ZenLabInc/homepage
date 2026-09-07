import { cn } from "@/lib/utils";
import { LOGO_LOWER_PATH, LOGO_UPPER_PATH } from "@/lib/brand";

interface LogoMarkProps {
  className?: string;
  size?: number;
}

/** Approved two-tone rounded Z. No gradients or generated bitmap dependency. */
export function LogoMark({ className, size = 28 }: LogoMarkProps) {
  return (
    <svg viewBox="0 0 112 112" width={size} height={size} role="img"
      aria-label="ZenLab" className={cn("shrink-0", className)}
      xmlns="http://www.w3.org/2000/svg">
      <path fill="#0f172a" d={LOGO_LOWER_PATH} />
      <path fill="#4f46e5" d={LOGO_UPPER_PATH} />
    </svg>
  );
}

interface WordmarkProps {
  className?: string;
  height?: number;
}

export function Wordmark({ className, height = 20 }: WordmarkProps) {
  return (
    <span role="img" aria-label="ZenLab"
      className={cn("inline-flex shrink-0 items-center font-sans font-semibold tracking-tight text-foreground", className)}
      style={{ gap: height * 0.4, fontSize: height * 1.2, lineHeight: 1 }}>
      <span aria-hidden="true"><LogoMark size={height * 1.6} /></span>
      <span aria-hidden="true">ZenLab</span>
    </span>
  );
}
