import dynamic from "next/dynamic";
import { notFound } from "next/navigation";

import { fetchPostContentBuilder } from "@/app/api/travels";
import Hero from "../hero/article/Hero";
import ArticleNavigation from "./ArticleNavigation";
import Section from "../Section";
import Blocks from "../Blocks";

import { typeBlock } from "@/app/ts/types";

import "./style.scss";

const Lightbox = dynamic(() => import("../lightbox/Lightbox"), { ssr: false });

const Article = async ({ slug }: { slug: string }) => {
  const [post] = await fetchPostContentBuilder(slug);

  if (!post) {
    return notFound();
  }

  const { attributes } = post;

  const content = attributes.content_builder;
  const sectionTitles: string[] = content
    .map((el: typeBlock) => el.title || "")
    .filter((title: string) => title !== "");

  return (
    <>
      <Hero image={attributes.image} title={attributes.title} />

      <Section className="lg:flex flex-row-reverse gap-x-8">
        <div className="relative lg:flex-[30%] lg:max-w-xs-2">
          <ArticleNavigation titles={sectionTitles} />
        </div>
        <article className="max-w-2xl mb-8 md:mb-12 lg:flex-[70%] lg:max-w-3xl">
          {content.map(Blocks)}
        </article>
      </Section>

      <Lightbox />
    </>
  );
};

export default Article;
