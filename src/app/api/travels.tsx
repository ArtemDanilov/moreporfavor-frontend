import fetchData from "./api";

import { typeContentBuilder, typeGeneralData } from "../ts/types";
import { Category } from "../ts/enums";

const COLLECTION = "travels";

export const fetchAllPosts: () => Promise<typeGeneralData[]> = async () =>
  fetchData(COLLECTION, {
    populate: {
      travel_category: {
        fields: ["title", "slug"],
      },
      image: "*",
    },
  });

export const fetchPostsByCategory: (
  category: Category
) => Promise<typeGeneralData[]> = async (category) =>
  fetchData(COLLECTION, {
    populate: {
      travel_category: {
        fields: ["title", "slug"],
      },
      image: "*",
    },
    filters: {
      travel_category: {
        slug: {
          $eq: category,
        },
      },
    },
  });

export const fetchPostContentBuilder: (
  slug: string
) => Promise<typeContentBuilder[]> = async (slug) =>
  fetchData(COLLECTION, {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      image: "*",
      content_builder: {
        populate: "*",
      },
    },
  });
