import { getAllEntries, getEntriesById } from "@/app/helpers/getEntries";
import Section from "../Section";
import BlogPosts from "./BlogPosts";
import { sortDESC } from "@/app/helpers/sortUtilities";

import { Meta } from "@/app/ts/types";

type Props = {
  title: string;
  currentPost: Meta;
  className?: string;
};

const OtherPosts = async ({ title, currentPost, className }: Props) => {
  const articles = await getAllEntries("collections/articles");

  if (!articles) {
    return <></>;
  }

  const sortedArticles = sortDESC(articles);
  const articlesByCategory = sortedArticles?.filter((obj) => {
    if (obj.countries) {
      return obj.countries === currentPost.countries;
    } else {
      return obj.category === currentPost.category;
    }
  });

  let filteredIds: string[] = [];
  let previosIndex: number = 0;
  let nextIndex: number = 1;

  const articlesIds = sortedArticles?.map((obj) => obj.id);
  const categoryArticlesIds = articlesByCategory?.map((obj) => obj.id);
  const targetIds =
    categoryArticlesIds.length > 2 ? categoryArticlesIds : articlesIds;

  const targetIndex = targetIds?.indexOf(currentPost.id);

  if (targetIndex !== -1) {
    const lastIndex = targetIds.length - 1;
    const isFirst = targetIndex === 0;
    const isLast = targetIndex === lastIndex;

    previosIndex = isFirst ? lastIndex : targetIndex - 1;
    nextIndex = isLast ? 0 : targetIndex + 1;
  }

  if (categoryArticlesIds.length === 1 || categoryArticlesIds.length === 2) {
    filteredIds = [
      sortedArticles[previosIndex].id,
      sortedArticles[nextIndex].id,
    ];
  } else {
    filteredIds = [
      articlesByCategory[previosIndex].id,
      articlesByCategory[nextIndex].id,
    ];
  }

  const articlesByIds = await getEntriesById("articles", filteredIds);
  const articlesToDisplay = articlesByIds?.map((el) => el.meta);

  return (
    <Section>
      <div className={className}>
        {title && (
          <h2 className="fonst-sans text-2xl font-bold text-green mb-5 md:text-4xl">
            {title}
          </h2>
        )}
        <BlogPosts entries={articlesToDisplay} direction="horizontal" />
      </div>
    </Section>
  );
};

export default OtherPosts;
