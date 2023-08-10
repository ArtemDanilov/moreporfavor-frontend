import CategoryPage from "../components/CategoryPage";
import { Category } from "../ts/enums";

const Inspiracje = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <CategoryPage
      title="Inspiracje"
      category={Category.inspirations}
      currentPage={searchParams.page}
      titleFrame="branches"
    />
  );
};

export default Inspiracje;
