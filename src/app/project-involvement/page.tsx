import type { Metadata } from "next";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectInvolvementCard } from "@/components/projects/ProjectInvolvementCard";
import { projectInvolvementData } from "@/data/projectInvolvementData";

export const metadata: Metadata = {
  title: "Project Involvement",
  description:
    "Large-scale infrastructure and networking initiatives with documented involvement.",
};

export default function ProjectInvolvementPage() {
  return (
    <div className="space-y-10">
      <SectionHeading
        title="Project Involvement"
        subtitle="Engineering initiatives and hyperscale infrastructure projects I have contributed to. This collection will grow to highlight 4–6 key efforts over time."
      />

      <div className="space-y-6">
        {projectInvolvementData.map((project) => (
          <ProjectInvolvementCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
