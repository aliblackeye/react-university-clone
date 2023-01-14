import { navbarElements } from "./headerDatas";
import { useState } from "react";
import Link from "next/link";

export const HeaderMain = () => {
  // State Variables
  const [submenuItems, setSubmenuItems] = useState<String>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // Methods
  const handleMouseLeave = () => {
    setIsVisible(false);
    setSubmenuItems("");
  };

  return (
    <header className="header-main relative" onMouseLeave={handleMouseLeave}>
      <div className="container flex items-center justify-between">
        <div className="header-brand">
          <img
            src="https://www.medipol.edu.tr/themes/custom/medipol/logo-en.svg"
            alt="brand-logo"
          />
        </div>
        <nav className="header-navbar  text-primary text-lg font-semibold">
          <div className="nav-items flex gap-10">
            {navbarElements.map((el, key) => (
              <a
                href="#"
                key={key}
                className="nav-item "
                onMouseEnter={() => {
                  setIsVisible(true);
                  setSubmenuItems(el.name);
                }}
              >
                {el.name}
              </a>
            ))}
          </div>
        </nav>
      </div>

      {/* Header Submenu Items */}
      <nav
        className={`header-submenu-items absolute z-[9] right-0 left-0 bg-[#eff3f7] w-full transition-opacity   ${
          isVisible ? "opacity-100" : "opacity-0 "
        }`}
      >
        <div className="header-submenu-column flex gap-10 pt-[25px] pb-[45px] container ">
          {navbarElements
            ?.filter((el) => el?.name === submenuItems)[0]
            ?.submenu?.map((submenuItem, key) => (
              <div key={key} className="flex flex-col">
                {submenuItem.map((el, key) => (
                  <div key={key} className={`submenu-column flex flex-col`}>
                    <Link
                      className="text-lg font-semibold text-primary mb-[10px] hover:underline"
                      href={"/"}
                    >
                      {el?.title}
                    </Link>
                    {el?.links?.map((link, key) => (
                      <Link
                        key={key}
                        href={link?.href}
                        className="text-[15px] font-normal mb-[10px] max-[275px] hover:underline"
                      >
                        {link?.text}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            ))}
        </div>
      </nav>
    </header>
  );
};
