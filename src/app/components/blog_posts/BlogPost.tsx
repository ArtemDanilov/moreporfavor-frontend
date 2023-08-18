import getFullImagePath from "@/app/utils/image-url";
import Image from "next/image";
import Link from "next/link";

type Post = {
  title: string;
  publishDate: string;
  description: string;
  image: any;
  link: string;
  category: {
    title: string;
    slug: string;
  };
  direction?: "vertical" | "horizontal";
};

const BlogPost = ({
  title,
  publishDate,
  description,
  image,
  link,
  category,
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

  const img = image.data.attributes;
  const imgPath = getFullImagePath(img.url);

  let postClasses: string = "";

  const vertical = direction === "vertical";
  const horizontal = direction === "horizontal";

  if (vertical) {
    postClasses = `max-w-[21.25rem] rounded-md overflow-hidden shadow-default lg:max-w-[25rem]`;
  } else if (horizontal) {
    postClasses = `max-w-[25rem] rounded-md overflow-hidden shadow-default md:flex md:block md:max-w-none md:w-full`;
  }

  return (
    <div className={postClasses}>
      <Link
        href={link}
        className={`block w-full overflow-hidden h-56 bg-gray-100 ${
          horizontal ? "md:h-auto md:max-h-72 md:flex-[40%] xl:h-56" : ""
        }`}
      >
        {/* <Image
          src={imgPath}
          width={400}
          height={224}
          loading="lazy"
          alt={img.alternativeText || "Post image"}
          className="h-full object-cover object-center"
        /> */}
      </Link>

      <div
        className={`p-4 text-center ${
          horizontal ? "md:flex-[60%] md:text-left" : ""
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
        <p className="font-sans text-xs font-bold text-mocha">
          <Link href={category.slug}>#{category.title}</Link>
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
