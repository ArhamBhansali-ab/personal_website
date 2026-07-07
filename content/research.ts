export interface Research {
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

export const research: Research[] = [
  {
    title: "Soil Deformation Measurement via Digital Image Analysis",
    slug: "soil-deformation-image-analysis",
    description:
      "A MATLAB-based particle image velocimetry (PIV) method for measuring soil deformation without intrusive on-sample transducers. Conducted with Prof. Ashish Juneja in the Civil Engineering department at IIT Bombay as an alternative to standard triaxial soil testing instrumentation.",
    tags: ["MATLAB", "GeoPIV", "Civil Engineering"],
    year: "2023/24",
    featured: true,
  },
  {
    title: "Coping with Climate Change Using Climate-Resilient Technology in Rainfed Areas",
    slug: "climate-resilient-technology-rainfed-areas",
    description:
      "Data analysis and scraping work with PoCRA, a World Bank–aided Project on Climate Resilient Agriculture in Maharashtra. Focused on evaluating water-saving and micro-irrigation practices across rainfed farming regions.",
    tags: ["Data Analysis", "Climate", "Agriculture"],
    year: "2023",
    featured: true,
  },
  {
    title: "Biological Lifespan of Humans and the Influence of Growth Parameters and Temperature",
    slug: "lifespan-growth-temperature",
    description:
      "An unpublished study from the Research Science Institute (RSI) under Prof. James Michaelson of Harvard Medical School, modeling how temperature affects lifespan through Life History Theory and a Binary Cellular Biology framework.",
    tags: ["Modeling", "Biology", "Unpublished"],
    year: "2024",
    featured: true,
  },
  {
    title: "Carbon Capture, Utilization, and Storage (CCUS) Report",
    slug: "ccus-report",
    description:
      "A policy and technical report written during an internship at the State Climate Action Cell, Maharashtra, India, surveying carbon capture, utilization, and storage approaches relevant to state-level climate strategy.",
    tags: ["Climate Policy", "Report"],
    year: "2024",
    featured: false,
  },
];
