// Partials
import { HeaderMain } from "./_partials/HeaderMain";
import { HeaderTop } from "./_partials/HeaderTop";
import { OnlineServicesMenu } from "./_partials/OnlineServicesMenu";

const Header = () => {
  return (
    <>
      <HeaderTop />
      <HeaderMain />
      <OnlineServicesMenu />
    </>
  );
};

export default Header;
