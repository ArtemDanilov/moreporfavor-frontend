import { typeGeneralData } from "@/app/ts/types";

import BlogPost from "./BlogPost";

const BlogPosts = ({ posts }: { posts: typeGeneralData[] }) => {
  return (
    <ul className="flex justify-center flex-wrap gap-6">
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
            />
          </li>
        );
      })}
    </ul>
  );
};

export default BlogPosts;
