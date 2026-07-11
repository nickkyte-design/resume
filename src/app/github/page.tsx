import type { Metadata } from "next";
import { Code2 } from "lucide-react";
import { ComingSoon } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "GitHub",
  description: "GitHub repository library — coming soon.",
};

export default function GitHubPage() {
  return (
    <ComingSoon
      title="GitHub Library"
      description="A live feed of repositories pulled from the GitHub API will appear here."
      icon={<Code2 className="h-8 w-8" />}
    />
  );
}
