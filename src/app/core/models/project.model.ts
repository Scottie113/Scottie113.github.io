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
}
