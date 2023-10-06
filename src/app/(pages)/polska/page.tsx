import { Metadata } from "next";
import categoryMetadata from "@/app/helpers/metadata/categoryMetadata";

import Wrapper from "@/app/Wrapper";
import Category from "@/app/components/Category";

export const dynamic = "force-dynamic";

export const generateMetadata = async (): Promise<Metadata> => {
  return categoryMetadata("polska");
};

const CategoryPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) => {
  const currentPage = searchParams["page"] ?? "1";

  return (
    <Wrapper>
      <Category
        title="Polska"
        tagsCategory="category"
        tagName="polska"
        titleFrame="polish-folklor"
        currentPage={currentPage}
      />
    </Wrapper>
  );
};

export default CategoryPage;
