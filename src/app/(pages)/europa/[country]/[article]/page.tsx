import { getAllEntries, getEntry } from "@/app/helpers/getEntries";
import Collection from "@/app/helpers/collection";

import CountryPage from "@/app/components/pages/Country";
import ArticlePage from "@/app/components/pages/Article";
import countPages from "@/app/helpers/countPages";

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

  const entriesByPage = countPages(entries, 2);
  const pages = Array.from({ length: entriesByPage }).map((_, i) => i + 1);

  const countries = [...new Set(entries.map((el) => el.countries))];

  // pages.forEach((el) => {
  //   paths.push({
  //     article: el + "",
  //   });
  // });

  entries.forEach((el) => {
    paths.push({
      country: el.countries,
      article: el.slug,
    });
  });

  // console.log(paths);

  return paths;
};

const Page = ({ params }: Props) => {
  const isNumber = !isNaN(Number(params.article));
  let page: React.ReactElement = <></>;

  if (isNumber) {
    page = <CountryPage slug={params.country} currentPage={params.article} />;
  } else {
    page = <ArticlePage slug={params.article} />;
  }

  return page;
};

export default Page;
