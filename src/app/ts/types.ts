export type typeFrame = "oriental" | "vintage" | "polish-folklor" | "branches";

export type Content = {
  $$typeof: Symbol;
  type: string;
  key: null;
  ref: null;
  props: {
    components?: [Object];
    children?: string;
  };
  _owner: null;
  _store: {};
};

export type Meta = {
  id: string;
  title: string;
  slug: string;
  [key: string]: any;
};

export type Entry = {
  meta: Meta;
  content: Content[];
};

export type Pagination = {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
};

export type TLink = {
  id: string;
  title: string;
  slug: string;
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
    formats?: {
      thumbnail: ImageFormat;
      small: ImageFormat;
      medium: ImageFormat;
      large: ImageFormat;
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
  data: {
    id: number;
    attributes: {
      slug: string;
      title: string;
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
  post_created: string;
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

export type typePost = {
  id: number;
  attributes: BlogPostAttr & {
    travel_category: TravelCategory;
  };
};

export type typePosts = {
  data: typePost[];
  meta: Pagination;
};

export type OtherPosts = {
  id: number;
  attributes: BlogPostAttr & {
    other_articles: {
      data: typePost[];
    };
  };
};

export type typePromoTravel = {
  id: number;
  attributes: {
    title: string;
    slug: string;
    image: singleImage;
    travel_category: TravelCategory;
  };
};

export type typeHomepage = {
  id: number;
  attributes: {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    author_title: string;
    author_image: singleImage;
    bio: string;
    promo_travels: {
      data: typePromoTravel[];
    };
  };
};
