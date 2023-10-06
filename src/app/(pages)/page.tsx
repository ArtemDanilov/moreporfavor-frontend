import { Metadata } from "next";

import { getEntriesById, getEntry } from "../helpers/getEntries";
import InstagramFeed from "../helpers/fetchInstagram";

import Hero from "../components/hero/homepage/Hero";
import About from "../components/sections/About";
import Section from "../components/Section";
import BlogPosts from "../components/blog_posts/BlogPosts";
import SocialMedia from "../components/SocialMedia";
import InstagramPost from "../components/instagram/InstagramPost";
import Collection from "../helpers/collection";
import Wrapper from "../Wrapper";
import Button from "../components/Button/Button";

import "./style.scss";

export const metadata: Metadata = {
  title: "Moreporfavor",
  description:
    "Blog, w którym znajdziesz ciekawe miejsca do odwiedzenia, dobre restauracje, porady i wiele innych rzeczy",
};

const Instagram = async () => {
  const instagramFeed = await InstagramFeed();

  if (!instagramFeed) {
    return <></>;
  }

  const instagramLastPost = instagramFeed.data[0];

  return (
    <Section heading="Ostatni post">
      <InstagramPost post={instagramLastPost} />
    </Section>
  );
};

const Home = async () => {
  const lastPosts = await Collection({
    collection: "articles",
    count: { from: 0, to: 2 },
  });
  const restPosts = await Collection({
    collection: "articles",
    count: { from: 2, to: 8 },
  });
  const homepage = await getEntry("pages", "homepage");
  const heroEntries = await getEntriesById(
    "articles",
    homepage?.meta.hero.entries
  );

  return (
    <Wrapper>
      <>
        {heroEntries && <Hero entries={heroEntries} />}

        <div className="xl:container xl:flex xl:flex-row-reverse xl:justify-center xl:gap-x-4">
          <aside className="sidebar space-y-8 mb-8 md:mb-12 xl:flex-[30%] xl:mb-0 xl:max-w-xs-2">
            <Section heading="O mnie">
              <About
                image={homepage?.meta.profile_image}
                text={homepage?.meta.bio}
                className="sm:flex sm:items-center sm:space-x-5 sm:max-w-[37.75rem] sm:text-left xl:block xl:space-x-0 xl:text-center"
              />
            </Section>
            <Section heading="Social Media">
              <SocialMedia className="flex justify-center items-center space-x-4 text-mocha text-base pb-2" />
            </Section>
            <Instagram />
          </aside>

          <div className="main-content xl:flex-[70%]">
            {lastPosts && (
              <Section heading="Ostatnio dodane artykuły">
                <BlogPosts entries={lastPosts.entries} />
              </Section>
            )}
            {restPosts && (
              <Section heading="Pozostałe artykuły">
                <BlogPosts entries={restPosts.entries} />
                <Button
                  href="/wszystkie-artykuly"
                  label="Zobacz wszystkie"
                  className="mt-8 mx-auto"
                />
              </Section>
            )}
          </div>
        </div>
      </>
    </Wrapper>
  );
};

export default Home;
