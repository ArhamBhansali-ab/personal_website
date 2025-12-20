export interface Project {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  year: string;
  links?: {
    demo?: string;
    github?: string;
    paper?: string;
  };
  featured: boolean;
  coverImage?: string;
}

export const projects: Project[] = [
  {
    title: "AI Health Diagnostics System",
    slug: "ai-health-diagnostics",
    description: "Machine learning system for early disease detection using medical imaging.",
    tags: ["AI", "Healthcare", "Python", "TensorFlow"],
    year: "2024",
    links: {
      github: "https://github.com/arhambhansali/ai-health",
      paper: "https://arxiv.org/abs/example",
    },
    featured: true,
  },
  {
    title: "Distributed Systems Framework",
    slug: "distributed-systems",
    description: "High-performance framework for building scalable distributed applications.",
    tags: ["Systems", "Go", "Distributed Computing"],
    year: "2024",
    links: {
      github: "https://github.com/arhambhansali/distributed",
      demo: "https://demo.example.com",
    },
    featured: true,
  },
  {
    title: "Research Paper: Efficient ML Training",
    slug: "efficient-ml-training",
    description: "Novel optimization techniques for reducing ML training time by 40%.",
    tags: ["Research", "Machine Learning", "Optimization"],
    year: "2023",
    links: {
      paper: "https://arxiv.org/abs/example",
    },
    featured: true,
  },
  {
    title: "Open Source Contribution",
    slug: "open-source",
    description: "Major contributions to popular open source projects in AI/ML space.",
    tags: ["Open Source", "Python", "Community"],
    year: "2023",
    links: {
      github: "https://github.com/arhambhansali/contributions",
    },
    featured: false,
  },
];

