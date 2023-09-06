import { Meta } from "@/app/ts/types";

import BlogPost from "./BlogPost";
import path from "path";

type Props = {
  entries: Meta[];
  direction?: "horizontal" | "vertical";
};

const BlogPosts = ({ entries, direction }: Props) => {
  const horizontal = direction === "horizontal";

  if (!entries) {
    return <></>;
  }

  return (
    <ul
      className={`flex flex-wrap gap-6 ${
        horizontal ? "md:flex-nowrap md:flex-col" : "justify-center"
      }`}
    >
      {entries.map((data) => {
        const {
          id,
          title,
          image,
          publishedAt,
          short_description,
          slug,
          category,
          countries,
        } = data;
        const pathToArticle = `/${category}/${countries}/${slug}`;

        return (
          <>
            <li key={id}>
              <BlogPost
                title={title}
                image={image}
                link={pathToArticle}
                category={category}
                country={countries}
                publishDate={publishedAt}
                description={short_description}
                direction={"vertical"}
              />
            </li>
          </>
        );
      })}
    </ul>
  );
};

export default BlogPosts;
