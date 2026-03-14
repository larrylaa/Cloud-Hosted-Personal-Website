import type { Project } from "../types";

export const projects: Project[] = [
  {
    title: "BitMatch",
    description:
      "A web application platform designed to bridge the gap between innovators seeking project feedback and college students looking for hands-on experience. Many innovators struggle to promote their ideas, receive constructive input, and recruit talent, while students face challenges in finding meaningful projects to build skills and enhance their resumes.",
    image: "/assets/img/bitmatch.png",
    link: "https://bitmatchapp.com/",
    linkLabel: "Live Demo",
    stack: ["React", "TypeScript", "Node.js", "PostgreSQL"],
    impact:
      "Built to connect innovators with student contributors for real feedback loops.",
  },
  {
    title: "CPP SEA Icebreak",
    description:
      "A platform for organizations to interact with their members. A central hub for members to be always updated on the latest events while providing features to incentivize member growth. As a member of Cal Poly Pomona's Software Engineering Association, I worked on the backend team with ExpressJS, Prisma ORM, and PostgreSQL, simulating an Agile SWE environment.",
    image: "/assets/img/Icebreak.jpg",
    link: "https://github.com/cppsea/icebreak",
    linkLabel: "GitHub Repository",
    stack: ["Express", "Prisma", "PostgreSQL", "Agile"],
    impact:
      "Shipped backend features for an active student org platform with team workflows.",
  },
  {
    title: "GradLink",
    description:
      "A web application designed to simplify the college application process by connecting high school students with college student mentors. Its mission is to provide essential guidance and support, ensuring that every student, regardless of their background, can confidently pursue higher education.",
    image: "/assets/img/GradLink.svg",
    link: "https://github.com/larrylaa/GradLink-Forums",
    linkLabel: "GitHub Repository",
    stack: ["React", "Node.js", "MongoDB", "REST API"],
    impact:
      "Lowered barriers for first-gen applicants through mentor-led college guidance.",
  },
  {
    title: "Cloud Personal Website",
    description:
      "My personal portfolio site built for the Cloud Resume Challenge. Hosted on AWS S3, it leverages AWS Lambda for dynamic features (visitor counter, email), all orchestrated through a CI/CD pipeline powered by GitHub Actions. Infrastructure managed with Terraform.",
    image: "/assets/img/CloudResume.png",
    link: "https://github.com/larrylaa/Cloud-Portfolio-Website",
    linkLabel: "GitHub Repository",
    stack: ["AWS", "Lambda", "Terraform", "GitHub Actions"],
    impact:
      "Automated cloud deployment and dynamic portfolio features with serverless architecture.",
  },
];
