/* eslint-disable @next/next/no-img-element */
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="header container flex items-center justify-between">
        <div className="header-brand  py-5">
          <img
            src="https://www.medipol.edu.tr/themes/custom/medipol/logo-en.svg"
            alt="brand-logo"
          />
        </div>
        <nav className="header-navbar flex gap-10">
          <span>ACADEMICS</span>
          <span>ABOUT MEDIPOL</span>
          <span>PROSPECTIVE STUDENTS</span>
          <span>ACTIVE STUDENTS</span>
          <span>RESEARCH</span>
        </nav>
      </div>
    </header>
  );
};

export default Header;
