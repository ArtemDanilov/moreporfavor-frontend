const headingsRegex = /<(h3|h2)>(.*?)<\/(h3|h2)>/g;

const extractTagsContent = (htmlString: string) => {
  const headingsMatches = htmlString.match(headingsRegex);

  if (!headingsMatches) {
    return [];
  }

  return headingsMatches.map((match) => {
    const tag = match.startsWith("<h3") ? "h3" : "h2";
    const text = match.replace(/<\/?(h3|h2)>/g, "");
    return { tag, text };
  });
};

export default extractTagsContent;
