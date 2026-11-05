export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  problemSolved: string;
  features: string[];
  technologies: string[];
  liveUrl: string;
  githubUrl?: string; // Optional if no repo exists
  category: 'Full-Stack' | 'AI & Security' | 'Machine Learning' | 'Data Analytics';
  featuredImageAlt: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: {
    name: string;
    level?: string;
    icon?: string;
  }[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  grade: string;
  gradeType: 'CGPA' | 'Percentage';
  location: string;
  description?: string;
  highlights?: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  badgeType: 'RPA' | 'AWS';
  description: string;
  skillsAcquired: string[];
}
