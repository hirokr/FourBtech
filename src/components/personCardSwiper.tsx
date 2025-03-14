"use client"
import { Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import TestimonialCard from "./TestimonialCard";
import "swiper/css"; // Import Swiper styles
import { ReviewData } from "@/lib/reviewData";

export const ReviewSwiper = () => {
  const reviews = ReviewData;
  return (
    <Swiper
      modules={[Pagination, Autoplay]} 
      loop = {true}
      spaceBetween={40}
      slidesPerView={1}
      className='mySwiper'
      autoplay={{ delay: 1000 }} // Autoplay now works
      pagination={{ clickable: true }}
    >
      {reviews.map((review, index) => {
        return (
          <SwiperSlide key={index}>
            <TestimonialCard {...review} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
