export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
    image: string;
    githubUrl: string;
    demoUrl: string;
  }
  
  export interface Skill {
    name: string;
    icon: string;
    level: number;
  }