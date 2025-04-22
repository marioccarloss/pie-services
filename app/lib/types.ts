export interface Feature {
  id: number;
  title: string;
  description: string;
  color: string;
}

export interface ServicesData {
  title: string;
  subtitle: string;
  description: string;
  expertImage: {
    src: string;
    alt: string;
  };
  features: Feature[];
}
