# Homepage inquiry mail

POST /api/inquiry validates the submission and sends plain-text email with Amazon SES v2 in ap-northeast-1.
From and To are fixed to info@zenlab.co.jp. Reply-To is the validated visitor address. No automatic reply to visitors. No ZenOrg dependency or long-lived credentials.

## AWS setup

The SES identity info@zenlab.co.jp must be verified (verification email). The account must allow sending. Deploy the scoped role with:

```sh
aws cloudformation deploy --profile zenlab --stack-name HomepageInquiryMail --template-file infra/inquiry-mail.json --capabilities CAPABILITY_IAM
```

Read ComputeRoleArn from the stack outputs and attach it to Amplify app dc082puu5tzbr, branch main, using `aws amplify update-branch --compute-role-arn ...`. The application service/build role is separate and unchanged. This separate stack avoids modifying the existing hosting stack.

## Verification

`node --experimental-strip-types --test tests/inquiry.test.mjs` and `pnpm build`.
After deployment, submit one clearly labeled test through the production form and confirm arrival in the info mailbox, the body, and Reply-To. SES acceptance alone does not prove inbox delivery.

## Behavior

Malformed or invalid requests are rejected; a honeypot silently drops bot submissions; request body is capped at 32 KiB. Provider errors return 502, which shows the existing direct-email fallback on the form. The 10-second send timeout does not retry, to reduce duplicate sends. No inquiry content is logged. No distributed rate limiter is included; retain the site's Cloudflare protection and monitor SES sends.
