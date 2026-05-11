import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Problems } from "@/components/sections/problems";
import { Services } from "@/components/sections/services";
import { FlowDiagram } from "@/components/sections/flow-diagram";
import { Strengths } from "@/components/sections/strengths";
import { Commitments } from "@/components/sections/commitments";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
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
        <Commitments />
        <Process />
        <About />
        <FAQ />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
