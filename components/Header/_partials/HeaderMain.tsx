import { navbarElements } from "./headerDatas";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CgClose } from "react-icons/cg";
import { RxHamburgerMenu } from "react-icons/rx";

const MenuLinks = [
  {
    title: "ACADEMICS",
    link: "/",
  },
  {
    title: "ABOUT MEDIPOL",
    link: "/",
  },
  {
    title: "PROSPECTIVE STUDENTS",
    link: "/",
  },
  {
    title: "ACTIVE STUDENTS",
    link: "/",
  },
  {
    title: "RESEARCH",
    link: "/",
  },
  {
    title: "ONLINE SERVICES",
    link: "/",
  },
];

export const HeaderMain = () => {
  // State Variables
  const [submenuItems, setSubmenuItems] = useState<String>("");
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const [hamburgerMenu, setHamburgerMenu] = useState<boolean>(false);
  // Methods
  const handleMouseLeave = () => {
    setIsVisible(false);
    setSubmenuItems("");
  };

  const hamburgerMenuClick = () => {
    setHamburgerMenu(!hamburgerMenu);
  };

  useEffect(() => {
    if (hamburgerMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [hamburgerMenu]);



  return (
    <header className="header-main bg-white  sticky top-0 z-[900]" onMouseLeave={handleMouseLeave} >
      <div className="container flex !py-4 lg:!py-0 items-center justify-between">
        <a href={"http://localhost:3000"}>
          <div className="header-brand relative  w-[217px] h-[66px]">
            <Image
              src="https://www.medipol.edu.tr/themes/custom/medipol/logo-en.svg"
              alt="brand"
              fill
            />
          </div>
        </a>
        <nav className="header-navbar text-primary text-lg font-semibold lg:block hidden ">
          <div className="nav-items flex gap-10 ">
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

        {/* Hamburger Menu Triggers*/}
        {hamburgerMenu ? (
          <CgClose
            className="close-menu-btn "
            onClick={hamburgerMenuClick}
            size={24}
            cursor={"pointer"}
          />
        ) : (
          <RxHamburgerMenu
            className="open-menu-btn lg:hidden xs:block"
            onClick={hamburgerMenuClick}
            size={24}
            cursor={"pointer"}
          />
        )}

        {hamburgerMenu && (
          <div className="hamburger-menu active p-5 bg-white fixed z-50 h-[calc(100vh-90px)]  w-screen left-0 bottom-0">
            <nav className="menu-links flex flex-col gap-5">
              {MenuLinks.map((item, index) => (
                <Link
                  key={index}
                  href={item.link}
                  className="link-item hover:underline text-[20px] text-primary"
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          </div>
        )}
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
                        className="text-[15px] font-normal mb-[10px] max-w-[275px] hover:underline"
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
