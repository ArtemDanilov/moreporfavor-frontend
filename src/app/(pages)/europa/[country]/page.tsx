import { getAllEntries, getEntry } from "@/app/helpers/getEntries";
import Collection from "@/app/helpers/collection";

import CountryPage from "@/app/components/pages/Country";
import CategoryPage from "@/app/components/pages/Category";
import countPages from "@/app/helpers/countPages";

// import { Metadata } from "next";

type Props = {
  params: {
    country: string;
  };
};

export const generateStaticParams = async () => {
  const paths: { country: string }[] = [];

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

  pages.forEach((el) => {
    paths.push({
      country: el + "",
    });
  });

  const countries = [...new Set(entries.map((el) => el.countries))];

  countries.forEach((el) => {
    paths.push({
      country: el,
    });
  });

  // console.log(paths);

  return paths;
};

const Page = ({ params }: Props) => {
  const isNumber = !isNaN(Number(params.country));
  let page: React.ReactElement = <></>;

  if (isNumber) {
    page = <CategoryPage slug="europa" currentPage={params.country} />;
  } else {
    page = <CountryPage slug={params.country} />;
  }

  return page;
};

export default Page;
