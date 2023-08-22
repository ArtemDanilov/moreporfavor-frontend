"use client";

import { useSearchParams } from "next/navigation";
import { paginate } from "@/app/helpers/pagination";

import { sortASC, sortDESC } from "@/app/helpers/sortUtilities";
import { Article, Meta } from "@/app/ts/types";

import BlogPost from "./BlogPost";
import Pagination from "../pagination/Pagination";

type Props = {
  posts: Article[];
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
};

const BlogPosts = ({
  posts,
  direction = "vertical",
  tagsCategory,
  tagName,
  sort = "desc",
  count = { from: 0 },
  pagination = false,
  entriesPerPage = 8,
}: Props) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;

  const horizontal = direction === "horizontal";

  const filteredPostsByCategory =
    tagsCategory && tagName
      ? posts.filter((post) => post[tagsCategory]?.slug === tagName)
      : posts;

  let filteredPosts: Meta[] = filteredPostsByCategory;

  if (sort === "desc") {
    filteredPosts = sortDESC(filteredPosts).slice(count.from, count.to);
  } else if (sort === "asc") {
    filteredPosts = sortASC(filteredPosts).slice(count.from, count.to);
  } else if (count) {
    filteredPosts = filteredPosts.slice(count.from, count.to);
  }

  const paginatedPosts = paginate(filteredPosts, currentPage, entriesPerPage);

  const totalPages = Math.ceil(filteredPosts.length / entriesPerPage);

  const finalPosts = pagination ? paginatedPosts : filteredPosts;

  return (
    <>
      <ul
        className={`flex flex-wrap gap-6 ${
          horizontal ? "md:flex-nowrap md:flex-col" : "justify-center"
        }`}
      >
        {finalPosts.map((post) => {
          const {
            id,
            title,
            image,
            publishedAt,
            short_description,
            slug,
            category,
          } = post;

          return (
            <li key={id}>
              <BlogPost
                title={title}
                image={image}
                link={`/${category.slug}/${slug}`}
                category={category}
                publishDate={publishedAt}
                description={short_description}
                direction={direction}
              />
            </li>
          );
        })}
      </ul>

      {pagination && totalPages > 1 && (
        <Pagination pages={totalPages} currentPage={currentPage} />
      )}
    </>
  );
};

export default BlogPosts;
