import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Approach } from "@/components/sections/approach";
import { Process } from "@/components/sections/process";
import { Pricing } from "@/components/sections/pricing";
import { About } from "@/components/sections/about";
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
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
