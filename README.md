# Trevor Turchan's Portfolio Website

A sleek, modern portfolio website built with React, TypeScript, and styled-components. This website showcases my skills, experience, and projects as a Machine Learning Engineer and Software Developer.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Dark theme based on the Rose Pine color palette
- Animated page transitions using Framer Motion
- Interactive UI components
- Contact form

## Tech Stack

- React
- TypeScript
- Vite (for fast development and optimized builds)
- Styled Components (for styling)
- Framer Motion (for animations)
- React Router (for navigation)
- Font Awesome (for icons)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/portfolio-website.git
   cd portfolio-website
   ```

2. Install dependencies:
   ```
   npm install
   ```

### Development

Start the development server:
```
npm run dev
```

The site will be available at http://localhost:5173

### Building for Production

Build the website for production:
```
npm run build
```

This will create a `dist` directory with the production-ready files.

### Preview Production Build

To preview the production build locally:
```
npm run preview
```

## Deployment

This site can be deployed to GitHub Pages, Netlify, Vercel, or any other static site hosting service.

### GitHub Pages

1. Update the `base` property in `vite.config.ts` to match your repository name:
   ```ts
   base: '/portfolio-website/'
   ```

2. Create a GitHub Actions workflow for automatic deployment.

### Netlify/Vercel

Simply connect your repository to Netlify or Vercel, and they will automatically deploy your site when you push changes.

## Customization

- Update personal information in the components
- Add your own projects to the Projects page
- Replace social media links with your own
- Customize the color theme in `src/styles/theme.ts`

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Rose Pine Theme](https://rosepinetheme.com/) for the color palette
- [Font Awesome](https://fontawesome.com/) for the icons
- [Google Fonts](https://fonts.google.com/) for the Inter and JetBrains Mono fonts 