import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { resolveShot, type Shot, type ShotSpec } from "@/lib/images";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export type ProjectLinks = {
  repo?: string;
  paper?: string;
  demo?: string;
  video?: string;
  post?: string;
};

/** Frontmatter of content/projects/<slug>.mdx */
export type ProjectMeta = {
  title: string;
  year: string;
  /** one line, shown on cards and as the page description */
  summary: string;
  /** 2-3 short tags for the card */
  tags: string[];
  /** sort order on the home page and index; lower comes first */
  order: number;
  /** show in "selected work" on the home page */
  featured: boolean;
  /** e.g. "in progress" */
  status?: string;
  /** false = listed by name only: no detail page, nothing links to it */
  hasPage?: boolean;
  context?: string;
  role?: string;
  duration?: string;
  team?: string;
  stack: string[];
  cover: ShotSpec;
  links?: ProjectLinks;
  gallery?: ShotSpec[];
};

export type Project = Omit<ProjectMeta, "cover" | "gallery" | "hasPage"> & {
  slug: string;
  hasPage: boolean;
  cover: Shot;
  gallery: Shot[];
  /** MDX body, without frontmatter */
  body: string;
  /** h2 headings in the body, in order */
  sections: { id: string; title: string }[];
};

export function slugifyHeading(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function extractSections(body: string) {
  const withoutCode = body.replace(/```[\s\S]*?```/g, "");
  return Array.from(withoutCode.matchAll(/^##\s+(.+)$/gm)).map((match) => {
    const title = match[1].trim();
    return { id: slugifyHeading(title), title };
  });
}

function load(): Project[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const { data, content } = matter(fs.readFileSync(path.join(PROJECTS_DIR, file), "utf8"));
      const meta = data as ProjectMeta;
      return {
        ...meta,
        year: String(meta.year),
        hasPage: meta.hasPage !== false,
        slug,
        cover: resolveShot(meta.cover),
        gallery: (meta.gallery ?? []).map(resolveShot),
        body: content,
        sections: extractSections(content),
      };
    })
    .sort((a, b) => a.order - b.order);
}

let cache: Project[] | null = null;

export function getProjects(): Project[] {
  if (process.env.NODE_ENV !== "production") return load();
  cache ??= load();
  return cache;
}

/** Projects that have a detail page. */
export function getProjectPages(): Project[] {
  return getProjects().filter((project) => project.hasPage);
}

export function getProject(slug: string): Project | undefined {
  return getProjectPages().find((project) => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return getProjects().filter((project) => project.featured);
}
