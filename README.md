# Arham Bhansali - Personal Website

A modern, fast personal website built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Clean, minimal design
- Mobile-first and accessible
- Project showcase with filtering
- Resume download
- Contact page with social links
- SEO optimized

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Add your custom domain `arhambhansali.com` in Vercel project settings
5. Update DNS records as instructed by Vercel

## Content Management

All content is stored in the `/content` directory:

- `content/site.ts` - Site-wide configuration and social links
- `content/projects.ts` - Project listings
- `public/resume.pdf` - Resume PDF file

Simply edit these files to update your site content.

## Project Structure

```
/app
  /about
  /projects
    /[slug]
  /resume
  /contact
/components
/content
/public
```

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (Icons)
