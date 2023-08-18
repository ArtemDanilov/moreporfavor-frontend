import CategoryPage from "../../components/CategoryPage";

const Polska = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <CategoryPage
      title="Polska"
      tagsCategory="category"
      tagName="polska"
      currentPage={searchParams.page}
      titleFrame="polish-folklor"
    />
  );
};

export default Polska;
