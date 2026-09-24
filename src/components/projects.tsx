"use client";

import { ArrowUpRight, Github } from "lucide-react";
import { useLanguage } from "@/components/language-provider";
import { projects, type Project } from "@/data/projects";

const actionLink =
  "inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent";

// Opening the live demo (or the repo, if there's no demo yet) is the row's main
// action; the two pills below stay independently clickable via stopPropagation.
function primaryUrl(project: Project) {
  return project.liveUrl ?? project.codeUrl;
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        {t.projects.heading}
      </h2>

      <ul className="mt-10 border-t">
        {projects.map((project) => {
          const url = primaryUrl(project);

          return (
            <li
              key={project.title}
              onClick={url ? () => window.open(url, "_blank", "noopener,noreferrer") : undefined}
              className={`group grid gap-6 border-b py-7 transition-colors duration-300 ease-out hover:bg-accent/5 md:grid-cols-[1fr_auto] md:items-center md:px-4 md:py-8 md:-mx-4 ${
                url ? "cursor-pointer" : ""
              }`}
            >
              <div>
                <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors duration-300 ease-out group-hover:text-accent sm:text-3xl">
                  {project.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm text-muted sm:text-base">{project.description}</p>
                <p className="mt-3 text-sm text-muted">{project.stack.join(", ")}</p>
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
            </li>
          );
        })}
      </ul>
    </section>
  );
}
