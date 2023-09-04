import { paginate } from "@/app/helpers/pagination";

import { sortASC, sortDESC } from "@/app/helpers/sortUtilities";
import { Meta } from "@/app/ts/types";

import { getAllEntries } from "./getEntries";

type Props = {
  collection: string;
  direction?: "vertical" | "horizontal";
  tagsCategory?: string;
  tagName?: string;
  sort?: "asc" | "desc";
  count?: {
    from: number;
    to?: number;
  };
  pagination?: boolean;
  entriesPerPage?: number;
  currentPage?: number | string;
};

const Collection = async ({
  collection,
  tagsCategory,
  tagName,
  sort = "desc",
  count = { from: 0 },
  pagination = false,
  entriesPerPage = 8,
  currentPage = 1,
}: Props) => {
  const entries = await getAllEntries(`collections/${collection}`);

  const filteredPostsByCategory =
    tagsCategory && tagName
      ? entries.filter((post) => post[tagsCategory] === tagName)
      : entries;

  let filteredPosts: Meta[] = filteredPostsByCategory;

  if (sort === "desc") {
    filteredPosts = sortDESC(filteredPosts).slice(count.from, count.to);
  } else if (sort === "asc") {
    filteredPosts = sortASC(filteredPosts).slice(count.from, count.to);
  } else if (count) {
    filteredPosts = filteredPosts.slice(count.from, count.to);
  }

  const paginatedPosts = paginate(
    filteredPosts,
    Number(currentPage),
    entriesPerPage
  );

  const totalPages = Math.ceil(filteredPosts.length / entriesPerPage);

  const finalPosts = pagination ? paginatedPosts : filteredPosts;

  return {
    entries: finalPosts,
    attributes: {
      count: finalPosts.length,
      totalPages: totalPages,
    },
  };
};

export default Collection;
