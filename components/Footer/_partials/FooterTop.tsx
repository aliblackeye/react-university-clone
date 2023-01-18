import Image from "next/image";
import { Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

const FooterSliders = [
  {
    img: "https://www.medipol.edu.tr/sites/default/files/styles/image_120px/public/footer-slider/tto.jpeg?itok=TB8Ev5T_",
    title: "Technology Transfer Office",
  },
  {
    img: "https://www.medipol.edu.tr/sites/default/files/styles/image_120px/public/footer-slider/medimed.jpeg?itok=MhX0gqTd",
    title: "Alumni Association",
  },
  {
    img: "https://www.medipol.edu.tr/sites/default/files/styles/image_120px/public/footer-slider/muzem.jpeg?itok=o25c8WzA",
    title: "Distance Education Center",
  },
  {
    img: "https://www.medipol.edu.tr/sites/default/files/styles/image_120px/public/footer-slider/ktp.jpeg?itok=YFZT_HMT",
    title: "Medipol Library",
  },
];
const FooterTop = () => {
  return (
    <footer className="footer-top bg-primary">
      <div className="container ">
        <div className="footer-slider">
          <Swiper
            slidesPerView={4}
            spaceBetween={10}
            modules={[Navigation, Autoplay]}
            loop={true}
            className="hero-swiper bg-white"
            autoplay={{ pauseOnMouseEnter: false, disableOnInteraction: false }}
          >
            {FooterSliders.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="slide-item flex gap-2 items-center my-5 justify-center w-[275px] h-[63px]">
                  <div className="slide-img w-[64px] h-[30px] relative">
                    <Image
                      src={item.img}
                      fill
                      alt="slide"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                  <div>{item.title}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="footer-details"></div>
      </div>
    </footer>
  );
};

export default FooterTop;
