import { getAllEntries, getEntry } from "@/app/helpers/getEntries";
import CategoryPage from "../../components/CategoryPage";
import NotFound from "@/app/not-found";
import { Metadata } from "next";

type Props = {
  params: { category: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// export const generateStaticParams = async () => {
//   const categories = await getAllEntries("tags/category");

//   return categories.map((obj) => ({
//     category: obj.slug,
//   }));
// };

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const categories = await getAllEntries("tags/category");

  if (!categories) {
    return {
      title: "Page not found",
    };
  }

  const category = categories.find((obj) => obj.slug === params.category);

  return {
    title: category ? category.title : "Category",
  };
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
