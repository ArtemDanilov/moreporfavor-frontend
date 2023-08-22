import { Article, typeFrame } from "../ts/types";

import Section from "../components/Section";
import Hero from "../components/hero/category/Hero";
import BlogPosts from "../components/blog_posts/BlogPosts";
import { getAllEntries } from "../helpers/getEntries";

type Props = {
  title: string;
  tagsCategory: string;
  tagName: string;
  currentPage?: string | string[] | undefined;
  titleFrame?: typeFrame;
};

const CategoryPage = async ({
  title,
  tagsCategory,
  tagName,
  titleFrame,
}: Props) => {
  const posts = await getAllEntries("collections/articles");

  return (
    <>
      <Hero title={title} frame={titleFrame} />

      <Section>
        <BlogPosts
          posts={posts as Article[]}
          tagsCategory={tagsCategory}
          tagName={tagName}
          pagination={true}
          entriesPerPage={9}
        />
      </Section>
    </>
  );
};

export default CategoryPage;
