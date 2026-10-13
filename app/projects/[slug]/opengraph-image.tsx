import { OG_SIZE, renderOgImage } from "@/lib/og";
import { getProject, getProjectPages } from "@/lib/projects";

export const alt = "Project cover";
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return getProjectPages().map((project) => ({ slug: project.slug }));
}

export default function Image({ params }: { params: { slug: string } }) {
  const project = getProject(params.slug);
  return renderOgImage({
    label: project ? `Projects · ${project.year}` : "Projects",
    title: project?.title ?? "Projects",
    cover: project?.cover.img?.src,
  });
}
