import { Article, typeFrame } from "../ts/types";

import Section from "../components/Section";
import Hero from "../components/hero/category/Hero";
import BlogPosts from "../components/blog_posts/BlogPosts";
import Pagination from "../components/pagination/Pagination";
import { getAllEntries } from "../helpers/getEntries";

const postsLimit = 9;

type Props = {
  title: string;
  tagsCategory: string;
  tagName: string;
  currentPage: string | string[] | undefined;
  titleFrame?: typeFrame;
};

const CategoryPage = async ({
  title,
  tagsCategory,
  tagName,
  currentPage,
  titleFrame,
}: Props) => {
  const page = typeof currentPage === "string" ? Number(currentPage) : 1;
  const posts = await getAllEntries("collections/articles");

  return (
    <>
      <Hero title={title} frame={titleFrame} />

      <Section>
        <BlogPosts
          posts={posts as Article[]}
          tagsCategory={tagsCategory}
          tagName={tagName}
        />

        {/* {pageCount > 1 && (
          <Pagination
            category={category}
            currentPage={page}
            totalPages={pageCount}
          />
        )} */}
      </Section>
    </>
  );
};

export default CategoryPage;
