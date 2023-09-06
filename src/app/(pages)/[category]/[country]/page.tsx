import { getAllEntries, getEntry } from "@/app/helpers/getEntries";
import CategoryPage from "../../../components/CategoryPage";
import NotFound from "@/app/not-found";

type Props = {
  params: {
    category: string;
    country: string;
  };
};

export const generateStaticParams = async () => {
  const entries = await getAllEntries("collections/articles");

  if (!entries) {
    return [];
  }

  return entries.map((obj) => ({
    country: obj.countries,
    category: obj.category,
  }));
};

const Country = async ({ params }: Props) => {
  const category = await getEntry("tags/countries", params.country);

  if (!category) {
    return <NotFound />;
  }

  const { title, slug } = category?.meta;

  return <CategoryPage title={title} tagsCategory="countries" tagName={slug} />;
};

export default Country;
