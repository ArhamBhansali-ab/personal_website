export interface Research {
  title: string;
  slug: string;
  description: string[];
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
    description: [
      "Completed at the Research Science Institute (RSI) summer program under Prof. James Michaelson of Harvard Medical School. There's currently no mathematical model for projecting an organism's lifespan or how temperature variation affects it. Historically it's taken thousands of years for a meaningful shift in human lifespan, a change attributed to Life History Theory (LHT) — the trade-offs an organism makes to maintain maximum fitness across generations. Before the 18th century, and outside the influence of modern medicine, temperature and climatic variation were the primary drivers of lifespan change, since they affected habitat conditions, internal metabolic rate, and growth itself.",
      "Lifespan is dependent on specific growth parameters and can be modeled with the lifespan equation, so this research analyzes how varying those parameters — and temperature specifically — affects lifespan, and projects how it could change going forward. It uses the Mitotic Fraction (the fraction of dividing cells in an organism) and the lifespan equation, both part of the Binary Cellular Biology framework, to study temperature's influence on lifespan and predict future lifespan under modern-day climate change.",
    ],
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
    description: [
      "Done with Prof. Ashish Juneja in the Civil Engineering department at IIT Bombay, addressing sustainability and environmental impact in soil testing methodology. Traditional approaches place measuring instruments directly on or within the soil sample, which can disrupt natural conditions and skew results — especially in heterogeneous or reinforced soil tests like triaxial experiments. This study introduces a non-intrusive alternative: an ordinary digital camera tracks soil movement at regular intervals instead, and the images are digitized with a MATLAB-based Particle Image Velocimetry (PIV) program.",
      "Unlike conventional techniques that rely on markers or beads placed in the sample, this method leverages texture differences between adjacent images to map soil deformation directly. Measurement precision improved with larger patch sizes in the test images, and results correlated strongly with traditional on-sample transducer measurements — validating the imaging approach as a viable, more sustainable and environmentally friendly alternative for geotechnical engineering.",
    ],
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
    description: [
      "Climate change poses critical challenges for agriculture in developing countries like India, where a large share of the population depends on farming for livelihoods and food security. With over 80% of agricultural land rainfed and more than 60% of available groundwater dedicated to agriculture, there's a pressing need for water-saving practices to counter groundwater overexploitation. This study, focused on Maharashtra, examines the World Bank–aided Project on Climate Resilient Agriculture (PoCRA), which aims to improve climate resilience and farm production in drought-prone villages across 16 districts, primarily in the Marathwada and Vidarbha regions.",
      "PoCRA introduces climate-smart technologies at the farm and micro-watershed level — soil and water management, micro-irrigation (drip and sprinkler), cropping pattern diversification, Broad Bed Furrow and zero-tillage practices, climate-resilient seed production, and farmer capacity building — targeted at small landholders for drought-proofing. The study found these interventions, especially the micro-irrigation component, meaningfully improved soil health, water security, and crop diversification, and that climate-resilient technologies were adopted widely because they're cost-effective and location-specific — underscoring how necessary this kind of practice is for the sector to hold up under continued climate change.",
    ],
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
    description: [
      "Written during an internship at the State Climate Action Cell, Maharashtra, India, this report analyzes the case for modern, technologically advanced Carbon Capture, Utilization, and Storage (CCUS) methods, drawing on past examples, case studies, and prior data. CCUS is the process of capturing CO2 emissions from sources like coal-fired power plants and either reusing them in another form or storing them so they don't reach the atmosphere — the 'capture' step traps emitted carbon, which is then either 'utilized' for another purpose or 'stored' to keep it out of the environment.",
    ],
    tags: ["Climate Policy", "Report"],
    year: "2024",
    links: {
      paper: "https://drive.google.com/file/d/1NLRlnG6m9w88cnO0Eo005T662dfjJCAG/view?usp=sharing",
    },
    featured: false,
  },
];
