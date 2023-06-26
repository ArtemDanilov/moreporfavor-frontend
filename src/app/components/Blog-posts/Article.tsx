import { notFound } from "next/navigation";

import Blocks from "../Blocks";

import { fetchPostContentBuilder } from "@/app/api/travels";
import Hero from "../hero/article/Hero";
import ArticleNavigation from "./ArticleNavigation";
import Section from "../Section";
import { Block } from "@/app/ts/types";

const Article = async ({ slug }: { slug: string }) => {
  const [post] = await fetchPostContentBuilder(slug);

  if (!post) {
    return notFound();
  }

  const { attributes } = post;

  const content = attributes.content_builder;
  const sectionTitles: string[] = content
    .map((el: Block) => el.title || "")
    .filter((title: string) => title !== "");

  return (
    <>
      <Hero image={attributes.image} title={attributes.title} />

      <Section className="lg:flex flex-row-reverse gap-x-8">
        <div className="relative lg:flex-[30%] lg:max-w-xs-2">
          <ArticleNavigation titles={sectionTitles} />
        </div>
        <article className="max-w-2xl lg:flex-[70%] lg:max-w-3xl">
          {content.map(Blocks)}
        </article>
      </Section>
    </>
  );
};

export default Article;
