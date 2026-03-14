export interface ExperienceItem {
  title: string;
  subtitle: string;
  date: string;
  side: "left" | "right";
  badge?: string;
  logo?: string;
  bullets?: string[];
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillGroup {
  category: string;
  categoryIcon: string;
  skills: SkillItem[];
}

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  linkLabel: string;
  stack: string[];
  impact: string;
}

export interface Certification {
  name: string;
  image: string;
  link: string;
}
