# Quick Start Guide

## First Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Update your resume content:**
   - Open `data/resume.ts`
   - Replace placeholder content with your actual information from `RESUME-SOFTWARE2026.pdf`
   - Update:
     - `about` section with your story
     - `education` array with your degrees
     - `experience` array with your work history
     - `projects` array with your projects
     - `skills` object with your technical skills

3. **Update images:**
   - Replace images in `public/` folder if needed
   - Update image paths in `data/resume.ts` if you add new images

4. **Customize design (optional):**
   - Modify colors in component files (search for Tailwind color classes)
   - Adjust typography in component classes
   - Customize animations in Framer Motion components

5. **Run development server:**
   ```bash
   npm run dev
   ```

6. **Build for production:**
   ```bash
   npm run build
   npm start
   ```

## Key Files to Update

- `data/resume.ts` - All content (about, experience, projects, skills)
- `components/Landing.tsx` - Hero section text
- `app/layout.tsx` - Site metadata and SEO

## Design Philosophy

This portfolio uses:
- **Asymmetric layouts** - Projects alternate left/right
- **Editorial spacing** - Generous whitespace
- **Subtle animations** - Motion that enhances, not distracts
- **Mobile-first** - Every interaction optimized for touch

## Tips

- Keep project descriptions concise but compelling
- Use high-quality images (optimized for web)
- Test on mobile devices frequently
- Ensure all links work before deploying
- Update metadata for better SEO

