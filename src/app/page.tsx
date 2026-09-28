import { About } from "@/components/about";
import { BackgroundFx } from "@/components/background-fx";
import { Hero } from "@/components/hero";
import { Outro } from "@/components/outro";
import { Projects } from "@/components/projects";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <BackgroundFx />
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
