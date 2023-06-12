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
};

const BlogPost = ({
  title,
  publishDate,
  description,
  image,
  link,
  category,
}: Post) => {
  const date: Date = new Date(publishDate);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  };
  const convertedDate: string = date.toLocaleDateString("pl-PL", options);

  const getImage = image.formats.small;

  return (
    <div className="max-w-[21.25rem] rounded-md overflow-hidden shadow-default lg:max-w-[25rem]">
      <Link href={link} className="block w-full h-56 overflow-hidden">
        <Image
          src={`${process.env.NEXT_PUBLIC_APP_URL}${getImage.url}`}
          width={getImage.width}
          height={getImage.height}
          alt={getImage.alternativeText || "Post image"}
          className="h-full object-cover object-center"
        />
      </Link>

      <div className="p-4 text-center">
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
