import { Article } from "@/app/ts/types";

import BlogPost from "./BlogPost";

type Direction = "vertical" | "horizontal";

const BlogPosts = ({
  posts,
  direction = "vertical",
}: {
  posts: Article[];
  direction?: Direction;
}) => {
  const horizontal = direction === "horizontal";
  console.log(posts);

  return (
    <ul
      className={`flex flex-wrap gap-6 ${
        horizontal ? "md:flex-nowrap md:flex-col" : "justify-center"
      }`}
    >
      {posts.map((post) => {
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
