import { fetchPostsByCategory } from "../api/travels";
import { Category } from "@/app/ts/enums";

import Section from "../components/Section";
import Hero from "../components/hero/category/Hero";
import BlogPosts from "../components/blog_posts/BlogPosts";

const Europa = async () => {
  const posts = await fetchPostsByCategory(Category.europe);

  return (
    <>
      <Hero title="Europa" frame="vintage" />

      <Section>
        <BlogPosts posts={posts} />
      </Section>
    </>
  );
};

export default Europa;
