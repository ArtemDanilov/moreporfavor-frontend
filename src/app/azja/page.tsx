import { fetchPostsByCategory } from "../api/travels";
import { Category } from "@/app/ts/enums";

import Section from "../components/Section";
import Hero from "../components/hero/category/Hero";
import BlogPosts from "../components/blog_posts/BlogPosts";

const Azja = async () => {
  const posts = await fetchPostsByCategory(Category.asia);

  return (
    <>
      <Hero title="Azja" frame="oriental" />

      <Section>
        <BlogPosts posts={posts} />
      </Section>
    </>
  );
};

export default Azja;
