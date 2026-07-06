"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import type { ReactNode } from "react";
import type { ContactInfo } from "@/types/resume";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface ContactSectionProps {
  contact: ContactInfo;
}

interface ContactLinkProps {
  href: string;
  label: string;
  value: string;
  icon: ReactNode;
  external?: boolean;
}

function ContactLink({ href, label, value, icon, external }: ContactLinkProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="group flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 transition-colors hover:border-sky-200 hover:bg-sky-50/50 dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-sky-800 dark:hover:bg-sky-950/20"
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 group-hover:bg-sky-100 dark:bg-sky-950/50 dark:text-sky-400 dark:group-hover:bg-sky-950">
        {icon}
      </div>
      <div>
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{label}</p>
        <p className="mt-1 text-base font-semibold text-zinc-900 break-all dark:text-zinc-50">
          {value}
        </p>
      </div>
    </a>
  );
}

export function ContactSection({ contact }: ContactSectionProps) {
  return (
    <section aria-labelledby="contact-heading" id="contact">
      <SectionHeading
        id="contact-heading"
        title="Contact"
        subtitle="Let's connect — I'm open to opportunities, collaboration, and learning."
      />

      <motion.div
        className="grid gap-4 sm:grid-cols-2"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45 }}
      >
        <ContactLink
          href={`mailto:${contact.email}`}
          label="Email"
          value={contact.email}
          icon={<Mail className="h-5 w-5" />}
        />
        {contact.phone && (
          <ContactLink
            href={`tel:${contact.phone.replace(/\D/g, "")}`}
            label="Phone"
            value={contact.phone}
            icon={<Phone className="h-5 w-5" />}
          />
        )}
        <ContactLink
          href={contact.linkedin}
          label="LinkedIn"
          value="linkedin.com/in/nicholaskyte"
          icon={<LinkedInIcon className="h-5 w-5" />}
          external
        />
        <ContactLink
          href={contact.github}
          label="GitHub"
          value="github.com/nickkyte-design"
          icon={<GitHubIcon className="h-5 w-5" />}
          external
        />
        {contact.location && (
          <div className="flex items-start gap-4 rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-900/60">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-sky-600 dark:bg-sky-950/50 dark:text-sky-400">
              <MapPin className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Location</p>
              <p className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-50">
                {contact.location}
              </p>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}
