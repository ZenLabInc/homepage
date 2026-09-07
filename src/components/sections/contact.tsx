"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      company: String(data.get("company") ?? ""),
      message: String(data.get("message") ?? ""),
      // ハニーポット (人間には見えない。bot が埋めるとサーバー側で無視される)
      company_website: String(data.get("company_website") ?? ""),
    };
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSubmitted(true);
    } catch {
      setError(
        `送信に失敗しました。お手数ですが ${SITE.email} まで直接ご連絡ください。`,
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="section-edge py-24 md:py-32 border-t border-border bg-muted/60"
    >
      <div className="absolute inset-0 -z-10 grid-bg-fine grid-mask-radial opacity-30" />
      <div className="absolute inset-x-0 top-0 -z-10 h-[420px] bg-gradient-to-b from-accent/[0.06] to-transparent blur-3xl" />

      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left: pitch */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.18em] text-muted-foreground"
            >
              <span className="inline-flex items-center gap-2">
                <span className="h-px w-6 bg-foreground/30" />
                お問い合わせ
              </span>
            </motion.div>
            <h2 className="mt-4 text-[clamp(1.85rem,3.4vw,2.85rem)] font-semibold leading-[1.15] tracking-tight heading-gradient text-balance">
              ZenLabへのご相談、
              <br className="hidden sm:inline" />
              こちらから。
            </h2>

            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-muted-foreground">
              商品・道具についてのご質問、開発や業務のAI化のご相談、採用、取材・協業、YouTubeに関するご連絡など、会社に関するお問い合わせを受け付けています。
              個人の方も、お気軽にご連絡ください。
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <Bullet icon={Calendar}>
                <strong className="text-foreground font-medium">通常 2 営業日以内</strong>に返信します
              </Bullet>
              <Bullet icon={Mail}>
                メール:{" "}
                <Link
                  href={`mailto:${SITE.email}`}
                  className="text-foreground font-medium underline-offset-4 hover:underline"
                >
                  {SITE.email}
                </Link>
              </Bullet>
            </ul>

          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-x-6 -inset-y-3 rounded-[28px] bg-accent/[0.05] blur-2xl -z-10" />
            <div className="relative rounded-[20px] border border-border bg-white shadow-[0_1px_0_0_hsl(220_13%_95%)_inset,0_1px_2px_0_rgb(15_23_42/0.04),0_24px_48px_-28px_rgb(15_23_42/0.18)] p-7 md:p-9">
              {submitted ? (
                <SuccessState onReset={() => setSubmitted(false)} />
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="お名前" required>
                      <Input id="name" name="name" maxLength={200} required placeholder="山田 太郎" />
                    </Field>
                    <Field id="company" label="会社名・所属（任意）">
                      <Input
                        id="company"
                        name="company"
                        maxLength={200}
                        placeholder="個人の方は空欄で構いません"
                      />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="email" label="メールアドレス" required>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        maxLength={254}
                        required
                        placeholder="you@example.com"
                      />
                    </Field>

                  </div>

                  <Field id="message" label="お問い合わせ内容" required>
                    <Textarea
                      id="message"
                      name="message"
                      maxLength={5000}
                      required
                      placeholder="商品・道具、採用、YouTube、開発のご相談など、ご用件をお書きください"
                    />
                  </Field>

                  {/* ハニーポット: 人間には見えない。bot が埋めると弾く。 */}
                  <div aria-hidden className="hidden">
                    <label htmlFor="company_website">Company Website</label>
                    <input
                      id="company_website"
                      name="company_website"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {error && (
                    <p className="text-[13px] text-red-600 leading-relaxed">
                      {error}
                    </p>
                  )}

                  <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                    <p className="text-[11.5px] text-muted-foreground/80">
                      内容をご確認のうえ、送信してください。
                    </p>
                    <Button type="submit" size="lg" disabled={submitting}>
                      {submitting ? "送信中..." : "送信する"}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  required,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>
        {label}
        {required && <span className="text-accent ml-1.5 normal-case">*</span>}
      </Label>
      {children}
    </div>
  );
}

function Bullet({
  icon: Icon,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3 text-muted-foreground">
      <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-white text-foreground">
        <Icon className="h-3.5 w-3.5" />
      </span>
      <span className="leading-relaxed pt-0.5">{children}</span>
    </li>
  );
}

function SuccessState({ onReset }: { onReset: () => void }) {
  return (
    <div className="text-center py-10">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
        <Check className="h-5 w-5 text-accent" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight">
        お問い合わせを受け付けました
      </h3>
      <p className="mt-2 text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
        通常 2 営業日以内にご返信いたします。お急ぎの場合は{" "}
        <Link
          href={`mailto:${SITE.email}`}
          className="text-foreground font-medium underline-offset-4 hover:underline"
        >
          {SITE.email}
        </Link>{" "}
        まで直接ご連絡ください。
      </p>
      <Button variant="ghost" size="sm" className="mt-6" onClick={onReset}>
        別のお問い合わせを送る
      </Button>
    </div>
  );
}
