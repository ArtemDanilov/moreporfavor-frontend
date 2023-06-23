import slugify from "slugify";

const ArticleNavigation = ({ titles }: { titles: string[] }) => {
  return (
    <nav className="mb-15 lg:px-5 lg:py-6 lg:bg-gray-100 lg:rounded-lg lg:sticky lg:top-24 lg:mb-0">
      <h2 className="font-sans text-2xl font-bold text-green mb-3 md:text-4xl">
        Spis treści
      </h2>

      <ul className="list-disc pl-5">
        {titles.map((title, index) => {
          const slug = slugify(title, { lower: true });

          return (
            <li
              key={index}
              className="font-sans text-base font-normal text-black md:text-lg"
            >
              <a href={`#${slug}`}>{title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ArticleNavigation;
