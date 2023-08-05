import parse from "html-react-parser";

const Content = ({ content }: { content: string | null }) => {
  const parseContent = parse(content || "");

  return (
    <article className="prose mb-5 last:mb-0 md:prose-md">
      {parseContent}
    </article>
  );
};

export default Content;
