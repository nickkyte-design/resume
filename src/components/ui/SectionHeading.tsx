import type { ReactNode } from "react";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  id?: string;
}

export function SectionHeading({ title, subtitle, id }: SectionHeadingProps) {
  return (
    <div className="mb-8">
      <h2
        id={id}
        className="text-2xl font-semibold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 max-w-2xl text-base text-zinc-600 dark:text-zinc-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface ComingSoonProps {
  title: string;
  description?: string;
  icon?: ReactNode;
}

export function ComingSoon({ title, description, icon }: ComingSoonProps) {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
      {icon && (
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400">
          {icon}
        </div>
      )}
      <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
        {title}
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        {description ?? "This section is on the roadmap. Check back soon."}
      </p>
      <div className="mt-8 inline-flex items-center rounded-full border border-dashed border-zinc-300 px-4 py-2 text-sm font-medium text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
        Coming Soon
      </div>
    </section>
  );
}
