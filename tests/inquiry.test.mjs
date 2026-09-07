import { test } from "node:test";
import assert from "node:assert/strict";
import { createInquiryHandler, inquiryText } from "../src/lib/inquiry.ts";
const input = { name: "確認 太郎", email: "sender@example.com", company: "", message: "商品とYouTubeについて\n相談したいです。" };
const request = (body, origin = "https://www.zenlab.co.jp") => new Request("https://www.zenlab.co.jp/api/inquiry", {
  method: "POST", headers: { "content-type": "application/json", origin }, body: typeof body === "string" ? body : JSON.stringify(body),
});
test("delivers a personal inquiry with its reply address and full multiline message", async () => {
  const sent = [];
  const response = await createInquiryHandler(async m => { sent.push(m); })(request(input));
  assert.equal(response.status, 200);
  assert.deepEqual(sent, [input]);
  assert.match(inquiryText(sent[0]), /商品とYouTubeについて\n相談したいです。/);
  assert.match(inquiryText(sent[0]), /（記載なし）/);
});
test("rejects invalid inputs without attempting email delivery", async () => {
  let sends = 0;
  const handler = createInquiryHandler(async () => { sends++; });
  for (const body of ["{", null, [], { ...input, email: "bad" }, { ...input, name: "x\r\nBcc: other@example.com" }, { ...input, message: "" }, { ...input, message: "x".repeat(5001) }]) {
    assert.equal((await handler(request(JSON.stringify(body) === undefined ? "{" : body))).status, 400);
  }
  assert.equal((await handler(request(input, "https://unrelated.example"))).status, 403);
  assert.equal((await handler(request("x".repeat(33000)))).status, 413);
  assert.equal(sends, 0);
});
test("honeypot returns success without delivery", async () => {
  let sends = 0;
  const response = await createInquiryHandler(async () => { sends++; })(request({ ...input, company_website: "spam" }));
  assert.equal(response.status, 200);
  assert.equal(sends, 0);
});
test("mail service failure must not appear as a successful submission", async () => {
  const response = await createInquiryHandler(async () => { throw new Error("provider failed"); })(request(input));
  assert.equal(response.status, 502);
  assert.deepEqual(await response.json(), { error: "delivery_failed" });
});

test("accepts the public origin behind Amplify's internal hostname", async () => {
  let sends = 0;
  const req = new Request("http://internal-amplify:3000/api/inquiry", {
    method: "POST", headers: { "content-type": "application/json", origin: "https://www.zenlab.co.jp" }, body: JSON.stringify(input),
  });
  assert.equal((await createInquiryHandler(async () => { sends++; })(req)).status, 200);
  assert.equal(sends, 1);
});
