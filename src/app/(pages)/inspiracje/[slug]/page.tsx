import notFound from "@/app/not-found";

import { getAllEntries, getEntry } from "@/app/helpers/getEntries";

import Article from "@/app/components/blog_posts/Article";

export const generateStaticParams = async () => {
  const entries = await getAllEntries("collections/articles");
  const entriesByCategory = entries.filter(
    (entry) => entry.category.slug === "inspiracje"
  );

  return entriesByCategory.map((entry) => ({
    slug: entry.slug,
  }));
};

const ArticleDetails = async ({ params }: { params: { slug: string } }) => {
  const entry = await getEntry("collections/articles", params.slug);

  if (!entry) {
    return notFound();
  }

  return <Article post={entry} />;
};

export default ArticleDetails;
