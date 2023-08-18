import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import components from "../../../mdx-components";

import { Entry } from "../ts/types";

export const getEntry = async (
  fileType: string,
  slug: string
): Promise<Entry | null> => {
  const realSlug = slug.replace(".mdx", "");
  const filePath = path.join("content", fileType, `${slug}.mdx`);

  if (fs.existsSync(filePath)) {
    const fileContent = fs.readFileSync(filePath, { encoding: "utf-8" });

    const { frontmatter, content }: any = await compileMDX({
      source: fileContent,
      options: { parseFrontmatter: true },
      components: components,
    });

    return {
      meta: {
        ...frontmatter,
        slug: realSlug,
      },
      content,
    };
  } else {
    return null;
  }
};

export const getAllEntries = async (fileType: string) => {
  const entriesPath = path.join("content", fileType);
  const entries = fs.readdirSync(entriesPath);

  let arrayOfEntries: Entry["meta"][] = [];

  for (const entry of entries) {
    const entrySlug = entry.replace(".mdx", "");
    const entryResult = await getEntry(fileType, entrySlug);

    if (entryResult) {
      const { meta } = entryResult;
      arrayOfEntries.push(meta);
    }
  }

  return arrayOfEntries;
};
