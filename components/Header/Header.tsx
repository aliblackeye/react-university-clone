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
      </div>
    </header>
  );
};

export default Header;
