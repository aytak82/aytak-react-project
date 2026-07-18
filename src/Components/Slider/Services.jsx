import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "./Services.css";
import { services } from "./ServicesData";
import ServicesCard from "./ServicesCard";

export default function Services() {
  return (
    <section id="services" className="slider-section">
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
            <ServicesCard service={service} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
