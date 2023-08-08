import Link from "next/link";
import Image from "next/image";

import { Arrow } from "../../svg/Icons";

import { singleImage } from "@/app/ts/types";

type typeSlide = {
  title: string;
  image: singleImage;
  url: string;
};

const Slide = ({ title, image, url }: typeSlide) => {
  const img = image.data.attributes;

  return (
    <div className="relative w-full h-full bg-cover bg-center shadow-overlay flex flex-col justify-center p-4">
      <div className="absolute top-0 left-0 w-full h-[calc(100vh-5.625rem)] max-h-[52.5rem] mb-8 overflow-hidden md:mb-12 xl:mb-24">
        <Image
          fill
          src={img.url}
          alt={img.alternativeText || "image"}
          priority={true}
          className="object-cover object-center brightness-[.6]"
        ></Image>
      </div>

      <h2
        data-swiper-parallax="-300"
        className="font-display text-5xl leading-tight text-center text-white mb-6 z-10"
      >
        {title}
      </h2>
      <Link
        href={url}
        className="font-sans text-base font-normal text-center text-white flex items-center justify-center z-10"
        data-swiper-parallax="-400"
      >
        <span className="inline-block w-14 h-0.5 bg-white mr-3"></span>
        czytaj dalej
        <span className="inline-block ml-3">
          <Arrow className="w-14 h-4" />
        </span>
      </Link>
    </div>
  );
};

export default Slide;
