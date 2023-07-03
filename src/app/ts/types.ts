export type typeLink = {
  id: number;
  attributes: {
    link_name: string;
    link_url: string;
  };
};

export type ImageFormat = {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  url: string;
};

export interface ImageData {
  id: number;
  attributes: {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
      thumbnail: ImageFormat;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: string | null;
    createdAt: string;
    updatedAt: string;
  };
}

export type singleImage = {
  data: ImageData;
};

export type multipleImages = {
  data: ImageData[];
};

export type TravelCategory = {
  travel_category: {
    data: {
      id: number;
      attributes: {
        slug: string;
        title: string;
      };
    };
  };
};

export type typeBlock = {
  id: number;
  __component: string;
  title?: string;
  content?: string;
  images?: singleImage;
};

type BlogPostAttr = {
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  short_description: string;
  image: singleImage;
};

export type typeContentBuilder = {
  id: number;
  attributes: BlogPostAttr & {
    content_builder: {
      id: number;
      __component: string;
      title?: string;
      content?: string;
      images?: singleImage;
    }[];
  };
};

export type typeGeneralData = {
  id: number;
  attributes: BlogPostAttr & TravelCategory;
};

export type OtherPosts = {
  id: number;
  attributes: BlogPostAttr & {
    other_articles: {
      data: typeGeneralData[];
    };
  };
};
