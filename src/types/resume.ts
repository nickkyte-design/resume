export interface ContactInfo {
  email: string;
  linkedin: string;
  github: string;
  location?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string | "Present";
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface ResumeData {
  name: string;
  title: string;
  greeting: string;
  summary: string;
  cvDownloadPath: string;
  contact: ContactInfo;
  experience: ExperienceItem[];
  skills: SkillCategory[];
}
