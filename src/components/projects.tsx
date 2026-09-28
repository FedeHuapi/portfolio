"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { projects } from "@/data/projects";
import { btnMd, btnPrimary, btnSecondary, ICON_STROKE, section, sectionTitle, wrap } from "@/lib/ui";

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" aria-labelledby="projects-title" className={section}>
      <div className={wrap}>
        <div className="reveal mb-[clamp(32px,5vw,64px)] flex flex-wrap items-center gap-x-5 gap-y-3">
          <h2 id="projects-title" className={sectionTitle}>
            {t.projects.heading}
          </h2>
          <span
            aria-hidden
            className="rounded-full bg-accent-soft px-3.5 py-[5px] text-[15px] font-bold leading-tight tracking-[0.06em] text-accent-ink"
          >
            {String(projects.length).padStart(2, "0")}
          </span>
        </div>

        <ol className="grid gap-[clamp(20px,3vw,32px)]">
          {projects.map((project, index) => {
            // On wide screens the screenshot alternates sides: right, left, right...
            const flipped = index % 2 === 1;

            return (
              // The reveal lives on the <li> and the hover lift on the <article>, so their transitions don't clash.
              <li key={project.title} className="reveal">
                <article
                  className={`group grid grid-cols-1 gap-[clamp(16px,3vw,40px)] rounded-[36px] bg-surface p-[clamp(14px,2.2vw,26px)] transition-[translate,box-shadow,background-color] duration-500 ease-organic hover:-translate-y-1 hover:shadow-soft-md ${
                    flipped
                      ? "min-[900px]:grid-cols-[minmax(0,7fr)_minmax(0,5fr)]"
                      : "min-[900px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]"
                  }`}
                >
                  <div className="flex flex-col gap-[18px] p-[clamp(6px,1.4vw,18px)]">
                    <span
                      aria-hidden
                      className="grid size-12 place-items-center rounded-full bg-background font-heading text-base leading-none text-accent-ink transition-[background-color,color,rotate] duration-500 ease-organic group-hover:-rotate-10 group-hover:bg-accent group-hover:text-on-accent"
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="mt-auto flex flex-col gap-3.5">
                      <h3 className="text-[clamp(28px,3.4vw,46px)] leading-[1.05]">{project.title}</h3>
                      <p className="max-w-[42ch] text-pretty text-muted">{project.description}</p>

                      <ul aria-label="Stack" className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <li
                            key={tech}
                            className="rounded-full bg-accent-2-soft px-[13px] py-1.5 text-[13px] font-semibold leading-tight text-accent-2-ink"
                          >
                            {tech}
                          </li>
                        ))}
                      </ul>

                      <div className="mt-1.5 flex flex-wrap gap-2.5">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${btnPrimary} ${btnMd}`}
                          >
                            {t.projects.viewLive}
                            <ArrowUpRight
                              size={18}
                              strokeWidth={ICON_STROKE}
                              className="transition-transform duration-300 ease-organic group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                            />
                          </a>
                        )}
                        {project.codeUrl && (
                          <a
                            href={project.codeUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`${btnSecondary} ${btnMd}`}
                          >
                            <Github size={18} strokeWidth={ICON_STROKE} />
                            {t.projects.viewCode}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  <div
                    className={`relative order-first aspect-[16/10] overflow-hidden rounded-[26px] bg-background transition-colors duration-400 ${
                      flipped ? "" : "min-[900px]:order-none"
                    }`}
                  >
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt=""
                        fill
                        sizes="(min-width: 900px) 700px, 100vw"
                        className="object-cover transition-transform duration-700 ease-organic group-hover:scale-104"
                      />
                    ) : (
                      <>
                        <div className="project-placeholder absolute inset-0 transition-transform duration-700 ease-organic group-hover:scale-104" />
                        <span className="absolute bottom-4 left-4 rounded-full bg-surface px-3 py-1.5 font-mono text-xs font-medium leading-tight text-muted">
                          {t.projects.screenshot} · {project.title.toLowerCase()}
                        </span>
                      </>
                    )}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
