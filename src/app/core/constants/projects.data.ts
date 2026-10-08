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
    summary: 'VR lab simulation of a real cleanroom, with a voice-activated AI assistant that guides students through procedure.',
    description:
      'A virtual reality recreation of a real lab, built to train students on cleanroom procedures and ' +
      'equipment handling before they ever enter the physical space. The simulation combines eye-tracking ' +
      'data, video tutorials, and a voice-activated AI assistant (say "Hey Nova") with spatial awareness ' +
      'and retrieval-augmented generation (RAG), so it can be updated as the lab changes. Students can ' +
      'ask Nova when they get lost, forget a step, or need to know what they are doing wrong. An in-world ' +
      'info pad keeps trainees on track and lets them rewatch the training video.',
    category: 'XR / Graphics',
    technologies: ['Unity', 'C#', 'VR', 'AI', 'RAG', 'Eye Tracking', 'Voice Interaction'],
    highlights: [
      'Rebuilt a real lab environment and equipment in VR for hands-on procedure training',
      'Voice-activated AI assistant ("Hey Nova") with spatial awareness of the scene, using RAG so its knowledge can be updated as procedures change',
      'Captured eye-tracking data and embedded video tutorials to support and evaluate learning',
      'In-world info pad for step tracking and on-demand training video playback',
    ],
    github: 'https://github.com/fwangyt/NewVRCleanRoom',
    featured: false,
    role: 'Collaborator',
    videos: [
      {
        title: 'RIE Module Demo',
        description: 'Walkthrough of the RIE lab training module.',
        src: 'videos/cleanroom-rie-module-demo.mp4',
        poster: 'videos/posters/cleanroom-rie-module-demo.jpg',
        duration: '9:15',
      },
      {
        title: 'Info Pad & Training Video',
        description: 'The in-world info pad that keeps students on track and plays the training video.',
        src: 'videos/cleanroom-info-pad.mp4',
        poster: 'videos/posters/cleanroom-info-pad.jpg',
        duration: '3:43',
      },
      {
        title: 'Clean Room Demo (11.5.24)',
        description: 'Short capture of the clean room simulation.',
        src: 'videos/cleanroom-demo-11-5-24.mp4',
        poster: 'videos/posters/cleanroom-demo-11-5-24.jpg',
        duration: '0:38',
      },
    ],
  },
  {
    title: 'Nursing VR Simulation',
    slug: 'nursing-vr-simulation',
    summary: 'Realistic hospital-procedure training for nursing students, built with motion tracking and 3D scanning.',
    description:
      'A VR training simulation for nursing students built to recreate realistic hospital procedures. ' +
      'The team worked with real doctors, using Neuron motion trackers and an Artec scanner to make the ' +
      'scenarios as realistic as possible for training students.',
    category: 'XR / Graphics',
    technologies: ['VR', 'Motion Capture', 'Artec 3D Scanning', '3D Simulation'],
    highlights: [
      'Used Neuron motion trackers to capture realistic movement',
      'Used an Artec scanner to improve the realism of the scenario',
      'Worked with real doctors to model realistic hospital procedures for student training',
    ],
    featured: false,
    videos: [
      {
        title: 'Nursing Simulation Demo',
        description: 'Demo of the nursing procedure training scenario.',
        src: 'videos/nursing-simulation-demo.mp4',
        poster: 'videos/posters/nursing-simulation-demo.jpg',
        duration: '3:28',
      },
    ],
  },
  {
    title: 'Shape',
    slug: 'shape',
    summary: 'An early VR application for the Oculus Go teaching sexual awareness through question-based scenarios.',
    description:
      'One of my earliest VR applications, built for the Oculus Go. Shape uses question-based scenarios ' +
      'and educational content to inform students about sexual awareness, including modeled anatomy used ' +
      'to teach about contraception.',
    category: 'XR / Graphics',
    technologies: ['Oculus Go', 'VR', 'Unity', 'C#', 'Educational Content'],
    highlights: [
      'Built an early VR application for the Oculus Go headset',
      'Designed question-based scenarios to engage students, including Jeopardy-style, Healthy Relationships, and Body Image modules',
      'Delivered educational content on sexual awareness, including contraception, in an interactive format',
    ],
    featured: false,
    contentWarning:
      'Content notice: this project includes modeled genitalia, shown for educational purposes to teach students about contraception.',
    videos: [
      {
        title: 'Shape Walkthrough',
        description: 'Full walkthrough of the Shape application.',
        src: 'videos/shape-walkthrough.mp4',
        poster: 'videos/posters/shape-walkthrough.jpg',
        duration: '23:40',
      },
    ],
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
