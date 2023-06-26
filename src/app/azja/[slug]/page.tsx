import { fetchPostsByCategory } from "@/app/api/travels";
import { Category } from "@/app/ts/enums";

import Article from "@/app/components/blog-posts/Article";

export const generateStaticParams = async () => {
  const posts = await fetchPostsByCategory(Category.asia);

  return posts.map(({ attributes }) => ({
    slug: attributes.slug,
  }));
};

const ArticleDetails = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      {/* Typescript error with handling async server components */}
      <Article slug={params.slug} />
    </>
  );
};

export default ArticleDetails;
