import CategoryPage from "../../components/CategoryPage";
import { Category } from "../../ts/enums";

const Azja = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <CategoryPage
      title="Azja"
      category={Category.asia}
      currentPage={searchParams.page}
      titleFrame="oriental"
    />
  );
};

export default Azja;
