import { sortASC, sortDESC } from "@/app/helpers/sortUtilities";
import { Article, Meta } from "@/app/ts/types";

import BlogPost from "./BlogPost";

type Props = {
  posts: Article[];
  direction?: "vertical" | "horizontal";
  tagsCategory?: string;
  tagName?: string;
  sort?: "asc" | "desc";
  count?: {
    from: number;
    to?: number;
  };
};

const BlogPosts = ({
  posts,
  direction = "vertical",
  tagsCategory,
  tagName,
  sort = "desc",
  count = { from: 0 },
}: Props) => {
  const horizontal = direction === "horizontal";

  const filteredPostsByCategory =
    tagsCategory && tagName
      ? posts.filter((post) => post[tagsCategory]?.slug === tagName)
      : posts;

  let filteredPosts: Meta[] = filteredPostsByCategory;

  if (sort === "desc") {
    filteredPosts = sortDESC(filteredPosts).slice(count.from, count.to);
  } else if (sort === "asc") {
    filteredPosts = sortASC(filteredPosts).slice(count.from, count.to);
  } else if (count) {
    filteredPosts = filteredPosts.slice(count.from, count.to);
  }

  return (
    <ul
      className={`flex flex-wrap gap-6 ${
        horizontal ? "md:flex-nowrap md:flex-col" : "justify-center"
      }`}
    >
      {filteredPosts.map((post) => {
        const {
          id,
          title,
          image,
          publishedAt,
          short_description,
          slug,
          category,
        } = post;

        return (
          <li key={id}>
            <BlogPost
              title={title}
              image={image}
              link={`/${category.slug}/${slug}`}
              category={category}
              publishDate={publishedAt}
              description={short_description}
              direction={direction}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BlogPosts;
