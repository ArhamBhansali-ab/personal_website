export const site = {
  name: "Arham Bhansali",
  domain: "arhambhansali.com",
  // shown under the link when the site is shared, and in search results
  tagline: "Hey! I'm Arham. I like making and trying out stuff.",
  school: "ECE + Physics · Duke University",
  bioShort:
    "Electrical & Computer Engineering / Physics student at Duke. I build neurotech, embedded systems, and ML for signal-driven product experiences.",
  bioLong: [
    "Hey. I'm Arham Bhansali, an undergrad student at Duke University studying engineering. At the moment, I'm looking into foundation models for robotics, world models, and brain-computer interfaces (BCIs) – understanding ways to connect human intuition with machine intelligence.",
    "On the side, I enjoy building things, watching sports (football particularly), and doing photography. In my free time, you'll find me speed cubing, juggling a football, reading philosophy or maybe even djing (still learning!).",
    "This website is where I put things I've worked on, or have researched about, in the past. Would love to get feedback on any of these things! I'll also regularly drop photos I'm proud of on the photography page, and document what I'm learning about ML and other tech disciplines on the blog.",
    "Ever want to chat about something or build something together, shoot me a dm or mail – always open!",
  ],

  // home page copy
  playground:
    "I like to try out new hobbies all the time: photography, DJing, guitar, and a bunch of sports. Hobbies are what make you human, and they're where a lot of my creativity comes from.",

  socials: {
    email: "arhambhansali1@gmail.com",
    linkedin: "https://www.linkedin.com/in/arham-bhansali/",
    instagram: "https://www.instagram.com/arhambhansali_ab/",
    x: "https://x.com/arhambhansali07",
    github: "https://github.com/ArhamBhansali-ab",
    scholar: "https://scholar.google.com/citations?user=XZ0I5rkAAAAJ&hl=en",
  },

  // "amber" or "blue". The rebuild notice has a switch to preview both.
  accent: "amber" as "amber" | "blue",

  // shows the "being rebuilt" notice at the top of every page; set to false to remove it
  rebuilding: false,

  // heroImage: place a high-resolution head/portrait in public/images/projects/hero-head.jpg
  // or set this to an external URL. If you want me to fetch and add an image,
  // tell me which source to use and I'll add it to /public/images.
  heroImage: "/images/projects/hero-head.jpg",
};

export const socialLinks = [
  { label: "Email", href: `mailto:${site.socials.email}` },
  { label: "LinkedIn", href: site.socials.linkedin },
  { label: "Instagram", href: site.socials.instagram },
  { label: "X", href: site.socials.x },
  { label: "GitHub", href: site.socials.github },
  { label: "Scholar", href: site.socials.scholar },
];

export const navItems = [
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/photography", label: "Playground" },
  { href: "/about", label: "About" },
];
