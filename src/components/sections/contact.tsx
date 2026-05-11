"use client";

import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Mail, Phone, Calendar, ShieldCheck, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const inquiryTypes = [
  { value: "consult", label: "無料相談 (AI・業務自動化について)" },
  { value: "other", label: "それ以外のお問い合わせ (採用 / 取材 / その他)" },
];

const topics = [
  "AI導入の進め方を相談したい",
  "RAG / 社内検索を構築したい",
  "AI Agentで業務を自動化したい",
  "業務システムを開発したい",
  "その他",
];

export function Contact() {
  const [inquiryType, setInquiryType] = React.useState("consult");
  const [topic, setTopic] = React.useState(topics[0]);
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const isConsult = inquiryType === "consult";

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  }

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 border-t border-border"
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
              まずは業務課題を、
              <br className="hidden sm:inline" />
              気軽にご相談ください。
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground max-w-md text-pretty">
              初回ヒアリングは30〜60分・無料で承っています。ご要望と既存の業務フローをお聞きし、「どこからAIで自動化できるか」をご提案します。
            </p>

            <ul className="mt-8 space-y-4 text-sm">
              <Bullet icon={Calendar}>
                <strong className="text-foreground font-medium">通常 2 営業日以内</strong>に返信します
              </Bullet>
              <Bullet icon={ShieldCheck}>
                ご希望に応じて<strong className="text-foreground font-medium"> NDA を先に締結</strong>します
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
              <Bullet icon={Phone}>
                電話:{" "}
                <Link
                  href={`tel:${SITE.phone.replace(/-/g, "")}`}
                  className="text-foreground font-medium underline-offset-4 hover:underline"
                >
                  {SITE.phone}
                </Link>{" "}
                <span className="text-muted-foreground/80">(メール優先)</span>
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
                <SuccessState onReset={() => setSubmitted(false)} isConsult={isConsult} />
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <Field id="inquiryType" label="お問い合わせ種別" required>
                    <Select
                      id="inquiryType"
                      name="inquiryType"
                      value={inquiryType}
                      onChange={(e) => setInquiryType(e.target.value)}
                    >
                      {inquiryTypes.map((t) => (
                        <option key={t.value} value={t.value}>
                          {t.label}
                        </option>
                      ))}
                    </Select>
                  </Field>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="name" label="お名前" required>
                      <Input id="name" name="name" required placeholder="山田 太郎" />
                    </Field>
                    <Field id="company" label="会社名">
                      <Input
                        id="company"
                        name="company"
                        placeholder="株式会社サンプル"
                      />
                    </Field>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field id="email" label="メールアドレス" required>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@example.com"
                      />
                    </Field>
                    <Field id="role" label="役割 / 部署">
                      <Input
                        id="role"
                        name="role"
                        placeholder={
                          isConsult ? "情シス / 経営企画 など" : "ご担当部署 / 媒体名 など"
                        }
                      />
                    </Field>
                  </div>

                  {isConsult && (
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
                                : "border-border bg-white text-muted-foreground hover:text-foreground hover:border-foreground/30"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                      <input type="hidden" name="topic" value={topic} />
                    </Field>
                  )}

                  <Field
                    id="message"
                    label={isConsult ? "現状の課題・実現したいこと" : "お問い合わせ内容"}
                    required
                  >
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder={
                        isConsult
                          ? "例: 顧客からの問い合わせに、社内資料を参照して下書きを作る仕組みを Slack に組み込みたい"
                          : "例: 取材のご相談 / パートナーシップのご相談 / 採用について など"
                      }
                    />
                  </Field>

                  <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between pt-2">
                    <p className="text-[11.5px] text-muted-foreground/80">
                      送信前に、内容を確認させていただきます。
                    </p>
                    <Button type="submit" size="lg" disabled={submitting}>
                      {submitting
                        ? "送信中..."
                        : isConsult
                        ? "無料相談を送る"
                        : "お問い合わせを送る"}
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

function SuccessState({
  onReset,
  isConsult,
}: {
  onReset: () => void;
  isConsult: boolean;
}) {
  return (
    <div className="text-center py-10">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
        <Check className="h-5 w-5 text-accent" />
      </div>
      <h3 className="mt-5 text-lg font-semibold tracking-tight">
        {isConsult
          ? "無料相談を受け付けました"
          : "お問い合わせを受け付けました"}
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
        別の{isConsult ? "相談" : "お問い合わせ"}を送る
      </Button>
    </div>
  );
}
