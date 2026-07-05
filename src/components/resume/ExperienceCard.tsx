import type { ExperienceItem } from "@/types/resume";

interface ExperienceCardProps {
  experience: ExperienceItem;
}

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const dateRange = `${experience.startDate} — ${experience.endDate}`;

  return (
    <article className="relative rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900/60">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            {experience.title}
          </h3>
          <p className="mt-1 text-base font-medium text-sky-700 dark:text-sky-400">
            {experience.company}
          </p>
          {experience.location && (
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-500">
              {experience.location}
            </p>
          )}
        </div>
        <time
          dateTime={experience.startDate}
          className="shrink-0 text-sm font-medium text-zinc-500 dark:text-zinc-400"
        >
          {dateRange}
        </time>
      </div>

      <ul className="mt-5 space-y-2">
        {experience.highlights.map((highlight) => (
          <li
            key={highlight}
            className="flex gap-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300"
          >
            <span
              className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500"
              aria-hidden
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
