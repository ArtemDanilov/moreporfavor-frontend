import { Metadata } from "next";
import { getAllEntries } from "@/app/helpers/getEntries";

const categoryMetadata = async (categoryName: string): Promise<Metadata> => {
  const categories = await getAllEntries("tags/category");
  const category = categories?.find((obj) => obj.slug === categoryName);

  if (!category) {
    return {
      title: "Error 404",
      description: "Page not found",
    };
  }

  return {
    title: category.title,
    description: `Wszystkie artykuły z ${category.title}`,
  };
};

export default categoryMetadata;
