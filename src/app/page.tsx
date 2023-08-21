import "./style.scss";

import { getAllEntries, getEntriesById, getEntry } from "./helpers/getEntries";

import { Article } from "./ts/types";

import Hero from "./components/hero/homepage/Hero";
import About from "./components/sections/About";
import Section from "./components/Section";
import BlogPosts from "./components/blog_posts/BlogPosts";

const Home = async () => {
  const allPosts = await getAllEntries("collections/articles");
  const homepage = await getEntry("pages", "homepage");
  const heroEntries = await getEntriesById(
    "articles",
    homepage?.meta.hero.entries
  );

  return (
    <>
      <Hero entries={heroEntries} />

      <div className="xl:container xl:flex xl:flex-row-reverse xl:justify-center xl:gap-x-4">
        <aside className="sidebar space-y-8 mb-8 md:mb-12 xl:flex-[30%] xl:mb-0 xl:max-w-xs-2">
          {/* <Section heading={homepageData.author_title}>
            <About
              image={homepageData.author_image}
              text={homepageData.bio}
              className="sm:flex sm:items-center sm:space-x-5 sm:max-w-[37.75rem] sm:text-left xl:block xl:space-x-0 xl:text-center"
            />
          </Section> */}
        </aside>

        <div className="main-content xl:flex-[70%]">
          <Section heading="Ostatnio dodane artykuły">
            <BlogPosts
              posts={allPosts as Article[]}
              count={{ from: 0, to: 2 }}
            />
          </Section>
          <Section heading="Pozostałe artykuły">
            <BlogPosts posts={allPosts as Article[]} count={{ from: 2 }} />
          </Section>
        </div>
      </div>
    </>
  );
};

export default Home;
