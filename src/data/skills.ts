import type { SkillGroup } from "../types";

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend",
    categoryIcon: "devicon-html5-plain colored",
    skills: [
      { name: "HTML5", icon: "devicon-html5-plain colored" },
      { name: "CSS3", icon: "devicon-css3-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" },
      { name: "React", icon: "devicon-react-original colored" },
    ],
  },
  {
    category: "Backend",
    categoryIcon: "devicon-nodejs-plain colored",
    skills: [
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
      { name: "Express.js", icon: "devicon-express-original" },
      { name: "Django", icon: "devicon-django-plain colored" },
      { name: "Python", icon: "devicon-python-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
    ],
  },
  {
    category: "Testing",
    categoryIcon: "devicon-jest-plain colored",
    skills: [
      { name: "Vitest", icon: "devicon-vitest-plain colored" },
      { name: "Jest", icon: "devicon-jest-plain colored" },
      { name: "PyTest", icon: "devicon-pytest-plain colored" },
    ],
  },
  {
    category: "Cloud & DevOps",
    categoryIcon: "devicon-amazonwebservices-plain-wordmark colored",
    skills: [
      { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
      { name: "Azure", icon: "devicon-azure-plain colored" },
      { name: "Terraform", icon: "devicon-terraform-plain colored" },
      { name: "Docker", icon: "devicon-docker-plain colored" },
      { name: "GitHub Actions", icon: "devicon-github-original" },
      { name: "GitLab CI/CD", icon: "devicon-gitlab-plain colored" },
      { name: "AWS SAM", icon: "devicon-amazonwebservices-original colored" },
    ],
  },
  {
    category: "Databases",
    categoryIcon: "devicon-postgresql-plain colored",
    skills: [
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      {
        name: "MS SQL Server",
        icon: "devicon-microsoftsqlserver-plain colored",
      },
      { name: "DynamoDB", icon: "devicon-dynamodb-plain colored" },
      { name: "Prisma", icon: "devicon-prisma-original colored" },
      { name: "Redis", icon: "devicon-redis-plain colored" },
    ],
  },
  {
    category: "Tools & Methods",
    categoryIcon: "devicon-git-plain colored",
    skills: [
      { name: "VS Code", icon: "devicon-vscode-plain colored" },
      { name: "Visual Studio", icon: "devicon-visualstudio-plain colored" },
      { name: "Jira", icon: "devicon-jira-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
    ],
  },
];
