import Image from "next/image";
import { getPlaiceholder } from "plaiceholder";

import { multipleImages } from "@/app/ts/types";

const getImagesWithBase64 = async (images: multipleImages) =>
  Promise.all(
    images.data.map(async ({ attributes }) => {
      const { url } = attributes;
      const src = `${process.env.NEXT_PUBLIC_APP_URL}${url}`;

      const buffer = await fetch(src).then(async (res) =>
        Buffer.from(await res.arrayBuffer())
      );

      const { base64 } = await getPlaiceholder(buffer);

      return { ...attributes, base64 };
    })
  );

const Images = async ({ images }: { images: multipleImages }) => {
  const allImages = await getImagesWithBase64(images);
  const count = images.data.length;

  return (
    <figure
      className={`relative w-full h-auto my-8 ${
        count >= 2 && "grid gap-2.5 md:grid-cols-2"
      }`}
    >
      {allImages.map(
        ({ name, url, alternativeText, width, height, caption, base64 }) => {
          const imgCaption = caption ? `description: ${caption}` : "";
          const path = `${process.env.NEXT_PUBLIC_APP_URL}${url}`;

          return (
            <a
              key={name}
              href={path}
              className="glightbox"
              data-glightbox={imgCaption}
            >
              <Image
                width={count >= 2 ? 400 : width}
                height={count >= 2 ? 275 : height}
                src={path}
                alt={alternativeText || "image"}
                loading="eager"
                placeholder="blur"
                blurDataURL={base64}
                sizes={count >= 2 ? "(max-width: 768px) 100vw, 50vw" : "100vw"}
                className={`object-cover object-center rounded-lg w-full ${
                  count >= 2 && "md:h-55 xl:h-[17.1875rem]"
                }`}
              ></Image>

              {count === 1 && caption && (
                <figcaption className="font-sans italic text-xs text-gray-400 text-center mt-1">
                  {caption}
                </figcaption>
              )}
            </a>
          );
        }
      )}
    </figure>
  );
};

export default Images;
