"use client";

import { motion } from "framer-motion";
import type { ResumeData } from "@/types/resume";
import { DownloadCvButton } from "./DownloadCvButton";

interface HeroSectionProps {
  data: Pick<ResumeData, "greeting" | "name" | "title" | "summary" | "cvFilename">;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-white via-zinc-50 to-sky-50 px-6 py-12 sm:px-10 sm:py-16 dark:border-zinc-800 dark:from-zinc-900 dark:via-zinc-900 dark:to-sky-950/30"
    >
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-sky-200/40 blur-3xl dark:bg-sky-500/10" />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative max-w-3xl"
      >
        <p className="text-sm font-medium uppercase tracking-widest text-sky-600 dark:text-sky-400">
          {data.greeting}
        </p>
        <h1
          id="hero-heading"
          className="mt-3 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50"
        >
          {data.name}
        </h1>
        <p className="mt-3 text-xl font-medium text-zinc-700 sm:text-2xl dark:text-zinc-300">
          {data.title}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg dark:text-zinc-400">
          {data.summary}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <DownloadCvButton filename={data.cvFilename} />
          <a
            href="#experience"
            className="inline-flex items-center rounded-full border border-zinc-300 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 dark:border-zinc-600 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:focus-visible:ring-offset-zinc-950"
          >
            View Experience
          </a>
        </div>
      </motion.div>
    </section>
  );
}
