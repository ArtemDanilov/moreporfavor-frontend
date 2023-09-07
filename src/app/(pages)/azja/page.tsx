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
      title="Azja"
      tagsCategory="category"
      tagName="azja"
      titleFrame="oriental"
      currentPage={currentPage}
    />
  );
};

export default CategoryPage;
