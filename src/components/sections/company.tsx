"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";
import { SectionHeading } from "@/components/section-heading";
import { Founder } from "@/components/sections/founder";

const facts: { label: string; value: React.ReactNode }[] = [
  {
    label: "社名",
    value: (
      <>
        {SITE.nameJa}{" "}
        <span className="text-muted-foreground">({SITE.legalName})</span>
      </>
    ),
  },
  { label: "代表者", value: `代表取締役 ${SITE.representative}` },
  { label: "設立", value: SITE.founded },
  { label: "資本金", value: SITE.capital },
  { label: "事業内容", value: SITE.businessDescription },
  {
    label: "所在地",
    value: (
      <>
        〒{SITE.addressZip} {SITE.addressLine1}
        <br />
        {SITE.addressLine2}
      </>
    ),
  },
];

export function Company() {
  return (
    <section
      id="company"
      className="relative py-24 md:py-32"
    >
      <div className="container mx-auto max-w-5xl">
        <SectionHeading title="会社概要" en="Company" />

        <h3 className="mt-10 text-[17px] font-semibold tracking-tight text-foreground">会社情報</h3>
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-5 divide-y divide-border rounded-xl border border-border bg-white overflow-hidden"
        >
          {facts.map((f) => (
            <div
              key={f.label}
              className="grid grid-cols-[100px_1fr] sm:grid-cols-[140px_1fr] gap-4 px-6 py-4 sm:px-8 sm:py-5"
            >
              <dt className="text-[12.5px] text-muted-foreground pt-[3px]">
                {f.label}
              </dt>
              <dd className="text-[14px] text-foreground leading-relaxed">
                {f.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        <div className="mt-16">
          <Founder />
        </div>
      </div>
    </section>
  );
}
