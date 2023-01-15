/* eslint-disable @next/next/no-img-element */
// Swiper
import Image from "next/image";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Images
import slider1 from "../../../assets/images/hero/slider1.png";
import slider2 from "../../../assets/images/hero/slider2.png";
import slider3 from "../../../assets/images/hero/slider3.png";
import slider4 from "../../../assets/images/hero/slider4.png";

const imageList = [
  {
    image: slider1,
    title: (
      <h1>
        Have You Discover <span className="font-bold">Our Library</span> ?
      </h1>
    ),
    buttonText: "Click for more info",
  },
  {
    image: slider2,
    title: (
      <h1>
        Have You Discover <span className="font-bold">Our Library</span> ?
      </h1>
    ),
    buttonText: "Click to read the news",
  },
  {
    image: slider3,
    title: (
      <h1>
        Have You Discover <span className="font-bold">Our Library</span> ?
      </h1>
    ),
    buttonText: "Click for more info",
  },
  {
    image: slider4,
    title: (
      <h1>
        Have You Discover <span className="font-bold">Our Library</span> ?
      </h1>
    ),
    buttonText: "Click to apply",
  },
];

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
        {imageList.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="hero-content">
              <div className="hero-img h-[490px] w-full">
                <Image src={item.image} priority alt="hero" fill style={{objectFit:"cover"}} />
              </div>

              <div className="hero-text-wrapper container !px-0">
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
