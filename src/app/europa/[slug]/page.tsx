import { Category, fetchTravelBlogs } from "@/app/api/travels";
import Article from "@/app/components/Blog-posts/Article";

export const generateStaticParams = async () => {
  const posts = await fetchTravelBlogs(Category.europe);

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const ArticleDetails = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      {/* Typescript error with handling async server components */}
      <Article slug={params.slug} category={Category.europe} />
    </>
  );
};

export default ArticleDetails;
