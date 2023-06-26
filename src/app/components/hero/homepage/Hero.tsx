"use client";

import "swiper/css";

import { Pagination, Parallax, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Slide from "./Slide";
import { typeGeneralData } from "@/app/ts/types";

const Hero = ({ entries }: { entries: typeGeneralData[] }) => {
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
      {entries.map(({ id, attributes }) => {
        const { title, image, slug, travel_category } = attributes;

        const imageUrl = image.data.attributes.url;
        const categorySlug = travel_category.data.attributes.slug;

        return (
          <SwiperSlide key={id}>
            <Slide
              title={title}
              image={imageUrl}
              url={`${categorySlug}/${slug}`}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Hero;
