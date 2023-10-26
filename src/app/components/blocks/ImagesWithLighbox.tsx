import Image from "next/image";

import convertToBase64 from "@/app/helpers/base64";
import { SingleImage } from "@/app/ts/types";

type SingleImageWithBase = SingleImage & {
  base64: string;
};

const imagesList = async (images: SingleImage[]) => {
  try {
    const imagesWithBase = await Promise.all(
      images.map(async (img) => {
        const base64 = await convertToBase64(img.url);
        return { ...img, base64 };
      })
    );

    return imagesWithBase as SingleImageWithBase[];
  } catch {
    return [];
  }
};

const ImagesWithLighbox = async ({ images }: { images: SingleImage[] }) => {
  const arrayOfImages = await imagesList(images);

  const count = arrayOfImages.length;

  return (
    <figure
      className={`relative w-full h-auto my-8 ${
        count >= 2 && "grid gap-2.5 md:grid-cols-2"
      }`}
    >
      {arrayOfImages.map((img, index) => {
        const { url, alt, caption, base64 } = img;
        const imgCaption = caption ? `description: ${caption}` : "";

        return (
          <a
            key={index}
            href={url}
            className="glightbox"
            data-glightbox={imgCaption}
          >
            <Image
              width={count >= 2 ? 400 : 800}
              height={count >= 2 ? 275 : 550}
              src={url}
              alt={alt || "image"}
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
      })}
    </figure>
  );
};

export default ImagesWithLighbox;
