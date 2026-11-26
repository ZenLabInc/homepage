"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

/* zarm-v3 を「この値段で買いたい」人のメール登録。
   既存の問い合わせ API(/api/inquiry)に送り、info@ にメールとして届く。お金は受け取らない。 */

/** 広告や記事から来たときの印(?utm_source=...)。英数字と - _ だけを通す。 */
function sourceTag(): string {
  if (typeof window === "undefined") return "";
  const raw = new URLSearchParams(window.location.search).get("utm_source") ?? "";
  return /^[A-Za-z0-9_-]{1,30}$/.test(raw) ? raw : "";
}

export function InterestForm() {
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const data = new FormData(e.currentTarget);
    const use = String(data.get("use") ?? "").trim();
    const source = sourceTag();
    const payload = {
      name: "zarm-v3 購入希望(片腕 約5万円)",
      email: String(data.get("email") ?? ""),
      company: "",
      message: [
        "zarm-v3 を「片腕 約 5 万円」で買いたい、という登録です。",
        `使いたいこと: ${use || "(記載なし)"}`,
        `流入元: ${source || "(なし)"}`,
      ].join("\n"),
      // ハニーポット(人には見えない。bot が埋めるとサーバー側で捨てる)
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
      setError("送信に失敗しました。お手数ですが、時間をおいてもう一度お試しください。");
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-xl border border-border bg-white p-7 text-center md:p-9">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
          <Check className="h-5 w-5 text-accent" />
        </div>
        <p className="mx-auto mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
          登録を受け付けました。予約の受付を始めるときに、メールでお知らせします。
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 rounded-xl border border-border bg-white p-7 md:p-9">
      <div className="space-y-2">
        <Label htmlFor="zarm-email">
          メールアドレス<span className="ml-1.5 text-accent">*</span>
        </Label>
        <Input id="zarm-email" name="email" type="email" maxLength={254} required placeholder="you@example.com" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="zarm-use">使いたいこと(任意)</Label>
        <Textarea
          id="zarm-use"
          name="use"
          maxLength={1000}
          placeholder="例:自作の基板のボタンを押して、動作を確かめさせたい"
        />
      </div>

      <div aria-hidden className="hidden">
        <label htmlFor="zarm-company-website">Company Website</label>
        <input id="zarm-company-website" name="company_website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {error && <p className="text-[13px] leading-relaxed text-red-600">{error}</p>}

      <Button type="submit" size="lg" disabled={submitting} className="w-full">
        {submitting ? "送信中..." : "片腕 約 5 万円で買いたい"}
        <ArrowRight className="h-4 w-4" />
      </Button>
      <p className="text-[11.5px] leading-relaxed text-muted-foreground/80">
        お金はいただきません。メールアドレスは、zarm-v3 の予約・販売の開始をお知らせするためだけに使い、法令に基づく場合を除いて第三者に提供しません。詳しくは
        <Link href="/privacy" className="text-accent hover:underline">個人情報保護方針</Link>
        をご覧ください。
      </p>
    </form>
  );
}
