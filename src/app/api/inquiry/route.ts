import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2";
import { createInquiryHandler, inquiryText } from "@/lib/inquiry";

export const runtime = "nodejs";

// Amplify SSR compute role supplies temporary credentials. No ZenOrg or API keys.
const ses = new SESv2Client({ region: "ap-northeast-1", maxAttempts: 1 });
const mailbox = "info@zenlab.co.jp";

export const POST = createInquiryHandler(async (mail) => {
  await ses.send(new SendEmailCommand({
    FromEmailAddress: `ZenLab Web <${mailbox}>`,
    Destination: { ToAddresses: [mailbox] },
    ReplyToAddresses: [mail.email],
    Content: { Simple: {
      Subject: { Data: `【ZenLab お問い合わせ】${mail.name}`, Charset: "UTF-8" },
      Body: { Text: { Data: inquiryText(mail), Charset: "UTF-8" } },
    } },
  }), { abortSignal: AbortSignal.timeout(10_000) });
});
