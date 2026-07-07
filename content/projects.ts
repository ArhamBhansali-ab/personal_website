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
    title: "Celer",
    slug: "celer-bio",
    description:
      "A biotech startup building AI-driven data infrastructure that retrieves, cleans, and standardizes multi-omics biological data from sources like GEO and PRIDE. Designed as a headless system so research labs can plug it directly into their own analysis pipelines.",
    tags: ["Startup", "Biotech", "AI"],
    year: "2026",
    featured: true,
  },
  {
    title: "Motorbike",
    slug: "motorbike",
    description:
      "A foldable electric motorbike built around a custom 20s12p P42A 21700 li-ion battery pack running at 74–84V for up to 20kW peak output. Pairs a QS138 motor and Nucular P24F controller with a chromoly swingarm and a jackshaft-driven folding drivetrain.",
    tags: ["CAD", "Electrical Engineering", "Wiring"],
    year: "2026",
    featured: true,
  },
  {
    title: "Melasma Care App",
    slug: "melasma-care-app",
    description:
      "An early-stage app concept for tracking and managing melasma skincare routines. More details coming soon.",
    tags: ["Health", "App"],
    year: "2026",
    featured: false,
  },
  {
    title: "Paintbrush Cleaning Tool",
    slug: "paintbrush-cleaning-tool",
    description:
      "An autonomous dual-carriage paintbrush cleaner built for a professional oil painter as an Engineering 101 client project. Uses an ESP32, stepper motors, and limit switches to run three distinct cleaning modes without manual intervention.",
    tags: ["Arduino", "Electrical Engineering", "Embedded"],
    year: "2025",
    featured: true,
  },
  {
    title: "PillMate AI",
    slug: "pillmate-ai",
    description:
      "A medication management tool that uses NLP and OCR to scan prescriptions and help users track dosages and refills. Built to reduce the friction of manually logging medication schedules.",
    tags: ["NLP", "OCR", "AI"],
    year: "2025",
    featured: false,
  },
  {
    title: "LandSight",
    slug: "landsight",
    description:
      "A real-time landslide early-warning system that upgrades daily risk forecasts to hourly predictions. Combines random forest, XGBoost, and LSTM models with GraphCast weather data and synthetic event generation to handle severe class imbalance across Indian terrain.",
    tags: ["ML", "Geospatial", "Feature Engineering", "Python"],
    year: "2024",
    links: {
      github: "https://github.com/arhambhansali/landsight",
    },
    featured: true,
  },
];
