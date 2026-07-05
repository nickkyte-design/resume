import type { Metadata } from "next";
import { BookOpen } from "lucide-react";
import { ComingSoon } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Blog",
  description: "Technical writing and notes — coming soon.",
};

export default function BlogPage() {
  return (
    <ComingSoon
      title="Blog"
      description="Articles on networking, automation, and web development — powered by MDX or a headless CMS later."
      icon={<BookOpen className="h-8 w-8" />}
    />
  );
}
