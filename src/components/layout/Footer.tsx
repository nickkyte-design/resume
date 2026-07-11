import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { resumeData } from "@/data/resumeData";
import { navLinks } from "@/lib/navigation";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/50">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
              {resumeData.name}
            </p>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {resumeData.title}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-4 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-600 transition-colors hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-4 border-t border-zinc-200 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-zinc-800">
          <p className="text-sm text-zinc-500 dark:text-zinc-500">
            © {year} {resumeData.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <a
              href={`mailto:${resumeData.contact.email}`}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-sky-300 hover:text-sky-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-sky-700 dark:hover:text-sky-400"
              aria-label="Email"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href={resumeData.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-sky-300 hover:text-sky-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-sky-700 dark:hover:text-sky-400"
              aria-label="LinkedIn profile"
            >
              <LinkedInIcon className="h-4 w-4" />
            </a>
            <a
              href={resumeData.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-colors hover:border-sky-300 hover:text-sky-600 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-sky-700 dark:hover:text-sky-400"
              aria-label="GitHub profile"
            >
              <GitHubIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
