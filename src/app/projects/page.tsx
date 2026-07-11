import type { Metadata } from "next";
import { FolderKanban } from "lucide-react";
import { ComingSoon } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Projects",
  description: "Pet projects and experiments — coming soon.",
};

export default function ProjectsPage() {
  return (
    <ComingSoon
      title="Pet Projects"
      description="Side projects, automation scripts, and experiments I'm building along the way."
      icon={<FolderKanban className="h-8 w-8" />}
    />
  );
}
