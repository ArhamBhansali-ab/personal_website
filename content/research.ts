export interface Research {
  title: string;
  slug: string;
  /** paragraphs; an entry wrapped in $$…$$ is rendered as a LaTeX equation */
  description: string[];
  tags: string[];
  year: string;
  /** where the work was done or published; shown in the research index */
  venue: string;
  status: "published" | "unpublished";
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
    title: "Modeling Human Lifespan from Cell Division",
    slug: "lifespan-growth-temperature",
    description: [
      "Completed at the Research Science Institute (RSI) at MIT under Prof. James Michaelson of Harvard Medical School. There is currently no mathematical model for projecting an organism's lifespan, or for how temperature variation affects it. Life History Theory (LHT) explains lifespan through the trade-offs an organism makes to maintain maximum fitness across generations, and before modern medicine, temperature and climate were the primary drivers of lifespan change, through habitat, metabolic rate, and growth itself.",
      "The work is built on Binary Cellular Biology, which measures organisms in whole numbers of cells rather than mass, and on its central quantity, the Mitotic Fraction: the fraction of an organism's cells that must be dividing to produce the growth observed. Together with the lifespan equation, it is used to study how growth parameters and temperature affect lifespan, and to project how lifespan could change under modern-day climate change.",
      "From there the project developed a mechanistic explanation for the Gompertz law of mortality, under which the risk of death rises exponentially with age, doubling roughly every eight years:",
      String.raw`$$D(t) = G_H\, e^{G_S t}$$`,
      "Across 12 species the mitotic fraction m follows a power law in the cell count N, and growth obeys:",
      String.raw`$$m = a^{N^b}, \qquad \frac{dN}{dt} = \frac{\ln 2}{c}\, N\, m(N)$$`,
      "Growth slowing and aging thus become the same event: the progressive shutdown of cell division, which removes the dilution-repair of cellular damage.",
      "A two-phase model converts this into mortality. Late in life, division declines roughly linearly. That gives the number of functional cells, such as lymphocytes, where F is how long a cell stays functional after dividing, and a binomial-style failure probability then gives the chance that no cell can respond to a threat:",
      String.raw`$$m(t) \approx m_0 - m_d\, t, \qquad N_{pf} = N_p\, F\, m(t)$$`,
      String.raw`$$D_L = (1 - p_a)^{N_{pf}}, \qquad \ln D_L \approx -p_a N_p F m_0 + p_a N_p F m_d\, t$$`,
      "Because the logarithm of the failure probability is linear in time, a linear decline in cell division yields exponential mortality, recovering the Gompertz law from biological parameters. Simulations reproduced the J-shaped Gompertz–Makeham curve, explaining infant and adult mortality as one failure mode, and fit real data with R² = 0.96. The model also quantified how sex, diabetes, and vaccination shift risk, with each COVID-19 dose cutting death risk by about a third.",
      "Finally, the mechanism sits within Life History Theory. Suppressing mitosis enables multicellularity and controlled body size early in life at the cost of senescence later: an instance of antagonistic pleiotropy and disposable soma theory, with the trade-off localized to cell-cycle control.",
    ],
    tags: ["Mitotic Fraction", "Binary Cellular Biology", "Modeling"],
    year: "2024",
    venue: "RSI · Michaelson Lab, Harvard Medical School",
    status: "unpublished",
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
    venue: "Civil Engineering, IIT Bombay · Published in Springer Nature",
    status: "published",
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
    venue: "PoCRA study, Maharashtra · Published in BPAS-Geology",
    status: "published",
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
    venue: "State Climate Action Cell, Maharashtra",
    status: "unpublished",
    links: {
      paper: "https://drive.google.com/file/d/1NLRlnG6m9w88cnO0Eo005T662dfjJCAG/view?usp=sharing",
    },
    featured: false,
  },
];
