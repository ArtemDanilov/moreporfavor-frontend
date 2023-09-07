import Image from "next/image";

import Truncate from "@/app/components/truncate";

import { InstagramPost } from "@/app/ts/types";

const InstagramPost = async ({ post }: { post: InstagramPost }) => {
  if (!post) {
    return;
  }

  const { caption, media_type, media_url, permalink } = post;

  const hashtagRegex = /#([^#\s]+)/g;

  const hashtags: string[] | null = caption
    ? caption.match(hashtagRegex)
    : null;
  const text: string | null = caption
    ? caption.replace(hashtagRegex, "")
    : null;

  const linkedTags = hashtags?.map((tag) => {
    const slug = encodeURI(tag.slice(1).toLocaleLowerCase());

    return (
      <a
        href={`https://www.instagram.com/explore/tags/${slug}`}
        target="_blank"
        rel="noopener noreferrer"
        key={tag}
        className="font-sans font-bold text-sm inline-block mr-1"
      >
        {tag}
      </a>
    );
  });

  return (
    <div className="bg-white rounded-md overflow-hidden">
      <a
        href={permalink}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        {media_type === "IMAGE" ? (
          <Image
            width="320"
            height="320"
            src={media_url}
            alt="Instagram post image"
          />
        ) : (
          <video width="320" height="568" autoPlay loop muted>
            <source src={media_url} type="video/mp4"></source>
          </video>
        )}
      </a>
      {text && <Truncate text={text} length={100} />}
      {hashtags && <div className="p-2 pt-0">{linkedTags}</div>}
    </div>
  );
};

export default InstagramPost;
