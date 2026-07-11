"use client";

import { motion } from "framer-motion";
import type { ExperienceItem } from "@/types/resume";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "./ExperienceCard";

interface ExperienceSectionProps {
  experience: ExperienceItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
  return (
    <section aria-labelledby="experience-heading" id="experience">
      <SectionHeading
        id="experience-heading"
        title="Experience"
        subtitle="A timeline of roles, responsibilities, and measurable impact."
      />

      <motion.div
        className="relative space-y-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        <div
          className="absolute bottom-0 left-4 top-0 hidden w-px bg-gradient-to-b from-sky-300 via-zinc-200 to-transparent dark:from-sky-700 dark:via-zinc-700 lg:block"
          aria-hidden
        />

        {experience.map((item) => (
          <motion.div key={item.id} variants={itemVariants} className="relative lg:pl-10">
            <div
              className="absolute left-[13px] top-8 hidden h-3 w-3 -translate-x-1/2 rounded-full border-2 border-sky-500 bg-white dark:bg-zinc-950 lg:block"
              aria-hidden
            />
            <ExperienceCard experience={item} />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
