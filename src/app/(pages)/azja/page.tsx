import { Metadata } from "next";
import categoryMetadata from "@/app/helpers/metadata/categoryMetadata";

import Category from "@/app/components/Category";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> => {
  return categoryMetadata("azja");
};

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
