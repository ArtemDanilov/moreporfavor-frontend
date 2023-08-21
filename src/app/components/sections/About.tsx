import { SingleImage } from "@/app/ts/types";
import Image from "next/image";

type Props = {
  image: SingleImage;
  text: string;
  className?: string;
};

const About = ({ image, text, className }: Props) => {
  return (
    <figure className={`max-w-sm mx-auto text-center ${className}`}>
      <div className="w-60 min-w-[15rem] h-60 rounded-full mx-auto mb-4 overflow-hidden">
        <Image
          src={image.url}
          alt={image.alt || "zdjęcie autora"}
          width={240}
          height={240}
          loading="lazy"
          className="w-full h-full object-cover"
        />
      </div>

      <figcaption className="font-sans text-base font-normal">
        {text}
      </figcaption>
    </figure>
  );
};

export default About;
