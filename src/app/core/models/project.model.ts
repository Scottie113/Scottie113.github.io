export interface ProjectVideo {
  title: string;
  description?: string;
  src: string;
  poster?: string;
  duration?: string;
}

export interface Project {
  title: string;
  slug: string;
  summary: string;
  description: string;
  category: string;
  technologies: string[];
  highlights: string[];
  github?: string;
  demo?: string;
  featured: boolean;
  role?: string;
  videos?: ProjectVideo[];
  contentWarning?: string;
}
