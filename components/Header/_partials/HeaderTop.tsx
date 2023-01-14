import { useState } from "react";
import { OnlineServicesMenu } from "./OnlineServicesMenu";

import { IoMdArrowDropdown } from "react-icons/io";
export const HeaderTop = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <header className=" bg-primary text-white font-regular">
      <div className="header-top container text-m flex justify-between">
        <div className="header-top_left flex gap-6 py-4">
          <a href="https://www.medipol.edu.tr/">TR</a>
          <span>|</span>
          <a href="https://mio.medipol.edu.tr/apply-now/">
            For International Students
          </a>
          <a href="https://medipol.com.tr/">University Hospital</a>
          <a href="https://www.medipol.edu.tr/en/about-medipol/contact-us">
            Contact
          </a>
          <a href="https://radyo.medipol.edu.tr/">Radio Medipol</a>
        </div>
        <div className="header-top_right flex relative gap-6 py-4">
          <a href="https://sanaltur.medipol.edu.tr/">360° Virtual Tour</a>
          <a href="https://www.medipol.edu.tr/en/node/1358">Press</a>
          <a href="https://www.medipol.edu.tr/en/akademik/fakulteler/saglik-bilimleri-fakultesi/bolumler/saglik-yonetimi/academic-calendar">
            Academic Calendar
          </a>
          <span
            onClick={toggleMenu}
            className="cursor-pointer flex items-center"
          >
            Online Services <IoMdArrowDropdown />
          </span>
          {menu && <OnlineServicesMenu />}
        </div>
      </div>
    </header>
  );
};
