export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink: string;
  codeLink: string;
}

export interface SocialLink {
  name: string;
  icon: string;
  url: string;
}

export interface VolunteerRole {
  id: number;
  title: string;
  organization: string;
  description: string;
  duration: string;
}

export interface Partnership {
  id: number;
  organization: string;
  type: string;
  logo: string;
  description: string;
  outcomes: string[];
}