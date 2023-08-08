import { fetchPostsByCategory } from "../api/travels";
import { Category } from "@/app/ts/enums";

import Section from "../components/Section";
import Hero from "../components/hero/category/Hero";
import BlogPosts from "../components/blog_posts/BlogPosts";

const Polska = async () => {
  const posts = await fetchPostsByCategory(Category.poland);

  return (
    <>
      <Hero title="Polska" frame="polish-folklor" />

      <Section>
        <BlogPosts posts={posts} />
      </Section>
    </>
  );
};

export default Polska;
