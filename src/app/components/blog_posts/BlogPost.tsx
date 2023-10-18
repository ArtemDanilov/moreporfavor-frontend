import { SingleImage } from "@/app/ts/types";
import Image from "next/image";
import Link from "next/link";

type Post = {
  title: string;
  image: SingleImage;
  publishDate: string;
  description: string;
  link: string;
  direction: "vertical" | "horizontal";
  category: string;
  country: string;
};

const BlogPost = ({
  title,
  publishDate,
  description,
  image,
  link,
  category,
  country,
  direction = "vertical",
}: Post) => {
  const date: Date = new Date(publishDate);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  };
  const convertedDate: string = date.toLocaleDateString("pl-PL", options);

  let postClasses: string = "";

  const vertical = direction === "vertical";
  const horizontal = direction === "horizontal";

  if (vertical) {
    postClasses = `max-w-[21.25rem] rounded-md overflow-hidden shadow-default lg:max-w-[25rem]`;
  } else if (horizontal) {
    postClasses = `max-w-[25rem] rounded-md overflow-hidden shadow-default sm:flex sm:block sm:max-w-none sm:w-full`;
  }

  return (
    <div className={postClasses}>
      <Link
        href={link}
        className={`block w-full overflow-hidden h-56 bg-gray-100 ${
          horizontal ? "h-auto sm:flex-[40%]" : ""
        }`}
      >
        <Image
          src={image.url}
          width={400}
          height={224}
          loading="lazy"
          alt={image.alt || "Post image"}
          className="h-full object-cover object-center"
        />
      </Link>

      <div
        className={`p-4 text-center ${
          horizontal ? "sm:flex-[60%] sm:text-left" : ""
        }`}
      >
        <p className="font-sans text-xs font-bold text-green mb-1">
          {convertedDate}
        </p>
        <h3 className="font-sans text-2xl font-bold text-green mb-1">
          <Link href={link}>{title}</Link>
        </h3>
        <p className="font-sans text-sm font-normal text-gray-300 mb-4">
          {description}
        </p>
        <p className="font-sans text-xs font-bold text-mocha space-x-2">
          <Link href={`/${category}`}>#{category}</Link>
          {country && <Link href={`/${category}/${country}`}>#{country}</Link>}
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
