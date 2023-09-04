import { getAllEntries, getEntry } from "@/app/helpers/getEntries";
import CategoryPage from "../../components/CategoryPage";
import NotFound from "@/app/not-found";

type Props = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export const generateStaticParams = async () => {
  const categories = await getAllEntries("tags/category");

  return categories.map((obj) => ({
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
