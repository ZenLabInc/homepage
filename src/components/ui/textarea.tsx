import * as React from "react";
import { cn } from "@/lib/utils";

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={cn(
          "flex min-h-[140px] w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground transition-colors leading-relaxed",
          "placeholder:text-muted-foreground/70",
          "focus-visible:outline-none focus-visible:border-foreground/40 focus-visible:bg-background/70 focus-visible:ring-1 focus-visible:ring-accent/40",
          "disabled:cursor-not-allowed disabled:opacity-50 resize-y",
          className
        )}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";
