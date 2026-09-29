export interface ExperienceEntry {
  role: string;
  organization: string;
  location: string;
  start?: string;
  end: string;
  summary: string;
  highlights: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  location: string;
  start?: string;
  end: string;
  details?: string[];
}
