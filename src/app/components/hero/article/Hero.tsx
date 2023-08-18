import Image from "next/image";

import Decoration1 from "../../decorations/Decoration1";

type typeHero = {
  image: {
    url: string;
    alt: string | null;
  };
  title: string;
};

const imageStyle = {
  top: "-1px",
  zIndex: "10",
};

const Hero = ({ image, title }: typeHero) => {
  return (
    <div className="relative h-[calc(100vh-5.625rem)] max-h-[52.5rem] bg-gray-200 mb-8 overflow-hidden md:mb-12 xl:mb-24">
      <h1 className="absolute absolute-centered z-30 font-display font-normal text-5xl leading-tight text-white text-center">
        {title}
      </h1>
      <Image
        fill
        src={image.url}
        alt={image.alt ?? "image"}
        priority={true}
        style={imageStyle}
        className="object-cover object-center brightness-[.6]"
        quality={80}
      ></Image>
      <Decoration1 className="absolute z-20 bottom-0 left-0 w-full h-20 lg:h-24 2xl:h-32" />
    </div>
  );
};

export default Hero;
