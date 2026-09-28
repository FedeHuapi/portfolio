import { About } from "@/components/about";
import { Hero } from "@/components/hero";
import { Outro } from "@/components/outro";
import { Projects } from "@/components/projects";
import { RevealObserver } from "@/components/reveal-observer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
        <Outro />
      </main>
    </>
  );
}
