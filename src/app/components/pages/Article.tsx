import { getEntry } from "@/app/helpers/getEntries";
import NotFound from "@/app/not-found";
import Article from "../blog_posts/Article";

const ArticlePage = async ({ slug }: { slug: string }) => {
  const entry = await getEntry("collections/articles", slug);

  if (!entry) {
    return <NotFound />;
  }

  return <Article post={entry} />;
};

export default ArticlePage;
