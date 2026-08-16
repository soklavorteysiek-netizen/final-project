import { useEffect, useRef } from "react";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { testimonials } from "../data/siteData";

export default function Testimonials() {
  const sliderRef = useRef(null);

  useEffect(() => {
    const swiper = new Swiper(sliderRef.current, {
      modules: [Navigation, Pagination],
      loop: true,
      grabCursor: true,
      spaceBetween: 25,
      pagination: { el: ".swiper-pagination", clickable: true, dynamicBullets: true },
      navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
      breakpoints: {
        0: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      },
    });

    return () => swiper.destroy(true, true);
  }, []);

  return (
    <section className="testimonials-section" id="testimonials">
      <h2 className="section-title">Testimonials</h2>
      <div className="section-content">
        <div className="slider-container swiper" ref={sliderRef}>
          <div className="slider-wrapper swiper-wrapper">
            {testimonials.map((item) => (
              <div className="testimonial swiper-slide" key={item.name}>
                <img src={item.image} alt={item.name} className="user-image" />
                <h3 className="name">{item.name}</h3>
                <i className="feedback">"{item.feedback}"</i>
              </div>
            ))}
          </div>
          <div className="swiper-pagination" />
          <div className="swiper-slide-button swiper-button-prev" />
          <div className="swiper-slide-button swiper-button-next" />
        </div>
      </div>
    </section>
  );
}
