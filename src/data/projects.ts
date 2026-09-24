export type Project = {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  codeUrl?: string;
};

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A short description of the problem solved and the result achieved.",
    stack: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project Two",
    description: "A short description of the problem solved and the result achieved.",
    stack: ["React", "Node.js", "PostgreSQL"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "Project Three",
    description: "A short description of the problem solved and the result achieved.",
    stack: ["Next.js", "Tailwind"],
    liveUrl: "#",
    codeUrl: "#",
  },
];
