import Hero from "./components/hero/homepage/Hero";
import About from "./components/sections/About";

import Section from "./components/Section";
import BlogPosts from "./components/blog-posts/BlogPosts";
import { fetchAllPosts } from "./api/travels";

const Home = async () => {
  const allPosts = await fetchAllPosts();

  return (
    <main className="">
      <Hero entries={allPosts} />

      <Section heading="Krótko o mnie">
        <About
          img="/assets/me.jpg"
          text="Lorem ipsum dolor sit amet consectetur. Blandit euismod cras orci enim gravida tellus ultricies tincidunt. Sit felis in vitae eu augue pretium nunc. Aliquam elit vitae congue aenean. Proin arcu vulputate sem purus morbi urna. Pulvinar suspendisse eget amet in id in aliquet."
          className="sm:flex sm:items-center sm:space-x-5 sm:max-w-[37.75rem] sm:text-left"
        />
      </Section>

      <Section heading="Najnowsze artykuły">
        <BlogPosts posts={allPosts} />
      </Section>
    </main>
  );
};

export default Home;
