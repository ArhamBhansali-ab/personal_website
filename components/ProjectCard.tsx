import Link from "next/link";
import { ExternalLink, Github, FileText } from "lucide-react";
import Tag from "./Tag";
import { Project } from "@/content/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block p-6 border border-gray-200 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all hover:shadow-lg"
    >
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold">{project.title}</h3>
        <span className="text-sm text-gray-500">{project.year}</span>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      {project.links && (
        <div className="flex gap-3">
          {project.links.github && (
            <a
              href={project.links.github}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" /> Code
            </a>
          )}
          {project.links.demo && (
            <a
              href={project.links.demo}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="w-4 h-4" /> Demo
            </a>
          )}
          {project.links.paper && (
            <a
              href={project.links.paper}
              onClick={(e) => e.stopPropagation()}
              className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText className="w-4 h-4" /> Paper
            </a>
          )}
        </div>
      )}
    </Link>
  );
}

