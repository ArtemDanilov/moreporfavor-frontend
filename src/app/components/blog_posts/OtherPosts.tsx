import React from "react";
import { fetchOtherPosts } from "@/app/api/travels";

import BlogPosts from "./BlogPosts";
import Section from "../Section";

type Props = {
  id: number;
  title: string;
  className?: string;
};

const OtherPosts = async ({ id, title, className }: Props) => {
  const fetchPosts = await fetchOtherPosts(id);
  const { attributes } = fetchPosts;

  const otherPosts = attributes.other_articles.data;

  return (
    <>
      {otherPosts && (
        <Section>
          <div className={className}>
            {title && (
              <h2 className="fonst-sans text-2xl font-bold text-green mb-5 md:text-4xl">
                {title}
              </h2>
            )}
            <BlogPosts posts={otherPosts} direction="horizontal" />
          </div>
        </Section>
      )}
    </>
  );
};

export default OtherPosts;
