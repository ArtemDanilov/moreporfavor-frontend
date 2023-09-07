import { typeFrame } from "../ts/types";

import Section from "./Section";
import Hero from "./hero/category/Hero";
import Collection from "../helpers/collection";
import Pagination from "./pagination/Pagination";
import BlogPosts from "./blog_posts/BlogPosts";

type Props = {
  title: string | undefined;
  tagsCategory: string;
  tagName: string;
  currentPage?: string | string[] | undefined;
  titleFrame?: typeFrame;
  url?: string;
};

const Category = async ({
  title,
  tagsCategory,
  tagName,
  titleFrame,
  currentPage = "1",
  url,
}: Props) => {
  const collection = await Collection({
    collection: "articles",
    tagsCategory: tagsCategory,
    tagName: tagName,
    pagination: true,
    entriesPerPage: 2,
    currentPage: Number(currentPage),
  });

  if (!collection) {
    return (
      <>
        <Hero title={title} frame={titleFrame} />
        <p className="text-center">Coś poszło nie tak z pobraniem treści</p>
      </>
    );
  }

  const { totalPages } = collection?.attributes;

  return (
    <>
      <Hero title={title} frame={titleFrame} />

      <Section>
        <BlogPosts entries={collection.entries} />

        {totalPages > 1 && <Pagination path={tagName} pages={totalPages} />}
      </Section>
    </>
  );
};

export default Category;
