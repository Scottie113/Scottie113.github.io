import { Project } from '../models/project.model';

export const PROJECTS: Project[] = [
  {
    title: 'MeteorologyXR',
    slug: 'meteorology-xr',
    summary: 'Cross-platform augmented reality application for meteorology education.',
    description:
      'An augmented reality application that visualizes meteorological phenomena in 3D space, ' +
      'letting students and instructors explore weather systems interactively rather than through ' +
      'static diagrams. Built to run across mobile AR-capable devices.',
    category: 'XR / Graphics',
    technologies: ['Unity', 'C#', 'Vuforia', 'AR'],
    highlights: [
      'Designed 3D visualizations of atmospheric and weather phenomena for classroom use',
      'Implemented marker-based and markerless AR tracking with Vuforia',
      'Built for cross-platform deployment on AR-capable mobile devices',
    ],
    featured: true,
  },
  {
    title: 'WebXR Applications',
    slug: 'webxr',
    summary: 'Browser-based immersive applications using WebXR and Babylon.js.',
    description:
      'A set of browser-based immersive experiences built on the WebXR standard, removing the need ' +
      'for a native app or store install. Focused on making XR content as accessible as visiting a URL.',
    category: 'XR / Graphics',
    technologies: ['TypeScript', 'Babylon.js', 'WebXR', 'WebGL'],
    highlights: [
      'Built immersive 3D scenes rendered directly in the browser via WebGL',
      'Integrated the WebXR device API for VR/AR headset support with no native install',
      'Authored reusable TypeScript scene and interaction modules with Babylon.js',
    ],
    featured: true,
  },
  {
    title: 'Da Vinci VR Training',
    slug: 'da-vinci-vr-training',
    summary: 'Virtual reality training simulation for the Da Vinci surgical system.',
    description:
      'A VR training simulation that lets trainees practice procedures and instrument handling for the ' +
      'Da Vinci surgical system in a low-risk, repeatable virtual environment before working with the ' +
      'physical hardware.',
    category: 'XR / Graphics',
    technologies: ['Unity', 'C#', 'VR', '3D Simulation'],
    highlights: [
      'Recreated surgical console interactions and instrument controls in VR',
      'Built repeatable training scenarios for procedural practice',
      'Worked with 3D simulation of hardware behavior to keep training realistic',
    ],
    featured: true,
  },
  {
    title: 'AI Mentor Matching',
    slug: 'ai-mentor-matching',
    summary: 'Full-stack application that matches mentors and mentees using AI-driven scoring.',
    description:
      'A full-stack web application that pairs mentors and mentees based on skills, goals, and ' +
      'availability, using AI-assisted scoring to rank compatible matches instead of manual review.',
    category: 'Full-Stack',
    technologies: ['TypeScript', 'Node.js', 'REST', 'AI/ML'],
    highlights: [
      'Designed a matching/scoring pipeline to rank mentor-mentee compatibility',
      'Built REST APIs and a Node.js backend to serve the matching engine',
      'Implemented a responsive front end for browsing and managing matches',
    ],
    featured: true,
  },
  {
    title: 'CleanroomVR',
    slug: 'cleanroom-vr',
    summary: 'VR lab simulation of a real cleanroom, with an AI assistant that guides students through procedure.',
    description:
      'A virtual reality recreation of a real cleanroom lab that lets students practice procedure and ' +
      'equipment handling before ever entering the physical space. An integrated AI assistant walks ' +
      'students through each step of the process, answering questions and correcting mistakes in real time.',
    category: 'XR / Graphics',
    technologies: ['Unity', 'C#', 'VR', 'AI'],
    highlights: [
      'Rebuilt a real cleanroom lab environment and equipment in VR for training use',
      'Integrated an AI assistant to guide students through lab procedure step by step',
      'Collaborated on 3D modeling, interaction design, and simulation logic',
    ],
    github: 'https://github.com/fwangyt/NewVRCleanRoom',
    featured: false,
    role: 'Collaborator',
  },
  {
    title: 'Geoglyph VR',
    slug: 'geoglyph-vr',
    summary:
      'VR reconstruction of an ancient Amazonian civilization, rebuilt on real LiDAR scan data with scanned artifacts.',
    description:
      'A virtual reality reconstruction of an Amazonian civilization that existed thousands of years ago, ' +
      'built directly on top of real LiDAR scan data of the site. The reconstructed structures are paired ' +
      'with Artec 3D scans of period artifacts, letting people explore the civilization and its objects in ' +
      'an immersive, historically grounded environment.',
    category: 'XR / Graphics',
    technologies: ['Unity', 'C#', 'VR', 'LiDAR', '3D Scanning'],
    highlights: [
      'Reconstructed ancient structures in VR directly on top of LiDAR survey data',
      'Integrated Artec 3D scans of real artifacts into the immersive environment',
      'Collaborated on translating archaeological scan data into an explorable 3D space',
    ],
    github: 'https://github.com/NickT526/GeoglyphVRSmall',
    featured: false,
    role: 'Collaborator',
  },
];
