import { typeFrame } from "../ts/types";

import Section from "../components/Section";
import Hero from "../components/hero/category/Hero";
import Collection from "../helpers/collection";
import Pagination from "./pagination/Pagination";
import BlogPosts from "./blog_posts/BlogPosts";

type Props = {
  title: string | undefined;
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
  currentPage = "1",
}: Props) => {
  const collection = await Collection({
    collection: "articles",
    tagsCategory: tagsCategory,
    tagName: tagName,
    pagination: true,
    entriesPerPage: 2,
    currentPage: Number(currentPage),
  });
  const { totalPages } = collection.attributes;

  return (
    <>
      <Hero title={title} frame={titleFrame} />

      <Section>
        <BlogPosts entries={collection.entries} />

        {totalPages > 1 && <Pagination pages={totalPages} />}
      </Section>
    </>
  );
};

export default CategoryPage;
