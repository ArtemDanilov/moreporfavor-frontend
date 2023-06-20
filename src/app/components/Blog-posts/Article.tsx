import { notFound } from "next/navigation";

import parse from "html-react-parser";
import { Category, fetchTravelBlogs } from "@/app/api/travels";
import Hero from "../hero/article/Hero";

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

  const [{ title, image, content }] = posts;
  const postContent = parse(content || "");

  return (
    <>
      <Hero image={image} title={title} />

      <div className="">
        <article>{postContent}</article>
      </div>
    </>
  );
};

export default Article;
