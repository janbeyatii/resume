/**
 * Resume Data
 * 
 * Update this file with your actual resume information extracted from RESUME-SOFTWARE2026.pdf
 * This centralizes all content for easy updates.
 */

export const personalInfo = {
  name: 'Jan Beyati',
  phone: '(613) 790-4730',
  email: 'janbeyati.9@gmail.com',
  linkedin: 'https://www.linkedin.com/in/jan-b-970775213/',
  github: 'https://github.com/janbeyatii',
  website: 'https://janbeyati.vercel.app/',
}

export const about = {
  intro: `I'm a software engineer passionate about building scalable, performant applications
    that solve real-world problems. My work spans full-stack development, from architecting
    robust backend systems to crafting intuitive user interfaces.`,
  
  philosophy: `I believe in writing clean, maintainable code and designing systems that are
    both powerful and elegant. Every feature I build is crafted with attention to performance,
    security, and user experience.`,
  
  personal: `Currently pursuing my Bachelor of Science in Software Engineering at Carleton University,
    I'm constantly exploring new technologies and contributing to projects that push the
    boundaries of what's possible.`,
}

export const education = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Carleton University',
    location: 'Ottawa, Ontario',
    period: 'September 2020 - April 2026',
  },
]

export const experience = [
  {
    role: 'Web Application Design and Build',
    company: 'JB Interactive Media',
    location: 'Ottawa, ON',
    period: 'September 2025 - Present',
    description: 'Building production-ready web applications with modern frameworks and best practices.',
    achievements: [
      'Build production-ready web applications leveraging Next.js 14, TypeScript, and React for optimal performance',
      'Develop responsive, accessible user interfaces with smooth animations and intuitive navigation',
      'Architect modular component structures enabling scalable, maintainable codebases for client projects',
      'Optimize application performance through code splitting, lazy loading, and efficient state management, delivering fast load times and enhanced user experience',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Barracuda Networks',
    location: 'Ottawa, ON',
    period: 'September 2023 - September 2024',
    description: 'Developed enterprise-grade backend features and automated deployment processes.',
    achievements: [
      'Designed and implemented critical backend features using C# .NET, delivering enterprise-grade functionality that met performance benchmarks and customer requirements',
      'Automated deployment processes through CI/CD pipeline development using YAML scripts, enabling continuous integration and reducing release cycle time',
      'Architected RESTful APIs and front-end integrations, ensuring seamless data synchronization between client and server layers across the application stack',
      'Optimized performance using code splitting and lazy loading, ensuring fast load times and smooth UX',
    ],
  },
]

export const projects = [
  {
    id: 1,
    title: 'Full-Stack CRM Platform',
    description: 'A comprehensive CRM system enabling sales teams to manage 10,000+ contacts with real-time synchronization and automated email-to-note processing, reducing manual data entry by 60%.',
    image: '/conga.png', // Fallback for single image
    images: ['/conga.png', '/mytiles.jpeg', '/titan.png'], // Gallery images - add your project images here
    tags: ['React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'OAuth'],
    highlights: [
      'Architected full-stack CRM with real-time data synchronization',
      'Implemented email-to-note automation using Postmark webhooks and Supabase Edge Functions',
      'Developed multi-provider OAuth authentication (Google, Azure, Auth0) with Row Level Security',
    ],
  },
  {
    id: 2,
    title: 'Full-Stack Laboratory PPE Detection Using Deep Learning',
    description: 'Real-time video processing system with sub-second inference latency using cascading YOLO models and distributed microservices architecture.',
    image: '/mytiles.jpeg', // Fallback for single image
    images: ['/mytiles.jpeg', '/conga.png'], // Gallery images - add your project images here
    tags: ['FastAPI', 'Python', 'YOLO', 'OpenCV', 'Supabase', 'Microservices'],
    highlights: [
      'Developed real-time video processing with async/await patterns and cascading YOLO models',
      'Architected scalable edge computing backend with RBAC, JWT authentication, and microservices',
      'Implemented distributed system components with intelligent stream reconnection and violation detection',
    ],
  },
  {
    id: 3,
    title: 'HomeLab',
    description: 'Orchestrated containerized infrastructure stack with 10+ microservices, automated deployment, and secure reverse proxy configuration.',
    image: '/titan.png', // Fallback for single image
    images: ['/titan.png', '/thumbnail.jpg'], // Gallery images - add your project images here
    tags: ['Docker', 'Docker Compose', 'GitHub Actions', 'Nginx', 'Linux'],
    highlights: [
      'Orchestrated 10+ microservices using Docker Compose with automated deployment via GitHub Actions',
      'Configured reverse proxy infrastructure with Nginx Proxy Manager and Let\'s Encrypt SSL certificates',
      'Designed containerized infrastructure stack including media servers, DNS filtering, and monitoring tools',
    ],
  },
]

export const skills = {
  languages: ['C#', 'TypeScript', 'JavaScript', 'Python', 'C', 'SQL'],
  frontend: ['React', 'Next.js', 'HTML/CSS'],
  backend: ['FastAPI', '.NET', 'Node.js'],
  databases: ['PostgreSQL', 'Supabase'],
  devops: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'Nginx', 'Linux/Unix'],
  tools: ['Git', 'YAML', 'OpenCV', 'YOLO', 'Postmark', 'Auth0'],
  concepts: ['Microservices Architecture', 'RESTful APIs', 'OAuth', 'JWT', 'RLS', 'System Design'],
}

