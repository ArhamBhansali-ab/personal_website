# arhambhansali.com

Personal site built with Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Running it locally

```bash
npm install   # only needed once, or after pulling changes that add dependencies
npm run dev   # starts the dev server at http://localhost:3000
```

Other useful commands:
- `npm run build` — production build (also catches type errors)
- `npm run lint` — lint the codebase

## Where to edit your info

All the real content lives in `content/*.ts` as plain typed arrays/objects — you don't need to touch any page files to update text.

| File | What it controls |
|---|---|
| `content/site.ts` | Your name, tagline, short bio (shown on the homepage), and your connections (email, LinkedIn, Instagram, X, GitHub, Scholar) |
| `content/projects.ts` | Every project on the `/projects` page and its detail page |
| `content/research.ts` | Every entry on the `/research` page and its detail page |
| `content/blog.ts` | Every blog post on `/blog` |

**To edit your About page bio directly** (it's not in `content/`, since it's just a paragraph): open `app/about/page.tsx` and replace the placeholder `<p>` text.

**To add a new project or research entry:** copy an existing object in `content/projects.ts` / `content/research.ts` and fill in the fields:
```ts
{
  title: "My New Project",
  slug: "my-new-project",       // becomes the URL: /projects/my-new-project
  description: "1-3 sentences shown on the detail page.",
  tags: ["Tag One", "Tag Two"],
  year: "2026",
  links: { github: "https://github.com/you/repo" }, // optional: github/demo/paper
  featured: true,                 // true = shows on the homepage "a few things i've built" list
}
```
The list pages (`/projects`, `/research`) currently only show the title + year — the description only appears once someone clicks through to the detail page. That's intentional for now; if you want previews back on the list, it's a small change in `components/ProjectCard.tsx`.

**To add a new blog post:** copy an existing object in `content/blog.ts` — same idea, plus `date`, `readingTime`, and `excerpt`.

## How to add images

Nothing image-related is wired up yet (by design — you said you'd add photos later), so here's how to plug them in wherever you want:

1. **Drop the image file in `public/`.** Anything in `public/` is served from the site root — e.g. `public/photos/sunset.jpg` is reachable at `/photos/sunset.jpg`. Organize with subfolders if you like (`public/photos/`, `public/projects/`, etc.).
2. **Reference it with Next's `<Image>` component** (better performance than a plain `<img>` — handles resizing/lazy-loading automatically):
   ```tsx
   import Image from "next/image";

   <Image src="/photos/sunset.jpg" alt="Sunset over the bay" width={800} height={600} />
   ```
   Import this at the top of whichever page file you're adding the image to.
3. **Project/research cover images**: both `Project` and `Research` types in `content/projects.ts` / `content/research.ts` already have an optional `coverImage` field (e.g. `coverImage: "/projects/landsight.png"`) — set it on an entry, then add an `<Image>` to `app/projects/[slug]/page.tsx` (or the research equivalent) reading `project.coverImage`.
4. **Photography page**: `app/photography/page.tsx` is currently a simple "coming soon" placeholder. When you have photos ready, replace its content with a grid, e.g.:
   ```tsx
   <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
     <Image src="/photos/one.jpg" alt="..." width={600} height={400} className="rounded-lg" />
     {/* repeat per photo */}
   </div>
   ```

## Design system (if you want to tweak the look)

- **Colors** — all defined once in `tailwind.config.ts` under `theme.extend.colors.brand` (e.g. `brand.bg`, `brand.accent`). Change a hex there and it updates everywhere that uses `bg-brand-*` / `text-brand-*` classes.
- **Fonts** — loaded in `app/layout.tsx` via `next/font/google`. Three fonts are in play: `font-sans` (Inter, body text), `font-serif` (Fraunces, most headlines), `font-script` (Caveat, the handwritten touches like "hi, i'm" and the intro line above each page's title).
- **Hover effects** (squiggly underline, tilt, grain texture) — defined in `app/globals.css` as reusable classes (`.link-squiggle`, `.tilt-hover`).

## Pages / nav structure

Five sections: `/about`, `/projects`, `/research`, `/photography`, `/blog` — controlled by `navItems` in `components/Navbar.tsx`. Add or remove an entry there to change the nav.

```
/app
  /about
  /projects
    /[slug]
  /research
    /[slug]
  /photography
  /blog
    /[slug]
/components
/content
/public
```

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy
4. Add your custom domain `arhambhansali.com` in Vercel project settings
5. Update DNS records as instructed by Vercel

## Tech stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)
