import { EducationEntry, ExperienceEntry } from '../models/experience.model';

export const EXPERIENCE: ExperienceEntry[] = [
  {
    role: 'Assistant Teaching Professor / Software Development Lead',
    organization: 'University of Missouri-Columbia',
    location: 'Columbia, MO',
    start: '2022',
    end: '2026',
    summary:
      'Directed applied full-stack and systems-development work and led software teams from ' +
      'requirements through deployment, while serving as primary technical advisor for ' +
      'web-development capstone projects.',
    highlights: [
      'Directed applied full-stack and systems-development work across React, Angular, Next.js, Node.js/Express, REST APIs, databases, authentication, Docker, Linux servers, and deployment workflows',
      'Led software teams through requirements analysis, architecture, implementation, Git-based collaboration, code review, debugging, testing, documentation, deployment, and technical handoff',
      'Designed and built production-oriented development environments and prototypes spanning web applications, server-side systems, networking, AI-assisted software, and immersive technology',
      'Served as the primary technical advisor for web-development capstone projects, helping teams make architecture, API, database, security, deployment, and maintainability decisions',
    ],
  },
  {
    role: 'Adjunct Professor — VR / Networking / Software Development',
    organization: 'University of Missouri-Columbia',
    location: 'Columbia, MO',
    start: '2019',
    end: 'Present',
    summary:
      'Built and supported Unity/C# and networked applications, and developed training ' +
      'environments spanning networking, interactive 3D systems, and device integration.',
    highlights: [
      'Built and supported Unity/C# applications, VR interaction systems, networked applications, game-development workflows, and hardware/software integrations with emphasis on practical implementation and troubleshooting',
      'Developed technical prototypes and training environments involving networking, interactive 3D systems, device integration, UI/UX workflows, real-time interaction logic, and software deployment',
      'Reviewed implementation approaches, diagnosed software and networking failures, and mentored developers on object-oriented design, version control, performance, and maintainable code',
    ],
  },
  {
    role: 'Research Assistant / Senior Developer',
    organization: 'College of Engineering, University of Missouri-Columbia',
    location: 'Columbia, MO',
    start: '2017',
    end: '2021',
    summary:
      'Developed immersive training applications, VR simulations, and mobile AR applications, ' +
      'leading technical implementation for multidisciplinary research projects.',
    highlights: [
      'Developed immersive training applications, VR simulations, mobile AR applications, and interactive systems using Unity, C#, XR hardware, cameras, networking, and real-time media integration',
      'Led technical implementation for multidisciplinary projects, translating stakeholder requirements into application architecture, interaction systems, user interfaces, integration plans, and deployable builds',
      'Supervised junior developers and researchers, coordinated project work, resolved cross-stack software/hardware issues, and supported testing, demonstrations, and production readiness',
    ],
  },
];

export const LEADERSHIP: ExperienceEntry[] = [
  {
    role: 'Founder & Vice President',
    organization: 'MUVR (University of Missouri Virtual Reality Organization)',
    location: 'Columbia, MO',
    start: '2017',
    end: '2018',
    summary:
      'Founded an XR-focused technology organization, led collaborative development ' +
      'initiatives and workshops, and helped establish a sustainable student development ' +
      "community. MUVR received the Chancellor's Excellence Award for Best New Organization.",
    highlights: [],
  },
];

export const EDUCATION: EducationEntry[] = [
  {
    degree: 'Master of Science, Computer Science',
    institution: 'University of Missouri — College of Engineering',
    location: 'Columbia, MO',
    end: '2022',
    details: [
      'Advisor: Prof. Fang Wang',
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
    details: ['Outstanding Senior Award, Information Technology', 'Major GPA: 3.6/4.0'],
  },
];
