export interface Team {
  id: string;
  name: string;
  description: string;
  logo: string;
  website: string;
  tags: string[];
  location: string;
  size: string;
  founder: {
    name: string;
    avatar: string;
  };
  socials: {
    twitter?: string;
    github?: string;
    website?: string;
  };
  news: {
    title: string;
    url: string;
    date: string;
  }[];
}

export interface Individual {
  id: string;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  coverImage?: string;
  tags: string[];
  age?: number;
  location: string;
  projects: {
    name: string;
    url?: string;
    description: string;
  }[];
  socials: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

export type ViewMode = 'teams' | 'individuals';