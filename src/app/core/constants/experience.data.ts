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

export const LEADERSHIP: ExperienceEntry[] = [
  {
    role: 'Co-Founder',
    organization: 'University of Missouri Virtual Reality Organization',
    location: 'Columbia, MO',
    end: 'Undergraduate',
    summary:
      'Co-founded and helped establish a student organization dedicated to virtual reality ' +
      'and immersive technology at the University of Missouri.',
    highlights: [],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: 'Master of Science, Computer Science',
    institution: 'University of Missouri — College of Engineering',
    location: 'Columbia, MO',
    end: '2021',
    details: [
      'Research focus: Extended Reality (XR) and Artificial Intelligence',
      'Thesis: "Increase Students Learning Effectiveness and Promote Active Learning in Sexual ' +
        'Health and Body Image Through VR Technology"',
    ],
  },
  {
    degree: 'Bachelor of Science, Information Technology (Minor: Computer Science)',
    institution: 'University of Missouri — College of Engineering',
    location: 'Columbia, MO',
    end: '2018',
    details: ['Outstanding Senior Award, Information Technology'],
  },
];
