import { notFound } from "next/navigation";

import { fetchPostsByCategory } from "../api/travels";
import { Category } from "@/app/ts/enums";

import Section from "../components/Section";
import Hero from "../components/hero/category/Hero";
import BlogPosts from "../components/blog_posts/BlogPosts";
import Pagination from "../components/pagination/Pagination";
import { typeFrame } from "../ts/types";

const postsLimit = 9;

type Props = {
  title: string;
  category: Category;
  currentPage: string | string[] | undefined;
  titleFrame?: typeFrame;
};

const CategoryPage = async ({
  title,
  category,
  currentPage,
  titleFrame,
}: Props) => {
  const page = typeof currentPage === "string" ? Number(currentPage) : 1;

  const posts = await fetchPostsByCategory(category, page, postsLimit);
  const { pageCount } = posts.meta.pagination;

  // if (!posts.data.length) {
  //   return notFound();
  // }

  return (
    <>
      <Hero title={title} frame={titleFrame} />

      <Section>
        <BlogPosts posts={posts.data} />

        {pageCount > 1 && (
          <Pagination
            category={category}
            currentPage={page}
            totalPages={pageCount}
          />
        )}
      </Section>
    </>
  );
};

export default CategoryPage;
