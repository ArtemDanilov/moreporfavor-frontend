import { getEntry } from "@/app/helpers/getEntries";
import NotFound from "@/app/not-found";
import Category from "../Category";

const CountryPage = async ({
  slug,
  currentPage,
}: {
  slug: string;
  currentPage?: string;
}) => {
  const entry = await getEntry("tags/countries", slug);

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

export default CountryPage;
