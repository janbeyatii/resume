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
  {
    role: 'Founder',
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
    clientWebsites: [
      {
        name: 'MY Tiles Ottawa',
        slug: 'my-tiles-ottawa',
        url: 'https://mytilesottawa.ca/',
        thumbnail: '/mytiles.jpeg',
        description: 'A professional tile and flooring contractor website serving Ottawa and surrounding areas, built with Next.js 16 and optimized for local SEO and conversions.',
        businessOverview: 'Professional tile and flooring contractor serving Ottawa, Kanata, Orleans, Stittsville, Barrhaven, and Manotick. Services include kitchen backsplashes, bathroom/shower tiling with waterproofing, flooring, finished basements with heated floors, home office installations, and tile repair services. Focus on Ottawa building code compliance and premium finishes.',
        details: [
          'Built with Next.js 16 (App Router) and React 19, leveraging TypeScript for type safety and Tailwind CSS v4 for styling',
          'Implemented local SEO strategy with location-specific pages, structured data (JSON-LD), dynamic sitemaps, and Ottawa-focused content marketing',
          'Developed conversion-optimized user experience with multiple contact points, portfolio showcases, testimonials, and clear CTAs throughout',
          'Optimized for performance with dynamic imports, Next.js Image optimization (WebP/AVIF), font optimization, and code splitting',
          'Integrated Radix UI components, Swiper carousels, and custom animated components for enhanced interactivity',
          'Deployed on Vercel with comprehensive testing setup using Jest and React Testing Library',
        ],
        technologies: [
          'Next.js 16',
          'React 19',
          'TypeScript',
          'Tailwind CSS v4',
          'Radix UI',
          'Swiper',
          'Resend',
          'Vercel Analytics',
          'Jest',
        ],
        developmentMethod: 'Component-based React architecture with App Router structure. Data-driven content management with modular, reusable UI components. Strict TypeScript configuration with comprehensive testing setup.',
        businessStrategy: 'Local SEO-focused with location-specific landing pages, content marketing via blog section, and technical SEO including structured data and dynamic sitemaps. Conversion strategy emphasizes multiple contact points, social proof, and process transparency.',
      },
      {
        name: 'Titan Auto Care',
        slug: 'titan-auto-care',
        url: 'https://titanautocare.ca/',
        thumbnail: '/logo.jpg',
        description: 'A modern, SEO-focused Next.js website for mobile auto detailing and car care services in Ottawa, optimized for local search and conversions.',
        businessOverview: 'Mobile auto detailing and car care service in Ottawa, ON. Services include mobile auto detailing (interior/exterior), paint correction and ceramic coating, mobile tire changes, and mobile car repair (battery swaps, etc.). Serves Ottawa, Kanata, Orleans, Nepean, Barrhaven, Stittsville, Gloucester, Manotick, and Richmond.',
        details: [
          'Built with Next.js 16.1.1 (App Router) and React 19.2.3, leveraging TypeScript and Tailwind CSS 4 for a modern, type-safe codebase',
          'Implemented Server Actions for form submissions and API routes, with email-based booking system using Resend for notifications',
          'Developed secure admin panel for portfolio management with image uploads via Vercel Blob storage. Implemented robust security using bcrypt for password hashing with automatic salting, ensuring secure authentication and session management',
          'Optimized for local SEO with structured data (Schema.org), dynamic sitemap generation, and location-based service area pages',
          'Created mobile-first responsive design with smooth animations using Framer Motion and Lucide React icons',
          'Implemented rate limiting for API routes, server-side authentication with cookie-based sessions, and comprehensive content management system',
        ],
        adminImage: '/titan-admin.png',
        technologies: [
          'Next.js 16.1.1',
          'React 19.2.3',
          'TypeScript',
          'Tailwind CSS 4',
          'Framer Motion',
          'Lucide React',
          'Resend',
          'Vercel Blob',
          'bcrypt',
        ],
        developmentMethod: 'App Router architecture with file-based routing and Server Actions for form handling. Component-based React with server-side authentication using cookie-based sessions. Secure admin panel implementation with bcrypt password hashing (automatic salting) for robust security. SEO-first approach with structured data and comprehensive admin dashboard for content management.',
        businessStrategy: 'SEO and marketing strategy includes structured data (AutomotiveBusiness, FAQPage, ItemList), dynamic sitemaps, blog content, and portfolio gallery for social proof. User experience focuses on mobile-first design, smooth animations, clear service pages, and easy booking flow. Business operations include email notifications, admin dashboard, and location-based service area targeting for local SEO.',
      },
    ],
  },
]

