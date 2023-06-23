import { notFound } from "next/navigation";

import Blocks from "../Blocks";

import { Category, fetchTravelBlogs } from "@/app/api/travels";
import Hero from "../hero/article/Hero";
import ArticleNavigation from "./ArticleNavigation";
import Section from "../Section";

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

  const [{ title, image, content_builder }] = posts;
  const sectionTitles = content_builder.map((el) => (el.title ? el.title : ""));

  return (
    <>
      <Hero image={image} title={title} />

      <Section className="lg:flex flex-row-reverse gap-x-8">
        <div className="relative lg:flex-[30%] lg:max-w-xs-2">
          <ArticleNavigation titles={sectionTitles} />
        </div>
        <article className="max-w-2xl lg:flex-[70%] lg:max-w-3xl">
          {content_builder.map(Blocks)}
        </article>
      </Section>
    </>
  );
};

export default Article;
