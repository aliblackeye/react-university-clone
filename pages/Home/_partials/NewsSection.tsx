import Image from "next/image";

import news from "../../../assets/images/news/news.jpg";
import news2 from "../../../assets/images/news/news2.jpg";
import news3 from "../../../assets/images/news/news3.jpg";

const NewsSection = () => {
  const newsList = [
    {
      image: news,
      title:
        "Medipol Üniversitesi, 2021-2022 Akademik Yılında 1. Sırada Yer Aldı",
      date: "29 March 2022",
      text: "The medals were presented to the top-ranking students in the chess tournament.",
    },
    {
      image: news2,
      title:
        "Our Honorable Rector Prof. Dr. Ömer Ceran Thanked to MediLive'22' Committee",
      date: "29 March 2022",
      text: "The medals were presented to the top-ranking students in the chess tournament.",
    },
    {
      image: news3,
      title:
        "Çakmak, Karaoğlan and Esirgün, who study at Medipol International",
      date: "08 October 2022",
      text: "The medals were presented to the top-ranking students in the chess tournament.",
    },
  ];

  return (
    <section className="news-section container flex flex-col gap-2">
      <h1 className="text-[40px] text-primary">News</h1>
      <div className="news-cards-wrapper flex gap-10 justify-between w-full">
        {newsList.map((item, index) => (
          <div key={index} className="news-card">
            <div className="news-card-img relative  h-[192px] text-center">
              <Image
                src={item.image}
                alt="news"
                fill
              />
            </div>
            <div className="news-date mt-2">
              <span className="text-secondary">{item.date}</span>
            </div>
            <h4 className="text-[26px] font-semibold text-primary max-w-[340px] max-h-[120px]">
              {item.title}
            </h4>
            <p className="text-[16px] mt-2">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="all-news-button flex justify-end items-center mt-5">
        <button className="btn btn-outline-primary !px-16">ALL NEWS</button>
      </div>
    </section>
  );
};

export default NewsSection;
