import { typeGeneralData } from "@/app/ts/types";

import BlogPost from "./BlogPost";

type Posts = {
  posts: typeGeneralData[];
  direction?: "vertical" | "horizontal";
};

const BlogPosts = ({ posts, direction = "vertical" }: Posts) => {
  const horizontal = direction === "horizontal";

  return (
    <ul
      className={`flex flex-wrap gap-6 ${
        horizontal ? "md:flex-nowrap md:flex-col" : "justify-center"
      }`}
    >
      {posts.map(({ id, attributes }) => {
        const {
          title,
          image,
          publishedAt,
          short_description,
          slug,
          travel_category,
        } = attributes;

        const category = travel_category.data.attributes;

        return (
          <li key={id}>
            <BlogPost
              title={title}
              image={image}
              link={`${category.slug}/${slug}`}
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
