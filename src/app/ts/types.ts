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

export type typeImage = {
  data: {
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
  };
};

export type Block = {
  id: number;
  __component: string;
  title?: string;
  content?: string;
  images?: typeImage;
};

type BlogPostAttr = {
  title: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  short_description: string;
  image: typeImage;
};

export type typeContentBuilder = {
  id: number;
  attributes: BlogPostAttr & {
    content_builder: {
      id: number;
      __component: string;
      title?: string;
      content?: string;
      images?: typeImage;
    }[];
  };
};

export type typeGeneralData = {
  id: number;
  attributes: BlogPostAttr & {
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
};
