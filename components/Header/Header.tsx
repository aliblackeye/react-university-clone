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
    <header>
      <div className="header container flex items-center justify-between">
        <div className="header-brand">
          <img
            src="https://www.medipol.edu.tr/themes/custom/medipol/logo-en.svg"
            alt="brand-logo"
          />
        </div>
<<<<<<< Updated upstream
        <nav className="header-navbar  text-primary text-lg font-semibold">
          <ul className="nav-items flex gap-10">
            {navbarElements.map((el, key) => (
              <li key={key} className="nav-item">
                <a className="nav-link" href="#">
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
=======
      </header>
      <br></br>
      <br></br>
      <div className="bg-primary text-white font-regular w-[188px] h-[257px] flex flex-col justify-evenly border-t-2 border-grey rounded-b">
        <span className="pl-10">ASDGSDG</span>
        <hr></hr>
        <span className="pl-10">ASDGSD5111G</span>
        <hr></hr>
        <span className="pl-10">ASDGS555DG</span>
>>>>>>> Stashed changes
      </div>
    </header>
  );
};

export default Header;
