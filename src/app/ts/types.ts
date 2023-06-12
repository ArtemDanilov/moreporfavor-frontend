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

export type BlogEntries = {
  id: number;
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  content: string | null;
  short_description: string;
  travel_category: {
    title: string;
    slug: string;
  };
  image: {
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
};
