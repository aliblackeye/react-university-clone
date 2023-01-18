import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

const FooterMain = () => {
  return (
    <footer className="footer-main bg-white ">
      <div className="container flex justify-between items-center">
        <div className="left">
          <span> © 2019 Medipol Üniversitesi | Privacy</span>
        </div>
        <div className="right text-primary flex gap-10 items-center">
          <h2 className="phone text-[34px] font-semibold ">444 85 44</h2>
          <div className="socials flex gap-5 ">
            <FiFacebook size={24} cursor={"pointer"} />
            <FiTwitter size={24} cursor={"pointer"} />
            <FiInstagram size={24} cursor={"pointer"} />
            <FiYoutube size={24} cursor={"pointer"} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterMain;
