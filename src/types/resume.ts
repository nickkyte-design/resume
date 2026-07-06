export interface ContactInfo {
  email: string;
  phone?: string;
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
  summary?: string;
  highlights: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  skills: string[];
}

export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  expires?: string;
  status?: "active" | "in-progress";
}

export interface ProjectItem {
  id: string;
  name: string;
  startDate: string;
  endDate: string | "Present";
  description?: string;
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
  certifications: CertificationItem[];
  projects: ProjectItem[];
}
