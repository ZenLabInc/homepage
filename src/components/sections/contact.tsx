"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Calendar, ShieldCheck, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const topics = [
  "AI導入の進め方を相談したい",
  "RAG / 社内検索を構築したい",
  "AI Agentで業務を自動化したい",
  "業務システムを開発したい",
  "その他",
];

export function Contact() {
  const [topic, setTopic] = React.useState(topics[0]);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    // Demo-only: client-side success state. Wire to your backend / Resend / form provider as needed.
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 border-t border-border/60">
      {/* glow */}
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
                Get started
              </span>
            </motion.div>
            <h2 className="mt-4 text-[clamp(1.85rem,3.4vw,2.85rem)] font-semibold leading-[1.15] tracking-tight heading-gradient text-balance">
              まずは業務課題を、
              <br className="hidden sm:inline" />
              気軽にご相談ください。
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground max-w-md text-pretty">
              60分の無料ヒアリングを承っています。AIを使うべきか / 使わないべきかの判断も含めて、率直にお話しします。
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <Bullet icon={Calendar}>
                <strong className="text-foreground font-medium">通常 2 営業日以内</strong>に返信します
              </Bullet>
              <Bullet icon={ShieldCheck}>
                ご希望に応じて<strong className="text-foreground font-medium"> NDA を先に締結</strong>します
              </Bullet>
              <Bullet icon={Mail}>
                直接の連絡は{" "}
                <Link
                  href={`mailto:${SITE.email}`}
                  className="text-foreground font-medium underline-offset-4 hover:underline"
                >
                  {SITE.email}
                </Link>{" "}
                まで
              </Bullet>
            </ul>

            <div className="mt-10 hidden lg:block">
              <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground/70 mb-3">
                Examples of what we hear first
              </p>
              <div className="space-y-2 max-w-md">
                {[
                  "問い合わせ対応の半分くらいは、自動で返したい",
                  "毎月集計している作業を、Slack に投げたら終わるようにしたい",
                  "社内のNotionとDriveを横断で検索できるようにしたい",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-xl border border-border bg-card/40 px-4 py-3 text-[13px] text-muted-foreground"
                  >
                    “{t}”
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-px rounded-[20px] bg-gradient-to-b from-foreground/15 via-foreground/5 to-transparent opacity-60 blur-md" />
            <div className="relative glass-strong rounded-[20px] p-7 md:p-9">
              {submitted ? (
                <SuccessState onReset={() => setSubmitted(false)} />
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="お名前" required>
                      <Input id="name" name="name" required placeholder="山田 太郎" />
                    </Field>
                    <Field id="company" label="会社名">
                      <Input id="company" name="company" placeholder="株式会社サンプル" />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="email" label="メールアドレス" required>
                      <Input id="email" name="email" type="email" required placeholder="you@example.com" />
                    </Field>
                    <Field id="role" label="役割 / 部署">
                      <Input id="role" name="role" placeholder="情シス / 経営企画 など" />
                    </Field>
                  </div>

                  <Field id="topic" label="ご相談内容">
                    <div className="flex flex-wrap gap-1.5">
                      {topics.map((t) => (
                        <button
                          type="button"
                          key={t}
                          onClick={() => setTopic(t)}
                          className={`rounded-full border px-3.5 py-1.5 text-[12.5px] transition-colors ${
                            topic === t
                              ? "border-accent/50 bg-accent/10 text-foreground"
                              : "border-border bg-background/40 text-muted-foreground hover:text-foreground hover:border-foreground/30"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                    <input type="hidden" name="topic" value={topic} />
                  </Field>

                  <Field id="message" label="現状の課題・実現したいこと" required>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="例: 顧客からの問い合わせに、社内資料を参照して下書きを作る仕組みを Slack に組み込みたい"
                    />
                  </Field>

                  <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                    <p className="text-[11.5px] text-muted-foreground/80">
                      送信前に、内容を確認させていただきます。
                    </p>
                    <Button type="submit" size="lg" disabled={submitting}>
                      {submitting ? "送信中..." : "無料相談を送る"}
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
      <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-lg border border-border bg-background/60 text-foreground/85">
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
        別の相談を送る
      </Button>
    </div>
  );
}
