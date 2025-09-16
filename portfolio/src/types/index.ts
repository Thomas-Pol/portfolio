// Static data types for portfolio

export interface Project {
  id: string;
  projectName: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  linkGitHub: string;
  linkLive: string;
}

export interface AboutMe {
  naam: string;
  age: number;
  bio: string;
  profession: string;
  email: string;
  profilePicture: {
    url: string;
    alt: string;
  };
  location: string;
}