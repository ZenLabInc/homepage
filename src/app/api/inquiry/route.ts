// 問い合わせフォームのサーバー側プロキシ。
// ブラウザからは同一オリジンの /api/inquiry へ送り、ここで秘密の intake キーを付けて
// ZenOrg の受信エンドポイントへ転送する。キー(INQUIRY_KEY)はクライアントに出さない。
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const endpoint = process.env.INQUIRY_ENDPOINT;
  const key = process.env.INQUIRY_KEY;
  if (!endpoint || !key) {
    // 未接続 (env 未設定)。フォームは壊さず、メールへ誘導できるようにしておく。
    return NextResponse.json({ error: "not_configured" }, { status: 503 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "bad_request" }, { status: 400 });
  }

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Inquiry-Key": key },
      body: JSON.stringify(body),
    });
    const data = await res.json().catch(() => ({}));
    return NextResponse.json(data, { status: res.status });
  } catch {
    return NextResponse.json({ error: "upstream_unreachable" }, { status: 502 });
  }
}
