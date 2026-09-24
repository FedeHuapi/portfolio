import type { IconType } from "react-icons";
import {
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Matched by substring so version suffixes ("Next.js 16", "React 19") still hit —
// the stack labels in data/projects.ts aren't guaranteed to be exact names.
const iconsByPattern: [RegExp, IconType][] = [
  [/next\.?js/i, SiNextdotjs],
  [/react/i, SiReact],
  [/typescript/i, SiTypescript],
  [/tailwind/i, SiTailwindcss],
  [/node/i, SiNodedotjs],
  [/postgres/i, SiPostgresql],
];

export function stackIcon(tech: string): IconType | null {
  return iconsByPattern.find(([pattern]) => pattern.test(tech))?.[1] ?? null;
}
