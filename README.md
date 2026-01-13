# Portfolio Website

A high-end, distinctive portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. This portfolio features an editorial, experimental design that feels personal and creative while maintaining professional standards.

## Features

- **Mobile-First Design**: Every interaction is optimized for mobile devices
- **Fast Performance**: Lighthouse-optimized with Next.js Image optimization
- **Smooth Animations**: Subtle, intentional motion using Framer Motion
- **Accessibility**: Semantic HTML and ARIA labels throughout
- **Editorial Layout**: Asymmetric spacing and creative typography
- **Modular Architecture**: Easy to customize and extend

## Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Next Image** for optimized images

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Main page composition
│   └── globals.css     # Global styles
├── components/
│   ├── Navigation.tsx  # Responsive navigation
│   ├── Landing.tsx     # Hero section
│   ├── About.tsx       # About section
│   ├── Projects.tsx    # Projects showcase
│   ├── Experience.tsx  # Work experience
│   ├── Skills.tsx      # Technical skills
│   └── Contact.tsx     # Contact information
└── public/             # Static assets
```

## Customizing Content

### Update Resume Information

1. **About Section** (`components/About.tsx`):
   - Update the description paragraphs
   - Add your education details

2. **Experience** (`components/Experience.tsx`):
   - Replace the `experiences` array with your work history
   - Update roles, companies, periods, and achievements

3. **Projects** (`components/Projects.tsx`):
   - Update the `projects` array with your actual projects
   - Replace images with your project screenshots
   - Update descriptions and tags

4. **Skills** (`components/Skills.tsx`):
   - Modify the `skillCategories` array to match your skillset
   - Add or remove categories as needed

5. **Contact** (`components/Contact.tsx`):
   - Update the `socialLinks` array with your actual links
   - The email, LinkedIn, GitHub, and website are already populated from your resume

### Design Customization

- **Colors**: Modify Tailwind classes throughout components
- **Typography**: Update font sizes and weights in component classes
- **Spacing**: Adjust padding and margins using Tailwind utilities
- **Animations**: Customize Framer Motion animations in each component

## Building for Production

```bash
npm run build
npm start
```

## Performance Optimization

- Images are automatically optimized using Next.js Image component
- Fonts are loaded with `display: swap` for better performance
- Animations respect `prefers-reduced-motion`
- Code splitting is handled automatically by Next.js

## Accessibility

- Semantic HTML elements throughout
- ARIA labels on interactive elements
- Keyboard navigation support
- Focus indicators for all interactive elements
- Touch-friendly tap targets (minimum 44x44px on mobile)

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Graceful degradation for older browsers

## License

This project is open source and available for personal use.

