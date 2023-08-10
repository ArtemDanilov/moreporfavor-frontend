import Section from "../../Section";
import { Vintage, Oriental, PolishFolklor, Branches } from "../../svg/Frames";
import { typeFrame } from "@/app/ts/types";

type Props = {
  title: string;
  frame?: typeFrame;
};

const getFrame = (frame: Props["frame"]) => {
  const classes = "w-80 h-auto m-auto xl:w-[30rem] last:rotate-180";

  switch (frame) {
    case "vintage":
      return <Vintage className={classes} />;
    case "oriental":
      return <Oriental className={classes} />;
    case "polish-folklor":
      return <PolishFolklor className={classes} />;
    case "branches":
      return <Branches className={classes} />;
  }
};

const Hero = ({ title, frame }: Props) => {
  const frameComponent = getFrame(frame);

  return (
    <Section className="text-green mt-40 mb-20 md:mb-20 lg:mt-52 lg:mb-32">
      {frameComponent}
      <h1 className="font-display text-5xl font-normal text-center py-4 xl:text-6.25xl xl:py-6">
        {title}
      </h1>
      {frameComponent}
    </Section>
  );
};

export default Hero;
