import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Problems } from "@/components/sections/problems";
import { Services } from "@/components/sections/services";
import { FlowDiagram } from "@/components/sections/flow-diagram";
import { Strengths } from "@/components/sections/strengths";
import { Process } from "@/components/sections/process";
import { FAQ } from "@/components/sections/faq";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <div className="relative">
      <SiteHeader />
      <main>
        <Hero />
        <Problems />
        <Services />
        <FlowDiagram />
        <Strengths />
        <Process />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
