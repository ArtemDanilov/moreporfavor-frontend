import Link from "next/link";

import { Arrow } from "../../icons/Icons";
import getFullImagePath from "@/app/utils/image-url";

type typeSlide = {
  title: string;
  image: string;
  url: string;
};

const Slide = ({ title, image, url }: typeSlide) => {
  const imgPath = getFullImagePath(image);

  return (
    <div
      className="w-full h-full bg-cover bg-center shadow-overlay flex flex-col justify-center p-4"
      style={{
        backgroundImage: `url('${imgPath}')`,
      }}
    >
      <h2
        data-swiper-parallax="-300"
        className="font-display text-5xl leading-tight text-center text-white mb-6"
      >
        {title}
      </h2>
      <Link
        href={url}
        className="font-sans text-base font-normal text-center text-white flex items-center justify-center"
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
