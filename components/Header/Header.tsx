/* eslint-disable @next/next/no-img-element */
import React from "react";

const navbarElements = [
  {
    name: "ACADEMICS",
    subMenu: [
      {
        title: "TEST",
        links: [{ text: "Test Text", href: "/" }],
      },
    ],
  },
];

const Header = () => {
  return (
    <>
      <header className=" bg-primary text-white font-regular">
        <div className="header-top container text-m flex justify-between">
          <div className="header-top_left space-x-6 py-4">
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
          <div className="header-top_right space-x-6 py-4">
            <a href="https://sanaltur.medipol.edu.tr/">360° Virtual Tour</a>
            <a href="https://www.medipol.edu.tr/en/node/1358">Press</a>
            <a href="https://www.medipol.edu.tr/en/akademik/fakulteler/saglik-bilimleri-fakultesi/bolumler/saglik-yonetimi/academic-calendar">
              Academic Calendar
            </a>
            <a href="#">Online Services</a>
          </div>
        </div>

      </header>
      <br></br>
      <br></br>
      <div className="bg-primary text-white font-regular w-[188px] h-[257px] flex flex-col justify-evenly border-t-2 border-grey rounded-b">
        <span className="pl-10">ASDGSDG</span>
        <hr></hr>

      </div>
    </>
  );
};

export default Header;
