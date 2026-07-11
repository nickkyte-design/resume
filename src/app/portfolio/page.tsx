import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { ComingSoon } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Visual showcase of professional work — coming soon.",
};

export default function PortfolioPage() {
  return (
    <ComingSoon
      title="Portfolio"
      description="A curated gallery of projects, designs, and infrastructure work will live here."
      icon={<Briefcase className="h-8 w-8" />}
    />
  );
}
