type ImageFormat = {
  url: string;
};

type ImageFormats = {
  large: ImageFormat;
  small: ImageFormat;
  medium: ImageFormat;
  thumbnail: ImageFormat;
};

type ExpertImage = {
  id: number;
  url: string;
  formats: ImageFormats;
};

type Feature = {
  id: number;
  title: string;
  description: string;
  color: string;
};

type DescriptionContent = {
  text: string;
  type: string;
};

type DescriptionBlock = {
  type: string;
  children: DescriptionContent[];
};

type ServicesData = {
  id: number;
  documentId: string;
  title: string;
  subtitle: string;
  description: DescriptionBlock[];
  expertImage: ExpertImage[];
  feature: Feature[];
};

type StrapiResponse = {
  data: ServicesData;
  meta: Record<string, unknown>;
};

const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function getServicesData(): Promise<StrapiResponse> {
  if (!API_URL) {
    throw new Error("NEXT_PUBLIC_STRAPI_URL is not defined");
  }

  const response = await fetch(`${API_URL}/api/services-page?populate=*`);

  if (!response.ok) {
    throw new Error("Failed to fetch services data");
  }

  return response.json();
}

export type { ExpertImage, Feature, ServicesData, StrapiResponse };
