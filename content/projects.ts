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
    title: "LandSight",
    slug: "landsight",
    description:
      "Real-time landslide early-warning system that upgrades daily risk pipelines to hourly AI predictions. Uses synthetic event generation, GraphCast atmospheric inputs, and terrain-aware gradient boosting to handle severe class imbalance on Indian geographies.",
    tags: ["ML", "Feature Engineering", "Python", "Geospatial"],
    year: "2025",
    links: {
      github: "https://github.com/arhambhansali/landsight",
    },
    featured: true,
  },
  {
    title: "Neural Interface Signal Pipeline",
    slug: "neural-interface-pipeline",
    description:
      "End-to-end EEG acquisition and classification pipeline for a low-cost BCI. Covers analog front-end noise budgeting, real-time firmware on STM32, and an LSTM-based intent classifier trained on motor-imagery data.",
    tags: ["Neurotech", "Embedded C", "STM32", "Deep Learning"],
    year: "2025",
    links: {
      github: "https://github.com/arhambhansali/neural-interface",
    },
    featured: true,
  },
  {
    title: "RSI Lifespan Model",
    slug: "rsi-lifespan-model",
    description:
      "Computational model of temperature-driven lifespan variation rooted in life-history theory and binary cellular biology. Produces quantitative predictions for biological resilience under climate stress scenarios.",
    tags: ["Computational Biology", "Python", "Modeling", "Physics"],
    year: "2024",
    links: {
      paper: "https://scholar.google.com/citations?user=XZ0I5rkAAAAJ&hl=en",
    },
    featured: true,
  },
  {
    title: "Battery Management System",
    slug: "battery-management-system",
    description:
      "Custom BMS for a multi-cell Li-ion pack with active cell balancing, state-of-charge estimation via Coulomb counting and an EKF, and CAN bus telemetry for real-time monitoring.",
    tags: ["Embedded C", "Power Electronics", "STM32", "CAN"],
    year: "2024",
    links: {
      github: "https://github.com/arhambhansali/bms",
    },
    featured: false,
  },
  {
    title: "IMU Gesture Classifier",
    slug: "imu-gesture-classifier",
    description:
      "On-device gesture recognition running on a Cortex-M4 using a quantized 1D-CNN trained on raw IMU data. Achieves 94% accuracy at under 2 ms inference latency with no host connection.",
    tags: ["TinyML", "Embedded C", "Arm Cortex-M", "PyTorch"],
    year: "2024",
    links: {
      github: "https://github.com/arhambhansali/imu-gesture",
    },
    featured: false,
  },
];
