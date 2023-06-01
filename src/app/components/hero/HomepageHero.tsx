"use client";

import Link from "next/link";
import { Pagination, Parallax, Autoplay } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Arrow } from "../icons/Icons";

import "swiper/css";

type Entries = {
  title: string;
  url: string;
  image: string;
}[];

const HomepageHero = ({ entries }: { entries: Entries }) => {
  return (
    <Swiper
      className="h-[calc(100vh-5.625rem)] max-h-[52.5rem] overflow-hidden"
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
      {entries.map(({ title, url, image }, index) => (
        <SwiperSlide key={index}>
          <div
            className="w-full h-full bg-cover bg-center shadow-overlay flex flex-col justify-center p-4"
            style={{ backgroundImage: `url('${image}')` }}
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
                <Arrow width={56} height={16} />
              </span>
            </Link>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HomepageHero;
