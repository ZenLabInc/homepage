import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { CustomDevelopment } from "@/components/sections/custom-development";
import { Company } from "@/components/sections/company";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="relative">
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <CustomDevelopment />
        <Company />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