export const projects = [
  {
    id: 1,
    slug: 'full-stack-crm-platform',
    title: 'Full-Stack CRM Platform',
    description: 'A comprehensive CRM system enabling sales teams to manage 10,000+ contacts with real-time synchronization and automated email-to-note processing, reducing manual data entry by 60%.',
    image: '/crm/crm1.png', // Fallback for single image
    images: ['/crm/crm1.png', '/crm/crm2.png', '/crm/crm3.png'], // Gallery images
    tags: ['React 19', 'TypeScript', 'Supabase', 'PostgreSQL', 'OAuth'],
    highlights: [
      'Architected full-stack CRM with real-time data synchronization',
      'Implemented email-to-note automation using Postmark webhooks and Supabase Edge Functions',
      'Developed multi-provider OAuth authentication (Google, Azure, Auth0) with Row Level Security',
    ],
    details: [
      'Architected and developed a full-stack CRM using React 19, TypeScript, and Supabase, enabling sales teams to manage 10,000+ contacts, companies, and deals with real-time data synchronization.',
      'Implemented email-to-note automation using Postmark webhooks and Supabase Edge Functions, automatically capturing and categorizing inbound emails as contact notes, reducing manual data entry by 60%.',
      'Developed multi-provider OAuth authentication (Google, Azure, Auth0) with Row Level Security (RLS) policies in PostgreSQL, ensuring secure, role-based access control for multi-tenant environments.',
    ],
  },
  {
    id: 2,
    slug: 'ppe-detection-deep-learning',
    title: 'Full-Stack Laboratory PPE Detection Using Deep Learning',
    description: 'Real-time video processing system with sub-second inference latency using cascading YOLO models and distributed microservices architecture.',
    image: '/ppe/ppe1.png', // Fallback for single image
    images: ['/ppe/ppe1.png', '/ppe/ppe2.png', '/ppe/ppe3.png', '/ppe/ppe4.png'], // Gallery images
    tags: ['FastAPI', 'Python', 'YOLO', 'OpenCV', 'Supabase', 'Microservices'],
    highlights: [
      'Developed real-time video processing with async/await patterns and cascading YOLO models',
      'Architected scalable edge computing backend with RBAC, JWT authentication, and microservices',
      'Implemented distributed system components with intelligent stream reconnection and violation detection',
    ],
    details: [
      'Developed real-time video processing system using FastAPI, async/await patterns, and cascading YOLO models with multi-stage detection pipelines, achieving sub-second inference latency through optimized OpenCV stream processing.',
      'Architected scalable edge computing backend with RBAC, JWT authentication via Supabase, RESTful APIs, and microservices architecture including violation detection engine, cloud sync service, and automated email reporting.',
      'Implemented distributed system components with intelligent stream reconnection, IoU-based person tracking algorithms, violation debouncing mechanisms, and real-time database synchronization.',
    ],
  },
  {
    id: 3,
    slug: 'homelab',
    title: 'HomeLab',
    description: 'Orchestrated containerized infrastructure stack with 10+ microservices, automated deployment, and secure reverse proxy configuration.',
    image: '/homelab/homelab1.png', // Fallback for single image
    images: ['/homelab/homelab1.png', '/homelab/homelab2.png', '/homelab/homelab3.png'], // Gallery images
    tags: ['Docker', 'Docker Compose', 'GitHub Actions', 'Nginx', 'Linux'],
    highlights: [
      'Orchestrated 10+ microservices using Docker Compose with automated deployment via GitHub Actions',
      'Configured reverse proxy infrastructure with Nginx Proxy Manager and Let\'s Encrypt SSL certificates',
      'Designed containerized infrastructure stack including media servers, DNS filtering, and monitoring tools',
    ],
    details: [
      'Orchestrated 10+ microservices using Docker Compose, implementing automated deployment via GitHub Actions.',
      'Configured reverse proxy infrastructure with Nginx Proxy Manager and Let\'s Encrypt SSL certificates, enabling secure HTTPS access across multiple domains.',
      'Designed and deployed a containerized infrastructure stack including media servers, DNS filtering, monitoring tools, and IoT automation, demonstrating expertise in infrastructure as code and service orchestration.',
    ],
  },
]

export const skills = {
  languages: ['C#', 'TypeScript', 'JavaScript', 'Python', 'C', 'SQL', 'Java'],
  frontend: ['React', 'Next.js', 'HTML/CSS', 'Tailwind CSS'],
  backend: ['FastAPI', '.NET', 'Node.js', 'Spring Boot'],
  databases: ['PostgreSQL', 'Supabase', 'MongoDB'],
  devops: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'Nginx', 'Linux/Unix', 'AWS', 'Azure'],
  ai: ['YOLO', 'OpenCV', 'Deep Learning', 'Object Detection', 'Computer Vision', 'TensorFlow', 'PyTorch'],
  tools: ['Git', 'YAML', 'Postmark', 'Auth0'],
  concepts: ['Microservices Architecture', 'RESTful APIs', 'OAuth', 'JWT', 'RLS', 'System Design', 'DevOps'],
}

