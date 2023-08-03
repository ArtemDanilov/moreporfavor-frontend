import fetchData from "./api";

import { typeLink } from "../ts/types";

const COLLECTION = "links";

export const fetchLinks: () => Promise<typeLink[]> = async () =>
  fetchData(COLLECTION, {
    fields: ["link_name", "link_url"],
  });
