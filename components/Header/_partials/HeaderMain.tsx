import { navbarElements } from "./headerDatas";
import { useState } from "react";
import Link from "next/link";

export const HeaderMain = () => {
  // State Variables
  const [submenuItems, setSubmenuItems] = useState<String>("");

  return (
    <header
      className="header-main relative"
      onMouseLeave={() => {
        setSubmenuItems("");
      }}
    >
      <div className="container flex items-center justify-between">
        <div className="header-brand">
          <img
            src="https://www.medipol.edu.tr/themes/custom/medipol/logo-en.svg"
            alt="brand-logo"
          />
        </div>
        <nav className="header-navbar  text-primary text-lg font-semibold">
          <ul className="nav-items flex gap-10">
            {navbarElements.map((el, key) => (
              <li
                key={key}
                className="nav-item"
                onMouseEnter={() => {
                  setSubmenuItems(el.name);
                }}
              >
                <a className="nav-link" href="#">
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <nav
        className={`header-submenu-items absolute z-[9] right-0 left-0 bg-[#eff3f7] w-full]`}
      >
        <div className="header-submenu-column flex gap-10 pt-[25px] pb-[45px] container ">
          {navbarElements
            ?.filter((el) => el?.name === submenuItems)[0]
            ?.submenu?.map((submenuItem, key) => (
              <div key={key} className="flex flex-col">
                {submenuItem.map((el, key) => (
                  <div key={key} className="submenu-column flex flex-col">
                    <Link
                      className="text-lg font-semibold mb-[10px] hover:underline"
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
