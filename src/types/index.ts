export interface ExperienceItem {
  title: string;
  subtitle: string;
  date: string;
  side: "left" | "right";
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
}

export interface Certification {
  name: string;
  image: string;
  link: string;
}
