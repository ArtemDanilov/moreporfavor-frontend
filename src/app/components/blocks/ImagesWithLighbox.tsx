import Image from "next/image";
import fs from "node:fs/promises";
import path from "node:path";
import { getPlaiceholder } from "plaiceholder";

import { SingleImage } from "@/app/ts/types";

type SingleImageWithBase = SingleImage & {
  base64: string;
};

const getImagesWithBase64 = async (images: SingleImage[]) =>
  Promise.all(
    images.map(async (image) => {
      const { url } = image;

      try {
        const buffer = await fs.readFile(path.join("public", url));

        const { base64 } = await getPlaiceholder(buffer);

        return { ...image, base64 } as SingleImageWithBase;
      } catch {
        return {} as SingleImageWithBase;
      }
    })
  );

const ImagesWithLighbox = async ({ images }: { images: SingleImage[] }) => {
  const imagesWithBase = await getImagesWithBase64(images);
  const filteredImages = imagesWithBase.filter(
    (el) => Object.keys(el).length > 0
  );

  const count = filteredImages.length;

  return (
    <figure
      className={`relative w-full h-auto my-8 ${
        count >= 2 && "grid gap-2.5 md:grid-cols-2"
      }`}
    >
      {filteredImages.map(({ url, alt, caption, base64 }, index) => {
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
