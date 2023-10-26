import { Metadata } from "next";
import countryMetadata from "@/app/helpers/metadata/countryMetadata";

import { getEntry } from "@/app/helpers/getEntries";
import Collection from "@/app/helpers/collection";

import Category from "@/app/components/Category";
import NotFound from "@/app/(pages)/not-found";

type Props = {
  params: {
    country: string;
  };
  searchParams: { [key: string]: string | undefined };
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  return countryMetadata(params.country);
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
    <Category
      title={entry.meta.title}
      tagsCategory="countries"
      tagName={entry.meta.slug}
      currentPage={currentPage}
    />
  );
};

export default Country;
