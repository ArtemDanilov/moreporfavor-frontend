"use client";

import "swiper/css";

import { Pagination, Parallax, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { BlogEntries } from "../../../ts/types";

import Slide from "./Slide";

const Hero = ({ entries }: { entries: BlogEntries[] }) => {
  return (
    <Swiper
      className="h-[calc(100vh-5.625rem)] max-h-[52.5rem] mb-8 overflow-hidden"
      modules={[Pagination, Parallax, Autoplay]}
      slidesPerView={1}
      parallax={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      speed={600}
      loop={true}
      pagination={{ clickable: true }}
    >
      {entries.map(({ id, title, image }) => {
        return (
          <SwiperSlide key={id}>
            <Slide title={title} image={image.url} url={"#"} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Hero;
