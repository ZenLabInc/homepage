export interface InquiryMail {
  name: string;
  email: string;
  company: string;
  message: string;
}

const MAX_BYTES = 32_768;
const EMAIL = /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/;

/** Keep validation and response handling identical for production and tests. */
export function createInquiryHandler(send: (mail: InquiryMail) => Promise<void>) {
  return async function POST(req: Request): Promise<Response> {
    const json = (body: object, status = 200) => Response.json(body, { status });
    const origin = req.headers.get("origin");
    if (origin && origin !== new URL(req.url).origin) {
      return json({ error: "invalid_origin" }, 403);
    }
    if (!req.headers.get("content-type")?.toLowerCase().startsWith("application/json")) {
      return json({ error: "unsupported_media_type" }, 415);
    }

    let value: unknown;
    try {
      const reader = req.body?.getReader();
      if (!reader) return json({ error: "bad_request" }, 400);
      const chunks: Uint8Array[] = [];
      let length = 0;
      while (true) {
        const chunk = await reader.read();
        if (chunk.done) break;
        length += chunk.value.byteLength;
        if (length > MAX_BYTES) {
          await reader.cancel();
          return json({ error: "payload_too_large" }, 413);
        }
        chunks.push(chunk.value);
      }
      const bytes = new Uint8Array(length);
      let offset = 0;
      for (const chunk of chunks) { bytes.set(chunk, offset); offset += chunk.length; }
      value = JSON.parse(new TextDecoder().decode(bytes));
    } catch {
      return json({ error: "bad_request" }, 400);
    }
    if (!value || typeof value !== "object" || Array.isArray(value)) {
      return json({ error: "bad_request" }, 400);
    }
    const body = value as Record<string, unknown>;
    // Preserve the existing invisible bot trap without delivering a message.
    if (typeof body.company_website === "string" && body.company_website.trim()) {
      return json({ ok: true });
    }
    const field = (key: string) => typeof body[key] === "string" ? body[key].trim() : "";
    const mail = { name: field("name"), email: field("email"), company: field("company"), message: field("message") };
    if (!mail.name || mail.name.length > 200 || !EMAIL.test(mail.email) || mail.email.length > 254 ||
        mail.company.length > 200 || !mail.message || mail.message.length > 5000 ||
        /[\r\n]/.test(mail.name + mail.email + mail.company)) {
      return json({ error: "invalid_fields" }, 400);
    }
    try {
      await send(mail);
      return json({ ok: true });
    } catch (error) {
      // Log only the error type, never the inquiry or the sender's details.
      console.error("Inquiry delivery failed", error instanceof Error ? error.name : "UnknownError");
      return json({ error: "delivery_failed" }, 502);
    }
  };
}

export function inquiryText(mail: InquiryMail): string {
  return ["ホームページからお問い合わせが届きました。", "",
    `お名前: ${mail.name}`, `メールアドレス: ${mail.email}`,
    `会社名・所属: ${mail.company || "（記載なし）"}`, "", "お問い合わせ内容:", mail.message,
    "", "このメールに返信すると、お問い合わせ者のメールアドレスに返信できます。"].join("\n");
}
