import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { ComingSoon } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Education",
  description: "Academic background and certifications — coming soon.",
};

export default function EducationPage() {
  return (
    <ComingSoon
      title="Education"
      description="Degrees, certifications, and continuous learning milestones will be documented here."
      icon={<GraduationCap className="h-8 w-8" />}
    />
  );
}
