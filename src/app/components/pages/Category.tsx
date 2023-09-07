import { getEntry } from "@/app/helpers/getEntries";
import NotFound from "@/app/not-found";
import Category from "../Category";

const CategoryPage = async ({
  slug,
  currentPage,
}: {
  slug: string;
  currentPage?: string;
}) => {
  const entry = await getEntry("tags/category", slug);

  if (!entry) {
    return <NotFound />;
  }

  return (
    <Category
      title={entry.meta.title}
      tagsCategory="category"
      tagName={entry.meta.slug}
      titleFrame={entry.meta.frame}
      currentPage={currentPage}
    />
  );
};

export default CategoryPage;
