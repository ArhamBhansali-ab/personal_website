export interface Project {
  title: string;
  slug: string;
  description: string[];
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
    description: [
      "Over the last decade, advances in sequencing and high-throughput assays have caused an explosion in biological data generation, but the infrastructure to standardize and prepare that data hasn't kept pace. Public and private multi-omics datasets are inconsistently formatted, metadata is incomplete or mislabeled, sample annotations vary across studies and repositories, and reproducible pipelines have to be manually assembled for every new dataset. Public repositories like GEO and PRIDE hold petabytes of transcriptomic, proteomic, and metabolomic data, yet researchers routinely spend 2–4 weeks on retrieval, cleaning, and harmonization before any real analysis can begin — time that slows publications, delays drug discovery, and limits how well downstream AI models perform. After speaking with more than 100 academic researchers, biotech founders, and lab heads, the pattern was consistent: data preparation, not analysis, is the actual bottleneck in biology.",
      "Celer Bio is an AI-powered data infrastructure layer that retrieves, cleans, standardizes, and analyzes multi-omics biological data for academic labs and biotech companies, compressing that weeks-long prep process into hours. It retrieves datasets from public and private repositories like GEO and PRIDE, cleans and harmonizes metadata, standardizes formats across studies and modalities, assembles reproducible analysis pipelines, and outputs structured, analysis-ready datasets with clear summaries. Rather than building another end-to-end analysis platform, Celer is intentionally headless — it sits between raw biological data and downstream tools, so it plugs into the workflows, analysis platforms, and internal pipelines labs and pharma companies already use instead of replacing them.",
    ],
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
    description: [
      "A foldable electric motorbike I worked on, focused on the battery pack and drivetrain. The battery is a custom 20s12p pack of P42A 21700 lithium-ion cells, delivering 74V nominal and up to 84V at full charge, with roughly 20kW peak output and 7.5kW continuous. Power runs through a Nucular P24F controller into a QS138 motor, reaching the rear wheel via a two-stage 7:1 reduction on custom 4130 chromoly sprockets — milled from quarter-inch plate — running a 520 chain.",
      "The frame is two parallel 6061 aluminum plates joined by bent, welded 5052 sheet metal, with a five-blade chromoly steel swingarm fabricated on a custom jig. Because the bike is designed to fold, the drivetrain needed a jackshaft at the swingarm pivot just to keep chain tension constant through the folding motion — a constraint that ended up shaping the entire layout. Estimated 0–100 km/h is about 3.5 seconds, at roughly 70kg for the bike alone.",
    ],
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
    description: [
      "Built for an Engineering 101 client project: our client James Keul, a professional oil painter, came to us with a problem painters deal with constantly — cleaning oil paintbrushes is slow and inefficient, and traditional methods that involve direct physical contact with the brush often cause skin irritation from the solvents involved. We set out to build a completely autonomous, easy-to-use, user-centered paintbrush cleaning device.",
      "The solution uses three containers — one each for the solvent Turpenoid, soap, and water — with a dual-carriage system moving brushes between them. An outer carriage, riding an 80/20 aluminum extrusion for linear motion, travels across all three containers, while an inner carriage supports the brushes within each one; the whole assembly is stabilized with 3D-printed support blocks and aluminum extrusion. Both carriages are driven by stepper motors controlled by an ESP32. On startup, two limit switches calibrate the device by having the outer carriage travel from one end to the other to measure the distance it needs to cover, then return to the origin point, at which point an LCD prompts the user to load brushes into the inner carriage — thinner brushes on one side, thicker ones on the other, up to 10 brushes total — and choose one of three cleaning modes: long, medium, or short.",
    ],
    tags: ["Arduino", "Electrical Engineering", "Embedded"],
    year: "2025",
    featured: true,
    coverImage: "/images/projects/paintbrush-cleaning-tool.jpg",
  },
  {
    title: "PillMate AI",
    slug: "pillmate-ai",
    description: [
      "An app that uses OCR and NLP to scan prescriptions, automatically logging a patient's medications and building up their medical history over time. The goal is to cut the friction of manually tracking dosages, refills, and adherence by turning a photo of a prescription directly into a structured medication record.",
    ],
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
    description: [
      "Landslides are among the deadliest natural disasters on the planet: roughly 4,600 deaths and over $4 billion in damage worldwide every year. India alone lost more than 4,000 people to landslides between 2004 and 2016, on top of roughly $400 million in economic damage annually — and a lot of it is predictable, we just don't warn people fast enough. The systems that exist today are too slow to help: NASA's LHASA, one of the standard models, is computationally heavy and refreshes only once a day, even though satellite and radar data update hourly, and none of these models take advantage of modern AI forecasting, which can fold in live weather and terrain data far more accurately at a fraction of the compute cost.",
      "LandSight is a real-time landslide prediction model designed to be fast, scalable, and cheap enough to actually deploy, built around a four-stage pipeline. Feature engineering started by identifying the strongest predictors of landslides from over a decade of data — precipitation, slope, and elevation came out as the core features — pulling topographic data (slope, elevation, lithology) and precipitation records from the Global Landslide Catalog (GLC) and EarthEnv into a single combined dataset that hadn't existed in one place before, layered with secondary features like soil type and vegetation (NDVI) to capture how risk shifts across landscapes. Model selection tested random forests, XGBoost, logistic regression, and deep learning, scoring each on accuracy and compute cost since the model needed to be deployable in low-resource settings — XGBoost won on both counts. Because landslide data is scarce and heavily imbalanced, I generated synthetic samples, adding 1,400 non-landslide events so the model could generalize across varied terrain instead of memorizing a handful of examples. Finally, I integrated live predictions from Google's GraphCast weather model, which is what turns LandSight from a static risk map into an actual hourly early-warning system for high-risk regions.",
    ],
    tags: ["ML", "Geospatial", "Feature Engineering", "Python"],
    year: "2024",
    links: {
      github: "https://github.com/arhambhansali/landsight",
    },
    featured: true,
    coverImage: "/images/projects/landsight.jpg",
  },
];
