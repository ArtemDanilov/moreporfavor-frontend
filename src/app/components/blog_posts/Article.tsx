import dynamic from "next/dynamic";

import { Entry } from "@/app/ts/types";

import Hero from "@/app/components/hero/article/Hero";
import Section from "@/app/components/Section";
import TableOfContents from "@/app/components/blog_posts/TableOfContents";
import OtherPosts from "@/app/components/blog_posts/OtherPosts";

import "./style.scss";

const Lightbox = dynamic(() => import("../lightbox/Lightbox"), { ssr: false });

const Article = ({ post }: { post: Entry }) => {
  const { meta, content } = post;

  return (
    <>
      <Hero image={meta.image} title={meta.title} />

      <div className="mt-40">
        <Section className="lg:flex flex-row-reverse gap-x-8">
          <div className="relative lg:flex-[30%] lg:max-w-xs-2">
            <TableOfContents content={content} />
          </div>
          <div className="max-w-2xl lg:flex-[70%] lg:max-w-3xl">
            <article className="prose mb-5 last:mb-0 md:prose-md">
              {content}
            </article>
          </div>
        </Section>

        {/* <OtherPosts
          title="Zobacz inne artykuły"
          id={21}
          className="lg:max-w-3xl lg:mr-[32%] lg:ml-auto 2xl:mr-[28%]"
        /> */}

        <Lightbox />
      </div>
    </>
  );
};

export default Article;
