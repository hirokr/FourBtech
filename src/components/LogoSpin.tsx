"use client";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Import Swiper styles
import { AspectRatio } from "./ui/aspect-ratio";
import Image from "next/image";

const image = [
  "/logos/anses.png",
  "/logos/hotjar.png",
  "/logos/power.png",
  "/logos/shopify.png",
  "/logos/anses.png",
  "/logos/hotjar.png",
  "/logos/power.png",
  "/logos/shopify.png",
  "/logos/anses.png",
  "/logos/hotjar.png",
  "/logos/power.png",
  "/logos/shopify.png",
  "/logos/anses.png",
  "/logos/hotjar.png",
  "/logos/power.png",
  "/logos/shopify.png",
  "/logos/anses.png",
  "/logos/hotjar.png",
  "/logos/power.png",
  "/logos/shopify.png",
  "/logos/anses.png",
  "/logos/hotjar.png",
  "/logos/power.png",
  "/logos/shopify.png",
];

export const LogoSpin = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      loop={true} // Infinite looping
      slidesPerView={5} // Allows fluid movement
      spaceBetween={40}
      speed={3000} // Controls movement speed (adjust as needed)
      autoplay={{
        delay: 0, // No delay
        disableOnInteraction: false, // Keeps autoplay even after interaction
        pauseOnMouseEnter: false, // Prevents pause on hover
      }}
      freeMode={true} // Smooth continuous scrolling
      className='w-full'
    >
      {image.map((item, index) => (
        <SwiperSlide key={index}>
          <AspectRatio ratio={16 / 9}>
            <Image
              src={item}
              fill
              alt='anses'
              className='grayscale h-auto invert contrast-200 brightness-100'
            />
          </AspectRatio>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
