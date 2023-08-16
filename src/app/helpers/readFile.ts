import fs from "fs";
import matter from "gray-matter";

const readFile = (fileType: string) => {
  const files = fs.readdirSync(`content/${fileType}`);

  const entries = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(
      `content/${fileType}/${fileName}`,
      "utf-8"
    );
    const { data: variables }: { data: any } = matter(readFile);

    return {
      ...variables,
      slug,
    };
  });

  return entries;
};

export default readFile;
