import { Metadata } from "next";

import Section from "../../components/Section";
import Hero from "../../components/hero/category/Hero";
import Collection from "../../helpers/collection";
import Pagination from "../../components/pagination/Pagination";
import BlogPosts from "../../components/blog_posts/BlogPosts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Wszystkie artykuły",
  description: "Artykuły wszystkich podkategorii",
};

const CategoryPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const currentPage = searchParams["page"] ?? "1";

  const collection = await Collection({
    collection: "articles",
    pagination: true,
    entriesPerPage: 9,
    currentPage: Number(currentPage),
  });

  if (!collection) {
    return (
      <>
        <Hero title="Wszystkie artykuły" />
        <p className="text-center">Coś poszło nie tak z pobraniem treści</p>
      </>
    );
  }

  const { totalPages } = collection?.attributes;

  return (
    <>
      <Hero title="Wszystkie artykuły" />

      {collection.entries.length > 0 && (
        <Section>
          <BlogPosts entries={collection.entries} />

          {totalPages && totalPages > 1 && <Pagination pages={totalPages} />}
        </Section>
      )}
    </>
  );
};

export default CategoryPage;
