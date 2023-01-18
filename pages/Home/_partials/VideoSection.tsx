import Image from "next/image";

const VideoSection = () => {
  return (
    <section className="video-section py-10  bg-[#ecf5fd]">
      <div className="container  flex-col flex  items-center md:items-start">
        <h1 className="text-primary text-[40px] mb-5">
          Bilimin İzlenebilir Yüzü
        </h1>
        <div className="video-container p-10 gap-10 bg-white flex flex-col md:flex-row">
          <iframe

            src="https://www.youtube.com/embed/DAYnTV-6hBE"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="md:w-[710px] md:h-[400px] w-full h-[300px] "
          ></iframe>

          <div className="other-videos flex flex-col gap-4">
            <div className="video-item flex gap-4 ">
              <div className="video-img w-[150px] h-[84px]  relative">
                <Image
                  src={
                    "https://www.medipol.edu.tr/sites/default/files/2022-10/2022_Sampiyon_Basin_Toplantisi.jpg"
                  }
                  fill
                  alt="video"
                />
              </div>
              <span className="max-w-[125px]">Istanbul Medipol University</span>
            </div>
            <div className="video-item flex gap-4 ">
              <div className="video-img w-[150px] h-[84px] relative  ">
                <Image
                  src={
                    "https://www.medipol.edu.tr/sites/default/files/2022-10/2022_Sampiyon_Basin_Toplantisi.jpg"
                  }
                  fill
                  alt="video"
                />
              </div>
              <span className="max-w-[125px]">Istanbul Medipol University</span>
            </div>
            <div className="video-item flex gap-4 ">
              <div className="video-img w-[150px] h-[84px] relative">
                <Image
                  src={
                    "https://www.medipol.edu.tr/sites/default/files/2022-10/2022_Sampiyon_Basin_Toplantisi.jpg"
                  }
                  fill
                  alt="video"
                />
              </div>
              <span className="max-w-[125px]">Istanbul Medipol University</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
