import fs from "fs/promises";
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

  try {
    const fileContent = await fs.readFile(filePath, { encoding: "utf-8" });

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
  } catch {
    return null;
  }
};

export const getEntriesById = async (
  collection: string,
  ids: string[]
): Promise<Entry[]> => {
  const entriesPath = path.join("content", "collections", collection);

  try {
    const entries = await fs.readdir(entriesPath);
    let entryWithID: Entry[] | null = [];

    await Promise.all(
      entries.map(async (entry) => {
        const realSlug = entry.replace(".mdx", "");
        const filepath = path.join(entriesPath, entry);

        try {
          const fileContent = await fs.readFile(filepath, {
            encoding: "utf-8",
          });
          const { frontmatter, content }: any = await compileMDX({
            source: fileContent,
            options: { parseFrontmatter: true },
            components: components,
          });

          const entryData: Entry = {
            meta: {
              ...frontmatter,
              slug: realSlug,
            },
            content,
          };

          if (ids.includes(frontmatter.id)) {
            entryWithID?.push(entryData);
          }
        } catch (err) {
          throw err;
        }
      })
    );

    return entryWithID;
  } catch (err) {
    throw err;
  }
};

export const getAllEntries = async (fileType: string) => {
  const entriesPath = path.join("content", fileType);

  try {
    const entries = await fs.readdir(entriesPath);

    let arrayOfEntries: Entry["meta"][] = [];

    await Promise.all(
      entries.map(async (entry) => {
        const entrySlug = entry.replace(".mdx", "");
        const entryResult = await getEntry(fileType, entrySlug);

        if (entryResult) {
          const { meta } = entryResult;
          arrayOfEntries.push(meta);
        }
      })
    );

    return arrayOfEntries;
  } catch (err) {
    throw err;
  }
};
