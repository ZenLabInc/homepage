import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Updates } from "@/components/sections/updates";
import { Services } from "@/components/sections/services";
import { Company } from "@/components/sections/company";
import { Process } from "@/components/sections/process";
import { Contact } from "@/components/sections/contact";
import { PageDrawings } from "@/components/page-drawings";

export default function HomePage() {
  return (
    <div className="relative">
      <PageDrawings />
      <SiteHeader />
      <main>
        <Hero />
        <Services />
        <Process />
        <Company />
        <Updates />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
