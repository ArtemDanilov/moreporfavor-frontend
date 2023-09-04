"use client";

import "swiper/css";

import { Pagination, Parallax, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Slide from "./Slide";
import { Entry } from "@/app/ts/types";

const Hero = ({ entries }: { entries: Entry[] }) => {
  if (!entries.length) {
    return;
  }

  return (
    <Swiper
      className="h-[calc(100vh-5.625rem)] max-h-[52.5rem] mb-8 overflow-hidden md:mb-12 xl:mb-24"
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
      {entries.map(({ meta }) => {
        const { id, title, image, category, countries, slug } = meta;
        const countrySlug = countries ? "/" + countries : "";
        const url = `/${category}${countrySlug}/${slug}`;

        return (
          <SwiperSlide key={id}>
            <Slide title={title} image={image} url={url} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Hero;
