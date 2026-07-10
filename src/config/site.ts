export const siteConfig = {
  name: "Achmad Syahrul Ramadhan",
  role: "Senior QA Automation Engineer",
  shortName: "Achmad Syahrul R.",
  url: "https://asyahrul-qa.vercel.app",
  description:
    "Senior QA Automation Engineer with 4+ years of experience in Playwright, API, database and performance testing across healthcare and e-commerce systems.",
  ogImage: "/og-image.png",
  location: "West Jakarta, Indonesia",
  email: "asyahrulr01@gmail.com",
  phone: "+62 856-9423-2838",
  whatsapp: "6285694232838",
  links: {
    github: "https://github.com/Anula29052024",
    linkedin: "https://www.linkedin.com/in/achmad-syahrul-ramadhan",
    email: "mailto:asyahrulr01@gmail.com",
  },
  resumePath: "/Achmad-Syahrul-Ramadhan-Resume.pdf",
} as const;

export type SiteConfig = typeof siteConfig;
