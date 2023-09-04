import { getAllEntries, getEntry } from "@/app/helpers/getEntries";

import Article from "@/app/components/blog_posts/Article";
import NotFound from "@/app/not-found";

type Props = {
  params: {
    category: string;
    country: string;
    slug: string;
  };
};

export const generateStaticParams = async () => {
  const entries = await getAllEntries("collections/articles");

  return entries.map((obj) => ({
    country: obj.countries,
    category: obj.category,
    slug: obj.slug,
  }));
};

const ArticleDetails = async ({ params }: Props) => {
  const entry = await getEntry("collections/articles", params.slug);

  if (!entry) {
    return <NotFound />;
  }

  return <Article post={entry} />;
};

export default ArticleDetails;
