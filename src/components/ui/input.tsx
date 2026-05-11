import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-11 w-full rounded-xl border border-border bg-background/40 px-4 py-2 text-sm text-foreground transition-colors",
          "placeholder:text-muted-foreground/70",
          "focus-visible:outline-none focus-visible:border-foreground/40 focus-visible:bg-background/70 focus-visible:ring-1 focus-visible:ring-accent/40",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";
