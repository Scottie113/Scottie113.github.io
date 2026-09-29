// TODO: fill in exact dates/periods for each role below.
import { TeachingEntry } from '../models/teaching.model';

export const TEACHING: TeachingEntry[] = [
  {
    role: 'Assistant Teaching Professor',
    organization: 'University of Missouri',
    description:
      'Designed and taught undergraduate and graduate courses spanning full-stack web ' +
      'development, systems administration, and network security.',
    highlights: [
      'Web Development I and Web Development II (graduate-level) — full-stack web application development',
      'Unix Operating Systems — systems administration and shell-based workflows',
      'Network Security — network topologies and protocols, zone and VLAN design, using Cisco Packet Tracer and the Cisco OS CLI for device configuration',
      'CI/CD and DevOps topics within Network Security — GitLab CI and GitHub Actions pipelines, Docker, and microservices architecture',
    ],
  },
  {
    role: 'Adjunct Professor',
    organization: 'University of Missouri',
    description: 'Taught introductory courses in virtual reality and computer networking.',
    highlights: [
      'Introduction to Virtual Reality — Unity development across multiple build targets (Oculus, Android, Xcode/iOS) using C#, building VR, AR, and MR projects',
      'Networking — all layers of the OSI model and their associated protocols and devices, using Cisco Packet Tracer and Wireshark',
    ],
  },
  {
    role: 'Teaching Assistant',
    organization: 'University of Missouri',
    description: 'Assisted with instruction for the Introduction to Virtual Reality course.',
    highlights: [
      'Introduction to Virtual Reality — Unity development across multiple build targets (Oculus, Android, Xcode/iOS) using C#, building VR, AR, and MR projects',
    ],
  },
];
