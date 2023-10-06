import { Metadata } from "next";
import { getEntry } from "@/app/helpers/getEntries";

const articleMetadata = async (slug: string): Promise<Metadata> => {
  const article = await getEntry("collections/articles", slug);

  if (!article) {
    return {
      title: "Error 404",
      description: "Page not found",
    };
  }

  return {
    title: article.meta.title,
    description: article.meta.short_description.replaceAll('"', "'"),
  };
};

export default articleMetadata;
