# Resume Portfolio - Next.js

A modern, dark-themed resume portfolio website built with Next.js, React, and TypeScript.

## Features

- Dark theme with elegant gray backgrounds and gold/yellow accents
- Responsive design that works on all devices
- Clean, modern UI matching the portfolio design
- Sections:
  - About Me
  - What I'm Doing (Services)
  - Skills

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
resume/
├── app/
│   ├── components/
│   │   ├── Sidebar.tsx          # Left sidebar with profile and contact info
│   │   ├── Navigation.tsx       # Top navigation bar
│   │   ├── AboutSection.tsx     # About me section
│   │   ├── ServicesSection.tsx  # What I'm doing section
│   │   └── SkillsSection.tsx    # Skills section
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Main page
├── package.json
└── tsconfig.json
```

## Customization

You can easily customize:
- Profile information in `app/components/Sidebar.tsx`
- About content in `app/components/AboutSection.tsx`
- Services in `app/components/ServicesSection.tsx`
- Skills in `app/components/SkillsSection.tsx`
- Colors and styling in the respective CSS module files

## Build for Production

```bash
npm run build
npm start
```

## Tech Stack

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **React 18** - UI library