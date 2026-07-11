import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "./Slider.css";

import { services } from "./SliderData";

import ServiceCard from "./SliderCard";

export default function Slider() {
  return (
    <section className="slider-section">
      <div className="title">
        <h2>خدمات طراحی سایت</h2>

        <p>مناسب برای هر نوع کسب و کار</p>
      </div>

      <Swiper
        dir="rtl"
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
        }}
        loop={true}
        spaceBetween={30}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },

          768: {
            slidesPerView: 2,
          },

          1200: {
            slidesPerView: 5,
          },
        }}
      >
        {services.map((service) => (
          <SwiperSlide key={service.id}>
            <ServiceCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
