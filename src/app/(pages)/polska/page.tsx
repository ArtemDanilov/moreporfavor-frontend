import CategoryPage from "../../components/CategoryPage";
import { Category } from "../../ts/enums";

const Polska = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <CategoryPage
      title="Polska"
      category={Category.poland}
      currentPage={searchParams.page}
      titleFrame="polish-folklor"
    />
  );
};

export default Polska;
