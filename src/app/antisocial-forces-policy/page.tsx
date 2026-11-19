import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "反社会的勢力に対する基本方針",
  description: `${SITE.nameJa}の反社会的勢力に対する基本方針です。`,
  alternates: { canonical: "/antisocial-forces-policy" },
};

export default function AntisocialForcesPolicyPage() {
  return (
    <LegalPage title="反社会的勢力に対する基本方針" enacted="2026年11月19日">
      <p>
        {SITE.nameJa}(以下「当社」)は、社会の秩序や安全に脅威を与える反社会的勢力に対し、次の方針で臨みます。
      </p>

      <h2>1. 関係の遮断</h2>
      <p>当社は、反社会的勢力とは、取引関係を含めて一切の関係を持ちません。</p>

      <h2>2. 不当要求の拒絶</h2>
      <p>当社は、反社会的勢力からの不当な要求には一切応じず、毅然とした態度で対応します。裏取引や資金の提供は行いません。</p>

      <h2>3. 組織としての対応</h2>
      <p>反社会的勢力への対応は、担当者だけに任せず、代表取締役の責任のもとで組織として行います。</p>

      <h2>4. 外部の専門機関との連携</h2>
      <p>必要に応じて、警察、暴力追放運動推進センター、弁護士などの外部の専門機関と連携して対応します。</p>

      <h2>5. 契約での排除</h2>
      <p>取引先が反社会的勢力であることが判明した場合に契約を解除できるよう、契約書などに反社会的勢力の排除に関する条項を設けます。</p>
    </LegalPage>
  );
}
