import { getAllEntries, getEntry } from "@/app/helpers/getEntries";
import CategoryPage from "../../components/CategoryPage";
import NotFound from "@/app/not-found";
import { Metadata } from "next";

type Props = {
  params: { category: string };
};

export const generateStaticParams = async () => {
  const entries = await getAllEntries("tags/category");

  if (!entries) {
    return [];
  }

  return entries.map((obj) => ({
    category: obj.slug,
  }));
};

const Category = async ({ params }: Props) => {
  const category = await getEntry("tags/category", params.category);

  if (!category) {
    return <NotFound />;
  }

  const { title, slug, frame } = category?.meta;

  return (
    <CategoryPage
      title={title}
      tagsCategory="category"
      tagName={slug}
      titleFrame={frame}
    />
  );
};

export default Category;
