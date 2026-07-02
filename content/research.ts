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
    title: "Temperature-Driven Lifespan Modeling in RSI",
    slug: "rsi-lifespan-temperature",
    description:
      "Computational study of how temperature sensitivity governs lifespan in a binary cellular biology framework. Derives closed-form predictions from life-history theory and validates them against empirical aging data.",
    tags: ["Computational Biology", "Modeling", "Physics", "Aging"],
    year: "2024",
    links: {
      paper: "https://scholar.google.com/citations?user=XZ0I5rkAAAAJ&hl=en",
    },
    featured: true,
  },
  {
    title: "Terrain-Aware Landslide Nowcasting with GraphCast",
    slug: "terrain-aware-landslide-nowcasting",
    description:
      "Hourly landslide risk prediction for Indian terrain combining NWP reanalysis, GraphCast atmospheric forecasts, and synthetic minority oversampling. Demonstrates that physics-informed feature engineering closes the gap where labeled events are rare.",
    tags: ["ML", "Geospatial", "Climate", "Feature Engineering"],
    year: "2025",
    links: {
      github: "https://github.com/arhambhansali/landsight",
    },
    featured: true,
  },
  {
    title: "Low-Power Neural Signal Acquisition for BCI",
    slug: "low-power-neural-acquisition",
    description:
      "Hardware-software co-design of a wearable EEG front-end targeting sub-mW per channel operation while preserving signal fidelity for motor-imagery classification. Focuses on noise budgeting, ADC choice, and firmware data paths.",
    tags: ["Neurotech", "Analog Design", "Embedded", "BCI"],
    year: "2025",
    links: {
      github: "https://github.com/arhambhansali/neural-interface",
    },
    featured: true,
  },
  {
    title: "State-of-Charge Estimation via Extended Kalman Filter",
    slug: "soc-ekf",
    description:
      "Recursive SoC estimator for Li-ion cells using an equivalent-circuit model and an EKF. Benchmarked against Coulomb counting on dynamic drive cycles; achieves under 2% RMS error across temperature extremes.",
    tags: ["Control Systems", "Power Electronics", "Kalman Filter", "C"],
    year: "2024",
    links: {},
    featured: false,
  },
];
