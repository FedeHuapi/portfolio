"use client";

import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { useLanguage } from "@/components/language-provider";
import { LoopVideo } from "@/components/loop-video";
import { Reveal } from "@/components/reveal";
import { projects, type Project } from "@/data/projects";
import { stackIcon } from "@/lib/stack-icons";

const actionLink =
  "inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent";

function primaryUrl(project: Project) {
  return project.liveUrl ?? project.codeUrl;
}

export function Projects() {
  const { t, locale } = useLanguage();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <Reveal>
        <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
          {t.projects.heading}
        </h2>
      </Reveal>

      <ul className="mt-10">
        {projects.map((project, index) => {
          const url = primaryUrl(project);

          return (
            <li
              key={project.title}
              onClick={url ? () => window.open(url, "_blank", "noopener,noreferrer") : undefined}
              className={`group py-7 transition-colors duration-300 ease-out hover:bg-accent/5 md:-mx-4 md:px-4 md:py-8 ${
                url ? "cursor-pointer" : ""
              }`}
            >
              <Reveal
                delay={index * 100}
                className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center"
              >
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-7">
                  {project.image && (
                    <div className="relative h-48 w-full shrink-0 overflow-hidden rounded-xl sm:h-40 sm:w-72">
                      {project.video ? (
                        <LoopVideo
                          webm={project.video.webm}
                          mp4={project.video.mp4}
                          poster={project.image}
                          label={`${project.title} website preview`}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      ) : (
                        <Image
                          src={project.image}
                          alt={`${project.title} website preview`}
                          fill
                          // Next can't re-encode animated GIFs, so they are served as they are.
                          unoptimized={project.image.endsWith(".gif")}
                          sizes="(min-width: 640px) 18rem, 100vw"
                          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                        />
                      )}
                    </div>
                  )}
                  <div>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors duration-300 ease-out group-hover:text-accent sm:text-3xl">
                        {project.title}
                      </h3>
                      {project.inDevelopment && (
                        <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-medium text-accent">
                          {t.projects.inDevelopment}
                        </span>
                      )}
                    </div>
                    <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">
                      {project.description[locale]}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-muted">
                      {project.stack.map((tech) => {
                        const Icon = stackIcon(tech);
                        return (
                          <span key={tech} className="inline-flex items-center gap-1.5">
                            {Icon && <Icon size={14} />}
                            {tech}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className={actionLink}
                    >
                      {t.projects.viewLive}
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(event) => event.stopPropagation()}
                      className={actionLink}
                    >
                      {t.projects.viewCode}
                      <Github size={14} />
                    </a>
                  )}
                </div>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
