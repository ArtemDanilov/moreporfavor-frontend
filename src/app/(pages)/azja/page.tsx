import CategoryPage from "../../components/CategoryPage";

const Azja = ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <CategoryPage
      title="Azja"
      tagsCategory="category"
      tagName="azja"
      currentPage={searchParams.page}
      titleFrame="oriental"
    />
  );
};

export default Azja;
