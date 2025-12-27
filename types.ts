import { LucideIcon } from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  deliverables: string[];
}

export interface Project {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  date: string;
  outcome: string;
  challenge: string;
  solution: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  status: 'Active' | 'In Progress' | 'Planned';
}
