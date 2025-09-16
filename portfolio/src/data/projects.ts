import { Project } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    projectName: 'Portfolio Website',
    description: 'A modern portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features smooth animations with GSAP and responsive design.',
    image: {
      url: '/img/wave.png', // Using existing wave.png as placeholder
      alt: 'Portfolio Website Preview'
    },
    linkGitHub: 'https://github.com/yourusername/portfolio',
    linkLive: 'https://yourportfolio.com'
  },
  {
    id: '2',
    projectName: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with user authentication, payment integration, and admin dashboard.',
    image: {
      url: '/img/wave.png', // Using existing wave.png as placeholder
      alt: 'E-commerce Platform Preview'
    },
    linkGitHub: 'https://github.com/yourusername/ecommerce',
    linkLive: 'https://yourecommerce.com'
  },
  {
    id: '3',
    projectName: 'Task Management App',
    description: 'Collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
    image: {
      url: '/img/wave.png', // Using existing wave.png as placeholder
      alt: 'Task Management App Preview'
    },
    linkGitHub: 'https://github.com/yourusername/taskapp',
    linkLive: 'https://yourtaskapp.com'
  }
];