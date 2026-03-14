import type { ExperienceItem } from "../types";

export const workExperience: ExperienceItem[] = [
  {
    title: "Software Engineer Intern",
    subtitle: "Oracle Cloud Infrastructure - (OCI) · Seattle, WA",
    date: "May 2026 – Aug 2026",
    side: "right",
    badge: "OCI",
    logo: "/assets/img/orace.png",
    bullets: [
      "Working on cloud platform intern projects and production-grade engineering workflows.",
      "Contributing to services and tooling with focus on reliability, testability, and developer experience.",
    ],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "State Farm Insurance - (Innovation Group) · Remote",
    date: "May 2025 – Present",
    side: "left",
    badge: "SF",
    logo: "/assets/img/statefarm.png",
    bullets: [
      "Built a self-service AWS resource request feature within an internal tooling portal using React, Lambda, API Gateway, and DynamoDB, enabling 500+ developers to submit, track, and approve provisioning requests.",
      "Automated compliant provisioning for approved AWS resource requests via an SNS-triggered Lambda deploying pre-configured templates with Service Catalog and Terraform, cutting about 2 hours of manual setup per request.",
      "Cut CI build times by 50% by migrating the internal tooling portal frontend from CRA to Vite, while adding unit tests for 26 utility functions using Vitest and integrating them into the GitLab CI pipeline for automated testing.",
    ],
  },
  {
    title: "Web Development Intern",
    subtitle: "Cal Poly Pomona · Pomona, CA",
    date: "Aug 2024 – May 2025",
    side: "right",
    badge: "CPP",
    logo: "/assets/img/calpolypomona.png",
    bullets: [
      "Built and updated university websites serving 27,000+ students using Cascade CMS with HTML and CSS, ensuring accessibility compliance, and supported a new template migration through tutorials for maintainers.",
      "Assisted in maintaining a SQL-based relational CRM database with 250,000+ student records by identifying and correcting inaccurate or corrupted information to ensure accuracy and integrity.",
    ],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "Desco Industries Inc · Chino, CA",
    date: "May 2024 – Aug 2024",
    side: "left",
    badge: "DI",
    logo: "/assets/img/desco.png",
    bullets: [
      "Built an ETL pipeline with Access, VBA, and SQL to automate the processing of Japanese distributor sales data by importing, filtering, translating, and exporting it to Navision ERP, reducing processing time by 50%.",
      "Refactored an employee password reset page in ASP to generate secure temporary passwords, enabling self-service resets on the Intranet for 250+ employees and reducing IT tickets for manual resets.",
    ],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "Develop For Good (3D Girls Inc.) · Remote",
    date: "May 2024 – July 2024",
    side: "right",
    badge: "DFG",
    logo: "/assets/img/dfg.png",
    bullets: ["Resume bullets coming soon."],
  },
  {
    title: "Software Engineer Intern",
    subtitle: "Metal Toad · Remote",
    date: "June 2023 – Sept 2023",
    side: "left",
    badge: "MT",
    logo: "/assets/img/metaltoad.png",
    bullets: [
      "Developed a Python REST API for a social media platform that automated awarding, activation, and deactivation of user achievement badges for 12,000+ users by leveraging AWS SDK to update JSON data in S3 buckets.",
      "Spearheaded a unit testing initiative for a serverless backend with 50+ AWS Lambda functions, increasing reliability and test coverage to 72% by using PyTest and integrating pre-commit hooks into the development cycle.",
    ],
  },
];

export const education: ExperienceItem[] = [
  {
    title: "B.S. Computer Science",
    subtitle: "California Polytechnic State University, Pomona",
    date: "Aug 2023 – May 2027",
    side: "left",
    badge: "CPP",
    logo: "/assets/img/calpolypomona.png",
  },
  {
    title: "CodePath (WEB102, CYB102, TIP102)",
    subtitle: "CodePath",
    date: "Feb 2024 – Apr 2025",
    side: "right",
    badge: "CP",
    logo: "/assets/img/codepath.jpg",
  },
  {
    title: "High School Diploma",
    subtitle: "Rosemead High School",
    date: "Aug 2019 – June 2023",
    side: "right",
    badge: "RHS",
    logo: "/assets/img/rosemead.jpg",
  },
];
