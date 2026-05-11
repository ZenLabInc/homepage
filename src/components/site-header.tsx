"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { cn } from "@/lib/utils";

const nav = [
  { href: "#services", label: "Services" },
  { href: "#flow", label: "How it works" },
  { href: "#strengths", label: "Strengths" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-white/85 backdrop-blur-xl shadow-[0_1px_2px_0_rgb(15_23_42/0.04)]"
          : "border-b border-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link
          href="/"
          aria-label="ZenLab home"
          className="flex items-center gap-2.5"
        >
          <Logo size={24} />
          <span className="font-semibold tracking-tight text-foreground text-[15px]">
            ZenLab
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground rounded-full"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="ghost" size="sm">
            <Link href="#contact">無料相談</Link>
          </Button>
          <Button asChild variant="primary" size="sm">
            <Link href="#contact">お問い合わせ</Link>
          </Button>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-full border border-border text-foreground/80"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-border bg-white/98 backdrop-blur-xl"
          >
            <div className="container mx-auto py-4 flex flex-col gap-1">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="px-3 py-3 text-sm text-muted-foreground hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-3 grid grid-cols-2 gap-2">
                <Button asChild variant="outline" size="sm">
                  <Link href="#contact" onClick={() => setOpen(false)}>
                    無料相談
                  </Link>
                </Button>
                <Button asChild variant="primary" size="sm">
                  <Link href="#contact" onClick={() => setOpen(false)}>
                    お問い合わせ
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
