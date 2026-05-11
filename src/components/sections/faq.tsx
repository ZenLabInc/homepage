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
    q: "プロトタイプで終わってしまわないか心配です。",
    a: "ZenLabは「動くプロトタイプ」と「業務に組み込む本実装」を別契約として扱っています。プロトタイプは1週間〜1ヶ月で構築し、社内で実際に触って判断していただきます。「反復改善 → 本実装」と進むかは、プロトタイプの結果を見てから決められる構成です。",
  },
  {
    q: "費用感・契約形態を教えてください。",
    a: "請求はエンジニアの工数のみ(× 単価)で、営業マージンは上乗せしません。契約形態は準委任のみです。プロトタイプ・本実装・運用/改善/引き継ぎサポートは、それぞれ別契約として段階的に進めます。初回相談 30〜60分は無料、ヒアリング後に固定の見積をお出しします。",
  },
  {
    q: "ドキュメント・勉強会には別料金が発生しますか?",
    a: "技術・設計・マニュアルのドキュメントは、プロトタイプ時と本実装時にシステムと一緒に納品します。これは作業工数として通常の請求に含まれます。使い方の勉強会(オンライン / オンサイト)も対応可能で、工数分 + 必要な交通費分のみをご請求します。",
  },
  {
    q: "紙ベース・デジタル化が遅れた現場でも対応できますか?",
    a: "対応可能です。既存システムが少ない / 紙の運用が中心の現場であっても、撮影 + OCR、音声入力、シンプルな業務アプリの新設など、現実的な手段でAIが効くポイントを設計します。「いきなり全部デジタル化」ではなく、段階的に効果が出る形でご提案します。",
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
