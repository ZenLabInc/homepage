# ZenLab コーポレートサイト

[English](README.en.md)

株式会社ZenLabの公式サイトを構成するNext.jsアプリです。会社情報、事業内容、問い合わせフォーム、検索エンジン向けメタデータを一つのリポジトリで管理しています。

## 主な機能

- 日本語の会社紹介と事業内容
- レスポンシブなランディングページ
- 問い合わせフォームの入力検証と迷惑送信対策
- Amazon SESを使った問い合わせメール送信
- Open Graph画像、favicon、sitemap、robots設定
- AWS CDK／CloudFormationで管理する問い合わせメール用権限

## 必要なもの

- Node.js 20以上
- pnpm 9以上

ローカル表示だけであればAWSアカウントは不要です。問い合わせメールを実際に送るには、Amazon SESの設定と実行環境のIAM権限が必要です。秘密鍵や長期アクセスキーをリポジトリへ保存しないでください。

## セットアップ

```sh
git clone https://github.com/ZenLabInc/homepage.git
cd homepage
corepack enable
pnpm install
pnpm dev
```

ブラウザで <http://localhost:3000> を開きます。

## 検証

```sh
pnpm typecheck
node --experimental-strip-types --test tests/inquiry.test.mjs
pnpm build
```

問い合わせのテストは送信処理を差し替えて実行し、実際のメールは送りません。本番送信の設定と確認方法は [infra/INQUIRY-MAIL.md](infra/INQUIRY-MAIL.md) を参照してください。

## 構成

| パス | 内容 |
|---|---|
| `src/app/` | ページ、メタデータ、問い合わせAPI |
| `src/components/` | ヘッダー、フッター、各セクション、UI部品 |
| `src/lib/` | サイト情報、ブランド定義、問い合わせ処理 |
| `public/` | ロゴと公開画像 |
| `infra/` | AWSの権限とメール送信設定 |
| `tests/` | 問い合わせ処理の自動テスト |

## 変更するとき

会社名、住所、説明などの共通情報は `src/lib/site.ts` を更新します。ブランドロゴのパスは `src/lib/brand.ts`、ページ本文は `src/components/sections/` にあります。公開前に型検査、テスト、ビルドを実行してください。

## 公開と安全性

このリポジトリに問い合わせ本文、メールアドレスの一覧、AWS認証情報、生成済みの設定ファイルをコミットしないでください。`infra/cdk.out/` と依存パッケージは生成物であり、Git管理の対象外です。

## ライセンス

ライセンス表記が追加されるまでは、著作権者から明示的に許可された範囲を除き、コードの再利用・再配布はできません。
