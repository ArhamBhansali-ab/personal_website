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
    title: "Biological Lifespan of Humans and the Influence of Growth Parameters and Temperature",
    slug: "lifespan-growth-temperature",
    description:
      "An unpublished study from the Research Science Institute (RSI) under Prof. James Michaelson of Harvard Medical School, addressing the lack of a mathematical model for projecting organism lifespan and how temperature affects it. Uses Life History Theory and the Binary Cellular Biology framework's Mitotic Fraction and lifespan equation to model how growth parameters and temperature drove lifespan changes before the 18th century, and to project how modern climate change could shift human lifespan going forward.",
    tags: ["Modeling", "Biology", "Unpublished"],
    year: "2024",
    links: {
      paper: "https://drive.google.com/file/d/1s94ZoXdwltKT7kNau0-MWJwDFKxhvyTp/view?usp=sharing",
    },
    featured: true,
  },
  {
    title: "Soil Deformation Measurement via Digital Image Analysis",
    slug: "soil-deformation-image-analysis",
    description:
      "A MATLAB-based Particle Image Velocimetry (PIV) method for measuring soil deformation in small-scale geotechnical testing, done with Prof. Ashish Juneja in the Civil Engineering department at IIT Bombay. Instead of intrusive on-sample transducers — which can disturb heterogeneous or reinforced soil samples like triaxial tests — this method tracks texture differences between images taken with an ordinary digital camera. Measurement precision improved with larger image patch sizes, and results correlated strongly with traditional transducer-based measurements, making the case for a more sustainable, non-intrusive standard in soil testing.",
    tags: ["MATLAB", "GeoPIV", "Civil Engineering"],
    year: "2023/24",
    links: {
      paper: "https://link.springer.com/chapter/10.1007/978-3-031-90928-3_32",
    },
    featured: true,
  },
  {
    title: "Coping with Climate Change Using Climate-Resilient Technology in Rainfed Areas",
    slug: "climate-resilient-technology-rainfed-areas",
    description:
      "Data analysis and scraping work with PoCRA, the World Bank–aided Project on Climate Resilient Agriculture, across 16 drought-prone districts of Maharashtra (mainly Marathwada and Vidarbha). Evaluated climate-smart interventions — micro-irrigation (drip and sprinkler), soil and water management, Broad Bed Furrow and zero-tillage practices, and climate-resilient seed production — aimed at drought-proofing small landholder farms in a state where over 80% of agricultural land is rainfed and more than 60% of groundwater use goes to agriculture.",
    tags: ["Data Analysis", "Climate", "Agriculture"],
    year: "2023",
    links: {
      paper: "https://openurl.ebsco.com/contentitem/gcd:184857026?sid=ebsco:plink:crawler-gcd&id=ebsco:gcd:184857026&crl=c&jrnl=09704639",
    },
    featured: true,
  },
  {
    title: "Carbon Capture, Utilization, and Storage (CCUS) Report",
    slug: "ccus-report",
    description:
      "A policy and technical report written during an internship at the State Climate Action Cell, Maharashtra, India, analyzing the case for modern Carbon Capture, Utilization, and Storage (CCUS) — trapping CO2 emissions from sources like coal-fired power plants and either reusing or storing it — through past examples, case studies, and prior data.",
    tags: ["Climate Policy", "Report"],
    year: "2024",
    links: {
      paper: "https://drive.google.com/file/d/1NLRlnG6m9w88cnO0Eo005T662dfjJCAG/view?usp=sharing",
    },
    featured: false,
  },
];
