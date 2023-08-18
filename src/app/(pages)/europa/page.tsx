import CategoryPage from "../../components/CategoryPage";

const Europa = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  return (
    <CategoryPage
      title="Europa"
      tagsCategory="category"
      tagName="europa"
      currentPage={searchParams.page}
      titleFrame="vintage"
    />
  );
};

export default Europa;
