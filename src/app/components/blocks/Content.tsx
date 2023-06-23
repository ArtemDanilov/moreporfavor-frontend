import parse from "html-react-parser";
import slugify from "slugify";

type ContentBlock = {
  title: string;
  content: string | null;
};

const Content = ({ title, content }: ContentBlock) => {
  const slug = slugify(title, { lower: true });
  const parseContent = parse(content || "");

  return (
    <article id={slug}>
      <h2>{title}</h2>

      {parseContent}
    </article>
  );
};

export default Content;
