import { Metadata } from "next";
import articleMetadata from "../../../helpers/metadata/articleMetadata";

import { getEntry } from "@/app/helpers/getEntries";
import Collection from "@/app/helpers/collection";

import Article from "@/app/components/blog_posts/Article";
import NotFound from "@/app/not-found";

type Props = {
  params: {
    category: string;
    country: string;
    article: string;
  };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  return articleMetadata(params.article);
};

export const generateStaticParams = async () => {
  const paths: { article: string; country?: string }[] = [];

  const allEntries = await Collection({
    collection: "articles",
    tagsCategory: "category",
    tagName: "polska",
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

  return <Article post={article} />;
};

export default Page;
