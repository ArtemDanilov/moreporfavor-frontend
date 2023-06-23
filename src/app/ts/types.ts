export type Links = {
  id: number;
  title: string;
  url: string;
}[];

export type ImageFromat = {
  name: string;
  hash: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
};

export type typeImage = {
  id: number;
  name: string;
  url: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  size: number;
  formats: {
    thumbnail: ImageFromat;
    small: ImageFromat;
    medium: ImageFromat;
    large: ImageFromat;
  };
};

export type Block = {
  id: number;
  __component: string;
  title?: string;
  content?: string;
};

export type BlogEntries = {
  id: number;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  content_builder: Block[];
  short_description: string;
  travel_category: {
    title: string;
    slug: string;
  };
  image: typeImage;
};
