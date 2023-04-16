export interface Project {
  _id: string;
  title: string;
  slug: string;
  mainImage: string;
  mobileImage: string;
  description: string;
  tech: Tech[];
}

export interface Tech {
  _id: string;
  title: string;
  experience: string;
  slug: string;
}
