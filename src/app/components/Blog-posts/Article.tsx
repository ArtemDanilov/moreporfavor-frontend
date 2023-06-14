import { notFound } from "next/navigation";

import parse from "html-react-parser";
import { Category, fetchTravelBlogs } from "@/app/api/travels";

type ArticleProps = {
  slug: string;
  category: Category;
};

const Article = async ({ slug, category }: ArticleProps) => {
  const posts = await fetchTravelBlogs(category);
  const post = posts.find((post) => post.slug === slug);

  if (!post) {
    return notFound();
  }

  const [{ title, content }] = posts;
  const postContent = parse(content || "");

  return (
    <div className="">
      <h1>{title}</h1>
      <article>{postContent}</article>
    </div>
  );
};

export default Article;
