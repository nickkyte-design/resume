"use client";

import { motion } from "framer-motion";
import { Award, BookOpen } from "lucide-react";
import type { CertificationItem, ProjectItem } from "@/types/resume";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface CertificationsSectionProps {
  certifications: CertificationItem[];
  projects: ProjectItem[];
}

export function CertificationsSection({
  certifications,
  projects,
}: CertificationsSectionProps) {
  return (
    <section aria-labelledby="certifications-heading" id="certifications">
      <SectionHeading
        id="certifications-heading"
        title="Certifications & Learning"
        subtitle="Industry credentials and professional development in progress."
      />

      <motion.div
        className="grid gap-6 lg:grid-cols-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
      >
        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="mb-4 flex items-center gap-2 text-sky-700 dark:text-sky-400">
            <Award className="h-5 w-5" aria-hidden />
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              Certifications
            </h3>
          </div>
          <ul className="space-y-4">
            {certifications.map((cert) => (
              <li
                key={cert.id}
                className="rounded-xl border border-zinc-100 bg-zinc-50 p-4 dark:border-zinc-800 dark:bg-zinc-950/50"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                      {cert.name}
                    </p>
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {cert.issuer}
                    </p>
                  </div>
                  <time className="shrink-0 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {cert.date}
                  </time>
                </div>
                {cert.expires && (
                  <p className="mt-2 text-xs text-zinc-500 dark:text-zinc-500">
                    Valid through {cert.expires}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60">
          <div className="mb-4 flex items-center gap-2 text-sky-700 dark:text-sky-400">
            <BookOpen className="h-5 w-5" aria-hidden />
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              In Progress
            </h3>
          </div>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li
                key={project.id}
                className="rounded-xl border border-dashed border-sky-200 bg-sky-50/50 p-4 dark:border-sky-900 dark:bg-sky-950/20"
              >
                <div className="flex items-start justify-between gap-3">
                  <p className="font-semibold text-zinc-900 dark:text-zinc-50">
                    {project.name}
                  </p>
                  <time className="shrink-0 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                    {project.startDate} — {project.endDate}
                  </time>
                </div>
                {project.description && (
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
}
