import CategoryPage from "../../components/CategoryPage";
import { Category } from "../../ts/enums";

const Europa = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <CategoryPage
      title="Europa"
      category={Category.europe}
      currentPage={searchParams.page}
      titleFrame="vintage"
    />
  );
};

export default Europa;
