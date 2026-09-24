import { SkillGroup } from '../models/skill.model';

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['Angular', 'React', 'Next.js', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express', 'GraphQL', 'REST'],
  },
  {
    category: 'XR / Graphics',
    items: ['Unity', 'C#', 'WebXR', 'Babylon.js', 'WebGL', 'Vuforia'],
  },
  {
    category: 'Infrastructure',
    items: ['Linux', 'Docker', 'Git', 'Networking'],
  },
];
