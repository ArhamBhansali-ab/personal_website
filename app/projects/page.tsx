"use client";

import { useState } from "react";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

export default function ProjectsPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const allTags = Array.from(new Set(projects.flatMap((p) => p.tags))).sort();

  const filtered =
    selectedTag === null
      ? projects
      : projects.filter((p) => p.tags.includes(selectedTag));

  return (
    <Container>
      <div className="py-20">
        <h1 className="text-2xl font-semibold text-neutral-900 mb-2">Projects</h1>
        <p className="text-neutral-500 mb-10">
          A collection of work across embedded systems, ML, and research.
        </p>

        <div className="mb-8 flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1.5 rounded text-sm transition-colors ${
              selectedTag === null
                ? "bg-neutral-900 text-white"
                : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
            }`}
          >
            All
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded text-sm transition-colors ${
                selectedTag === tag
                  ? "bg-neutral-900 text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project) => (
            <ProjectCard
              key={project.slug}
              item={project}
              href={`/projects/${project.slug}`}
            />
          ))}
        </div>
      </div>
    </Container>
  );
}
