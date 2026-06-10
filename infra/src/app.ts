import * as cdk from "aws-cdk-lib";
import { HomepageAmplifyStack } from "./stacks/homepage-amplify-stack";

const app = new cdk.App();

new HomepageAmplifyStack(app, "HomepageAmplifyStack", {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT || "494003775664",
    region: process.env.CDK_DEFAULT_REGION || "ap-northeast-1",
  },
  description:
    "ZenLab homepage — AWS Amplify Hosting (zenlab.co.jp). Account: 494003775664 (ZenLab).",
});
