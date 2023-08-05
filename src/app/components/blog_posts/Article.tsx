import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import extractTagsContent from "@/app/helpers/extractTagsContent";

import { fetchPostContentBuilder } from "@/app/api/travels";
import Hero from "../hero/article/Hero";
import ArticleNavigation from "./ArticleNavigation";
import OtherPosts from "./OtherPosts";
import Section from "../Section";
import Blocks from "../Blocks";

import "./style.scss";

const Lightbox = dynamic(() => import("../lightbox/Lightbox"), { ssr: false });

const Article = async ({ slug }: { slug: string }) => {
  const [post] = await fetchPostContentBuilder(slug);

  if (!post) {
    return notFound();
  }

  const { id, attributes } = post;

  const content = attributes.content_builder;

  const article = content.map((el) => el.content || "");
  const titles = article.map((el) => extractTagsContent(el)).flat();

  return (
    <>
      <Hero image={attributes.image} title={attributes.title} />

      {content.length !== 0 && (
        <Section className="lg:flex flex-row-reverse gap-x-8">
          <div className="relative lg:flex-[30%] lg:max-w-xs-2">
            <ArticleNavigation titles={titles} />
          </div>
          <div className="max-w-2xl lg:flex-[70%] lg:max-w-3xl">
            <article>{content.map(Blocks)}</article>
          </div>
        </Section>
      )}

      <OtherPosts
        title="Zobacz inne artykuły"
        id={id}
        className="lg:max-w-3xl lg:mr-[32%] lg:ml-auto 2xl:mr-[28%]"
      />

      <Lightbox />
    </>
  );
};

export default Article;
