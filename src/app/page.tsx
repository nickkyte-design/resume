import { resumeData } from "@/data/resumeData";
import { HeroSection } from "@/components/resume/HeroSection";
import { ExperienceSection } from "@/components/resume/ExperienceSection";
import { SkillsSection } from "@/components/resume/SkillsSection";
import { CertificationsSection } from "@/components/resume/CertificationsSection";
import { ContactSection } from "@/components/resume/ContactSection";

export default function ResumePage() {
  return (
    <div className="space-y-16 sm:space-y-20">
      <HeroSection data={resumeData} />
      <ExperienceSection experience={resumeData.experience} />
      <SkillsSection skills={resumeData.skills} />
      <CertificationsSection
        certifications={resumeData.certifications}
        projects={resumeData.projects}
      />
      <ContactSection contact={resumeData.contact} />
    </div>
  );
}
