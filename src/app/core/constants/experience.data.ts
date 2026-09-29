// TODO: replace with your real work history and education.
import { EducationEntry, ExperienceEntry } from '../models/experience.model';

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Software Engineer',
    organization: 'Your Company',
    location: 'City, State',
    start: '2024',
    end: 'Present',
    summary: 'Brief description of your role and impact goes here.',
    highlights: [
      'Add a concrete, measurable accomplishment',
      'Add a second accomplishment or responsibility',
      'Add a third accomplishment or responsibility',
    ],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: 'Master of Science, Computer Science',
    institution: 'University of Missouri — College of Engineering',
    location: 'Columbia, MO',
    end: '2021',
  },
  {
    degree: 'Bachelor of Science, Information Technology (Minor: Computer Science)',
    institution: 'University of Missouri — College of Engineering',
    location: 'Columbia, MO',
    end: '2018',
    details: ['Outstanding Senior Award, Information Technology'],
  },
];
