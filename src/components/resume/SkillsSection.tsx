"use client";

import { motion } from "framer-motion";
import type { SkillCategory } from "@/types/resume";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SkillBadge } from "./SkillBadge";

interface SkillsSectionProps {
  skills: SkillCategory[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  return (
    <section aria-labelledby="skills-heading" id="skills">
      <SectionHeading
        id="skills-heading"
        title="Skills"
        subtitle="Technologies and domains I work with, grouped by focus area."
      />

      <motion.div
        className="grid gap-6 sm:grid-cols-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
      >
        {skills.map((category) => (
          <div
            key={category.id}
            className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900/60"
          >
            <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
              {category.name}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
