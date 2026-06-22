"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { SITE } from "@/lib/site";

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
  { label: "代表", value: SITE.representative },
  { label: "事業内容", value: SITE.businessDescription },
  { label: "設立", value: SITE.founded },
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
  {
    label: "電話",
    value: (
      <a
        href={`tel:${SITE.phone.replace(/-/g, "")}`}
        className="hover:text-foreground/70 transition-colors"
      >
        {SITE.phone}
      </a>
    ),
  },
  {
    label: "メール",
    value: (
      <a
        href={`mailto:${SITE.email}`}
        className="hover:text-foreground/70 transition-colors"
      >
        {SITE.email}
      </a>
    ),
  },
];

export function Company() {
  return (
    <section
      id="company"
      className="section-edge py-24 md:py-32 border-t border-border"
    >
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-[clamp(1.75rem,3vw,2.25rem)] font-semibold tracking-tight text-foreground"
        >
          会社概要
        </motion.h2>

        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.06 }}
          className="mt-10 divide-y divide-border rounded-2xl border border-border bg-white shadow-[0_1px_2px_0_rgb(15_23_42/0.04)] overflow-hidden"
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
      </div>
    </section>
  );
}
