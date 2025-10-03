import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css"; 
import "swiper/css/effect-fade";

export default function Carousel() {
  return (
    <div className="hero-wrapper">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        speed={800}
        className="hero-swiper"
      >
        <SwiperSlide>
          <div className="hero-slide" style={{backgroundImage: "url('/banner_1.jpg')"}}></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero-slide" style={{backgroundImage: "url('/banner_2.jpg')"}}></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero-slide" style={{backgroundImage: "url('/banner_3.jpg')"}}></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero-slide" style={{backgroundImage: "url('/banner_4.jpg')"}}></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero-slide" style={{backgroundImage: "url('/banner_5.jpg')"}}></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero-slide" style={{backgroundImage: "url('/banner_6.jpg')"}}></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero-slide" style={{backgroundImage: "url('/banner_7.jpg')"}}></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero-slide" style={{backgroundImage: "url('/banner_8.jpg')"}}></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero-slide" style={{backgroundImage: "url('/banner_9.jpg')"}}></div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="hero-slide" style={{backgroundImage: "url('/banner_10.jpg')"}}></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
