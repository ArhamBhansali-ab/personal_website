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
    post?: string;
  };
  featured: boolean;
  coverImage?: string;
}

export const projects: Project[] = [
  {
    title: "Celer",
    slug: "celer-bio",
    description:
      "Celer Bio is an AI-powered data infrastructure layer for biology: it retrieves, cleans, and standardizes multi-omics datasets from repositories like GEO and PRIDE, turning weeks of manual metadata wrangling into hours. After talking to 100+ academic researchers and biotech founders, the bottleneck was clear — not analysis, but getting messy raw data into an analysis-ready state. Celer is intentionally headless, sitting between raw data and downstream tools so it slots into existing lab and pharma workflows instead of replacing them.",
    tags: ["Startup", "Biotech", "AI"],
    year: "2026",
    links: {
      post: "https://x.com/arhambhansali07/status/2018845490905772072",
    },
    featured: true,
    coverImage: "/images/projects/celer-bio.jpg",
  },
  {
    title: "Motorbike",
    slug: "motorbike",
    description:
      "A foldable electric motorbike I worked on, focused on the battery pack and drivetrain. Built around a custom 20s12p pack of P42A 21700 li-ion cells (74V nominal, 84V peak, ~20kW peak output), run through a Nucular P24F controller into a QS138 motor. Power reaches the rear wheel via a two-stage 7:1 reduction on custom-milled 4130 chromoly sprockets. The fold mechanism was the hard constraint — it needed a jackshaft at the swingarm pivot just to keep chain tension constant through the folding motion, which shaped the entire drivetrain layout. 0–100 km/h in about 3.5s, ~70kg total.",
    tags: ["CAD", "Electrical Engineering", "Wiring"],
    year: "2026",
    links: {
      post: "https://x.com/arhambhansali07/status/2024980588990468127",
    },
    featured: true,
    coverImage: "/images/projects/motorbike.jpg",
  },
  {
    title: "Paintbrush Cleaning Tool",
    slug: "paintbrush-cleaning-tool",
    description:
      "Built for an Engineering 101 client — a professional oil painter who needed a faster, contact-free way to clean paintbrushes without the skin irritation that comes with traditional solvent cleaning. The result is a dual-carriage system: an outer carriage, riding an 80/20 aluminum rail, moves between three containers of Turpenoid, soap, and water, while an inner carriage holds up to 10 brushes and dips them into each. Two stepper motors, driven by an ESP32, handle the motion; limit switches calibrate travel distance on startup, and an LCD walks the user through loading brushes and picking one of three cleaning modes (long, medium, short).",
    tags: ["Arduino", "Electrical Engineering", "Embedded"],
    year: "2025",
    featured: true,
    coverImage: "/images/projects/paintbrush-cleaning-tool.jpg",
  },
  {
    title: "PillMate AI",
    slug: "pillmate-ai",
    description:
      "An app that uses OCR and NLP to scan prescriptions, automatically logging a patient's medications and building up their medical history over time — aimed at cutting the friction of manually tracking dosages, refills, and adherence.",
    tags: ["NLP", "OCR", "AI"],
    year: "2025",
    links: {
      post: "https://x.com/arhambhansali07/status/2014798670613352492",
    },
    featured: false,
  },
  {
    title: "LandSight",
    slug: "landsight",
    description:
      "A real-time landslide early-warning system built to replace slow, once-a-day models like NASA's LHASA. Landslides kill roughly 4,600 people and cause over $4 billion in damage globally every year, and most existing prediction systems refresh too infrequently to act as real warnings. LandSight runs a four-stage pipeline: feature engineering from a combined GLC/EarthEnv dataset of slope, elevation, precipitation, soil, and vegetation data; model selection across random forest, XGBoost, logistic regression, and LSTM (XGBoost won on accuracy versus compute cost); synthetic event generation to fix severe class imbalance in landslide data; and live integration with Google's GraphCast weather model, turning a static risk map into an hourly early-warning system.",
    tags: ["ML", "Geospatial", "Feature Engineering", "Python"],
    year: "2024",
    links: {
      github: "https://github.com/arhambhansali/landsight",
    },
    featured: true,
    coverImage: "/images/projects/landsight.jpg",
  },
];
