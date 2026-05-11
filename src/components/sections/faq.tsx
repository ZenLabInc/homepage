"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/section-heading";

const faq = [
  {
    q: "小規模な相談でも対応してもらえますか？",
    a: "はい。むしろ小さく確実に成果が出るユースケースから始めることを推奨しています。1ユースケースのPoCのみのご依頼や、AI導入の進め方相談だけでも歓迎です。初回ヒアリング(60分)は無料で実施しています。",
  },
  {
    q: "社内データを扱う際のセキュリティが不安です。",
    a: "NDA締結のうえ、データの取り扱い範囲を明確に合意してから着手します。本番環境では、お客様のクラウド (AWS / GCP / Azure) 内に閉じる構成、SSO/監査ログ対応、生成AIへのデータ送信制御 (プロンプトレベルのマスキング) など、業務要件に応じて柔軟に設計可能です。",
  },
  {
    q: "既存のSaaSや社内システムと連携できますか？",
    a: "Salesforce / HubSpot / Notion / Slack / Microsoft 365 / Google Workspace / kintone / 自社DB など、API/Webhookが提供されているシステムであれば連携可能です。レガシーなシステムでも、RPAやファイル連携で実用的に接続するアプローチを取ります。",
  },
  {
    q: "AI導入の経験がない状態からでも大丈夫ですか？",
    a: "むしろ得意領域です。まず業務全体を観察し、AIで効果が出るポイントとそうでないポイントを切り分けるところから一緒に進めます。導入前後の社内向け勉強会・ガイドライン整備もご相談いただけます。",
  },
  {
    q: "PoCで終わってしまわないか心配です。",
    a: "ZenLabは「動くPoC」と「業務に組み込む実装」を別物と捉えています。PoC着手の段階で、本番運用時の評価指標 / 監視 / コスト / 引き継ぎを含むロードマップを提示します。本実装に進むかどうかは、PoCの結果を見て判断していただけます。",
  },
  {
    q: "費用感を教えてください。",
    a: "PoCは規模に応じて50万円〜、本実装は2ヶ月のプロジェクトでおおよそ250万〜。月額の運用支援プランもございます。要件のヒアリング後、固定見積でご提案します。",
  },
  {
    q: "対応可能なエリアは？",
    a: "オンライン (Zoom / Slack / Notion) を基本に、全国どこからでも対応しています。必要に応じて東京近郊への訪問・常駐も可能です。",
  },
  {
    q: "内製化を支援してもらえますか？",
    a: "はい、卒業を前提とした支援も多くお受けしています。ペアプロ / コードレビュー / 設計レビュー / 社内勉強会 / 採用支援まで、必要なフェーズに合わせてご提供します。",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative py-24 md:py-32 border-t border-border/60"
    >
      <div className="container mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                よくある質問。
                <br />
                その他はお気軽に。
              </>
            }
            description="お問い合わせ前に多くいただくご質問をまとめました。ここに無いものも、初回相談で具体的にお答えします。"
          />

          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
