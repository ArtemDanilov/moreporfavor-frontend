import { getEntry } from "@/app/helpers/getEntries";
import Collection from "@/app/helpers/collection";

import Article from "@/app/components/blog_posts/Article";
import NotFound from "@/app/not-found";
import Wrapper from "@/app/Wrapper";

// import { Metadata } from "next";

type Props = {
  params: {
    category: string;
    country: string;
    article: string;
  };
};

export const generateStaticParams = async () => {
  const paths: { article: string; country?: string }[] = [];

  const allEntries = await Collection({
    collection: "articles",
    tagsCategory: "category",
    tagName: "europa",
  });

  if (!allEntries) {
    return [];
  }

  const { entries } = allEntries;

  entries.forEach((el) => {
    paths.push({
      country: el.countries,
      article: el.slug,
    });
  });

  return paths;
};

const Page = async ({ params }: Props) => {
  const article = await getEntry("collections/articles", params.article);

  if (!article) {
    return <NotFound />;
  }

  return (
    <Wrapper>
      <Article post={article} />
    </Wrapper>
  );
};

export default Page;
