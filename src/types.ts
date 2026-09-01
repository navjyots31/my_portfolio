export interface NavItem {
  name: string;
  href: string;
}

export type SkillLevel = 'Beginner' | 'Learner' | 'Foundational' | 'Practicing';

export type SkillCategory = 'Languages' | 'AI & Core Concepts' | 'Tools & Foundations';

export interface Skill {
  id: string;
  name: string;
  category: SkillCategory;
  level: SkillLevel;
  description: string;
  highlight: string;
  icon: string;
  accentColor: string;
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveDemoUrl: string;
  features: string[];
  status: string;
  gradient: string;
  demoType: 'water-quality' | 'ai-classification' | 'algorithm-visualizer';
}

export interface EducationInfo {
  degree: string;
  institution: string;
  period: string;
  location: string;
  currentStatus: string;
  keyCoursework: string[];
  academicFocus: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
