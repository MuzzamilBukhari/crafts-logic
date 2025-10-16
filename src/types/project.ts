export interface Project {
  id: number;
  type: 'development' | 'graphics';
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  thumbnailUrl?: string;
  date: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  client: string;
  duration: string;
  color: string;
  platform?: string;
  platformUrl?: string;
}
