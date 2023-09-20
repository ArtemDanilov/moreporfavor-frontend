import { getEntry } from "@/app/helpers/getEntries";
import Collection from "@/app/helpers/collection";

import Category from "@/app/components/Category";
import NotFound from "@/app/not-found";
import Wrapper from "@/app/Wrapper";

// import { Metadata } from "next";

type Props = {
  params: {
    country: string;
  };
  searchParams: { [key: string]: string | undefined };
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

  const countries = [...new Set(entries.map((el) => el.countries))];

  countries.forEach((el) => {
    paths.push({
      country: el,
    });
  });

  return paths;
};

const Country = async ({ params, searchParams }: Props) => {
  const entry = await getEntry("tags/countries", params.country);
  const currentPage = searchParams["page"] ?? "1";

  if (!entry) {
    return <NotFound />;
  }

  return (
    <Wrapper>
      <Category
        title={entry.meta.title}
        tagsCategory="countries"
        tagName={entry.meta.slug}
        currentPage={currentPage}
      />
    </Wrapper>
  );
};

export default Country;
