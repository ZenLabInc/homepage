# ZenLab corporate website

[日本語](README.md)

This repository contains the official ZenLab Inc. website. It combines the company profile, service information, contact form, and search/social metadata in a Next.js application.

## Features

- Responsive Japanese landing page
- Company and service information
- Validated contact form with basic bot filtering
- Inquiry email delivery through Amazon SES
- Open Graph image, icons, sitemap, and robots metadata
- Infrastructure definitions for the inquiry-mail permissions

## Local setup

Requires Node.js 20 or later and pnpm 9 or later.

```sh
git clone https://github.com/ZenLabInc/homepage.git
cd homepage
corepack enable
pnpm install
pnpm dev
```

Open <http://localhost:3000>. Local page development does not require AWS. Sending real inquiry email requires a verified SES identity and scoped IAM permissions; never store long-lived AWS credentials in this repository.

## Checks

```sh
pnpm typecheck
node --experimental-strip-types --test tests/inquiry.test.mjs
pnpm build
```

See [infra/INQUIRY-MAIL.md](infra/INQUIRY-MAIL.md) for deployment and production-delivery checks.

## Project layout

- `src/app/`: pages, metadata, and the inquiry API
- `src/components/`: page sections and UI components
- `src/lib/`: site metadata, brand definitions, and inquiry logic
- `public/`: public brand assets
- `infra/`: AWS infrastructure and operating notes
- `tests/`: inquiry-handler tests

## License

No open-source license has been declared. Copyright remains with ZenLab Inc. unless separate permission is granted.
