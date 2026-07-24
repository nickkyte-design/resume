import { ArrowUpRight } from "lucide-react";
import type { ProjectInvolvementItem } from "@/types/projectInvolvement";

interface ProjectInvolvementCardProps {
  project: ProjectInvolvementItem;
}

export function ProjectInvolvementCard({ project }: ProjectInvolvementCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-sm font-medium text-sky-700 dark:text-sky-400">
            {project.organization} · {project.year}
          </p>
          <h2 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-50">
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-start gap-2 transition-colors hover:text-sky-600 dark:hover:text-sky-400"
            >
              {project.title}
              <ArrowUpRight
                className="mt-1 h-4 w-4 shrink-0"
                aria-hidden
              />
            </a>
          </h2>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
        {project.description}
      </p>

      {project.tags && project.tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Project tags">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 text-xs font-medium text-zinc-600 dark:border-zinc-700 dark:bg-zinc-950 dark:text-zinc-300"
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
