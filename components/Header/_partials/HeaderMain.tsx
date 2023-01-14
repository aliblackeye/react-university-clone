import { navbarElements } from "./headerDatas";

export const HeaderMain = () => {
  // State Variables
  const [submenuItems, setSubmenuItems] = useState<String>("");

  return (
    <header className="header-main relative">
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
      <nav className="header-submenu-items absolute bg-[#eff3f7] w-full max-h-[550px] pt-[25px] pb-[45px]">
        <div className="header-submenu-column flex flex-col">
          {navbarElements
            .filter((el) => el.name === submenuItems)[0]
            ?.submenu.map((submenuItem, key) => {
              if (submenuItem.title) {
                return <h1 key={key}>{submenuItem.title}</h1>;
              }
              submenuItem.links.map((link, key) => (
                <a key={key} href={link.href}>
                  {link.text}
                </a>
              ));
            })}
        </div>
      </nav>
    </header>
  );
};
