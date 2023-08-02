import "./style.scss";

import Hero from "./components/hero/homepage/Hero";
import About from "./components/sections/About";

import Section from "./components/Section";
import BlogPosts from "./components/blog_posts/BlogPosts";
import { fetchAllPosts } from "./api/travels";

const Home = async () => {
  const allPosts = await fetchAllPosts();

  return (
    <>
      <Hero entries={allPosts} />

      <div className="xl:flex xl:flex-row-reverse xl:justify-center xl:gap-x-4">
        <aside className="space-y-8 mb-8 md:mb-12 xl:flex-[30%] xl:mb-0 xl:max-w-xs-2">
          <Section heading="Krótko o mnie">
            <About
              img="/assets/me.jpg"
              text="Lorem ipsum dolor sit amet consectetur. Blandit euismod cras orci enim gravida tellus ultricies tincidunt. Sit felis in vitae eu augue pretium nunc. Aliquam elit vitae congue aenean. Proin arcu vulputate sem purus morbi urna. Pulvinar suspendisse eget amet in id in aliquet."
              className="sm:flex sm:items-center sm:space-x-5 sm:max-w-[37.75rem] sm:text-left xl:block xl:space-x-0 xl:text-center"
            />
          </Section>
        </aside>

        <div className="xl:flex-[70%] max-w-5xl">
          <Section heading="Najnowsze artykuły">
            <BlogPosts posts={allPosts} />
          </Section>
        </div>
      </div>
    </>
  );
};

export default Home;
