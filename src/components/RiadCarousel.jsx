// src/components/RiadCarousel.jsx
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/carousel/carousel-1.jpg";
import img2 from "../assets/carousel/carousel-2.jpg";
import img3 from "../assets/carousel/carousel-3.jpg";
import img4 from "../assets/carousel/carousel-4.jpg";

const RiadCarousel = () => {
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const arrowColor = "#dfbc6f";
    const arrows = document.querySelectorAll(
      ".swiper-button-prev, .swiper-button-next"
    );
    arrows.forEach((el) => {
      el.style.color = arrowColor;
    });

    const dots = document.querySelectorAll(".swiper-pagination-bullet");
    dots.forEach((dot) => {
      dot.style.background = "#ccc"; // default dot color
    });

    const activeDot = document.querySelector(
      ".swiper-pagination-bullet-active"
    );
    if (activeDot) activeDot.style.background = arrowColor;

    // Optional: listen for slide change to update active dot color dynamically
    const swiperContainer = document.querySelector(".swiper");
    if (swiperContainer && swiperContainer.swiper) {
      swiperContainer.swiper.on("slideChange", () => {
        // Reset all dots color
        dots.forEach((dot) => (dot.style.background = "#ccc"));
        // Set active dot color
        const active = swiperContainer.querySelector(
          ".swiper-pagination-bullet-active"
        );
        if (active) active.style.background = arrowColor;
      });
    }
  }, []);

  return (
    <div className="relative fade-in-up">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation
        className="w-full rounded-lg shadow-xl"
      >
        {images.map((img, i) => (
          <SwiperSlide key={i}>
            <img
              src={img.src}
              alt={`Slide ${i + 1}`}
              className="w-full h-auto rounded-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Decorative Elements */}
      <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-ocre-400 rounded-lg -z-10"></div>
      <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-bleu-500 rounded-lg -z-10"></div>
    </div>
  );
};

export default RiadCarousel;
