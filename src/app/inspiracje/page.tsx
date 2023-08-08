import { fetchPostsByCategory } from "../api/travels";
import { Category } from "@/app/ts/enums";

import Section from "../components/Section";
import Hero from "../components/hero/category/Hero";
import BlogPosts from "../components/blog_posts/BlogPosts";

const Inspiracje = async () => {
  const posts = await fetchPostsByCategory(Category.inspirations);

  return (
    <>
      <Hero title="Inspiracje" frame="branches" />

      <Section>
        <BlogPosts posts={posts} />
      </Section>
    </>
  );
};

export default Inspiracje;
