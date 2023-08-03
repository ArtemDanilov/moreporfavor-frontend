import fetchData from "./api";

import { typeHomepage } from "../ts/types";

const COLLECTION = "homepage";

export const fetchHomepage: () => Promise<typeHomepage> = async () =>
  fetchData(COLLECTION, {
    populate: {
      author_image: "*",
      promo_travels: {
        fields: ["title", "slug", "author_title", "bio"],
        populate: {
          image: "*",
          travel_category: {
            fields: ["title", "slug"],
          },
        },
      },
    },
  });
