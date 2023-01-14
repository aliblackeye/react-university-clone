/* eslint-disable @next/next/no-img-element */
// Swiper
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import heroImagesList from "./heroImagesList";

// Now you can use all slider methods like

const Hero = () => {
  return (
    <section className="hero-section relative">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        loop={true}
        navigation={{
          nextEl: ".hero-slider-btn.next",
          prevEl: ".hero-slider-btn.prev",
        }}
        autoplay={{ pauseOnMouseEnter: true, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        className="hero-swiper"
      >
        {heroImagesList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="hero-content ">
              <div className="hero-img">
                <Image src={item.image} priority alt="hero" height={490} />
              </div>

              <div className="hero-text-wrapper container ">
                <div className="hero-text text-[46px]  z-10 top-1/4 -translate-y-5 absolute max-w-[350px]">
                  {item.title}
                  <button className="btn btn-outline-primary text-sm">
                    {item.buttonText}
                  </button>
                </div>

                <div className="hero-swiper-nav absolute z-20 bottom-0 -translate-y-10 flex gap-8">
                  <IoIosArrowBack
                    className="hero-slider-btn prev cursor-pointer text-primary hover:text-black"
                    size={24}
                  />
                  <IoIosArrowForward
                    className="hero-slider-btn next cursor-pointer text-primary hover:text-black"
                    size={24}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
