import CategoryPage from "../../components/CategoryPage";

const Inspiracje = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <CategoryPage
      title="Inspiracje"
      tagsCategory="category"
      tagName="inspiracje"
      currentPage={searchParams.page}
      titleFrame="branches"
    />
  );
};

export default Inspiracje;
