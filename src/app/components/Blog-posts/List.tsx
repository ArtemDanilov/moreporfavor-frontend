import { BlogEntries } from "@/app/ts/types";

import BlogPost from "./Item";

const List = ({ posts }: { posts: BlogEntries[] }) => {
  return (
    <ul className="flex justify-center flex-wrap gap-6">
      {posts.map(
        ({
          id,
          title,
          image,
          publishedAt,
          short_description,
          slug,
          travel_category,
        }) => (
          <li key={id}>
            <BlogPost
              title={title}
              image={image}
              link={`${travel_category.slug}/${slug}`}
              category={travel_category}
              publishDate={publishedAt}
              description={short_description}
            />
          </li>
        )
      )}
    </ul>
  );
};

export default List;
