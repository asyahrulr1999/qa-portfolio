export const siteConfig = {
  name: "Achmad Syahrul Ramadhan",
  role: "QA Engineer",
  shortName: "Achmad Syahrul R.",
  url: "https://asyahrul-qa.vercel.app",
  description:
    "QA Engineer with 4+ years of experience in Playwright, API, database and performance testing across healthcare and e-commerce systems.",
  ogImage: "/og-image.png",
  location: "West Jakarta, Indonesia",
  email: "asyahrulr01@gmail.com",
  links: {
    github: "https://github.com/asyahrulr1999",
    linkedin: "https://www.linkedin.com/in/achmad-syahrul-ramadhan-1375501a2",
    email: "mailto:asyahrulr01@gmail.com",
  },
  resumePath: "/Achmad-Syahrul-Ramadhan-Resume.pdf",
} as const;

export type SiteConfig = typeof siteConfig;
