import { getAllEntries, getEntry } from "@/app/helpers/getEntries";
import CategoryPage from "../../components/CategoryPage";
import NotFound from "@/app/not-found";
import { Metadata } from "next";

type Props = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
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

const Category = async ({ params, searchParams }: Props) => {
  const category = await getEntry("tags/category", params.category);
  const queryPage = searchParams["page"];

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
      currentPage={queryPage}
    />
  );
};

export default Category;
