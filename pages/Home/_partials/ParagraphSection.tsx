import Image from "next/image";
import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

const AnnouncementItems = [
  {
    image:
      "https://www.medipol.edu.tr/sites/default/files/styles/max_761x400/public/2022-11/FEN%20B%C4%B0L%C4%B0MLER%C4%B0%20ENST%C4%B0T%C3%9CS%C3%9C_0.jpg?h=4462e40b&itok=Mu2jzLYk",
    text: "Lorem ipsum dolor sit amet.",
    date: "12.01.2023",
  },
  {
    image:
      "https://www.medipol.edu.tr/sites/default/files/styles/max_761x400/public/2022-11/D%C4%B0%C5%9E%20HEK%C4%B0ML%C4%B0%C4%9E%C4%B0%20FAK%C3%9CLTES%C4%B0_0.jpg?h=faa7d49d&itok=jKd62Vj2",
    text: "Lorem ipsum dolor sit amet.",
    date: "12.01.2023",
  },
  {
    image:
      "https://www.medipol.edu.tr/sites/default/files/styles/max_761x400/public/2022-11/%C4%B0%C5%9ELETME%20VE%20Y%C3%96NET%C4%B0M%20B%C4%B0L%C4%B0MLE%C4%B0%20FAK%C3%9CLTES%C4%B0.jpg?h=790be497&itok=va6z0V5N",
    text: "Lorem ipsum dolor sit amet.",
    date: "12.01.2023",
  },
];

const ParagraphSection = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("SELECT MONTH");
  return (
    <section className="paragraph-section container flex gap-5 py-10 !px-0">
      <div className="announcements flex flex-col flex-[2] gap-2">
        <div className="announcements-header">
          <h1 className="text-[40px]">Announcements</h1>
        </div>
        <div className="announcement-items flex flex-col gap-5">
          {AnnouncementItems.slice(0, 3).map((item, index) => (
            <div key={index} className="announcement-item flex gap-5">
              <div className="announcement-img relative">
                <Image
                  src={item.image}
                  width={170}
                  height={89}
                  alt={"announcement"}
                />
              </div>
              <div className="announcement-detail">
                <span className="announcement-date">{item.date}</span>
                <p className="announcement-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="btn-row flex justify-end mt-5">
          <div className="btn btn-outline-primary   ">ALL ANNOUNCEMENTS</div>
        </div>
      </div>
      <div className="activities flex flex-col flex-[4]">
        <div className="activities-header flex justify-between items-center gap-2">
          <h1 className="text-[40px]">Activities</h1>

          {/* Dropdown */}
          <div
            id="activities-month-dropdown "
            className="p-2  border-gray border-2 cursor-pointer  w-[140px] relative "
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className="selected-item flex items-center justify-center text-sm w-full  ">
              {selectedMonth} <MdKeyboardArrowDown />
            </div>
            {isDropdownOpen && (
              <div className="dropdown-items absolute right-0 text-sm w-full top-[38px]">
                {["SELECT MONTH", ",January", "February", "March"].map(
                  (item, index) => (
                    <div
                      key={index}
                      className="dropdown-item  border flex items-center border-secondary p-2 px-4  bg-[#dddddd]  "
                    >
                      {item}
                    </div>
                  )
                )}
              </div>
            )}
          </div>
        </div>

        <div className="activities-swiper bg-orange-500 h-full bg-orange p-10">
          <div className="activity text-white flex gap-2 items-center">
            <div className="activity-date flex items-center  w-12 h-12 rounded-sm text-center p-1 text-xs break-word border">
              19 Dec 2022
            </div>
            <div className="activity-details flex flex-col justify-between max-w-[280px] gap-2">
              <div className="activity-title font-semibold text-[15px]">
                Novel PI3K and mTOR selective inhibitors to deconvolute PI3K
                signaling
              </div>
              <div className="activity-creator text-xs">
                Sağlık Bilim ve Teknolojileri Araştırma Enstitüsü (SABİTA)
              </div>
            </div>
          </div>
        </div>
        <div className="btn-row flex justify-end mt-5">
          <div className="btn btn-outline-primary">ALL ACTIVITIES</div>
        </div>
      </div>
    </section>
  );
};

export default ParagraphSection;
