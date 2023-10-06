import { Metadata } from "next";
import { getAllEntries } from "@/app/helpers/getEntries";

const countryMetadata = async (countryName: string): Promise<Metadata> => {
  const countries = await getAllEntries("tags/countries");
  const country = countries?.find((obj) => obj.slug === countryName);

  if (!country) {
    return {
      title: "Error 404",
      description: "Page not found",
    };
  }

  return {
    title: country?.title,
    description: `Wszystkie artykuły z ${country?.title}`,
  };
};

export default countryMetadata;
