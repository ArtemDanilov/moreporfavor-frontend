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

      <Section className="lg:flex flex-row-reverse gap-x-8">
        <div className="relative lg:flex-[30%] lg:max-w-xs-2">
          <ArticleNavigation titles={titles} />
        </div>
        <div className="max-w-2xl mb-8 md:mb-12 lg:flex-[70%] lg:max-w-3xl">
          <article className="mb-8 md:mb-12">{content.map(Blocks)}</article>

          <section>
            <h2 className="fonst-sans text-2xl font-bold text-green mb-5 md:text-4xl">
              Zobacz inne artykuły
            </h2>
            <OtherPosts id={id} />
          </section>
        </div>
      </Section>

      <Lightbox />
    </>
  );
};

export default Article;
