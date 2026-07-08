export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  readingTime: string;
  tags: string[];
  excerpt: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Building LandSight: Real-time landslide warning from noisy data",
    slug: "building-landsight",
    date: "2026-05-10",
    readingTime: "6 min read",
    tags: ["Landslide", "ML", "Feature Engineering"],
    excerpt:
      "How I turned daily landslide risk pipelines into an hourly AI system with synthetic events, GraphCast inputs, and terrain-aware modeling.",
    content:
      "LandSight started as a simple question: can a model update faster than today's disaster telemetry? In this post, I walk through dataset design, imbalance handling, and the tradeoffs that make an early-warning system practical for Indian terrain.",
  },
  {
    title: "Notes from RSI: modeling lifespan and temperature sensitivity",
    slug: "rsi-lifespan-model",
    date: "2026-03-14",
    readingTime: "5 min read",
    tags: ["Modeling", "Biology", "Math"],
    excerpt:
      "A concise notebook of the RSI project on temperature-driven lifespan models, from life-history theory to computational predictions.",
    content:
      "This note covers the structure of the lifespan model, how temperature enters the binary cellular biology framework, and what the equations imply for biological resilience under climate stress.",
  },
];


