import Link from "next/link";
import { navbarElements } from "./headerDatas";

export const HeaderMain = () => {
  return (
    <header className="header-main">
      <div className="container flex items-center justify-between">
        <Link href={"/"}>
          <div className="header-brand">
            <img
              src="https://www.medipol.edu.tr/themes/custom/medipol/logo-en.svg"
              alt="brand-logo"
            />
          </div>
        </Link>
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
