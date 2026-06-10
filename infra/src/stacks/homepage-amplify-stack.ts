import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import * as amplify from "@aws-cdk/aws-amplify-alpha";
import * as secretsmanager from "aws-cdk-lib/aws-secretsmanager";
import * as codebuild from "aws-cdk-lib/aws-codebuild";

/**
 * HomepageAmplifyStack
 *
 * AWS Amplify Hosting for ZenLab homepage (ZenLabInc/homepage).
 * Target Account: AWS 494003775664 (ZenLab)
 * Cost: $0/月 (Amplify Hosting 無料枠内 — ビルド 1000分/月、データ転送 15GB/月)
 *
 * Connects to GitHub: ZenLabInc/homepage (main branch)
 * GitHub token: SSM /zenlab/homepage/github-token (SecureString)
 */
export class HomepageAmplifyStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // GitHub OAuth token from Secrets Manager
    const githubTokenSecret = secretsmanager.Secret.fromSecretNameV2(
      this,
      "GithubTokenSecret",
      "/zenlab/homepage/github-token"
    );
    const githubToken = githubTokenSecret.secretValue;

    // Amplify App
    const amplifyApp = new amplify.App(this, "HomepageAmplify", {
      appName: "zenlab-homepage",
      sourceCodeProvider: new amplify.GitHubSourceCodeProvider({
        owner: "ZenLabInc",
        repository: "homepage",
        oauthToken: githubToken,
      }),
      platform: amplify.Platform.WEB_COMPUTE, // Next.js SSR mode
      buildSpec: codebuild.BuildSpec.fromObjectToYaml({
        version: "1.0",
        frontend: {
          phases: {
            preBuild: {
              commands: [
                "corepack enable",
                "corepack prepare pnpm@9 --activate",
                "pnpm install --frozen-lockfile",
              ],
            },
            build: {
              commands: ["pnpm run build"],
            },
          },
          artifacts: {
            baseDirectory: ".next",
            files: ["**/*"],
          },
          cache: {
            paths: ["node_modules/**/*", ".next/cache/**/*"],
          },
        },
      }),
      environmentVariables: {
        NEXT_PUBLIC_SITE_URL: "https://zenlab.co.jp",
        _LIVE_UPDATES:
          '[{"name":"Node.js version","pkg":"node","type":"nvm","version":"22"}]',
      },
    });

    // Main branch — connects to ZenLabInc/homepage main
    const mainBranch = amplifyApp.addBranch("main", {
      branchName: "main",
      stage: "PRODUCTION",
      autoBuild: false, // CI/CD auto-deploy: off until CEO approves production go-live
    });

    // Outputs
    new cdk.CfnOutput(this, "AmplifyAppId", {
      value: amplifyApp.appId,
      description: "Amplify App ID",
      exportName: "HomepageAmplifyAppId",
    });

    new cdk.CfnOutput(this, "AmplifyDefaultDomain", {
      value: `https://main.${amplifyApp.defaultDomain}`,
      description: "Amplify default staging URL (*.amplifyapp.com)",
      exportName: "HomepageAmplifyStagingUrl",
    });

    // Tags
    cdk.Tags.of(this).add("Project", "zenlab-homepage");
    cdk.Tags.of(this).add("ManagedBy", "cdk");
    cdk.Tags.of(this).add("Account", "494003775664-ZenLab");
    cdk.Tags.of(this).add("CostCenter", "homepage");
  }
}
