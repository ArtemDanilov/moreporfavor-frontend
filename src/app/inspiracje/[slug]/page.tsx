import { Category, fetchTravelBlogs } from "@/app/api/travels";
import Article from "@/app/components/blog-posts/Article";

export const generateStaticParams = async () => {
  const posts = await fetchTravelBlogs(Category.inspirations);

  return posts.map((post) => ({
    slug: post.slug,
  }));
};

const ArticleDetails = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      {/* Typescript error with handling async server components */}
      <Article slug={params.slug} category={Category.inspirations} />
    </>
  );
};

export default ArticleDetails;
