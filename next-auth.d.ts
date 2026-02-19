declare global {
  interface Project {
    id: number;
    title: string;
    image: string;
    short_desc: string;
    description: string;
    features: string[];
    stack: TechStack[];
    live: string;
    github: string;
  }

  interface TechStack {
    name: string;
    icon: ReactNode;
    color: string;
    bg: string;
  }

}

export {};
