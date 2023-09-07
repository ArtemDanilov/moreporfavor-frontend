import Category from "@/app/components/Category";

// import { Metadata } from "next";

export const dynamic = "force-dynamic";

const CategoryPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const currentPage = searchParams["page"] ?? "1";

  return (
    <Category
      title="Europa"
      tagsCategory="category"
      tagName="europa"
      titleFrame="vintage"
      currentPage={currentPage}
    />
  );
};

export default CategoryPage;
