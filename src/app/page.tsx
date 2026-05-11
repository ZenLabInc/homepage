import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Approach } from "@/components/sections/approach";
import { Process } from "@/components/sections/process";
import { Pricing } from "@/components/sections/pricing";
import { Company } from "@/components/sections/company";
import { Representative } from "@/components/sections/representative";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="relative">
      <SiteHeader />
      <main>
        <Hero />
        <Approach />
        <Process />
        <Pricing />
        <Company />
        <Representative />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
